# PathOfExile2-Wiki-Redirector

A web extension to redirect Fextralife Path of Exile 2 wiki pages to POE2Wiki with correct URL formatting.

## Installation

1. Download the repository files.
2. Open your browser and go to the extensions page (e.g., `chrome://extensions/` for Chrome).
3. Enable Developer Mode.
4. Click "Load unpacked" and select the directory with the downloaded files.
5. After installing, ensure you **allow access to search page results** in the extension settings.

## Files

- `manifest.json`: Defines the extension's properties and permissions.
- `background.js`: Contains the script to handle URL redirection.

## Usage

The extension automatically redirects any access to `pathofexile2.wiki.fextralife.com` to `www.poe2wiki.net/wiki` and converts "+" to "_" in the URL.

### Additional Permissions

The extension also has access to search results to ensure that any search result clicks leading to `pathofexile2.wiki.fextralife.com` pages are redirected to the appropriate `poe2wiki.net` pages. Make sure you enable this permission after installing the extension.

### Allowing Access to Search Page Results

1. After installing the extension, go to your browser's extensions page (e.g., `chrome://extensions/` for Chrome).
2. Find the **PathOfExile2-Wiki-Redirector** extension.
3. Check the box labeled **"Allow access to search page results"**.
4. Ensure the extension is enabled.
