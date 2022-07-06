'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "df5fd66c59a1ad0bf9e01124509a3327",
".git/config": "6870ce6bb8a4357ddef69907064c676b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7b08da79733add2c74631140199e6fd1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "da86c5c2757fd1fb3176ab9d6e1c3a9a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3b39af32b33d16f7c4476a312a287ba7",
".git/logs/refs/heads/main": "3b39af32b33d16f7c4476a312a287ba7",
".git/logs/refs/remotes/origin/HEAD": "e3084ddc047ae1ad106d4e58cf7ba793",
".git/logs/refs/remotes/origin/main": "49536ae6a57856044811de9e0cf6f84f",
".git/objects/03/576029b2889e06ed762c3bafc529c93dc7e07a": "16474c021fefd4d89ae40f2be66ed686",
".git/objects/05/a16167806a109f318f0de1ec521fb2e2fb6945": "5143fb160501adeee1afad23f2d9c7da",
".git/objects/0a/124e79d1e9caf53992933fb2c19b3275692a16": "cca1c41bfd1fa9564ec6fb6e0296348f",
".git/objects/0f/64f4984ab9cd176000ae1267585b57c54d4ca5": "b6f8ae7f27312312671cbffb6d88ad92",
".git/objects/17/3d5cbe64d67bc56fd763edac94139157dc40bd": "fb92779830849fb1194203a57e245ae7",
".git/objects/17/d03bdc4641be6a612a80168caae41d069aea3e": "9367abe2e801ea8faccdad34ddd72998",
".git/objects/1e/d42f7f4a0e55012a0c49169eed450c238df8b3": "e33424a4c7e13270f7d66ea9e3cbaa25",
".git/objects/21/71eb0d5ac24bfdd85f88f5da3b67c150565ba6": "687606042bdb54dc7c3b01bf7029fa58",
".git/objects/25/60927a568bf8c0f7879f6af317a68b82e533a1": "fd2f11cad6a55cc01891baf51ba31187",
".git/objects/29/8d71c74093d4167910969ff506f5933dd6887d": "a4ded4823e724d9e605620bb5fed2263",
".git/objects/32/052a013fed0b035a0f3c4508cc0e5389fbe6ac": "628a4db58bcd1057c0901ccf9bc48133",
".git/objects/32/d305a448f09a81e71f35abd28fc9b9cbb56ec8": "8e1ef89ff846939c940925612a3183e9",
".git/objects/37/8ac57e25df861dc91222462a8482f2846e8d3f": "87bbb22308609fd6fcd72d54641a3f83",
".git/objects/37/de97b1b57bad3750bf95dd864d4daf0d9d45b8": "e3af2a0ef3f66e8aec4a4142f6d84edd",
".git/objects/3b/c8022b71653a6d7a28e208b7ef599f0510b873": "c4c617373e07aa1db56d9c454756f506",
".git/objects/41/48d5511b7e504bcb1a325518d98b2b47fd31a2": "d47e5413da7086bddcbe338b895077ac",
".git/objects/44/66fc30ca1c6474c91cf20901e9398bda323d06": "bef0d43f1e6aa73c1d45e566c6ba6185",
".git/objects/45/d21c9e5f9b976967f4d2f42d8d908265596333": "06e0b0b49a5dc074b31de065f371e5b1",
".git/objects/48/13a348079796db6092335a7c8d477005b45546": "9a37c93be1c2f9f7cab0d1d2e2b31d3e",
".git/objects/49/655e0b794ba40e8d490e559193a28c88191768": "eb1f3ed6d83fae2477d18242e1e82b29",
".git/objects/4d/132a77a3287e9a03881be2f25dcef2dfabbb50": "cfd30d29fd2f8880a694250fcecc1a90",
".git/objects/61/187410e6225a479c5a3bb55a94c7870e11025c": "c57b1a0d09b885294e2c8b77858775fb",
".git/objects/62/5510e727a8dfd2df3dabb6b17f94327a39fb60": "caed632dce6033c9e328bb138c6c0edc",
".git/objects/6c/3b8ab8fe060af1f0c4e0d4e8940eebdbeffaa8": "8a65925af90654dbb393518aea1c2840",
".git/objects/76/92e013d3dc2e9ae0086e519ae21bc19f2f50e3": "c5b81edf4adc9f88dff7bc2c1add77bb",
".git/objects/7d/fd977a1e51953ae08f8c95014bcfa562343263": "7c7e7e112897e8b0739b7b3486465da8",
".git/objects/84/079448e85eec90912e9608b332cd1696b7aba6": "861e69729d1e0cb0460c96f4d5c6371a",
".git/objects/89/14b9a81a89522737cb2cfc5fb5000741886a03": "6561f57f6741be1b9694239c5d2ede54",
".git/objects/8d/e486e252aa9264da6ec5e13f34c9d7ab6a24c6": "4b85597539aebabbbd1c660bbdd98608",
".git/objects/8f/bb9e20af7e3c9a2f51f31e92e1091dc3fdda3e": "abf778212b65d97aebdcf760e21ca921",
".git/objects/93/dc758cf4242c1f1dd1cf5286df23b59d4fdb4a": "55300c09bebf2cedd35c2c9f7dbd5831",
".git/objects/95/6b6aeb8cd0c0b3d7d0640e641a7063a0ab8b26": "27fba0a76667b29fc575fa1535badaa4",
".git/objects/97/99a073c7feeb6c04d0094317123f44b9c7791c": "58570a987bb30f437733ab86bd35aa6d",
".git/objects/97/fb04440c24971e45bf1a179a2270308805cccc": "f4489afa7d3b03bf34779c5209fbb659",
".git/objects/9b/2623eff3e47cd55615788820efe93b746d83b4": "d9efbed6fc820af269cbe4c4cff4ac6c",
".git/objects/a3/04fbc7d1b50b71aa5dd3a7e5e53522b233a6bc": "a6023d1c7b76ba98a57899d42c78aaa3",
".git/objects/ac/90daf2ead69384853143e9bb52d7ee9fecdd66": "034573367f3ca00987e027a713d63ddd",
".git/objects/ad/f124a91faae593f0f2add79f841fe241b560d9": "ce29b4de21ec23c43848014524bff43d",
".git/objects/b8/de0279e8862c3b147180b7987efd860525b163": "c4a7e7a2a2a1bb98c3b71346f484c451",
".git/objects/bb/44ff1e2f0ec4f161d14d7d70812262ce510f67": "e3fb820937cc7804dac1801db91d4715",
".git/objects/bc/4ef1bbc4febad31327e9e3f08640d25193226b": "4e2b59c04d6673c367523fca0c7675ec",
".git/objects/bd/06cd7960b6c06ee766c83f972ab346b423556d": "07c08e01b31223f9265916374f863960",
".git/objects/bf/9fbeee1d67eec6d8809dfec62583c7dee4334e": "1eadeee70e292198b3ead38a1152d1bd",
".git/objects/d7/145fc133333c3a176d56a7f5ff7c8f5c9ac733": "cbcd056024a68d61c6a9eddb438ce75e",
".git/objects/f1/90fb47e303c6b6871a759891b65217c2382e06": "482b42757e56c9f2df1a63f48cdc52fa",
".git/objects/f1/a762f0b758665d0287d5ef4732b449ce21e7fc": "eca5d5f39163d348161870612a1a2f12",
".git/objects/f5/2ac54495465b3021efe544db875d7195e49a6f": "279cded6cc8e69030526b171f890b08e",
".git/objects/f7/f9d9bde1cb5ed4161b35f9e1173c6af07c7fac": "727742e45ca040ea7e6fc73c32e76657",
".git/objects/f9/f0eed0ff6d69ac0a5336c2a66232efd050d112": "e4ed29125767538f221e965e9ac397f1",
".git/objects/ff/42dd190fbb56d17a3e6a6e8a468896a4ab4e2e": "2c1c960b3eb2a6a17cbd8fc2564e73d4",
".git/objects/pack/pack-f260cd2ddf4ca929834313625e3f190e2969c696.idx": "2e10e05f5e00f2fb8df3bff54d1b3931",
".git/objects/pack/pack-f260cd2ddf4ca929834313625e3f190e2969c696.pack": "258db3b3f268ddfc2815436465379448",
".git/ORIG_HEAD": "7a63c6846174d9b88d6578f4a17c71f5",
".git/packed-refs": "c9bc9600e65228c4488522b77d512e17",
".git/refs/heads/main": "ad84d4ab39b640265b53e4921594d4df",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ad84d4ab39b640265b53e4921594d4df",
"assets/AssetManifest.json": "b15905eaf9cb1634bc6f767585c62a05",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/59055.png": "410e18aa9d8d218497ec1127e457b1b3",
"assets/assets/images/abacusDrawer.jpg": "a706a058451dd8fb58013fb48697d007",
"assets/assets/images/AlqH0pBu_4x-removebg-preview.png": "1274b5d3a892fb071ae6490e3486c90a",
"assets/assets/images/altituterule.png": "95ff67604253ce23e0cb0bc6155dd83a",
"assets/assets/images/appBarBanner.jpg": "82aa07122fd2aacbad619bcb190d5474",
"assets/assets/images/app_launcher_icon.png": "0589ab452d18510be12981e36606ce5a",
"assets/assets/images/centroid.png": "3b23c003e02258258454f77464e486d4",
"assets/assets/images/Chord_theorem.png": "e21659a481f95856c2761a4829a8e3e7",
"assets/assets/images/circle.png": "2eb67430b060715233811f98a610da27",
"assets/assets/images/circumcenter.png": "febd65019be732e986ab5475ceb5f5b1",
"assets/assets/images/decimalandradical.png": "7526a0e27cac56c076c5fe27aec551f4",
"assets/assets/images/distance.png": "d4f7b1accfbc90f347e6326e91a520ec",
"assets/assets/images/ezgif.com-gif-maker.png": "02daa4c533aa5c9db6a2c6b7c5f58bac",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/indirectmeasure.png": "70fdce395285fa7006457f562db687d1",
"assets/assets/images/legrule.png": "92692839d14ade3197865d7b1640d931",
"assets/assets/images/lester.png": "871ceaee9127ebd5bf7593b4ef2e92ae",
"assets/assets/images/midpoint.png": "0362c88148e04b488696a1e07fec1f2d",
"assets/assets/images/orthocenter.png": "87f352bcdd950ed2a9e38b4b27b7473e",
"assets/assets/images/parallelogram.png": "9aa58cfe7ee00d18accc54013ea73e50",
"assets/assets/images/perp.png": "d1d226d1168f454c3ed2eb8688908968",
"assets/assets/images/perpbisector.png": "ec05b00eafdc7592cbb9ab8054e70c15",
"assets/assets/images/polygons.png": "e79bd0865f7de15ff7e5e09ddf7bef09",
"assets/assets/images/pythagorean.png": "b2956ee7310e4ae005c032abe53a70e3",
"assets/assets/images/radians.png": "16c987de2dcdfa91cdf0e83d62c37cc6",
"assets/assets/images/rectangle.png": "f51bbaa13885a43d40364ac7622728be",
"assets/assets/images/Rhombus.png": "0f80fb1c6b6c7bc20475922a88367324",
"assets/assets/images/rotations.jpg": "2e39aadc99d2b569ae457fd422606934",
"assets/assets/images/Secant_theorem.png": "eb4fb1f88c8e0b2b8612ec4a8395bb2e",
"assets/assets/images/slope.png": "acd0ebdcb6d806c3c7804f4ab826ae07",
"assets/assets/images/square-area-perimeter-formulas.png": "bc88aed60a4f66aa7724b205304f24b7",
"assets/assets/images/traingle.png": "7f68a892ece48dd86616cad67c24d72a",
"assets/assets/images/trapezoid-base-leg.png": "7795a2392c7185f129edb05f6326b439",
"assets/assets/images/vectors.png": "c3d54b94c8a46078b79e0905caaade62",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "3ba95e877e8d977ed295b7a8efefeff7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "4a8485f4ed06ee7dcd97f76b49ffc9a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"CNAME": "ab568525620b30f2a0ff0a990f542fc2",
"favicon.png": "58c0f24d489f4e306b661156a852eb0a",
"icons/Icon-192.png": "0afb66b4bd551bd44a7db847abd801e5",
"icons/Icon-512.png": "039d91021b518f4713083ab789efacfa",
"index.html": "e02ad962b3177e036707d2b6edd1e0eb",
"/": "e02ad962b3177e036707d2b6edd1e0eb",
"main.dart.js": "d4a7f9aa2ee881dfad311a381d70aba1",
"manifest.json": "77b867dda49efaaf5cdfe16c3f65902a",
"version.json": "0880f721ba604b0d34f58488a45a0583"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
