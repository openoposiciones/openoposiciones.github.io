// Generado por scripts/web.py. Cambia de versión con cada publicación y descarta la caché anterior.
const CACHE = "openoposiciones-c20f877cfa";
const PRECACHE = ["./", "index.html", "banco.js?v=c20f877cfa", "privacidad.html", "como-funciona.html", "manifest.webmanifest", "iconos/apple-touch-icon.png", "iconos/favicon-32.png", "iconos/icono-192.png", "iconos/icono-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin || r.url.endsWith(".apkg")) return;
  if (r.mode === "navigate") {
    // la página: red primero (para ver las novedades), caché si no hay conexión
    e.respondWith(fetch(r).then(res => { const c = res.clone(); caches.open(CACHE).then(k => k.put(r, c)); return res; })
      .catch(() => caches.match(r).then(m => m || caches.match("./"))));
    return;
  }
  e.respondWith(caches.match(r).then(m => m || fetch(r)));
});
