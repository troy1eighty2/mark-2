const cssMarketListing = document.createElement('link');
cssMarketListing.href = chrome.runtime.getURL('js/siteExt/marketListing.css');
cssMarketListing.rel = 'stylesheet';
cssMarketListing.type = 'text/css';
(document.head || document.documentElement).prepend(cssMarketListing);

const cssF = document.createElement('link');
cssF.href = chrome.runtime.getURL('css/listings.css');
cssF.rel = 'stylesheet';
cssF.type = 'text/css';
(document.head || document.documentElement).appendChild(cssF);

const cssFlicking = document.createElement('link');
cssFlicking.href = chrome.runtime.getURL('js/flicking/flicking.css');
cssFlicking.rel = 'stylesheet';
cssFlicking.type = 'text/css';
(document.head || document.documentElement).appendChild(cssFlicking);

const cssFlickingInline = document.createElement('link');
cssFlickingInline.href = chrome.runtime.getURL('js/flicking/flicking-inline.css');
cssFlickingInline.rel = 'stylesheet';
cssFlickingInline.type = 'text/css';
(document.head || document.documentElement).appendChild(cssFlickingInline);

const cssFlickingPlugins = document.createElement('link');
cssFlickingPlugins.href = chrome.runtime.getURL('js/flicking/flicking-plugins.css');
cssFlickingPlugins.rel = 'stylesheet';
cssFlickingPlugins.type = 'text/css';
(document.head || document.documentElement).appendChild(cssFlickingPlugins);

const cssSwitcher = document.createElement('link');
cssSwitcher.href = chrome.runtime.getURL('css/switcher.css');
cssSwitcher.rel = 'stylesheet';
cssSwitcher.type = 'text/css';
(document.head || document.documentElement).appendChild(cssSwitcher);

const sSwitcher = document.createElement('script');
sSwitcher.src = chrome.runtime.getURL('js/jquery/jquery.switcher.min.js');
(document.head || document.documentElement).appendChild(sSwitcher);
sSwitcher.onload = function () {
  sSwitcher.parentNode.removeChild(sSwitcher);
};

