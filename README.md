jQuery ListNav
==============

Original plugin by iHWY. I fixed it so that its compatible with jQuery 1.4.X

But also realized that I needed to make it even more forward compatible, so it should now be compatible all the way up to 1.8.3
<p><a href="http://esteinborn.github.com/jquery-listnav">ListNav Demo</a></p>

Simple usage:
Document Head:
<code>&lt;link rel="stylesheet" href="listnav.css"&gt;</code>

Document Body:
<code>&lt;ul id="myList"&gt;...&lt;/ul&gt;</code>

Before Ending Body tag:
<code>&lt;script src="jquery-listnav-2.2.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
	$("#myList").listnav();
&lt;/script&gt;</code>