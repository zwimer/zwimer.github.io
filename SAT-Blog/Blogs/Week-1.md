**!! RENDER MARKDOWN !!**
**!! RENDER LATEX !!**
**!!! BLOG ITEM DELIMITER !!!**
// Define the render commands and delimiter

// Title
First post!

**!!! BLOG ITEM DELIMITER !!!**

// Title description
Creating a blog

**!!! BLOG ITEM DELIMITER !!!**

// Date of post 
September 7, 2017

**!!! BLOG ITEM DELIMITER !!!**
**!! RENDER MARKDOWN !!**

// Body
After agreeing upon a topic to study for the next semester, my advisor, professor Moorthy, asked me to setup a blog so I could post frequently about my progress, hardships, findings, and just generally document this experience. Over the past two days I wrote this blog which auto-generates each post client side based on a directory containing each of these posts. These posts can render markdown ~~perfectly~~ fairly well.

<h1> bananas </h1>
<html>
<h1> bananas </h1>
</html>

# I can make text large
## Medium text
### Perhaps even smaller text

_Perhaps italics?_. *Bold isn't great...* ~~But at least I can strike through~~.

<span style="color:red"> Since bold decided not to play well, I enabled the ability to inline html! </span>

<html>
	<style>
	h4 {
	  text-align: center;
	  background: #CCCCCC;
	  padding: .2em 1em;
	  border-top: 3px solid #666666;
	  border-bottom: 3px solid #999999;
	}
	</style>

	</head>
	<body>

	<h4> And even CSS ! </h4>
</html>

1. This
2. is
1. what
   1. a list
1. with
   * sublists
   * looks
1. like.

Of course I could also link to github or other sites
 [test](#github.com)

Writing `inline code` also works, along with \`\`\` formatted code:

```bash
	echo "This is the first line of code!"
	echo "And this is the second."
```

---

Luckily, tables render fine, in case I need one:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

> Block quotes just look like indents, but that is ok.

Finally, images work as well!
![Hover over me!](https://assets-cdn.github.com/images/modules/logos_page/Octocat.png)

**!!! BLOG ITEM DELIMITER !!!**

// Edits of this post
0
