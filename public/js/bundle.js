/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/classes/game.js":
/*!********************************!*\
  !*** ./src/js/classes/game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _utils_getDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../utils/getDeep */ \"./src/utils/getDeep.js\");\n\nclass Game {\n    constructor(dayNight, seriesDescription, awayTeam, homeTeam, venue, image){\n        this.dayNight = dayNight;\n        this.seriesDescription = seriesDescription;\n        this.awayTeam = awayTeam;\n        this.homeTeam = homeTeam;\n        this.venue = venue;\n        this.image = image;\n    }\n\n\n    getTitle() {\n        return `${Object(_utils_getDeep__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.awayTeam, 'team.name')} at ${Object(_utils_getDeep__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.homeTeam, 'team.name')}`\n    }\n\n    getDescription() {\n        return `\n        The ${Object(_utils_getDeep__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.awayTeam, 'leagueRecord.wins')} and ${Object(_utils_getDeep__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.awayTeam, 'leagueRecord.losses')} ${Object(_utils_getDeep__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.awayTeam, 'team.name')} \n        take on the ${Object(_utils_getDeep__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.homeTeam, 'leagueRecord.wins')} and ${Object(_utils_getDeep__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.homeTeam, 'leagueRecord.losses')} ${Object(_utils_getDeep__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.homeTeam, 'team.name')} at \n        ${this.venue.name}`\n    }\n\n    getImage() {\n        return this.image;\n    }\n}\n\n//# sourceURL=webpack:///./src/js/classes/game.js?");

/***/ }),

/***/ "./src/js/classes/http.js":
/*!********************************!*\
  !*** ./src/js/classes/http.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Http; });\nclass Http {\n    constructor() {\n\n    }\n\n    /**\n     * \n     * @param {string} route\n     * Promisify the XHR request so we can use it async  \n     */\n    get(route) {\n        return new Promise((res, rej) => {\n            let xhr = new XMLHttpRequest();\n            xhr.open('GET', route);\n            xhr.send(null);\n            xhr.onreadystatechange = function () {\n                if (xhr.status === 200) {\n                    if (xhr.readyState === 4) {\n                        res(xhr.responseText);\n                    } \n                } else {\n                    rej(xhr.status); \n                }\n            };\n        });\n    }\n}\n\n//# sourceURL=webpack:///./src/js/classes/http.js?");

/***/ }),

/***/ "./src/js/classes/keyListener.js":
/*!***************************************!*\
  !*** ./src/js/classes/keyListener.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Singleton, Allows App to set keydown events with function, similar to observable\n */\nclass KeyListener {\n\n    constructor() {\n        this.listeners = {};\n        this.initiateListener();\n    }\n\n    initiateListener() {\n        // Call Keydown with arrow function to un-bind this\n        document.addEventListener('keydown', (e) => { this.keyDown(e) });\n    }\n    /**\n     * \n     * @param {string} code i.e ArrowRight\n     * @param {function} func i.e () => {}\n     */\n    setListener(code, func) {\n        if (!this.listeners[code]) {\n            this.listeners[code] = [];\n        }\n        this.listeners[code].push(func);\n    }\n\n    /**\n     * \n     * @param {string} key i.e ArrowDown \n     */\n    getListenersForKey(key) {\n        return this.listeners && this.listeners[key] ? this.listeners[key] : false;\n    }\n\n    /**\n     * \n     * @param {object} e \n     */\n    keyDown(e) {\n        const listeners = this.getListenersForKey(e.code);\n        if (listeners) {\n            for (const func of listeners) {\n                func();\n            }\n        }\n    }\n}\n// Export as a singleton\n/* harmony default export */ __webpack_exports__[\"default\"] = (new KeyListener());\n\n//# sourceURL=webpack:///./src/js/classes/keyListener.js?");

/***/ }),

