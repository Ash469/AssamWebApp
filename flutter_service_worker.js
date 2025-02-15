'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "68c44399f1aede208a78eabfd76fb2d2",
".git/config": "ed8f493e436301926c149606a100b12a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "85a7784dea2da964ac6753a6bac617ab",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9bfa81fa7d2f80703c1c05254fb7208b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b44ac39c8c6589a53c0e32edb3da975e",
".git/logs/refs/heads/main": "b44ac39c8c6589a53c0e32edb3da975e",
".git/logs/refs/remotes/origin/main": "654e1a73b6d751215a7dfb0a38e0a988",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/665641b62bf7d9d462e0d26621f6059e0568ec": "521ba0e506bd10b129babe1f8f824b74",
".git/objects/0a/59a5f7d61298cc82d60a2c0347d224a6cb1382": "b009963e0c64ff250cf470f061ffc96c",
".git/objects/0d/53696137be0c3f61984946c8ea55aaa9789128": "7f105f8dd95a7db8495067c1301a6cb7",
".git/objects/0d/8714cf64f957b73ee2a6264722fe26655a26ec": "9c294168f68846339c927cd91e732303",
".git/objects/0f/f639ab7632617538f365749170024e7feff2e0": "e0669b63c1c230882d660e43328e20e9",
".git/objects/14/b7cdffa72faba322a50e33b9da34ef576bac07": "5cc10ea18806f87a12f2aa5442813203",
".git/objects/17/f0b9cae378c603c5af98a4c9df62b46b9949ef": "f6f18914db5fe590b5d58e1241217f32",
".git/objects/1a/949a4333cc258888957a61797b872da1e13c2d": "ca08ebb721c826c41919636a4cdb782e",
".git/objects/1b/6910b65ab34e3928ba6779238f7e91cd1cadd7": "9d045956ba2082ceb445a30d14fac632",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/0fc9177f0137a50fc28a52ace4b63798c5a08e": "7a1a8e0bf88269572b13ecdcd979c6f2",
".git/objects/21/05e3c1229ab33b135277c07d3e9fd339663721": "a7c83d6eaf3490c1b67546ab8e35bc1d",
".git/objects/23/00eb25eee1cb2fa25ae0e19add5b8c32bee61a": "610e9416cab3a5a6e542d6892aa14b9d",
".git/objects/26/cbcef8c6391a31043ec2a048317b80d8fe120d": "4abc1330bbdd69bc045c7615cd129b6d",
".git/objects/27/1d529fea81ce80e23b1fb3d102e54d2f18ec5b": "846f5b47f2434315e6d7d647c88811f7",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/dcbe11a2f61b5492b9f88d290108b688af90b7": "fed44d0421b8c2db9722aba1b3ff22ea",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/0c05ae926f5755ada7c36f9e21675d2486bbec": "5b3134afcb05e48444e222eccb16579a",
".git/objects/3c/723906d63996b5b97d8710fd5ff9793912ebe8": "455c9296d097b71b4e940093f588d646",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/48/4659bb7e4c84c3d23f252d80f20a99afb88e1b": "e3e96c6552237a7f5e8f282eeb84435f",
".git/objects/48/ab2a00e15f5d3eb6b2f79d8a074799768fecab": "9887ef3e8d185a1507474b811a2f37c1",
".git/objects/4b/6f2aa342204e36f3fb99e88e50abde905b730f": "98c3d7a9bda08cae0dd7b4bff7a20936",
".git/objects/52/c87652df4f564bbc73e8aad369f3988caa5832": "a3187b36a326f37c98954ccd885a0203",
".git/objects/53/4a0016434393331d1b47133cf4182afad0500c": "d04074de43889383f2ba6e2800afb5a8",
".git/objects/56/f8c4a3ebf3be20af96e573262b68a3c5f2b48f": "c9d7074bbeb26a2c5f4889247e074318",
".git/objects/58/65f4ff0e639807a9e08e90c70b4f9c15c3c115": "b271fadbb2e03187fa8312eb57f1aed1",
".git/objects/5f/3ef7ed20c44c9c0afc6ef19b423283c828e8d2": "d92562e68c23f18d103693b141f4be0e",
".git/objects/61/ab28b57806e6a781beb53ee11080ee5d958f08": "92a1e943d4e416a52cdef7ca41bdb3a3",
".git/objects/62/4a191f1e500f371f7159b0b4baa535e401bba1": "d41a3a5664283125e841a4cde54a9aee",
".git/objects/67/09271bd42ef8f6911c2f11b7febc9edb326fe2": "14515a91fd7c3d86b7c9fcf66fd974cb",
".git/objects/6b/dd7c5e64cd700f48315a88c41da15a5642ef1a": "9f48e00cc5ebc3c919181f4be0668a32",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/43540a4ebccb243f918b07ede4979b539e0fb0": "beb976d21f5ae292cc145896416cae7e",
".git/objects/82/5895113f2d385d9b69d178a8b8b45efb716ba8": "00321c4811cb99e1cf30423586745895",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/719480773ea8e8cab1e30be4b38964b421db6e": "47f472131795d621db5faaed822456de",
".git/objects/92/85ef769c1700ec8a94292b85b2392127347300": "cfc79f43c5bfdc167e4577b6593da292",
".git/objects/92/ae73e8ea6544749f43cb13a4029d3dcacf23d1": "b631dd79a102b41729a2aafbfc439948",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a2/975b12b05900fef16ec42ad4884947efd0ade0": "a16d6502cce0a1d0e7b3cc061d3b23c7",
".git/objects/a4/178c9b8a071b677d22ad5de9d2a597610dd331": "0d4386518d6a12346c5d9b22f9603829",
".git/objects/a4/68f0e8a9dfe984d97adffea781920f1f6fb209": "c0cbbf88fa4517bba964872ac5888351",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/7aea07cfde3d451506b355c9ee4193edcca29b": "367178be7a8b10022c8913c368c6c776",
".git/objects/b1/ffd2dd928ddda13d72394e500ecda9dd608714": "2def1f8d745691d6331d12754b9f899e",
".git/objects/b6/5f8691bebae59475781d63c31097a34e64608d": "3a78711b4b7bde50b72e3e35080c89f2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/829d4ecdbe96a07dc86fd6fd8f811069005a6c": "7366f3391214b56892cb74a2cf461d2e",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c3/158e39ea742b4848510994de7393d588ab989b": "5dc3005898479a2d19bcceae609f4882",
".git/objects/cd/c14023c822c9aafd1d80011e1f572a56de3d10": "0fcf9574297696dda3f41acf5bf1b89b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/5904bd6804f28c88f70f856b632cb355f13dbd": "4bc63c21d4c7c8e77744dc7475ae75b3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2e6c5c8624c25971d997cea9d0a84a0a3ff34a": "fa83a932daa188e87af7230d5a1bae98",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/20b6641cbef25b4100d7cf7b506e21f542b294": "f3e15adffa88550e38ea370a7e2cc159",
".git/objects/e2/9d690c31a3e2748b17ded0034267afdf93dbd9": "fb5ce8f98fe5620f8cae301fad767417",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/468c1a6849b002bcd1c12adf23e88bb74ad633": "1a0cfdf35082d74c0361bc26516fe322",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/1aa2f4f86e0531f3b6760a77a7d96d3fa32988": "80933052f3a4ba4564d51908dc13ae1f",
".git/objects/f4/72612dcca4dddf56caffdd08dd32a30b6c543a": "f337213eb4cbcd7da23fccaa5fcfafe7",
".git/objects/fa/bb8abf7df3c6a117be79170167a42e7b1b7806": "7d23dc1c6810625dc8b6ff22c985ad2a",
".git/refs/heads/main": "f8e59ace52ef81faedff3d8a2bcf2d0b",
".git/refs/remotes/origin/main": "f8e59ace52ef81faedff3d8a2bcf2d0b",
"assets/AssetManifest.bin": "446f564cc71103e1ec21c86a72c4bd3d",
"assets/AssetManifest.bin.json": "42611adf1c69ed5ad109cc0735dea50d",
"assets/AssetManifest.json": "706327f1a9b626a21d6bbd05f7aec95c",
"assets/assets/app.png": "016735ad26183e71eebe8eec62e2b82e",
"assets/assets/application_status.png": "ce467b0f0561cf9bb051eb9dd70cbc94",
"assets/assets/appointment.png": "a960dda191f05564e896aca7c736303c",
"assets/assets/app_bar.png": "f27aea79df1bb26fe84c3f5f67470abb",
"assets/assets/edit_profile.png": "85082e972bc2791da8803082a505be1f",
"assets/assets/image.jpg": "ca4ab783813f086773969ea89bfab115",
"assets/assets/invitation.png": "91b70e57ead2ae107e2e9e5cef26d3ba",
"assets/assets/logo.jpg": "c8e613099e550241cf2652ccd9bbe98f",
"assets/assets/new_application.png": "9acf43e056ab86097c8a5c90cb1537ad",
"assets/assets/summary.png": "e6b54d834c167789fbdf7a40689bc048",
"assets/FontManifest.json": "c6b115e9ab2ac9308748c8767ca04429",
"assets/fonts/MaterialIcons-Regular.otf": "01ba6d32c97476914eec181cd5763309",
"assets/NOTICES": "d94a3e93b3b3ac91aae20c597998e8e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "6483bf9fdd106eb77d6f3c04dfe35057",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "aaf47e895b8bd66723bc0613f64ecb77",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "463f09e87d82cc7d80ad0b2674a5efa3",
"/": "463f09e87d82cc7d80ad0b2674a5efa3",
"main.dart.js": "123740b7c19542b7d08f60298e208e4c",
"manifest.json": "b8a7df2d4e67f5e3085f090e676e9981",
"version.json": "94e982469914e61fe0b5f93c9342bf7b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
