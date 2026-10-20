// Offline support for the web (iPhone) version. Built files have hashed names and never
// change, so they're served from the cache; the page itself is fetched fresh when possible,
// which is how a new version arrives. Sync requests go to Supabase and aren't touched.
const CACHE = "tally-v1";

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(["./", "manifest.webmanifest", "icons/apple-touch-icon.png"])));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

async function pageFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const fresh = await Promise.race([
      fetch(request),
      new Promise((_, reject) => setTimeout(() => reject(new Error("slow")), 3000)),
    ]);
    if (fresh.ok) cache.put("./", fresh.clone());
    return fresh;
  } catch {
    return (await cache.match("./")) ?? fetch(request);
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(request);
  if (hit) return hit;
  const res = await fetch(request);
  if (res.ok) cache.put(request, res.clone());
  return res;
}

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith(e.request.mode === "navigate" ? pageFirst(e.request) : cacheFirst(e.request));
});