/***/ "./src/js/classes/scene.js":
/*!*********************************!*\
  !*** ./src/js/classes/scene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\nclass Scene {\n\n    \n    constructor(canvasSelector) {\n        this.canvas = document.querySelector(canvasSelector);\n        this.renderer = new THREE.WebGLRenderer({\n            canvas,\n            alpha: true,\n        });\n        const fov = 75;\n        const aspect = 2;  // the canvas default\n        const near = 0.1;\n        const far = 5;\n        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);\n        this.camera.position.z = 4;\n        this.camera.position.x = 4;\n        this.scene = new THREE.Scene();\n        {\n            const color = 0xFFFFFF;\n            const intensity = 1;\n            const light = new THREE.DirectionalLight(color, intensity);\n            light.position.set(-1, 2, 4);\n            this.scene.add(light);\n        }\n        this.cubes = [];\n    }\n\n    drawGames(games, selectedIndex) {\n      \n        const boxWidth = 1;\n        const boxHeight = 1;\n        const boxDepth = 0.02;\n        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);\n      \n        const makeInstance = (geometry, image, x) => {\n\n          // threejs requires an image for all sides, so using a compressed very small image for other 5 sides. \n          const blankImage = 'public/img/blank_compressed.png';\n\n          // default image if it does not exists\n          image = image || 'public/img/ballpark_compressed.jpg';\n\n          var textureLoader = new THREE.TextureLoader();                             \n          var texture0 = textureLoader.load( blankImage);                       \n          var texture1 = textureLoader.load( blankImage );                       \n          var texture2 = textureLoader.load( blankImage );                       \n          var texture3 = textureLoader.load( blankImage );                       \n          var texture4 = textureLoader.load( image);                       \n          var texture5 = textureLoader.load( blankImage );                       \n          var cubeMaterials = [                                                      \n            new THREE.MeshBasicMaterial( { map: texture0 } ),                      \n            new THREE.MeshBasicMaterial( { map: texture1 } ),                      \n            new THREE.MeshBasicMaterial( { map: texture2 } ),                      \n            new THREE.MeshBasicMaterial( { map: texture3 } ),                      \n            new THREE.MeshBasicMaterial( { map: texture4 } ),                      \n            new THREE.MeshBasicMaterial( { map: texture5 } )                       \n          ]; \n            \n            const loader = new THREE.TextureLoader();\n\n            let textureCube = loader.load( [image,image,image,image,image,image] );\n\n            let material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );\n\n            const cube = new THREE.Mesh(geometry, cubeMaterials);\n            this.scene.add(cube);\n      \n            cube.position.x = x;\n      \n            return cube;\n        }\n\n        for (const index in games) {\n            this.cubes.push(makeInstance(geometry, games[index].getImage(),  (-4 + index*2)));\n        }\n\n        function resizeRendererToDisplaySize(renderer) {\n          const canvas = renderer.domElement;\n          const width = canvas.clientWidth;\n          const height = canvas.clientHeight;\n          const needResize = canvas.width !== width || canvas.height !== height;\n          if (needResize) {\n            renderer.setSize(width, height, false);\n          }\n          return needResize;\n        }\n      \n        const render = (time) => {\n          time *= 0.001;\n      \n          if (resizeRendererToDisplaySize(this.renderer)) {\n            const canvas = this.renderer.domElement;\n            this.camera.aspect = canvas.clientWidth / canvas.clientHeight;\n            this.camera.updateProjectionMatrix();\n          }\n\n          this.renderer.render(this.scene, this.camera);\n      \n          requestAnimationFrame(render);\n        }\n\n      \n        requestAnimationFrame(render);\n\n        this.moveCamera(selectedIndex);\n      }\n\n      moveCamera(index, previousIndex = 0) {\n        this.cubes[previousIndex].scale.set(1,1,1);\n        this.cubes[index].scale.set(1.5,1.5,2);\n        if (index !== previousIndex) {\n            this.camera.position.x = index > previousIndex ? this.camera.position.x + 2 : this.camera.position.x -2;\n        }\n      }\n}\n\n//# sourceURL=webpack:///./src/js/classes/scene.js?");

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\n/* harmony import */ var _classes_keyListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/keyListener */ \"./src/js/classes/keyListener.js\");\n\n\nclass Controller {\n    constructor(model) {\n        this.model = model;\n        this.setListeners();\n    }\n\n    setListeners() {\n        _classes_keyListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setListener('ArrowRight', ()=> {this.moveRight()});\n        _classes_keyListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setListener('ArrowLeft', ()=> {this.moveLeft()});\n    }\n\n    moveRight() {\n        this.model.incrementSelectedGameIndex();\n    }\n\n    moveLeft() {\n        this.model.decrementSelectedGameIndex();\n    }\n}\n\n//# sourceURL=webpack:///./src/js/controller.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_keyListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/keyListener */ \"./src/js/classes/keyListener.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./src/js/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/js/view.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller */ \"./src/js/controller.js\");\n\n\n\n\n\n\n\nconst view = new _view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst model = new _model__WEBPACK_IMPORTED_MODULE_1__[\"default\"](view);\nconst controller = new _controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"](model);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\n/* harmony import */ var _classes_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/http */ \"./src/js/classes/http.js\");\n/* harmony import */ var _classes_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/game */ \"./src/js/classes/game.js\");\n/* harmony import */ var _utils_getDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/getDeep */ \"./src/utils/getDeep.js\");\n\nconst http = new _classes_http__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\n\nclass Model {\n    constructor(view) {\n        this.view = view;\n        this.setGames();\n        this.games = [];\n        this.selectedGameIndex = 5;\n    }\n\n    /**\n     * \n     * @param {string} date default: Date given in project\n     */\n    setGames(date =  '2018-06-10') {\n        http.get(`http://statsapi.mlb.com/api/v1/schedule?hydrate=game(content(editorial(recap))),decisions&date=${date}&sportId=1`)\n        .then((data) =>{\n            let games = (Object(_utils_getDeep__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(JSON.parse(data),'dates.0.games')).map(game =>{\n                // Get the highest res image, less than 500 width and with an aspect ratio of 4:3\n                let bestLowResImage = [...Object(_utils_getDeep__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(game, 'content.editorial.recap.away.image.cuts') || [], ...Object(_utils_getDeep__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(game, 'content.editorial.recap.home.image.cuts') || []]\n                            .filter(img => (img.aspectRatio === '4:3' && img.width < 500))\n                            .sort((x,y) => x.width > y.width ? -1 : 1)\n                            [0];\n                bestLowResImage = bestLowResImage ? bestLowResImage : false;\n                return new _classes_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game.dayNight, game.seriesDescription, Object(_utils_getDeep__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(game, 'teams.away'), Object(_utils_getDeep__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(game, 'teams.home'), game.venue, bestLowResImage)\n            });\n            this.games = games;\n            this.view.setGames(this.games, this.selectedGameIndex);\n        })\n\n    }\n\n    incrementSelectedGameIndex() {\n        if (this.selectedGameIndex + 1 < this.games.length) {\n            const previousSelectedIndex = this.selectedGameIndex;\n            this.selectedGameIndex++;\n            this.view.moveCamera(this.selectedGameIndex, previousSelectedIndex);\n            this.view.setTitle(this.games[this.selectedGameIndex].getTitle());\n            this.view.setDescription(this.games[this.selectedGameIndex].getDescription());\n        }\n    }\n\n    decrementSelectedGameIndex() {\n        if (this.selectedGameIndex - 1 >= 0) {\n            const previousSelectedIndex = this.selectedGameIndex;\n            this.selectedGameIndex--;\n            this.view.moveCamera(this.selectedGameIndex, previousSelectedIndex);\n            this.view.setTitle(this.games[this.selectedGameIndex].getTitle());\n            this.view.setDescription(this.games[this.selectedGameIndex].getDescription());\n        }\n    }\n\n\n}\n\n\n//# sourceURL=webpack:///./src/js/model.js?");

