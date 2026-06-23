// Service Worker สำหรับเปิดสิทธิ์การติดตั้งแอป PWA ให้ทำงานได้
self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('fetch', function(e) {
  // ปล่อยให้ระบบโหลดหน้าเว็บออนไลน์จาก Google Apps Script ตามปกติ
  e.respondWith(fetch(e.request));
});
