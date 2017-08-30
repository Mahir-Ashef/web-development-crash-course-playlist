# HTML -4

### 11. HTML – FORMS
HTML Forms are required, when you want to collect some data from the site visitor. For example, during user registration you would like to collect information such as name, email address, credit card, etc.

There are various form elements available like text fields, textarea fields, drop-down menus, radio buttons, checkboxes, etc.

The HTML <form> tag is used to create an HTML form and it has following syntax:
###### Example: basicForm.html
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Basic Form</title>
  </head>
  <body>
    <h1>Basic Form</h1>
    <form action="Script Url" method="get|post">
      form elements, like input, textarea etc.
    </form>
  </body>
</html>

```

#### Html form controls:
There aare different types of form controls that you can use to collect data using HTML form:
* Text Input Controls
* Checkboxes Controls
* Radio Box Controls
* Select Box Controls
* File Select boxes
* Hidden Controls
* Clickable Buttons
* Submit and Reset Button

##### 1. Text Input Control:
There are three types of text input used on forms:

| Input Type | Tag Name |
|------------|----------|
| Single-line text input controls| `<input>` |
| Password input controls | `<input>`|
|Multi-line text input controls | `<textarea>` |

Lets see a simple example : `simpForm.html`
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple Html Form</title>
  </head>
  <body>
    <h1>Simple Html Form</h1>
    <form>
      First Name : <input type="text" name="first_name">
      <br>
      Password : <input type="password" name="Password">
      <br>
      Description:
      <textarea name="description" rows="8" cols="80"></textarea>
    </form>
  </body>
</html>

```
###### Attributes:
*  List of attributes for `text` and `password` -

| Attribute | Description |
|:-----------:|:-------------:|
|type | for text set to text, for password set to password|
|name | to control which is sent to the server to be recognized|
| value | provide an initial value |
| size | specify the width of the text-input |
| maxlength | maximum number of characters a user can enter into |

*  List of attributes for `<textarea>` tag -

| Attribute | Description |
|:-----------:|:-------------:|
| name |to control which is sent to the server to be recognized|
| rows | number of rows of text area box|
| cols |  number of columns of text area box|

##### 2. Checkbox & Radio Button Control:
Checkboxes are used when more than one option is required to be selected on the other hand Radio buttons are used when out of many options, just one option is required to be selected. They both are also created using HTML `<input>` tag but type attribute is set to `checkbox` and `radio` respectively.

Lets see a example : `CheckRad.html`
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Checkbox and Radio Button Example</title>
  </head>
  <body>
    <h1>Checkbox and Radio Button Example</h1>

    <h3>Checkbox Example</h3>
    <form>
      <input type="checkbox" name="maths" value="on"> Math
      <input type="checkbox" name="physics" value="on"> Physics
      <input type="checkbox" name="chemistry" value="on"> Chemistry
    </form>

    <h3>Radio Button Example</h3>
    <form>
      <input type="radio" name="subject" value="Maths"> Maths
      <input type="radio" name="subject" value="Physics"> Physics
      <input type="radio" name="subject" value="Chemistry"> Chemistry
    </form>
  </body>
</html>
```
###### Attributes:
*  List of attributes for `checkbox` and `radio` -

| Attribute | Description |
|:-----------:|:-------------:|
|type | for checkbox set to checkbox, for radio set to radio|
|name | to control which is sent to the server to be recognized|
| value |value, that will be used if the checkbox or radio is selected. |
| size | specify the width of the text-input |
| checked | Set to checked if you want to select it by default |

##### 3. Select Box Control:
A select box, also called drop down box which provides option to list down various options in the form of drop down list, from where a user can select one or more options.

Lets see a example : `selectBox.html`
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Select Box Example</title>
  </head>
  <body>
    <h1>Select Box Control</h1>
    <form>
      <select name="dropdown">
        <option value="Maths" selected>Maths</option>
        <option value="Physics" >Physics</option>
        <option value="Chemistry" >Chemistry</option>
      </select>
    </form>
  </body>
</html>

```

##### 4. File Upload Box:
If you want to allow a user to upload a file to your web site, you will need to use a file upload box, also known as a file select box. This is also created using the `<input>` element but type attribute is set to `file`.
Lets see a example : `uploadBox.html`
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Upload Box Example</title>
  </head>
  <body>
    <h1>Example Box Example</h1>
    <form>
      <input type="file" name="fileupload" accept="image/*">
    </form>
  </body>
</html>

