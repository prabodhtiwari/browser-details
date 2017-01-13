/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var os = 'unknown';
	var device = 'unknown';
	var browser = 'unknown';

	function getDevice(a, browser) {

	  var b = a.split(')')[0].split('(')[1].split(';');

	  switch (browser) {
	    case "Chrome":
	      if (b.length == 2) device = b[1];else device = b[2];
	      break;
	    case "Safari":
	      device = b[0];
	      break;
	    case "Ie":
	      device = b[0];
	      break;
	    case "UCBrowser":
	      device = b[4];
	      break;
	    case "Firefox":
	      device = b[0];
	      break;
	    case "Edge":
	      device = b[0];
	      break;

	    case "XiaoMi":
	      if (b.length == 4) device = b[3];
	      break;

	    default:
	      device = 'unknown';

	  }
	}

	function getOs(a) {
	  if (a.indexOf("Win") != -1) os = "Windows";
	  if (a.indexOf("Mac") != -1) os = "MacOS";
	  if (a.indexOf("X11") != -1) os = "UNIX";
	  if (a.indexOf("Linux") != -1) os = "Linux";
	  if (a.indexOf("Android") != -1) os = "Android";
	  if (a.indexOf("webOS") != -1) os = "webOs";
	  if (a.indexOf("iPhone") != -1) os = "iOS";
	  if (a.indexOf("iPad") != -1) os = "iOS";
	  if (a.indexOf("iPod") != -1) os = "iOS";
	  if (a.indexOf("BlackBerry") != -1) os = "BlackBerry";
	  if (a.indexOf("Windows Phone") != -1) os = "Windows Phone";
	}

	function getBrowser(a) {
	  if ((a.indexOf("Opera") || a.indexOf('OPR')) != -1) browser = 'Opera';else if (a.indexOf('XiaoMi') != -1) browser = 'XiaoMi';else if (a.indexOf('UCBrowser') != -1) browser = 'UCBrowser';else if (a.indexOf("Chrome") != -1) browser = 'Chrome';else if (a.indexOf("Safari") != -1) browser = 'Safari';else if (a.indexOf("Firefox") != -1) browser = 'Firefox';else if (a.indexOf("MSIE") != -1 || !!document.documentMode == true) browser = 'Ie';else if (!!window.indow.StyleMedia) browser = 'Edge';
	}

	exports.init = function () {

	  var userAgent = window.navigator.userAgent;

	  getBrowser(userAgent);
	  getDevice(userAgent, browser);
	  getOs(userAgent);
	  return {
	    "os": os,
	    "device": device,
	    "browser": browser
	  };
	};

/***/ }
/******/ ]);