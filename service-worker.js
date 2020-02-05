/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7f079739ea8c7b4026a2041775e68a9a"
  },
  {
    "url": "article/index.html",
    "revision": "8ede5365f965461e3983c0d150cd3c6f"
  },
  {
    "url": "article/one.html",
    "revision": "01d71840eb06be0d09380a1953a65cce"
  },
  {
    "url": "article/two.html",
    "revision": "76643f587c290ff84f1be869b5bffb36"
  },
  {
    "url": "assets/css/0.styles.e9a3b4cd.css",
    "revision": "7ad0dc30867f86e1b0ffe5bb68ed577d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.be6a792d.js",
    "revision": "79f550101a8a420b0b1981113c1ecf18"
  },
  {
    "url": "assets/js/11.390e44ef.js",
    "revision": "a871989689ace2b7fa5c2043027439bc"
  },
  {
    "url": "assets/js/12.dfe321b5.js",
    "revision": "000585ab9a495fb55b56d05c3763e235"
  },
  {
    "url": "assets/js/13.ed6f4c28.js",
    "revision": "d213872a14ad0fc14bb79f534e6e31d7"
  },
  {
    "url": "assets/js/14.b3c0be77.js",
    "revision": "ec2edba24d7b4d1af7b79416f4744a27"
  },
  {
    "url": "assets/js/15.ab02d7f0.js",
    "revision": "42027241c17b31b1a30110de0f26254b"
  },
  {
    "url": "assets/js/2.48bee81a.js",
    "revision": "102b2ed8857ce33e6315c1a424ae8dfa"
  },
  {
    "url": "assets/js/3.57c98b2c.js",
    "revision": "daa421aa1bcc65f652674d5bf1f5e2cf"
  },
  {
    "url": "assets/js/4.f0fd39d2.js",
    "revision": "7254c654c0a882920752731ff1a13fa8"
  },
  {
    "url": "assets/js/5.bc3b1a5f.js",
    "revision": "a18633cbd16fbd5c0fac7808470094f6"
  },
  {
    "url": "assets/js/6.eeee9eb2.js",
    "revision": "a861245fb3a4faac852e073b0a5dc47b"
  },
  {
    "url": "assets/js/7.d677cec4.js",
    "revision": "09ccae06a4aa67f76c38e4b67f25fa32"
  },
  {
    "url": "assets/js/8.fe022871.js",
    "revision": "806b99cd72f4c8def9c425c30643ddfc"
  },
  {
    "url": "assets/js/9.70b6b6ec.js",
    "revision": "8b713b9d732ccbac457b717cbef9fb3f"
  },
  {
    "url": "assets/js/app.c48bdd54.js",
    "revision": "b95cf55b86b4e9a1a5e264fd402f0ffd"
  },
  {
    "url": "image/android-chrome-192x192.png",
    "revision": "54c6648fabc817055773a4a6119166fb"
  },
  {
    "url": "image/android-chrome-512x512.png",
    "revision": "a61257b42c11dbd647523082567ec75e"
  },
  {
    "url": "image/apple-touch-icon.png",
    "revision": "bc14d52b408487e6c98e9b592368a287"
  },
  {
    "url": "image/favicon-16x16.png",
    "revision": "3c936b9db7eac1a113892c049025f582"
  },
  {
    "url": "image/favicon-32x32.png",
    "revision": "f355b8d2cf53fdc7d8a5794b42396901"
  },
  {
    "url": "image/icons/icon-128x128.png",
    "revision": "49ae0e03fab68b795ddea6d709df4eb9"
  },
  {
    "url": "image/icons/icon-144x144.png",
    "revision": "513272f18a3aad26f9822f493522f689"
  },
  {
    "url": "image/icons/icon-152x152.png",
    "revision": "82727f820fad26b434d915dbd0286456"
  },
  {
    "url": "image/icons/icon-192x192.png",
    "revision": "5f436e63c59eb5c7f1a751d26ee65e73"
  },
  {
    "url": "image/icons/icon-384x384.png",
    "revision": "1d40416f80db39badb43b0bbeb4fa598"
  },
  {
    "url": "image/icons/icon-512x512.png",
    "revision": "22fffa0440d50015e013a7300857a5a4"
  },
  {
    "url": "image/icons/icon-72x72.png",
    "revision": "d8593a52c7185da28997859451762e37"
  },
  {
    "url": "image/icons/icon-96x96.png",
    "revision": "5ddae1086b80f799c86573b2b253df6a"
  },
  {
    "url": "image/logo.jpeg",
    "revision": "4002ccfdd83b568e1dd48cffacd05721"
  },
  {
    "url": "image/mstile-150x150.png",
    "revision": "568fca0dbdbb3dfde717e9456b827e60"
  },
  {
    "url": "image/WechatIMG9.jpeg",
    "revision": "75bc9f544f571e3bd3fb42827bfde34e"
  },
  {
    "url": "index.html",
    "revision": "cb7d6f80984a8a1590eda4dfb78da3dc"
  },
  {
    "url": "project/index.html",
    "revision": "1c20890eb746e63276cf1975e61f5398"
  },
  {
    "url": "project/one.html",
    "revision": "bdb46a6f1c93ee6a396eb89bf32e5104"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
