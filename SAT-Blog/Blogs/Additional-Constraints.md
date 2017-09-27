**!! RENDER MARKDOWN !!**
**!! STOP RENDERING !!**
**!! READ MORE BELOW !!**
**!!! BLOG ITEM DELIMITER !!!**
// Define the render commands and delimiter

// Title
Additional Constraints

**!!! BLOG ITEM DELIMITER !!!**

// Title description
Utilizing a scaled down image of size \(n\ \times\ m\).

**!!! BLOG ITEM DELIMITER !!!**

// Date of post 
September 25, 2017

**!!! BLOG ITEM DELIMITER !!!**
**!! RENDER MARKDOWN !!**
// Note: Markdown should always be rendered first as latex does not respect whitespace

// Body
As I was testing my program, I noticed that my program often resulted in a mathematically valid solution which was quite different from the input image. The reason for this is simple: under constrained problems generally have multiple solutions. In the book detailing how this digital tomography works, indeed it stated that what I implemented is quite under constrained, however additional constraints can increase my chances / accuracy. Despite this, as most programmers do, I wanted my program to produce the *correct* solution, not just _some_ solution. To that end, a thought occurred to me:

**!! READ MORE BELOW !!**

<p>What if we used a scaled down image as an additional constraint. To that end, I simply implemented the following. Choose two sizes <span class="math inline">\(n\)</span> and <span class="math inline">\(m\)</span> which represent partition sizes. Next partition the image into disjoint sections each of size <span class="math inline">\(n\ \times\ m\)</span>. From there, each partition can be simplified down to a single pixel: True if the majority of pixels in the partition are on, false otherwise. Consider the following simple example where each block size is <span class="math inline">\(2\ \times\ 2\)</span>: <span class="math display">\[ \begin{bmatrix} 1 &amp; 1 &amp; 0 &amp; 1 \\ 1 &amp; 0 &amp; 0 &amp; 0 \\ 1 &amp; 0 &amp; 1 &amp; 1 \\ 0 &amp; 0 &amp; 1 &amp; 1 \end{bmatrix} \rightarrow \begin{bmatrix} 1 &amp; 0 \\ 0 &amp; 1 \end{bmatrix} \]</span></p>

To test this I used the following simple image as an example:
![Correct](https://zwimer.github.io/zwimer.com//SAT-Blog/Blogs/figs/Additional-Constraints/)

**!!! BLOG ITEM DELIMITER !!!**

// Edits of this post
1
