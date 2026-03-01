const CACHE_NAME = 'ipas-ai-quiz-v2';
const urlsToCache = [
  './iPAS_AI考古題練習.html',
  './manifest.json',
  './'
];

// 安裝時快取核心資源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('快取核心資源');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.error('快取失敗:', err))
  );
  self.skipWaiting();
});

// 攔截所有請求
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果快取中有，直接返回
        if (response) {
          return response;
        }

        // 否則發送網路請求
        return fetch(event.request)
          .then(networkResponse => {
            // 檢查是否有效
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // 將成功請求加入快取
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });

            return networkResponse;
          })
          .catch(() => {
            // 離線時無法取得資源，返回離線頁面或錯誤訊息
            console.log('離線模式：無法取得', event.request.url);
          });
      })
  );
});

// 啟動時清理舊快取
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('刪除舊快取:', name);
            return caches.delete(name);
          })
      );
    })
  );
  self.clients.claim();
});
