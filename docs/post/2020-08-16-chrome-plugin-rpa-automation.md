---
title: "Chrome plugins for RPA"
date: 2020-08-16
tags: ["chrome","plugin","rpa","jquery"]
url: https://jplattel.nl/post/2020-08-16-chrome-plugin-rpa-automation/
---


As someone who creates shortcuts and automations all the time I often get asked questions about certain things to automate that aren't really like the things I personally do. 

Most of the time this has to do with web applications and the barrier of create an entire app (if there even is an API available) is way to high based on price or time spend. More recently I discovered that an easy way of packaging and shipping things for individuals to larger groups could often be in the form of a _Chrome extension_. 

Most of the things I made can be solved with **RPA** (robotic proces automation, a fancy abbreviation). And getting started with a chrome extension is rather easy. 

Believe it or not, but even at this time, the easiest way to automate stuff could still be jQuery, so you will only need three files, a `manifest.json` that lists all the things the extension requires and needs access too:

```json
{
  "name": "Example RPA Extension",
  "version": "0.0.1",
  "manifest_version": 2,
  "description": "An example RPA Extension for automating things",
  "homepage_url": "http://jplattel.nl",
  "background": {
    "scripts": [
      "background.js"
    ],
    "persistent": true
  },
  "browser_action": {
    "default_title": "Automate"
  },
  "permissions": [
    "https://jplattel.nl/*", 
    "activeTab"
  ]
}
```


A `background.js` which is activated when the button or keyboard shortcut is pressed. For the ease of use I've included a version of jquery as well so the `automate.js` script can use jQuery.

```js
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "automate.js" file & execute it
	chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
		chrome.tabs.executeScript(tab.ib, {
			file: 'automate.js'
		});
	});
	
});
```

And finally a `automate.js` for that contains the javascript code for automation:

```js
// this is the code which will be injected into a given page...
(function() {
	console.log("Hello from your Chrome extension")
})();
```

From here on, everything should be set up for easy automation. Like clicking on links and collecting data from a page to a JSON file.. The web is your oyster in this case 🤓.

