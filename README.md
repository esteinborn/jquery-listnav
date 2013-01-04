jQuery ListNav
==============

Original plugin by iHWY. I fixed it so that its compatible with jQuery 1.4.X

But also realized that I needed to make it even more forward compatible, so it should now be compatible all the way up to 1.8.3
<p><a href="http://esteinborn.github.com/jquery-listnav">ListNav Demo</a></p>

Simple Usage:

Insert into &lt;Head&gt;:
<pre><code>&lt;link rel="stylesheet" href="listnav.css"&gt;</code></pre>

Code up your list:
<pre><code>&lt;ul id="myList"&gt;...&lt;/ul&gt;</code></pre>

Insert before &lt;/body&gt;:
<pre><code>&lt;script src="jquery-listnav-2.2.min.js"&gt;&lt;/script>
&lt;script&gt;
	$("#myList").listnav();
&lt;/script&gt;</code></pre>

OPTIONS:

<pre><code>$("myList").listnav({
	initLetter: '',
    includeAll: true,
    incudeOther: false,
    includeNums: true,
    flagDisabled: true,
    removeDisabled: false,
    noMatchText: 'No matching entries',
    showCounts: true,
    cookieName: null,
    onClick: null,
    prefixes: [],
    filterSelector: ''
});</code></pre>