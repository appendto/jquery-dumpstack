
test( "one tag", function() {
	var tag = $("<p></p>");
	
	tag.dumpStack("one tag test");
});

test( "two tags", function() {
	var tag = $("<p></p><p></p>");
	
	tag.dumpStack("two tags test");
});

test( "tags with ids", function() {
	var tag = $("<p id='para1'></p><p id='para2'></p>");
	
	tag.dumpStack("tags with ids test");
})

test( "tags with classes", function() {
	var tag = $("<p class='intro'></p><p class='ending'></p>");
	
	tag.dumpStack("two tags test");
});

test( "one tag one event", function() {
	var tag = $("<p></p>");
	
	tag.bind('click', function() {
		// do something
	});

	tag.dumpStack("one tag one event test");
});

test( "one tag two events", function() {
	var tag = $("<p></p>");
	
	tag.bind('click', function() {
		// do something
	});

	tag.bind('dblclick', function() {
		// do something else
	});
	
	tag.dumpStack("one tag two events test");
});

test( "two tags two events", function() {
	var tag = $("<p></p><p></p>");
	
	tag.bind('click', function() {
		// do something
	});

	tag.bind('dblclick', function() {
		// do something else
	});
	
	tag.dumpStack("two tags two events test");
});