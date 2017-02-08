/**
 * Main module exports a function to retrieve browser details
 */

'use strict';

/**
 * In case of no match
 */
const NO_MATCH = 'unknown';

/**
 * Browser strings
 */
const Browser = {
  Chrome: 'Chrome',
  Firefox: 'Firefox',
  Safari: 'Safari',
  IE: 'IE',
  Opera: 'Opera',
  UCBrowser: 'UCBrowser',
  Edge: 'Edge',
  Xiaomi: 'Xiaomi',
}

/**
 * @param {string} ua      - Browser userAgent
 * @param {string} browser - Browser string
 */
function getDevice (ua, browser) {
  let device = NO_MATCH;
  const temp = ua.split(')')[0].split('(')[1].split(';');

  switch (browser) {
    case Browser.Chrome:
       if (temp.length === 2) {
         device = temp[1];
       } else {
         device = temp[2];
       }
       break;
    case Browser.Safari:
    case Browser.IE:
    case Browser.Firefox:
    case Browser.Edge:
      device = temp[0]; break;
    case Browser.UCBrowser:
      device = temp[4]; break;
    case Browser.Xiaomi:{
        device = temp[4];
      }
      break;
    default:
      device = NO_MATCH;
  }

  return device;
}

/**
 * @param {string} ua - Browser userAgent
 */
function getOS (ua) {
  let os = NO_MATCH;
  const _ua = ua.toLowerCase();
  if (_ua.indexOf('win') !== -1) {
    os = 'Windows';
  } else if (_ua.indexOf('mac') !== -1) {
    os = 'MacOS';
  } else if (_ua.indexOf('x11') !== -1) {
    os = 'UNIX';
  } else if (_ua.indexOf('linux') !== -1) {
    os = 'Linux';
  } else if (_ua.indexOf('android') !== -1) {
    os = 'Android';
  } else if (_ua.indexOf('webos') !== -1) {
    os = 'webOS';
  } else if (_ua.indexOf('iphone') !== -1) {
    os = 'iOS';
  } else if (_ua.indexOf('ipad') !== -1) {
    os = 'iOS';
  } else if (_ua.indexOf('ipod') !== -1) {
    os = 'iOS';
  } else if (_ua.indexOf('blackberry') !== -1) {
    os = 'BlackBerry';
  } else if (_ua.indexOf('windows phone') !== -1) {
    os = 'Windows Phone';
  }
  return os;
}

/**
 * @param {string} ua - Browser userAgent
 */
function getBrowser (ua)  {
  let browser = NO_MATCH;
  const _ua = ua.toLowerCase();
  if ((_ua.indexOf('opera') || _ua.indexOf('opr')) !== -1 ) {
    browser = Browser.Opera;
  } else if(_ua.indexOf('xiaomi') !== -1) {
    browser = Browser.Xiaomi;
  } else if(_ua.indexOf('ucbrowser') !== -1) {
    browser = Browser.UCBrowser;
  } else if(_ua.indexOf('chrome') !== -1 ) {
    browser = Browser.Chrome;
  } else if(_ua.indexOf('safari') !== -1 || _ua.indexOf('iphone') || _ua.indexOf('ipad')) {
    browser = Browser.Safari;
  } else if(_ua.indexOf('firefox') !== -1 ) {
    browser = Browser.Firefox;
  } else if((_ua.indexOf('msie') !== -1 ) || document.documentMode) {
    browser = Browser.IE;
  } else if(!!window.styleMedia) {
    browser = Browser.Edge;
  }
  return browser;
}

/**
 * Returns an object containing the os, browser and device names
 * @return {{os: string, browser: string, device: string}}
 */
function getDetails() {
  const userAgent = window.navigator.userAgent;

  const os      = getOS(userAgent);
  const browser = getBrowser(userAgent);
  const device  = getDevice(userAgent, browser);

  return {
    os,
    browser,
    device,
  }
}

export default getDetails;