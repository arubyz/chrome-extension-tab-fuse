const fuseDelaySeconds = 30;
const fuses = new Set();

function addFuse(tab) {
  if (!fuses.has(tab.id)) {
    fuses.add(tab.id);
    window.setTimeout(
      () => chrome.tabs.remove(tab.id),
      fuseDelaySeconds * 1000);
  }
}

chrome.tabs.onCreated.addListener(addFuse);

chrome.tabs.query({}, function(tabs) {
  tabs.forEach(addFuse);
});
