(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Jdom"] = factory();
	else
		root["Jdom"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./sample/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sample/TaskList.ts":
/*!****************************!*\
  !*** ./sample/TaskList.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TaskComponent = void 0;\nconst template_1 = __webpack_require__(/*! ../src/template */ \"./src/template.ts\");\nexports.TaskComponent = template_1.createComponent({}, {\n    setup: ({ props }) => {\n        $(document).on('click', '.task-remove', function () {\n            props.removeTask(Number($(this).attr('data-task-id')));\n        });\n    },\n    render: ({ props }) => {\n        // language=HTML\n        return `\n            <ul>\n              ${props.tasks.map(task => `\n                <li>\n                  ${task.text} <button class=\"task-remove\" data-task-id=\"${task.id}\">削除</button>\n                </li>\n              `).join('')}\n            </ul>\n        `;\n    }\n});\n\n\n//# sourceURL=webpack://Jdom/./sample/TaskList.ts?");

/***/ }),

/***/ "./sample/index.ts":
/*!*************************!*\
  !*** ./sample/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst template_1 = __webpack_require__(/*! ../src/template */ \"./src/template.ts\");\nconst App_1 = __webpack_require__(/*! ../src/App */ \"./src/App.ts\");\nconst TaskList_1 = __webpack_require__(/*! ./TaskList */ \"./sample/TaskList.ts\");\nconst state = {\n    text: '',\n    tasks: [{\n            id: 1,\n            text: 'サンプル'\n        }],\n    id: 2\n};\nconst [template, reload] = template_1.createTemplate(state, {\n    setup: ({ s }) => {\n        const [taskTemplate, taskReload] = TaskList_1.TaskComponent({\n            tasks: state.tasks,\n            removeTask: id => {\n                const idx = state.tasks.findIndex(v => v.id === id);\n                state.tasks.splice(idx, 1);\n                taskReload.fire();\n            }\n        });\n        taskReload.on(() => {\n            const taskList = $('#js-task-list');\n            taskList.empty();\n            taskList.append(taskTemplate());\n        });\n        $(document).on('input', '#js-task_input', () => {\n            const input = $('#js-task_input');\n            s.text = String(input.val());\n        });\n        $(document).on('click', '.add_button', () => {\n            s.tasks.push({\n                id: s.id,\n                text: s.text\n            });\n            s.id++;\n            $('#js-task_input').val('');\n            s.text = '';\n            taskReload.fire();\n        });\n        return {\n            taskList: taskTemplate\n        };\n    },\n    render: ({ context }) => {\n        // language=HTML\n        return `\n            <div>\n              <div id=\"js-task-list\">\n                ${context.taskList()}              \n              </div>\n              <input id=\"js-task_input\"\">\n              <button class=\"add_button\">追加</button>\n            </div>\n        `;\n    }\n});\nnew App_1.App('#app', template, reload);\n\n\n//# sourceURL=webpack://Jdom/./sample/index.ts?");

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nclass App {\n    constructor(selector, template, reload) {\n        this.target = $(selector);\n        this.template = template;\n        this.target.append(this.template());\n        reload.on(() => {\n            this.target.empty();\n            this.target.append(this.template());\n        });\n    }\n}\nexports.App = App;\n\n\n//# sourceURL=webpack://Jdom/./src/App.ts?");

/***/ }),

/***/ "./src/template.ts":
/*!*************************!*\
  !*** ./src/template.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.createTemplate = exports.createComponent = exports.Reload = exports.createDeepProxy = void 0;\nexports.createDeepProxy = (target, handler) => {\n    const keys = Object.keys(target);\n    keys.forEach(key => {\n        if (typeof target[key] === 'object') {\n            target[key] = exports.createDeepProxy(target[key], handler);\n        }\n    });\n    return new Proxy(target, handler);\n};\nclass Reload {\n    constructor() {\n        this.listeners = [];\n    }\n    fire() {\n        this.listeners.forEach(f => f());\n    }\n    on(func) {\n        this.listeners.push(func);\n    }\n}\nexports.Reload = Reload;\nexports.createComponent = (state, option) => (props) => {\n    const reload = new Reload();\n    const s = exports.createDeepProxy(state, {\n        set(target, p, value, receiver) {\n            return Reflect.set(target, p, value, receiver);\n        }\n    });\n    const context = option.setup({ s, props, reload });\n    return [() => option.render({ s, context, props, reload }), reload];\n};\nexports.createTemplate = (state, option) => {\n    const reload = new Reload();\n    const s = exports.createDeepProxy(state, {\n        set(target, p, value, receiver) {\n            return Reflect.set(target, p, value, receiver);\n        }\n    });\n    const context = option.setup({ s, reload });\n    return [() => option.render({ s, context, reload }), reload];\n};\n\n\n//# sourceURL=webpack://Jdom/./src/template.ts?");

/***/ })

/******/ });
});