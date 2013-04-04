jQuery ListNav
==============

Original plugin by iHWY. I have upgraded it and it is now compatible with jQuery 1.9.1

<p><a href="http://esteinborn.github.com/jquery-listnav">View the ListNav Demo</a></p>

Simple Usage:
-------------
Insert into &lt;Head&gt;:
-------------------------
<pre><code>&lt;link rel="stylesheet" href="listnav.css"&gt;</code></pre>

Code up your list:
------------------
<pre><code>&lt;ul id="myList"&gt;...&lt;/ul&gt;</code></pre>

Insert before &lt;/body&gt;:
----------------------------
<pre><code>&lt;script src="jquery-listnav-2.2.min.js"&gt;&lt;/script>
&lt;script&gt;
	$("#myList").listnav();
&lt;/script&gt;</code></pre>

Available OPTIONS:
------------------
<pre><code>$("myList").listnav({
	initLetter: '',        // filter the list to a specific letter on init ('a'-'z', '-' [numbers 0-9], '_' [other])
    includeAll: true,      // Include the ALL button
    incudeOther: false,    // Include a '...' option to filter non-english characters by
    includeNums: true,     // Include a '0-9' option to filter by
    flagDisabled: true,    // Add a class of 'ln-disabled' to nav items with no content to show
    removeDisabled: false, // Remove those 'ln-disabled' nav items (flagDisabled must be set to true for this to function)
    noMatchText: 'No matching entries', // set custom text for nav items with no content to show
    showCounts: true,      // Show the number of list items that match that letter above the mouse
    cookieName: null,      // Set this to a string to remember the last clicked navigation item requires jQuery Cookie Plugin ('myCookieName')
    onClick: null,         // Set a function that fires when you click a nav item. see Demo 5
    prefixes: [],          // Set an array of prefixes that should be counted for the prefix and the first word after the prefix ex: ['the', 'a', 'my']
    filterSelector: ''     // Set the filter to a CSS selector rather than the first text letter for each item
});</code></pre>