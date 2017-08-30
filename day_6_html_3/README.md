# HTML -3

### 8. HTML – IFRAMES
An iframe is used to display a web page within another web page. An iframe or inline frame is used to display external objects including other web pages within a web page. The basic syntax for adding an iframe can be given with:
```HTML
<iframe src="URL">
    alternative content for browsers which do not support iframe.
</iframe>
```
###### Setting Width and Height of an iframe
The `height` and `width` attributes are used to specify the height and width of the iframe.

```HTML
<iframe src="demo-page.html" width="200" height="200">
    alternative content for browsers which do not support iframe.
</iframe>
```
###### Removing Default Frameborder
The `frameborder` attribute specifies whether or not to display a border around the `iframe`. This attribute carries a value of 0 or 1. The default value of 1 results in a border while a value of 0 removes the border from the `iframe`.
```HTML
<iframe src="demo-page.html" frameborder="0">
    alternative content for browsers which do not support iframe.
</iframe>
```
###### Using an iframe as Link Target
An iframe can be used as a target for the hyperlinks.
```HTML
<iframe src="demo-page.html" name="myFrame"></iframe>
<p><a href="https://www.tutorialrepublic.com" target="myFrame">Tutorial Republic</a></p>
```

###### Example: iFrame.html
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>iFrame Examples</title>
  </head>
  <body>
    <h1>iFrame Examples</h1>
    <h3>Simple iframe</h3>
    <iframe src="another.html">
      alternative content for browsers which do not support iframe.
    </iframe>

    <h3>Setting Width and Height of an iframe</h3>
    <iframe src="another.html" width="200" height="200">
        alternative content for browsers which do not support iframe.
    </iframe>

    <h3>Removing Default Frameborder</h3>
    <iframe src="another.html" frameborder="0">
        alternative content for browsers which do not support iframe.
    </iframe>

    <h3>Using an iframe as Link Target</h3>
    <iframe src="another.html" name="myFrame"></iframe>
    <p><a href="about.html" target="myFrame">About</a></p>

  </body>
</html>

```
***
### 9. HTML – BLOCKS

##### The `<div>` tag:
The `<div>` tag is the very important block level tag which are basically used for grouping HTML tags. This tag does not provide any visual change on the clock but this has more meaning when it used with CSS.

###### Example: divBlock.html
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Div Tag Examples</title>
  </head>
  <body>
    <h1>Div Tag Examples</h1>
    <div style="color:red">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <ul>
        <li>Level 1</li>
        <li>Level 2</li>
        <li>Level 3</li>
        <li>Level 4</li>
        <li>Level 5</li>
      </ul>
    </div>
    <div style="color:green">
      <ol>
        <li>block</li>
        <li>block</li>
        <li>block</li>
        <li>block</li>
        <li>block</li>
      </ol>
    </div>
  </body>
</html>

```
##### The `<span>` tag
The HTML `<span>` is an inline element and it can be used to group inline-elements in an HTML document. This tag also does not provide any visual change on the block but has
more meaning when it is used with CSS.

The difference between the `<span>` tag and the `<div>` tag is that the `<span>` tag is used with inline elements whereas the `<div>` tag is used with block-level elements.

###### Example: spanBlock.html
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Span Tag</title>
  </head>
  <body>
    <h1>Span Tag Examples</h1>
    <p>This is <span style="color:red">red</span> and this is <span
    style="color:green">green</span></p>
  </body>
</html>


```
***

### 10. HTML – LAYOUTS
Web page layout is an essential part of creating well-formed, well-structured, semantically-rich websites.

#### HTML Layout Using Tables:
Tables are the simplest method for creating layout in HTML. The following HTML layout is achieved using a table with 3 rows and 2 columns — the first and last row spans both columns using the colspan attribute:
