'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "27de313d030005b5bfcffb559e7f4b17",
".git/config": "0341363ac59753aee548ec6b2867c0a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0c1d119d7f8f48c89871ea4636364cc0",
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
".git/index": "21dacaf55bdcfb56e9bc610977a4cb0f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac102ccd1b4d9092e1404903e25679f1",
".git/logs/refs/heads/main": "ac102ccd1b4d9092e1404903e25679f1",
".git/logs/refs/remotes/origin/HEAD": "905ebb2b9f3fc4ae9fa640aed098e892",
".git/logs/refs/remotes/origin/main": "c3215413ebe7e0a5f2cd7bd79c5c20d3",
".git/objects/05/6ba6456d185413c243d3fdc1fbcec1b697568e": "60faf2431e837ab6ff9fad34b1dc61a9",
".git/objects/0a/2df39039368092c9f3efe9b398a1eb0bf3dd17": "c8d2556f3ae4b2905a2d77ef06c54603",
".git/objects/0c/848cbd0f77c8dcfd34fbdc72654f87db725db0": "b39fcc8abecb56ff7df4a5b9a6165a6f",
".git/objects/0e/7d02756f9a105d1eeae9914d9437ef803229ca": "875cd62105dc440ac3ab5a7c9ad23b0d",
".git/objects/14/c1e6cb377e4ba54d82b98e4b1a9856c1b675d7": "0e1f8840337aad42ea81e1dfda757a1c",
".git/objects/17/e940d9712bca50600f335b10e818f7333460fa": "80729a585241cbf44a230310297d084f",
".git/objects/22/a8eb33d0c7c3d51292795d22a2c184b6cf71db": "3a2489cedfe90c0f4e1ac8b0515ef2ef",
".git/objects/23/abc7f6eccd5d5e628e64fa74449dcc587e3e0f": "bf11e89d18ad278de58149eb5a9e131f",
".git/objects/25/d09cbeafed24d2357ce687f106381243db6333": "7a351657f25711a7fc073523141d145a",
".git/objects/2a/5f90255f0be40636558a9f86edc3da55d59197": "a3b3b441c19033b9d6fddcf8badb5803",
".git/objects/2e/aa5fec3ec98fe4dd8f4e65ce383cafc6358fd1": "b037a668361c64d1b01b3b266492aaca",
".git/objects/39/71ee2aff17474bbf413aa162957be4fa3f044f": "7340cafbd836ed541bfed22a324711f9",
".git/objects/3b/639f73ad8c418dd7238a14f27dabd9f77ac983": "6b7fbc39de36dd859d8008b24a86b7da",
".git/objects/41/eadf5fd9ad0650987fc90dd21e4768bd566913": "e038c3a55543cffdeb52b3ee620db5e3",
".git/objects/43/c33721802c9427fb318004fdbb3f08902f5575": "922bd0567504c81bee57a3907e73a4c4",
".git/objects/47/9f0fda8980ff9e1f21e25dbdbbe318d318970a": "112a4d6cd4a8f72047060c8bd1c5bf1d",
".git/objects/51/553e5d452900c300a7d89230e234caaf9bb6c8": "29ff1906c61650a269aa3616e516cdc7",
".git/objects/51/d109db88b3cce1c8f7b56b6bc6b61bf395cc76": "b754ce038876c44262945ecbd520af7f",
".git/objects/54/ace598516003f19c1b0c5ad173abfd2ae37806": "c1a74ae4cd558bb0f635ec383c41d47e",
".git/objects/59/9d4f7ca352c4626abbfb850a1fcbd4f9f0b908": "1a0bd7560f6294abdffeb9bc667aeea4",
".git/objects/5b/3435bf64b245272dd5e6f8080ce42b21752a80": "75406f0f6b0fc9441efea3c402ac22c3",
".git/objects/61/093177aa7b4a7c091aed7534cc0670d34090fd": "76cf33c5cc63506f21a75ef07aad6efd",
".git/objects/62/3458d9e6f9a6375eb3ef4343437283eec574aa": "4463e03111c23fcfc9fedbb8a011fd07",
".git/objects/6c/a05d25110bf359ad58c76a1afec0edc3739ab1": "57bfccc6fd5200cb557a8e897445af07",
".git/objects/6d/49e58139c3b419bcb1e30fad738524d0f89ee1": "172c147f40b7c9cecfc3bce49077a100",
".git/objects/6e/aebf6d5c6c3a478ededf9271107446b5a92f35": "2285a32b1da55d8ab94d2f0b6c7c57b9",
".git/objects/77/68dd863e06d8e72cb606c90a6153659a246c6e": "3b86a96570241adfdbb04f76914b46a4",
".git/objects/78/b2cb46a3a973271abd109a8ddc8dccb2f2ad6b": "8dc6496cbfa6a822520412029895b5a4",
".git/objects/7b/96b9a825d1680ee40e713fba9e9fa48c714f4f": "54884fd0cc61017cc4bebcdb703458f6",
".git/objects/7c/fcfc7918d5274847c731cd499bcc0c2b2dea93": "dedb0cc774abed4325075690b95331cd",
".git/objects/7d/18f64cd91f7fae22c2f375b11f3408a9bacc49": "2405304c7f5c216619a2712946fe8341",
".git/objects/89/6fd234b8145841443717d2643abbf98a68b342": "50a358cfc3ad623864def5a833cee819",
".git/objects/89/aacc3eb5e7393abdf42b41fad2dd30caf9bc4c": "e6470be0d0fe492c7e6ba67eb493e87d",
".git/objects/8d/a35db04b178ebb4225f345893093342d386145": "2dbf3006df62c48bc225beaba337794c",
".git/objects/8e/f44da336ebe60dced68f6f0dfeeb8ae4eec77f": "a285c3cae616168e3241848b9a68a383",
".git/objects/9b/0a3a70297dd5d60b2182d60ce162ef4ed52f23": "57c6d98c5e2b030d631c0fa3bb0dbbce",
".git/objects/a6/972db43190e0460d36b18727f0b3e4d1eda539": "2e4962a3f461f7ab49d7801a77cbeccc",
".git/objects/a6/dd8265ca70bce8c76757d0d137311fa4b961d0": "d61a54d6531b18a94aa30bfc7fd717e2",
".git/objects/a9/64db7bb358ab893a5823a765cb7ba2a1179153": "15651a731245c650f4a9a565bd0a32f0",
".git/objects/ac/1464fb7026f20d8f9e73f87edb9225ef1b0632": "1a0be90bd78f81bb849bb8c5079d0f65",
".git/objects/ad/d347afc3cfe378ec3d38d1213febb0f5367233": "65dd142464512f5481ed2340c21f4599",
".git/objects/af/a6490462b2d5a793fa7f94d0bc390657129c82": "1efc7d2b5730bbb9ce413dec394902a9",
".git/objects/b3/e2532114ea7c569944334123a73d613a089d52": "a378f5da076e0f330f36732d883529a7",
".git/objects/b6/b51fc8962898be55f8229738b5235394073ed3": "0e2dd1f938cc6bea9764bc36e47c96c4",
".git/objects/b8/3d93fe4ab277c247928dd8a3b02bd18521a01a": "a6a84f4281b1f36ceb694aa4547b5160",
".git/objects/b9/bd48d595e3464b781d381f32e80441083955fa": "446d2ab18e744674615bcee4ed98a108",
".git/objects/bd/65d7df05cb3d38d6e60e2f53c349e3d4afbb1a": "e11b68992b3484a690c9772fc072d232",
".git/objects/c0/19bbca002eb60c20348a4448b3ffeca8570fc5": "9e179a9905bc1c40156897961b4a824c",
".git/objects/c2/7ca03989956484d94c7132227eab4863d5ba76": "9c2e23da46699e54afc6e96c1138a8ed",
".git/objects/c3/361c9cbbd34b1eca5e5e7dc1db85a6e9eb5fdd": "a623c10d28fdb5770df8413c5bd6e982",
".git/objects/ca/861ebd85e907dade124179af46e2a51394084d": "2e396569b496db36de36d3bffafbc0bf",
".git/objects/cb/fac5d29fdff47fd7442fdcabba074b429222c2": "736ae69765d36fc69e463dbf04b7360d",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d2/82ba372a34e50a9edbd35ba7917aece5b14586": "286ca21e00c898bb932e66be5df020e0",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e1/eb562c5373a77ff73baf61b9bc5ef90a6c4075": "f3ccd8e557b9c3ab24ea641adfa1fafe",
".git/objects/e6/e38812c1e3d696979f382364282c034a27925b": "2ef5f395331bbbdcf32fe4ee91469943",
".git/objects/ea/f4b3e4b56a0cbc51c9158a8e991d50e864d2c4": "5c485bde607d9f518bb447673ec812ae",
".git/objects/f5/2cb4f990569a6765a682fbd87440076ca3cacc": "6a90e18840c35f5556005455a74003ab",
".git/objects/f5/a81102383fec8f5cd391ce9758b16bc0944e0e": "83d8284bee3986b4ca926533d198b087",
".git/objects/f6/794956ee9acc98f50ead4f28c5d992d788e69a": "45ca1f19130f39cedb9969ca2b9c8080",
".git/objects/fb/7af34b099fc1446dca9b3122de9fd09ebc617c": "76b080b9a20b08ee393581197c347ae0",
".git/objects/pack/pack-53669187da68798855799802ec05e2d2036e12d5.idx": "2e45b514d6340724641fd4e2dc91652f",
".git/objects/pack/pack-53669187da68798855799802ec05e2d2036e12d5.pack": "014d6a095a98b941e2d52c68114fbafa",
".git/ORIG_HEAD": "ec031cd0a49f41d41dd3d2df51c65924",
".git/packed-refs": "32406c4507fe2aed5cd29f26d48668fa",
".git/refs/heads/main": "d217784e9353cda1ee71b17aa076c4d6",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d217784e9353cda1ee71b17aa076c4d6",
"assets/AssetManifest.json": "82c69b278083deed47c6356a91610f34",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/59055.png": "410e18aa9d8d218497ec1127e457b1b3",
"assets/assets/images/78257_Abacus_flat_HT_07.jpg": "a706a058451dd8fb58013fb48697d007",
"assets/assets/images/AlqH0pBu_4x-removebg-preview.png": "1274b5d3a892fb071ae6490e3486c90a",
"assets/assets/images/altituterule.png": "95ff67604253ce23e0cb0bc6155dd83a",
"assets/assets/images/appBarBanner.jpg": "82aa07122fd2aacbad619bcb190d5474",
"assets/assets/images/app_launcher_icon.png": "0589ab452d18510be12981e36606ce5a",
"assets/assets/images/centroid.png": "3b23c003e02258258454f77464e486d4",
"assets/assets/images/circle.png": "2eb67430b060715233811f98a610da27",
"assets/assets/images/circumcenter.png": "febd65019be732e986ab5475ceb5f5b1",
"assets/assets/images/distance.png": "d4f7b1accfbc90f347e6326e91a520ec",
"assets/assets/images/ezgif.com-gif-maker.png": "02daa4c533aa5c9db6a2c6b7c5f58bac",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/lester.png": "871ceaee9127ebd5bf7593b4ef2e92ae",
"assets/assets/images/midpoint.png": "0362c88148e04b488696a1e07fec1f2d",
"assets/assets/images/orthocenter.png": "87f352bcdd950ed2a9e38b4b27b7473e",
"assets/assets/images/perp.png": "d1d226d1168f454c3ed2eb8688908968",
"assets/assets/images/perpbisector.png": "ec05b00eafdc7592cbb9ab8054e70c15",
"assets/assets/images/pythagorean.png": "b2956ee7310e4ae005c032abe53a70e3",
"assets/assets/images/radians.png": "16c987de2dcdfa91cdf0e83d62c37cc6",
"assets/assets/images/rotations.jpg": "2e39aadc99d2b569ae457fd422606934",
"assets/assets/images/slope.png": "acd0ebdcb6d806c3c7804f4ab826ae07",
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
"index.html": "3a1ada6daa082ec8d982dd9b940da3cf",
"/": "3a1ada6daa082ec8d982dd9b940da3cf",
"main.dart.js": "e061017e40bc2a2798db0c7f006bf3b4",
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
