'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8455b2fb1a22a794997d799345afef6c",
".git/config": "15149bca84d2eb2960bad577e76e4f3b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5f33c9ca20c0e5fb188163f9da45c4be",
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
".git/index": "d25bf666b02707d67a25041f0a1e0b26",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3fd01b262db04d7d1a62669e4d0f6d9b",
".git/logs/refs/heads/main": "3fd01b262db04d7d1a62669e4d0f6d9b",
".git/logs/refs/remotes/origin/main": "0496c76adac0e74677351c69fb69e5d7",
".git/objects/00/35e7efd47a9e9eb5d336ac99290e91cb58d622": "a84d7ff054ed233f64a468ff6b73579c",
".git/objects/02/31f273894413d73bbb447ce683d978e9630772": "cc465db653f66aa2c7decc93cae168cb",
".git/objects/0b/330b9231d2c0180fda486d1cdc382cc72980f3": "ce7ac9929fd4e34cb09d15523b1fd71b",
".git/objects/10/54452660cdd242398babe1aacc105b92c8c754": "b9fa64034d638fe72d730674ac881efe",
".git/objects/13/b310dda6454066c02a1acbff32fa42b4817ea9": "a6f17f112a5bf76ae873ca3766d51ed7",
".git/objects/17/6c0eb5f9f4b59d16a370c09cfba34bddfb90a8": "408c368d9159967c066c94befb23025b",
".git/objects/18/0575a40dcbd83f69631630f47deabb7fbf0e2f": "0e72eeada7b7c24c4d1476c811fabbe2",
".git/objects/19/6922862ff58626525b3f5dc67af060dd998b5b": "77e8076e7bebaf71e9c4aa4ab25d022a",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/a5a1f45c79d7c852c9aab0dc01d16c6e0dab85": "22a8193f7126cc49857b7c8d9f7775e2",
".git/objects/20/a17d3cd53264b3c4606821a22659565ef4ecbe": "c47695dad9b07460fca3c943ff7d1d65",
".git/objects/22/509f32f5bf8175d8b813e5611a842fc9194a22": "70cde386362eb72cfa2b621a3e8e55c6",
".git/objects/24/d343c04ef7de1aebf08e6dec011a9be9757912": "cc95a4ad51db50ddc1a5998196ea453d",
".git/objects/24/e229a4801be223a94f93f7150c75e39bd31a76": "aac00d4927845fa11d06167cfc2826e2",
".git/objects/25/4a76c7ced674024e9511682b8b6dd06c8185e0": "b2b97b4e02cf66cf07d6f3e70a4aaf5b",
".git/objects/26/7b4a0bcba1e59dc4896eda6c25177c2c59114a": "77858fbec24c9314d20025a11dbdf016",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/31/328ae02bf7621f9d6b1b7c45b9623073709f98": "0307fe2ba580655009ab853b39228a9e",
".git/objects/32/ba8cbe351de44d3426095ecc9e8175fe5f01a3": "1af2e00efa6d52c4d3afb7ae3cd22a87",
".git/objects/37/241ca5a261355b268642e4a1317d64d34b0b68": "8023197e8ad9dce72a1b61eb2165384d",
".git/objects/3e/4403036e9377d43ec708f9cb7e2ecb8e4f222f": "9b1594c37f2c5428ebe981162bd714b1",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/4e/b52704b2fd2400af1523f4c0abf68d3ecad57e": "070cf0c7c11f1d9de99d89b2ba1785c8",
".git/objects/4e/e9a274d0f0d8745e1b9186914b0bfb54ecfbca": "2a6edc2138bcff89a54791068d5e8f9d",
".git/objects/50/93bf1d268766d5eec5a30fc050b777710bace2": "76055f0fcfda0e768a591b529f8f2227",
".git/objects/51/364d0644e3b1d1371717572ab356f2a19a2bb9": "6c34341ef144cc83f13dd7a01c5171a0",
".git/objects/56/4e4bb303477bc99f52385b68b5c4fa1013180d": "af1124d1b85cce8cd837a81e7d641cbf",
".git/objects/58/596a400a65c39a191a17dc6fc8999ba641d917": "1cc355d15b41bfe37a1777b2afb568c5",
".git/objects/59/f974f0b91d37659d49ec532e555c61e584799e": "9d0d75acfca84ecb5ab33343efc44fe9",
".git/objects/5b/7c63c17ad0448fb0c50680c85b59353d08f87a": "3c4acfcffe70c933aa2a46029ef01861",
".git/objects/5d/0d434645b13424aa796649a6cb8965389497ed": "5f6ee6cc29feb7ab06f2e90b7f8a9f72",
".git/objects/66/426f7cbc42c43bc0bb46cd8fce3ccf87d52e43": "c81ad240b68a8f683287da036287f52b",
".git/objects/66/6677fc31238d1843aa5fe28ba90f38e3b8a852": "b865c98aea28c2d41bff24bded7a6e2b",
".git/objects/67/469ac1191b729efafba734174292e836edbc03": "c32bcde760c0d369512e9a1c22d79e69",
".git/objects/67/4954c4cd": "c32bcde760c0d369512e9a1c22d79e69",
".git/objects/6c/da2c102092d45a75e6555c30da5f2edfc0eb67": "973bac8fd6ae920be0ec421d8677a4ee",
".git/objects/6d/42902b97c26d49e26513e46975e792b72ae0fa": "1214397d23766c8cc2d0ef062940462d",
".git/objects/6d/77c0e419f049a0861ad1ec2ef871eea4a45b1f": "1c3ee18bc9307a7528974c413a620fcd",
".git/objects/6d/ca9655058893cdcb080303b31378613dfeda2d": "fa908f49626fec4d3595dc9a3736e3b1",
".git/objects/75/e2cec5e251f97692ecc4f6d8e0081a0a49a9c4": "4b15c91b2872c60dddd64297f5aef38e",
".git/objects/77/c1da82e46c3c8a81a29addf30350b4e2a081ad": "68dd8dbf44028c0ad24d0d29cf0359b3",
".git/objects/77/cc63534bf2f05dd9c4072c1aef5a61273e2afa": "7d0387ed5363e4707195c336ad030085",
".git/objects/78/82ead9ed0ef3a5f918097273b15fac4419d5c6": "91fb54388b3535fe64f4afa337e5caed",
".git/objects/79/8635708222ad6490a6405d86be232baad634ef": "11d53056814baa281d14857a40d8be84",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/74250ac8189cc731e7d0af8557029ec35c82e5": "d35a69ce33af2d006c6fc90a6fb8459e",
".git/objects/7a/84aab31edb010b7b7ac87f8388a8919f7d0cf4": "90deea617fc20f0fa5b30d67a1989874",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/82/03e3db0760bd5c80127fbd827b1b34aa61aa2b": "4e4229367ef20982e16c4ba53da35eae",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ee9f0b08": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/a08d118a5d6de91ca0b213849aeb8ca86e311f": "984968cf5dceb02b4ee86c23c2208d2a",
".git/objects/8d/1f3d7d2dbf743b36af19fcc81e07f627f0c872": "957ddca02e530cb37a274b06c5aebd21",
".git/objects/8d/dd31175055a47946536579b5b32c2482318630": "9734d13f947b2756f89ee2ea5e666f27",
".git/objects/91/d7aa9e14a7f46f9ae1d0dc7d3b88c5ba26182b": "d75b6001c99d9424fbbf4b8e9881d540",
".git/objects/92/3a2d970f50ee263b6358999e425ee1377c6f03": "ba9ef03aa7ff02fb5e0706c9a12250d5",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/97/5b869e2a6a652ad464a419d2029801e0e1e6f3": "19025c653050296ffcee81c32d8612f2",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/2498a343fac57a08159142a0dbebcfa272bf2f": "d7f45b8fe7d5fc4aae360617a8ebf531",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/2835faeb72694ddf9d6a09bedbdc9193d4895d": "93e5628e03c0e5c07e0cc8312932d4b2",
".git/objects/a9/3c619f9b7ceb7bbed8a14ffd1135877abc3714": "2a04eb172d45dd3bd9c410aa9100a863",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/216676cf2723dcd983cdb6db9f5f936b027c47": "dcaec2136a0bd99c37345623fd5d8e2e",
".git/objects/ad/b84496501b24e6cbe6f1c7e5d582f792e65a78": "c7720fcce0b52022aa57fabd42b3eefd",
".git/objects/b0/ceff168fb7ee13504aa80ce11fa691f8edccf2": "d2dd9c84ef2d1be76c955ebe1197adea",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c1c206463bff3d16599dd738c2d40900150f78": "63c87fb05debd955980d38baf0c15d72",
".git/objects/b8/4183f5da30000db649fde2311bd933373b51c5": "09ea46527c2f4d16c784760a7f17f9df",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/2fc4454493078991401a46210c99d5129eb38f": "ef0a79979739064ceb5413893cc1ee47",
".git/objects/bb/85a068d37afef0758a661b90b06a3681f1e5de": "12155753668cc3f005caaa499f69ac0f",
".git/objects/bd/1bc805029af5ae0ba8e86c26d09fe4d7a7b691": "188826ae97e7acf6258987f3a69ef8bc",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c5/e36f325be6d73cebd92b668f29ccaa3580ed56": "f46b3f95fdd4ec31a60e648c848ef523",
".git/objects/c6/b6e6e6f7a41c6fa2eedcc51c7b70b2a0ae749b": "f044e841576bd5777a01e66cfee8c21f",
".git/objects/c7/873cfd857f057042a0b35c82aff737574a0baa": "5ccd9f7bcb37be8688ccaea8aa4cf9e2",
".git/objects/c8/8c692355964fdca7d8aa0c7b9e177ecfa2a807": "6e1d4731e0dd5c361ae8bd2e64c01f17",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/209bd37551d116a491463c090f5ae1129640ee": "6d4062a117ff10bc26a9bb081fd8d7b9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/92d48044b1f889f64f92d0e77a6494bfb0b3f7": "93df5de92166133b28148da460e78f18",
".git/objects/ea/64808fb7c8f97493530c492bba841f24b0147b": "7e73211851881f21efa4b1cf80730b80",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/31a3a5792738762831e6594f41d513316426d0": "574ad632e0398eb7de76791b3d472fe8",
".git/objects/f8/f437aef3d7ade921e8d7008c41603e474ff297": "58c69a53e355be2d254a1a988125f95e",
".git/objects/fb/5d29e208d7c3f37b5d0cbc60a46e08c221c3bd": "5caae3ef8d67123d9c8c10a33910791c",
".git/objects/fd/daeefcd6bb497d00bbfc95193aa50f0bfd5439": "f4fc491222d420b1cff68bacbb3571ae",
".git/ORIG_HEAD": "f12fcc6e820590ec579223305be88b19",
".git/refs/heads/main": "f12fcc6e820590ec579223305be88b19",
".git/refs/remotes/origin/main": "ccd297ab086908abcc1375e123ce48e0",
"assets/AssetManifest.json": "a53e784c4e720ad1c10b6f97afdb0106",
"assets/FontManifest.json": "e4c9a593e95f3fbcdd12103f85b17bdc",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/icons/MyIcon.ttf": "97090ec0652d91eeec1e840bdb78a70e",
"assets/img/docx_icon.png": "e876afec8df5d62b879bbb9539b1bcf6",
"assets/img/git.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/img/pc_icon.png": "328cf025b736da42fb4645cc2b7935b9",
"assets/img/power.png": "86d5472cd95bc7d8e66b6708050f690e",
"assets/img/skill_icon.png": "d1c9a2692ec57c2308ce06b71befef9f",
"assets/NOTICES": "b53ca28cb7a61447772ca55e8e52e041",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3f2b7b62320b767aa561c0445f23a7a6",
"/": "3f2b7b62320b767aa561c0445f23a7a6",
"main.dart.js": "ff986566bc3d9400fd55912183b2f09f",
"manifest.json": "0eca79d3c1d6d644fa3ea996fd87b500",
"style.css": "95f43765a021135d2e020be4fbafadd2",
"version.json": "3cd0e1f8240f9ef42ae17290f2d2a6ef"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
