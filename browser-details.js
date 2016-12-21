
  'use strict'

  let os = 'unknown'
  let device = 'unknown'
  let browser = 'unknown'

  const getOsandDevice = (a) => {
    var b  = a.split(')')[0].split('(')[1].split(';')
    if(b.length == 2)
    {
      device = b[1]
    } else {
      device = b[4]
    }
  }

  const getOs = (a) => {
  if (a.indexOf("Win")!=-1) os="Windows";
  if (a.indexOf("Mac")!=-1) os="MacOS";
  if (a.indexOf("X11")!=-1) os="UNIX";
  if (a.indexOf("Linux")!=-1) os="Linux";
  if (a.indexOf("Android")!=-1) os="Android";
  if (a.indexOf("webOS")!=-1) os="webOs";
  if (a.indexOf("iPhone")!=-1) os="iPhone";
  if (a.indexOf("iPad")!=-1) os="iPad";
  if (a.indexOf("iPod")!=-1) os="iPod";
  if (a.indexOf("BlackBerry")!=-1) os="BlackBerry";
  if (a.indexOf("Windows Phone")!=-1) os="Windows Phone";
  }

  const getBrowser = (a) => { 
      if((a.indexOf("Opera") || a.indexOf('OPR')) != -1 ) browser = 'Opera'
      else if(a.indexOf('UCBrowser') != -1) browser = 'UCBrowser'
      else if(a.indexOf("Chrome") != -1 ) browser = 'Chrome'
      else if(a.indexOf("Safari") != -1) browser = 'Safari'
      else if(a.indexOf("Firefox") != -1 ) browser = 'Firefox'
      else if((a.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) browser = 'Ie'
      else if(!!window.indow.StyleMedia) browser = 'Edge'
  }

exports.init = () => {

  const userAgent = window.navigator.userAgent

  getBrowser(userAgent)
  getOsandDevice(userAgent)
  getOs(userAgent)
  return {os, device, browser}

}