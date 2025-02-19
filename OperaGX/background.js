chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var newUrl = details.url.replace('pathofexile2.wiki.fextralife.com', 'www.poe2wiki.net/wiki').replace(/\+/g, '_');
    return { redirectUrl: newUrl };
  },
  { urls: ["*://pathofexile2.wiki.fextralife.com/*"] },
  ["blocking"]
);
