jQuery ListNav
==============

Original plugin by iHWY. I fixed it so that its compatible with jQuery 1.4.X

But also realized that I needed to make it even more forward compatible, so it should now be compatible all the way up to 1.8.3
<p><a href="http://esteinborn.github.com/jquery-listnav">ListNav Demo</a></p>

Simple usage:
Document Head:
<code><link rel="stylesheet" href="listnav.css"></code>

Document Body:
<code><ul id="myList">...</ul></code>

Before Ending Body tag:
<code><script src="jquery-listnav-2.2.min.js"></script>
<script>
	$("#myList").listnav();
</script></code>