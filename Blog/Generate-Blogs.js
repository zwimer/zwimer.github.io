//*************************************************************//
//*                                                           *//
//*                         Globals                           *//
//*                                                           *//
//*************************************************************//


// The div storing all the blogs
var blogs_output_div;

// The folder containing the un-rendered blog markdown files
var blog_folder;

// The file containing the format for the blog post
var format_file;


//*************************************************************//
//*                                                           *//
//*                        Functions                          *//
//*                                                           *//
//*************************************************************//


// A function used to read a file
function read_file(url, obj) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			obj.internal = this.responseText;
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

// A function used to set the settings for the blog generation
function set_blog_settings(output_div, blog_folder_in, format_file_in) {

	// The div storing all the blogs
	blogs_output_div = output_div;

	// The folder containing the un-rendered blog markdown files
	blog_folder = blog_folder_in;

	// HTML to encapsulate the blog post
	format_file = format_file_in;
}

// A function used to remove comment lines
function remove_comments(input, comment_type) {
	var lst = input.split("\n");
	var not_comments = [];
	for ( var i = 0; i < lst.length; ++i ) {
		if (lst[i].startsWith(comment_type) === false) {
			not_comments.push(lst[i]);
		}
	}
	return not_comments.join("\n");
}

// Given the blog text, render the markdown, format it as a blog, then add the blog. 
function add_and_format_blog(blog_info, format_list) {

	// Determine the blog info delimiter and split the blog_info
	var blog_split_by_line = blog_info.split("\n");
	var delimiter = blog_split_by_line[1];
	var split_blog = blog_info.split(delimiter);
	
	// Error checking
	if ((format_list.length < 3) || (split_blog.length < 2)) {
		alert("Error, either the format or blog has too few delimited fields to be interweved.");
	}
	if (format_list.length !== (1 + split_blog.length)) {
		alert("Error: " + split_blog[1] + " has the wrong number of delimited fields!");
		return;
	}

	// Remove comment lines
	for ( var i = 0; i < split_blog.length; ++i ) {
		split_blog[i] = remove_comments(split_blog[i].trim(), "//")
	}
	for ( var i = 0; i < format_list.length; ++i ) {
		format_list[i] = remove_comments(format_list[i].trim(), "//")
	}

	// Render markdown as required
	var render_marker = blog_split_by_line[0];
	for ( var i = 0; i < split_blog.length; ++i ) {
		if (split_blog[i].startsWith(render_marker)) {
			var to_render = split_blog[i].slice(1 + render_marker.length);
			// enable everything
			tmp = window.markdownit().render(to_render);
			alert("Option 1");
			alert(tmp);
			md = window.markdownit({"html":true})
			tmp = md.render(tmp)
			alert("Option 2");
			alert(tmp);
			split_blog[i] = md.render(to_render);
			alert("Option 3");
			alert(split_blog[i]);
		}
	}

	// Interweve the blog info with the formatting items to create the new blog
	var new_blog = format_list[1];
	for ( var i = 1; i < split_blog.length; ++i ) {
		new_blog += split_blog[i] + format_list[i+1];
	}

	// Add the new blog
	var old_blogs = document.getElementById(blogs_output_div).innerHTML;
	document.getElementById(blogs_output_div).innerHTML = old_blogs + new_blog;
}

// Create a blog from a filename
// Takes the file to be blogged as the argument
function create_blog_post(filename, blog_format_list) {

	// Read the blog file
	var blog_text = { internal:"" };
	read_file(blog_folder + filename, blog_text);

	// Wait for and blog file to have been read, then add the blog
	function wait_for_vars() {
		if ( blog_text.internal ) {
			add_and_format_blog(blog_text.internal, blog_format_list);
		}
		else {
			setTimeout(wait_for_vars, 50);
		}
	}
	wait_for_vars();
}

// A function to load all blogs in a list, ignores empty entries
function load_blogs(blog_names, blog_format_list) {
	
	// For each blog, load it, ignore empty entries
	for ( var i = 0; i < blog_names.length; ++i ) {
		if (blog_names[i]) {		
			create_blog_post(blog_names[i], blog_format_list);
		}
	}
}


// A function used to load all blogs listed in the file blog_list_file
function generate_blog(blog_list_file) {

	// Read the blog list
	var blog_list = { internal:"" };
	read_file(blog_folder + blog_list_file, blog_list);

	// Read the blog format, the HTML to encapsulate the blog post
	var blog_format_obj = { internal:"" };
	read_file(format_file, blog_format_obj);

	// Wait for the blog list to have been read
	function wait_for_blog_list() {
		if ( blog_list.internal && blog_format_obj.internal ) {

			// Determine the format delimiter and split the format up
			var delimiter = blog_format_obj.internal.split("\n")[0];
			var split_format = blog_format_obj.internal.split(delimiter);

			// Load all blogs listed
			load_blogs(blog_list.internal.split("\n"), split_format);
		}
		else {
			setTimeout(wait_for_blog_list, 50);
		}
	}
	wait_for_blog_list();
}
