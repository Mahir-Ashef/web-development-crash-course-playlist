# HTML -1
##### HTML stands for Hypertext Markup Language, and it is the most widely used language to write Web Pages.

### 1. Basic HTML Document
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Basic HTML</title>
  </head>
  <body>
    <h1>Basic Html</h1>
  </body>
</html>

```
***
### 2. HTML – BASIC TAGS

#### Heading Tags
Any document starts with a heading. You can use different sizes for your headings. HTML has six leves of headings `<h1>` `<h2>` ... `<h3>` .

#### Paragraph Tag
The `<p>` tag offers a way to structure your text into different paragraphs. Each paragraph
of text should go in between an opening `<p>` and a closing `</p>` tag

#### Line Break Tag
The Break tag `<br />` puts a a line break into the html text displayed on your page. This action breaks the text and begins a new line.

#### Horizontal Lines
The `<hr>` tag creates a line from the current position in the document to the right margin and breaks the line accordingly.

#### HTML – FORMATTING
See the table

| Text Type     | Tag           |
| ------------- |--------------|
| Bold Text     | `<b>...</b>`  |
| Italic Text   | `<i>...</i>`  |
| Underlined Text | ` <u>...</u>`      |
| Strike Text| `<strike>...</strike>`|
|Monospaced Font|`<tt>...</tt> `|
| Superscript Text| `<sup>...</sup>` |
|Subscript Text|`<sub>...</sub>`|
|Inserted Text|`<ins>...</ins>`|
|Deleted Text |`<del>...</del>`|
|Larger Text| `<big>...</big>`|
|Smaller Text|`<small>...</small> `|

lets see the formatting.html file, run it on your browser and see whats happend.
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>1st webpage</title>
  </head>
  <body>
    <h1>This is header 1</h1>
    <h2>This is header 2</h2>
    <h3>This is header 3</h3>
    <h4>This is header 4</h4>
    <h5>This is header 5</h5>
    <h6>This is header 6</h6>

    <p>This is a pagaraph. </p>
    <p>This is a line break from here <br> inside a paragraph</p>

    <center>
      <p>This paragraph is in center</p>
    </center>

    <hr />
    <p>This is paragrap and should be after a Horizontal Lines </p>

    <p><i>italic</i> <b>bold</b> <u>underlined</u> <strong>strong</strong> <del>deleted text</del> <sub>Subscript</sub> <sup>Superscript</sup> <ins>Inserted text</ins>  </p>


  </body>
</html>

```


### 3. HTML – COMMENTS
Comment is a piece of code ignored by system. It is a good practice to add comments into your code. Comments help you and other developers, to understand.
HTML comments are placed in between `<!-- ... -->` tags. So, any content placed with-in `<!-- ... -->` tags will be treated as comment and will be completely ignored by the browser.

### 4. HTML – IMAGES
Images are very important to beautify a web page. It also depict many complex concept in a simple way. Some simple steps are given below to integrate image on webpage.

#### Insert Image:
You can insert any images using `<image>` tag. if the image.jpg image is on the same directory you can insert by the following line of code
```HTML
<img src="image.jpg" alt="Test Image" />
```
 #### Image Location:
 It's a good practice to place your image in a separate directory . If your image is kept in a directory named `images` then you can use `images/image.jpg` as a `src` attribute.
 ```HTML
 <img src="images/image.jpg" alt="Test Image" />
 ```

 #### Image Width/Height:
 You can set image width and height based on your requirement using width and height attributes.
 ```HTML
<img src="/images/image.jpg" alt="Test Image" width="150" height="100"/>
 ```

 #### Image Border:
 By default, image will have a border around it, you can specify border thickness in terms of pixels using border attribute. A thickness of 0 means, no border around the picture.
 ```HTML
 <img src="/images/image.jpg" alt="Test Image" border="3"/>
 ```

 #### Image Alignment:
 By default, image will align at the left side of the page, but you can use align attribute to set it in the `center` or `right`.

 ```HTML
  <img src="/images/image.jpg" alt="Test Image" border="3" align="right" />
 ```

 lets see the image.html
 ```HTML
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <title>HTML Images </title>
   </head>
   <body>
     <h1>HTML Images</h1>
     <hr>
     <h3>Insert Image:</h3>
     <img src="image.jpg" alt="Test Image" />
     <hr>
     <h3>Image Location:</h3>
     <img src="images/image.jpg" alt="Test Image" />
     <hr>
     <h3>Image Width/Height:</h3>
     <img src="/images/image.jpg" alt="Test Image" width="150" height="100"/>
     <hr>
     <h3>Image Border:</h3>
     <img src="/images/image.jpg" alt="Test Image" border="3"/>
     <hr>
     <h3>Image Alignment:</h3>
     <img src="/images/image.jpg" alt="Test Image" border="3" align="right" />
   </body>
 </html>

 ```
