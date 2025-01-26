const cssPointsPage = document.createElement('link');
cssPointsPage.href = chrome.runtime.getURL('js/siteExt/pointsPage.css');
cssPointsPage.rel = 'stylesheet';
cssPointsPage.type = 'text/css';
(document.head || document.documentElement).prepend(cssPointsPage);

const cssSwitcher = document.createElement('link');
cssSwitcher.href = chrome.runtime.getURL('css/switcher.css');
cssSwitcher.rel = 'stylesheet';
cssSwitcher.type = 'text/css';
(document.head || document.documentElement).appendChild(cssSwitcher);

const sSwitcher = document.createElement('script');
sSwitcher.src = chrome.runtime.getURL('js/jquery/jquery.switcher.min.js');
(document.head || document.documentElement).appendChild(sSwitcher);
sSwitcher.onload = function () {
  const sPointsBundle = document.createElement('script');
  sPointsBundle.src = chrome.runtime.getURL('js/siteExt/pointsPage.bundle.js');
  (document.head || document.documentElement).appendChild(sPointsBundle);
  sPointsBundle.onload = function () {
    sPointsBundle.parentNode.removeChild(sPointsBundle);
  };
  sSwitcher.parentNode.removeChild(sSwitcher);
};

const actualCode = [`window.SIHID = '${chrome.runtime.id}';`].join('\r\n');

document.documentElement.setAttribute('onreset', actualCode);
document.documentElement.dispatchEvent(new CustomEvent('reset'));
document.documentElement.removeAttribute('onreset');
