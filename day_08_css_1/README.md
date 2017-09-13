## CSS Introduction

CSS stands for cascading stylesheets .  it defines styles of diifferent kinds of html elements . Suppose you want to change the

color of your html paragraph text . So  you can do this by changing color property of your paragraph text .

```css
p {

   color:red;

}
```

## Rules of implementing css syntax

There are three ways to insert css in your html file .

1. Internal CSS Style Sheet
2. External  CSS Style Sheet
3. Inline CSS Style Sheet

#### **Internal CSS Style Sheet**

You must define your css inside  `<head> </head>`  within `<style> </style>`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Internal</title>
    <style>

    p{

      color:red;

    }  

    </style>
  </head>
  <body>

     <p>CSS means cascading style sheets</p>

  </body>

  </html>
```

Here `p` is called **selector** and `{ color:red }` is called **declaration  block** .

There are differents kinds of selectors

1. element selector  \[ All html elements that are pre defined are element selector. Example : `<p>`,`<h1>`,`<a>`etc .\]
2. id selector    \[custom element defined  by   #anyname . id  selector can be only used at once \]
3. class selector \[ custom element defined by  .anyname . class selector can be used one or more than one times \]

#### External CSS Style Sheet

You have to  make  a css file at first and name it as anyname.css . Then you have to include anyname.css file inside  `<head></head>`

anyname.css

```html
    p{

      color:red;

    }
```

first.html file

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>External</title>
    <link rel="stylesheet" type="text/css" href="anyname.css">
  </head>
  <body>

     <p>CSS means cascading style sheets</p>

  </body>

  </html>
```

#### Inline CSS Style Sheets

Inline css style sheets are defined inside of style attribute of html elements . Every html elements has style attribute.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Inline</title>
  </head>
  <body>

     <p style="color:red;">CSS means cascading style sheets</p>

  </body>

  </html>
```

#### Priority order of CSS style sheets

If you have multiple style sheets containing style of same element then priority order is maintained in this case . Last style sheet

always gets higher priority than first style sheet . Suppose previous internal and external style sheets will be used in a file  ar a same time .

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
     <title>Priority</title>
      <style>

       p{

        color:blue;

        }

       </style>

       <link rel="stylesheet" type="text/css" href="anyname.css">
  </head>
    <body>

     <p>CSS means cascading style sheets</p>

    </body>

</html>
```

Here paragraph color will be red as external sheet is last style sheet and anyname.css has red color property .

But If  there is also inline style sheet then inline style sheet will get  higher priority .

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Priority</title>
    <style>

      p{

        color:blue;

      }

    </style>

    <link rel="stylesheet" type="text/css" href="anyname.css">
  </head>
  <body>

     <p style="color:yellow;">CSS means cascading style sheets</p>

  </body>

  </html>
```

Here paragraph color will be yellow .

