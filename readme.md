# Synology Download Extenstion for Firefox


This repository is a "fork" of the [download-station-extension](https://www.download-station-extension.com/)


## Installation

### Build

The extension needs to be build with the [Mozilla's web-ext](https://github.com/mozilla/web-ext) tool

``` (bash)
#in repo dir

web-ext build
```

### Add to Firefox

Once build, the extension can be installed in Firefox.

Browse to `about:addons`, click the cog-gear icon and select `Install Add-on From File...`


## Notes:

* Non developper versions of Firefox won't install unsigned extensions
* Tested with:
	* Win10 - Firefox Developper 
	* Ubuntu 17.x - Firefox Developper