```

##### 5. Button Controls:
Take a look of some `type` attribute of `<input>` tag.

| type | Description |
|:-----------:|:-------------:|
|submit | button that automatically submits a form|
|reset| automatically resets form controls to their initial values |
|button| trigger a client-side script when the user clicks that button|

###### Example: buttonCon.html
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Button Control Example</title>
  </head>
  <body>
    <h1>Button Control Example</h1>
    <form >
      <input type="submit" name="submit" value="Submit">
      <input type="reset" name="reset" value="Reset">
      <input type="button" name="ok" value="OK">
    </form>
  </body>
</html>

```

***

### 12. HTML – STYLE SHEET
Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

you can use CSS   in three ways in your HTML document:

#### 1. External Style Sheet:
If you need to use your style sheet to various pages, then its always recommended to define a common style sheet in a separate file. A cascading style sheet file will have extension as .css.

To use an external style sheet, add a link to it in the `<head>` section of the HTML page:

```HTML
<link rel="stylesheet" type="text/css" href="style.css">
```


###### Example:
Consider we have a `style.css` in our directory.

```CSS
.red{
  color: red;
}

.thick{
  font-size: 20px;
}

.green{
  color: green;
}

```
and a html file `exStylo.html` in the same directory.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>External Style Sheet</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <h1>External Style Sheet</h1>
    <p class="red">This is red</p>
    <p class="thick">This is thick</p>
    <p class="green">This is green</p>
    <p class="thick green">This is thick and green</p>
  </body>
</html>

```

#### 2. Internal Style Sheet:
If you want to apply Style Sheet rules to a single document only, then you can include those rules in header section of the HTML document using `<style>` tag.

###### Example: `inStylo.html`

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>External Style Sheet</title>
    <style type="text/css">
        .red{
          color: red;
        }

        .thick{
          font-size: 20px;
        }

        .green{
          color: green;
        }
    </style>
  </head>
  <body>
    <h1>External Style Sheet</h1>
    <p class="red">This is red</p>
    <p class="thick">This is thick</p>
    <p class="green">This is green</p>
    <p class="thick green">This is thick and green</p>
  </body>
</html>
```

#### 3. Inline Style Sheet:

Let's re-write above example once again, but here we will write style sheet rules along with the HTML elements using style attribute of those elements.

###### Example: `inlineStyle.html`

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>External Style Sheet</title>
  </head>
  <body>
    <h1>External Style Sheet</h1>
    <p style="color:red">This is red</p>
    <p style="font-size: 20px;">This is thick</p>
    <p style="color:green">This is green</p>
    <p style="color:green;font-size: 20px;">This is thick and green</p>
  </body>
</html>
```
***
### 13. HTML JAVASCRIPT
JavaScript, often abbreviated as JS, is a high-level, dynamic, weakly typed, object-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games.

#### 1. External JavaScript:
If you are going to define a functionality which will be used in various HTML documents then it's better to keep that functionality in a separate JavaScript file and then include that file in your HTML documents. A JavaScript file will have extension as .js and it will be included in HTML files using `<script>` tag.

###### Example:
Consider we have a `script.js` file in our directory.

```JS
function Hello() {
  alert("Hello World");
}
```
and a html file `exScript.html` in the same directory.
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>External JavaScript</title>
    <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
    <h1>External JavaScript</h1>
    <input type="button" onclick="Hello()" name="ok" value="Click Me">
  </body>
</html>
```

#### 2. Internal Script:
You can write your script code directly into your HTML document. Let's re-write above example as below.

###### Example: `inScript.html`
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>External JavaScript</title>
    <script type="text/javascript">
      function Hello() {
        alert("Hello World");
      }
    </script>
  </head>
  <body>
    <h1>External JavaScript</h1>
    <input type="button" onclick="Hello()" name="ok" value="Click Me">
  </body>
</html>
```

#### 3. Event Handlers:

##### Events:
Events tell your program to listen or wait for when something happens. Event handlers means when event does it performs an action. Some examples of events are listening for a mouse click, an arrow button or a tap on the screen.

Following example explains how to write an event handler. Let's write one simple function EventHandler() in the header of the document. We will call this function when any user brings mouse over a paragraph.

###### Example: `eventHandler.html`
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>EventHandler Example</title>
    <script type="text/javascript">
      function EventHandler() {
        alert("Event Happens!");
      }
    </script>
  </head>
  <body>
    <h1>EventHandler Example</h1>
    <p onmouseover="EventHandler()"> Bring your mouse here.</p>
  </body>
</html>
```
***