/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\n/* harmony import */ var _classes_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/scene */ \"./src/js/classes/scene.js\");\n\nclass View {\n    constructor() {\n        this.scene = new _classes_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#scene');\n    }\n\n    setGames(games, index) {\n        this.scene.drawGames(games, index);\n        this.setTitle(games[index].getTitle());\n        this.setDescription(games[index].getDescription());\n    }\n\n    moveCamera(index) {\n        this.scene.moveCamera(index);\n    }\n\n    setTitle(title) {\n        document.getElementById('title').innerHTML= title;\n    }\n\n    setDescription(description) {\n        document.getElementById('description').innerHTML= description;\n    }\n\n    moveCamera(index, previousIndex) {\n        this.scene.moveCamera(index, previousIndex);\n    }\n\n}\n\n//# sourceURL=webpack:///./src/js/view.js?");

/***/ }),

/***/ "./src/utils/getDeep.js":
/*!******************************!*\
  !*** ./src/utils/getDeep.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getDeep; });\nfunction getDeep(obj = {}, path = '', def) {\n    if (path === '') {\n        return '';\n    }\n    return (() => typeof path === 'string' ? path.replace(/\\[(\\d+)]/g, '.$1') : path.join('.'))()\n        .split('.')\n        .filter(Boolean)\n        .every(step => ((obj = obj[step]) !== undefined)) ? obj : def;\n}\n\n\n\n//# sourceURL=webpack:///./src/utils/getDeep.js?");

/***/ })

/******/ });