chrome.storage.sync.get(
  {
    sound: 'offersound.ogg',
    resultnumber: 10,
    shownotify: true,
    quickbuybuttons: false,

    showbookmarks: true,
    show_phase_color_listing: true,
    bookmarkscategories: {},
    gpdelayscc: 3000,
    gpdelayerr: 30000,
    agp_hover: true,
    agp_gem: false,
    agp_sticker: true,
    show_orders_currencies: true,
    show_more_orders: true,
    orders_amount: 20,
    lang: '',
    sih_token: '',
    market_cache_time: 300000,
    currency: '',
    user_sort_market_listing: [],
    sih_app_account: false,
    default_steam_rates: {},
    enabledSih_listingPage: true,
  },
  function (items) {
    const detectUserLanguage = () => {
      let navLang;
      if (window.navigator.languages && window.navigator.languages.length > 0) {
        [navLang] = window.navigator.languages;
      }
      if (!navLang) {
        navLang = window.navigator.language || window.navigator.userLanguage || '';
      }

      const VALID_LANGUAGES = [
        'bg',
        'cs',
        'de',
        'en',
        'es',
        'fa',
        'fr',
        'he',
        'it',
        'ka',
        'lv',
        'no',
        'pl',
        'pt_BR',
        'ro',
        'ru',
        'sv',
        'tr',
        'vi',
        'uk',
        'zh_CN',
        'zh_TW',
      ];
      return VALID_LANGUAGES.includes(navLang) ? navLang : 'en';
    };
    items.lang = items.lang || detectUserLanguage();

    $.getJSON(chrome.runtime.getURL(`_locales/en/controls.json`), (enData) => {
      $.getJSON(chrome.runtime.getURL(`_locales/${items.lang}/controls.json`), (langData) => {
        langData = jQuery.extend(true, {}, enData, langData);

        chrome.storage.local.get(
          {
            bookmarks: {},
          },
          function (subitems) {
            const actualCode = [
              'window.replaceBuy = ' + items.quickbuybuttons + ';',
              "window.SIHID = '" + chrome.runtime.id + "';",
              'window.show_orders_currencies = ' + items.show_orders_currencies + ';',
              'window.show_more_orders = ' + items.show_more_orders + ';',
              'window.orders_amount = ' + items.orders_amount + ';',
              'window.noOfRows = ' + items.resultnumber + ';',
              'window.showbookmarks = ' + items.showbookmarks + ';',
              'window.bookmarkscategories = ' + JSON.stringify(items.bookmarkscategories) + ';',
              'window.bookmarks = ' + JSON.stringify(subitems.bookmarks) + ';',
              "window.bookmarksLink = '" + chrome.runtime.getURL('/html/bookmarks.html') + "';",
              'window.gpdelayscc = ' + items.gpdelayscc + ';',
              'window.gpdelayerr = ' + items.gpdelayerr + ';',
              'window.agp_gem = ' + items.agp_gem + ';',
              'window.agp_sticker = ' + items.agp_sticker + ';',
              'window.show_phase_color_listing = ' + items.show_phase_color_listing + ';',
              'window.marketCacheTime = ' + items.market_cache_time + ';',
              `window.SIH_TOKEN='${items.sih_token}';`,
              `window.SIHLang = ${JSON.stringify(langData)}`,
              `window.currencyID = ${items.currency !== '' ? items.currency : null}`,
              `window.user_sort_market = ${JSON.stringify(items.user_sort_market_listing)};`,
              `window.sih_subscribe_ads = ${false}`,
              `window.sih_app_account = ${items.sih_app_account}`,
              `window.lang= ${JSON.stringify(items.lang)}`,
              `window.ExchangeSteamRates= ${JSON.stringify(items.default_steam_rates.rates || {})}`,
              `window.IS_ENABLED_SIH= ${items.enabledSih_listingPage}`,
            ].join('\r\n');

            document.documentElement.setAttribute('onreset', actualCode);
            document.documentElement.dispatchEvent(new CustomEvent('reset'));
            document.documentElement.removeAttribute('onreset');
          }
        );

        const sGlobal = document.createElement('script');
        sGlobal.src = chrome.runtime.getURL('js/steam/global.js');
        (document.head || document.documentElement).appendChild(sGlobal);
        sGlobal.onload = function () {
          const sPriceQueue = document.createElement('script');
          sPriceQueue.src = chrome.runtime.getURL('js/PriceQueue.js');
          (document.head || document.documentElement).appendChild(sPriceQueue);
          sPriceQueue.onload = function () {
            const sCommon = document.createElement('script');
            sCommon.src = chrome.runtime.getURL('js/hovermod.script.js');
            (document.head || document.documentElement).appendChild(sCommon);
            sCommon.onload = function () {
              const sFlicking = document.createElement('script');
              sFlicking.src = chrome.runtime.getURL('js/flicking/flicking.pkgd.min.js');
              (document.head || document.documentElement).appendChild(sFlicking);
              sFlicking.onload = function () {
                const sFlickingPlugins = document.createElement('script');
                sFlickingPlugins.src = chrome.runtime.getURL('js/flicking/plugins.js');
                (document.head || document.documentElement).appendChild(sFlickingPlugins);
                sFlickingPlugins.onload = function () {
                  const sChartjs = document.createElement('script');
                  sChartjs.src = chrome.runtime.getURL('js/chartJS/chart.umd.min.js');
                  (document.head || document.documentElement).appendChild(sChartjs);
                  sChartjs.onload = function () {
                    const sChartZoom = document.createElement('script');
                    sChartZoom.src = chrome.runtime.getURL('js/chartJS/chartjs-plugin-zoom.min.js');
                    (document.head || document.documentElement).appendChild(sChartZoom);
                    sChartZoom.onload = function () {
                      const sMarketListingBundle = document.createElement('script');
                      sMarketListingBundle.src = chrome.runtime.getURL('js/siteExt/marketListing.bundle.js');
                      (document.head || document.documentElement).appendChild(sMarketListingBundle);
                      sMarketListingBundle.onload = function () {
                        const sOffer = document.createElement('script');
                        sOffer.src = chrome.runtime.getURL('js/listing.script.js');
                        (document.head || document.documentElement).appendChild(sOffer);
                        sOffer.onload = function () {
                          sOffer.parentNode.removeChild(sOffer);
                        };

                        sMarketListingBundle.parentNode.removeChild(sMarketListingBundle);
                      };

                      sChartZoom.parentNode.removeChild(sChartZoom);
                    };

                    sChartjs.parentNode.removeChild(sChartjs);
                  };
                  sFlickingPlugins.parentNode.removeChild(sFlickingPlugins);
                };
                sFlicking.parentNode.removeChild(sFlicking);
              };

              sCommon.parentNode.removeChild(sCommon);
            };
            sPriceQueue.parentNode.removeChild(sPriceQueue);
          };
          sGlobal.parentNode.removeChild(sGlobal);
        };
      });
    });
  }
);

const sKnifePhaseDetector = document.createElement('script');
sKnifePhaseDetector.src = chrome.runtime.getURL('js/knifephasedetector.script.js');
(document.head || document.documentElement).appendChild(sKnifePhaseDetector);
sKnifePhaseDetector.onload = function () {
  sKnifePhaseDetector.parentNode.removeChild(sKnifePhaseDetector);

  const sInventoryItemRarity = document.createElement('script');
  sInventoryItemRarity.src = chrome.runtime.getURL('js/inventoryitemrarity.script.js');
  (document.head || document.documentElement).appendChild(sInventoryItemRarity);
  sInventoryItemRarity.onload = function () {
    sInventoryItemRarity.parentNode.removeChild(sInventoryItemRarity);
  };
};

const sLodash = document.createElement('script');
sLodash.src = chrome.runtime.getURL('js/jquery/jquery.ba-throttle-debounce.js');
(document.head || document.documentElement).appendChild(sLodash);
sLodash.onload = function () {
  sLodash.parentNode.removeChild(sLodash);
};

const barRenderer = document.createElement('script');
barRenderer.src = chrome.runtime.getURL('js/jquery/jqplot.barRenderer.min.js');
(document.head || document.documentElement).appendChild(barRenderer);
barRenderer.onload = function () {
  barRenderer.parentNode.removeChild(barRenderer);
};

const categoryAxisRenderer = document.createElement('script');
categoryAxisRenderer.src = chrome.runtime.getURL('js/jquery/jqplot.categoryAxisRenderer.min.js');
(document.head || document.documentElement).appendChild(categoryAxisRenderer);
categoryAxisRenderer.onload = function () {
  categoryAxisRenderer.parentNode.removeChild(categoryAxisRenderer);
};

const cssPQ = document.createElement('link');
cssPQ.href = chrome.runtime.getURL('css/priceQueue.css');
cssPQ.rel = 'stylesheet';
cssPQ.type = 'text/css';
(document.head || document.documentElement).appendChild(cssPQ);
