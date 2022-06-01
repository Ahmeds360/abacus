'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "12f30bc93471305f2a3b002e5723c601",
".git/config": "0341363ac59753aee548ec6b2867c0a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "d3565b13cc7a2ded61419b4a2f6f2d43",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "25901983fa3da814b2ad1f35419a1eb0",
".git/logs/refs/heads/main": "25901983fa3da814b2ad1f35419a1eb0",
".git/logs/refs/remotes/origin/HEAD": "98dd1a0ee902779cec8a7fed98caa073",
".git/logs/refs/remotes/origin/main": "e6c407b29fc489163f49230c8568cfeb",
".git/objects/00/a11bbd280d0c5e47dc4699bf1eb85d4e4e1f61": "1cd4f059f1ba7a3add55406de09ed6b4",
".git/objects/04/7171f65d984f6816febf9e3f6677d3b2bb0455": "2f8e030fe0899c5742a5a652a934cbef",
".git/objects/05/3d98d2f0140b8bade3f8eed35fe8027b638114": "aa5fe2c459a4d01c5371b8a4df532ed9",
".git/objects/0a/bf9a1abbbb18564bddb9ae2a56e79ddee19e10": "7823039a0c05fec97cfa91abd8851520",
".git/objects/0c/c1d0fc83c5680a3d2271fc633987daf9bf41e2": "2b5fd49b35cec9d7d9ab0be833a7d331",
".git/objects/10/063698f1d2969fb1f19a0b62e01200f27525c1": "67abfccc8c23587551bb95e5ac46a66a",
".git/objects/11/4b2a93d76fa16b90080b48c907274e239d0a65": "b876f54c50ed68f12e4f1a281c31335f",
".git/objects/13/814e99f221d10ec84778613ef3b3898a4b57ea": "99926d9317b74d3bdf5bdb852cc3da01",
".git/objects/16/9c21fb7e4e2133124eed6b9c0dfd9293fd4a8b": "4b1a00fe6785a7358076caf7ea973dca",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1f/ce3962bf7ee9cbb79c7d48466cc0ad3192bb20": "8de9aa7f88f65160a0458fc1ea7488e8",
".git/objects/25/bc12f449e300142fa9641999a317da34956fb2": "d79dc91a9c2a9fd43470ff97a90ade28",
".git/objects/25/e2ff4de2f3c3c2f2304099e83ce34a1711aa8a": "48bd8632faef2a36c1741898584290f2",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/28/f3b989555eb344c19142a912a1fb85ebc23130": "cd3f8fab9a8b3b98019c6dfa0ffda0c9",
".git/objects/29/c3d6c4540fe9efa4d76abbf3cb6b0a87bfe457": "66117453d4e61cfadf256029ec9638d8",
".git/objects/2d/4efd0dbf116d16b49979fec8ad2ee30cb354df": "e9b57c05f16a52b5d456100bf36ff976",
".git/objects/2e/c16c71ef468a4e9ce0014bbd48df92a05e9bd8": "f8683b348611cb3c2e903f67457a5a7a",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/30/fb167b082c6b640f9850744f90ff9cf7f5e924": "6203dff3944da851aa6cf5c4b3f64081",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/40/a1ed931c867b1429ed1695e1d99e6bf482e058": "5d2cfebfc2efd98324a0a23c07cac356",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/43/804cb5d6f40e3d0d81560b737f7eeaca93b650": "fa447d4fdb495016f245d028d7eaf1cc",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4e/240680529ee3176153a54f67364643d5a57e51": "2723db7e67f13ce5b45a3a178c7ce945",
".git/objects/50/bcaf707f0562bebcf08d9d525853699a50677d": "ab7d67ce78e3b40cbfc6587c8ef6ffe6",
".git/objects/52/2c2a49123a9d18637f1fde94f60857e00f9c0f": "00de3ca522662ed9893a1d6abd044ad5",
".git/objects/53/f29a27c3b99384f165c2088a4e68d5b05ea57a": "3f8d69724ee1fe0762257c36710df866",
".git/objects/55/db8af384a85d67b4d08ee73a9c190ba9b83cb2": "78277c779291b7dcdab2812547de0b5e",
".git/objects/5b/002fd29972344325e9b6727484de0552a849bb": "838b966ec513846a708f049fe3493212",
".git/objects/5b/05a2ac9376c5f70318a193f4b6d687e5bf74b1": "93bd2b000380f5215f1c34fca21b1ae7",
".git/objects/5b/c6ceb60b0bdcd93fe7d51db31a445c38346e05": "9c5a524e63bdf2ba6241d7980b20c4a3",
".git/objects/5d/00be2d8f3198eca49c520f22921b6a884f07c8": "480e02742bdca14ee6ccd5ee4c089401",
".git/objects/60/a387b6d9542ec3b122dfc167b5461ace3854e6": "a9522cb5faab96b4884e71e40c447654",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/64/5c44d064f2a6f3eb92800180ba1981b10845e5": "37a8306c26144a024560c4757181dbde",
".git/objects/66/c4d501f7b4b775842008eda9bb418d33fd3555": "8e7ecd5082ffda49c0aa439fb9560366",
".git/objects/68/8d8945d23239ae7cccb6d888fc4a1c385b3823": "4561aae8638db318315c6cb6cdde71c7",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7b/8dcfbd5429ae3021494739ff6ccd2c28170e43": "cf3c714ae898c73effe84ebb3e93f9c4",
".git/objects/7b/9986445776635b2831ce887da4ea03ef27bb1a": "4699413aafa67f771d2fbf7c7376132f",
".git/objects/83/f808366e614086c35dc4c313d59b78af8036f7": "bd82f08062d96f744a5db5235d7ae81b",
".git/objects/85/31ec72e09429f32238b34c399754cdebfe7694": "256b63fb070ce7e65a8131397d7d5a1c",
".git/objects/8c/c132c0ad5194a35712458d1c146059b9a05fda": "c4a9b79eddb76a9f72abda5a6ce76ef3",
".git/objects/8d/27fed9fdb8f1b7cc4f81e62f71ddd8f7894684": "d01383f138392656b40a17181e2bd85b",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8e/97404db5a837caa977b4ab4979e9ae23a3ce09": "45d6aacf8af20751fbfefa290e7895e2",
".git/objects/91/ddf5de1942dcc19bbbb76f755250207191d466": "70b670d2c35a6622855ae9d4b9fcc9b7",
".git/objects/95/996377ee0ee128148f547f99d1fd2a0d6db24a": "96254018e1d33b861383b508fab4aa56",
".git/objects/95/9de9cf8740852ba0ec482c4a5dacc66b383f30": "bf3a61b4f8a54c7e3c2bec26ec45ff2d",
".git/objects/96/0a58b96b2446def0592ca325c63b3d7a852a9f": "1a62f513900f3564849f5a04e9ff8d52",
".git/objects/96/ccf0a0315784dc443c98306293291a07394568": "8eb229d90ff1266bd0ac4d5d737fe57c",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9d/3f5e74470bfe99bbbd0971abf0dfc6919d83c4": "859c4d0ce96b13095f030263365320e5",
".git/objects/9d/f76078a673fee810c780d8983216f693f83392": "5f70d1b31f46768c4e1a161a2dd8a2fc",
".git/objects/a0/410e5ef26444c08e332a10cd9111f27a0b4a78": "81826685d81de3ec295468120befec4a",
".git/objects/a3/df28426e6264f79dedf539c3eceec062947532": "3bb2b155fb7a687fb5faa40fccd320a8",
".git/objects/a5/094084a82c57f6ba13e7b3c85c35e6ac6a1881": "e2a593a6c325ef5377f0b99b483fdce0",
".git/objects/a9/2f44a078e41cc94c5db28e479497baacbed747": "ca73e9130eef2484b69360e2f903fd20",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ac/21a7286840a35f9a9ff7b640665b1338a0aca5": "95c474dcb9d4fefb7d84441cc81b21cd",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b0/b55b59239fad5b410733df65e62e24c30d0fc8": "ea6f7d55ad0a9ddd00f8f8c378b881ae",
".git/objects/b4/647b11e20fe4c26a13847bb27f2d8c7167d337": "9b7c6501a4abb93b03cf434e72f0a12e",
".git/objects/b9/2cd13c6a02b4508ae5f3b7eb4586d1b6f3923d": "d9397d40b09ef9d0ef72b0c4dc732c23",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bc/251524347286636a65b682d67d6a68345582e3": "689031550035f7631c8db4c09cf2cbcd",
".git/objects/bd/1e6186555cb0bd64328d5f5e7b50fdf5de2845": "12a149904c6fc6960b05f4729742e5e0",
".git/objects/bf/135a57905a90117aaa9de4602076791648bf5b": "4af1cf7ee514df250e16f042ade142c4",
".git/objects/bf/ca466fc8574c491aa0afcb34b5cb289376f221": "357e53ddcc37340fc62b9605322f60a3",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c1/fc76c897c9a433205729cb9cfe7fb35c649133": "a0b3ae5f6c657b53390ff4af5419a049",
".git/objects/c6/14dc454049bf6a4b829d687aeb33a4764bd698": "78313dcd7b453f7f00d34fc1b64de0d5",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c7/77b1d0ee504010dbfd900d27b060edf6b7cc82": "8af39ea27a124afbed2acf85aa3cc188",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/feb4b7050281bba115227d8cb4acf08fe520e8": "497c0a1807b3c0c6104609080f516fef",
".git/objects/d4/c47a01e8384482f29d9cda91c522422948480b": "543a235f802ebcdddee50c2e69cad63f",
".git/objects/d6/4ac793bf318c65e97d6158a525c523d0a0ae4b": "fa1f6033a51076ea8318dfc8e81bb8ee",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d8/dae6f7ce60098a57821fea46322e7c2f2a3eab": "99797cd3f2a913a2127599906f6ea383",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/e0/91851680f98ced94aab8ea911cbc1708f5ade2": "428209b0266805d18ffad32b9f582a98",
".git/objects/e2/ff4336e876045f8d37f42406541fba56efaffb": "49756dd8b26146773581d99b70cbd1a3",
".git/objects/e6/a4fd4e4cbf48eee6e2c61f54f792586688d79a": "f29a21e9a2a9cbae8450053a0a809de5",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/884540267901ab067c7ac6259919d1067f3f17": "40220802341f912c6896595d7de55de3",
".git/objects/ea/c3391bc97c088b709f055c1f65d0777eb78570": "fa111586119ca26094e22e8aa9d3b04e",
".git/objects/f2/92245f197ffb2dd75ff4db2c5449ea1794f36b": "b3f62f28e0a1cfc4702a9dc04fde634e",
".git/objects/f6/83770dc301798ee6801d9f68fc9064e7cf033c": "d50dd6f261f7c455f695d7afa47ac3b7",
".git/objects/f9/6f61127cd05bb4400268a1f83fa22d0ce44241": "b5615c23777ac8f705a754f87d0a6afd",
".git/objects/fe/d2185203a2c417fe818a190b36b6780909766a": "9f433f7d710b0c4789b6c419c572eca7",
".git/objects/pack/pack-9627faa16a69bf6bf61d5d253a8fa0ecd4903453.idx": "5aa2ab719ae3fa29531cb4753b0c337c",
".git/objects/pack/pack-9627faa16a69bf6bf61d5d253a8fa0ecd4903453.pack": "a2d7708268b1038828eb8d509af5b0f3",
".git/packed-refs": "11e5514cedfae5b4ae956a52c84bb6b7",
".git/refs/heads/main": "53cda60d6176c9f850e5a2a92f87fecf",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "53cda60d6176c9f850e5a2a92f87fecf",
"assets/AssetManifest.json": "110232e40c3704591a0e0e140f965480",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/59055.png": "410e18aa9d8d218497ec1127e457b1b3",
"assets/assets/images/centroid.png": "3b23c003e02258258454f77464e486d4",
"assets/assets/images/circle.png": "2eb67430b060715233811f98a610da27",
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
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "18cb7e40bd5020d870c1db49c89a9d46",
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
"canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"CNAME": "031060490888011687b70efb2014cfe4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "43165124ecaeada3a36a982f22ab7fb1",
"/": "43165124ecaeada3a36a982f22ab7fb1",
"main.dart.js": "279fd91597656ddc13758b7539d0cefb",
"manifest.json": "d17aa6014cc906db1e514fbc164c4131",
"version.json": "0880f721ba604b0d34f58488a45a0583"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
