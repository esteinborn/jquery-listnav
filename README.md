# jQuery ListNav [![Travis Build](https://travis-ci.org/esteinborn/jquery-listnav.png?branch=master)](https://travis-ci.org/esteinborn/jquery-listnav) [![Built with GruntJS](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com)

> jQuery ListNav will add a slick "letter-based" navigation bar to all of your lists. Click a letter to quickly filter the list to show items that match that letter.

[View the ListNav Demo](http://esteinborn.github.io/jquery-listnav)

### Install using Bower

`bower install jquery-listnav`

## Manual Install
#### Insert into &lt;Head&gt;:
<pre><code>&lt;link rel="stylesheet" href="listnav.css"&gt;</code></pre>

#### Code up your list:
<pre><code>&lt;ul id="myList"&gt;...&lt;/ul&gt;</code></pre>

#### Insert before &lt;/body&gt;:
<pre><code>&lt;script src="jquery-listnav.min.js"&gt;&lt;/script>
&lt;script&gt;
	$("#myList").listnav();
&lt;/script&gt;</code></pre>

## Options
<pre><code>$("myList").listnav({
	initLetter: '',        // filter the list to a specific letter on init ('a'-'z', '-' [numbers 0-9], '_' [other])
    includeAll: true,      // Include the ALL button
    includeOther: false,    // Include a '...' option to filter non-english characters by
    includeNums: true,     // Include a '0-9' option to filter by
    flagDisabled: true,    // Add a class of 'ln-disabled' to nav items with no content to show
    removeDisabled: false, // Remove those 'ln-disabled' nav items (flagDisabled must be set to true for this to function)
    noMatchText: 'No matching entries', // set custom text for nav items with no content to show
    showCounts: true,      // Show the number of list items that match that letter above the mouse
    dontCount: ''          // A comma separated list of selectors you want to exclude from the count function (numbers on top of navigation)
    cookieName: null,      // Set this to a string to remember the last clicked navigation item requires jQuery Cookie Plugin ('myCookieName')
    onClick: null,         // Set a function that fires when you click a nav item. see Demo 5
    prefixes: [],          // Set an array of prefixes that should be counted for the prefix and the first word after the prefix ex: ['the', 'a', 'my']
    filterSelector: ''     // Set the filter to a CSS selector rather than the first text letter for each item
});</code></pre>

# Showcase

The following websites are currently using ListNav to filter their lists:

[Santa Fe College](http://www.sfcollege.edu/az/)