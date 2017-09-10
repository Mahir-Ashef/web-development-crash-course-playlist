## CSS Background

We can set full background of a page by css background property . Both image and color can be set as background of a page.

#### Background Image

Background image can be set by background-image property .

```css
<!DOCTYPE html>
<html>
<head>
    <title>Background</title>
</head>
<style>

body
{
     background-image:url("bg-header.png");

}


</style>
<body>

</body>
</html>
```

Here url defines the address of background image .

#### Background Color

Similarly Background can be set based on color by background-color property .

```html
<!DOCTYPE html>
<html>
<head>
    <title>Background</title>
</head>
<style>

body
{
     background-color:green;
}


</style>
<body>

</body>
</html>
```

Colors can be defined as Hexadecimal value  \#RRGGBB Format . Where RR is Red ,GG is Green and BB is Blue . So each color is 8 bit and total size is  24 bit . Each color have 2^8 =256 values .

## CSS Borders

There are 4 types of border .

* [ ] border-top
* [ ] border-right
* [ ] border-bottom
* [ ] border-left

only border indicates all sides. border property have three values .

border: border-width border-style border-color;

So we can define all sides border of an element

```html
<!DOCTYPE html>
<html>
<head>
<title>Border</title>
<style>
  p
  {
    border: 1px solid black;
  }
</style>
</head>
<body>
<p>This is a border</p>
</body>
</html>
```

#### Border Style

There are many types of border style. These are :

| dotted | dotted border  \( line is dot dot\) |
| :--- | :--- |
| dashed | dashed type border |
| solid | solid line border |
| double | double line border |
| groove | 3d effect border |
| inset | inside 3d effect border |
| outset | outside 3d effect border |

#### Multiple Paragraph Border

In this case class can be used

```html
<!DOCTYPE html>
<html>
<head>
    <title>Border</title>
    <style>

    p.one
    {
        border:1px solid green;
    }
    p.two
    {
        border:2px solid red;
    }


    </style>
</head>
<body>

<p class="one">Border 1</p>
<p class="two">Border 2</p>

</body>
</html>
```

#### Div Class Border

```html
<!DOCTYPE html>
<html>
<head>
    <title>Border</title>
    <style>
        .myborder
        {
            background-color: black;
            border-bottom: 6px solid red;
            color: white;
        }
    </style>
</head>
<body>
<div class="myborder">MyBorder</div>
</body>
</html>
```

## CSS Margins

CSS margins are used to make gap or space between two element or among different kinds of elements .

Margins have four sides .

* [ ] margin-top
* [ ] margin-right
* [ ] margin-bottom
* [ ] margin-left

So margin can be defined as below

```html
<!DOCTYPE html>
<html>
<head>
    <title>Border</title>
    <style>
        .myborder
        {
            background-color: black;
            border-bottom: 6px solid red;
            color: white;
        }
        .another
        {
            background-color: black;
            border-bottom: 6px solid yellow;
            color: white;
            margin-top:50px;
        }
    </style>
</head>
<body>
<div class="myborder">MyBorder</div>
<div class="another">Another</div>
</body>
</html>
```

## CSS Padding

CSS padding makes space among inside contents . In previous border example there is no padding in MyBorder text .  If we give padding: 10px then padding will be applied in all sides of that text .

```html
<!DOCTYPE html>
<html>
<head>
    <title>Border</title>
    <style>
        .myborder
        {
            background-color: black;
            border-bottom: 6px solid red;
            color: white;
            padding:10px;
        }
    </style>
</head>
<body>
<div class="myborder">MyBorder</div>
</body>
</html>
```

## CSS Width And Height

In previous border example the width and height of the class was not set . So we can control width and height of any element by width and height property .

```html
<!DOCTYPE html>
<html>
<head>
    <title>Border</title>
    <style>
        .myborder
        {
            background-color: black;
            border-bottom: 6px solid red;
            color: white;
            padding:10px;
            width:300px;
            height: 30px;
        }
    </style>
</head>
<body>
<div class="myborder">MyBorder</div>
</body>
</html>
```

#### Max-Width

The max-width property sets the maximum width of html element . The max-width can make responsive any element .

```html
<!DOCTYPE html>
<html>
<head>
<title>MaxWidth</title>
   <style>
      img
      {
           max-width: 100%;
           height: auto;
      }

   </style>
</head>
<body>
<center><img src="minar.jpeg"></center>
</body>
</body>
</html>
```

#### Measurement Of Width

Suppose a 200px div has padding 10 px and border 5 px . Then Total width of that div is = 200+20\(padding right and left\)+10\(Border left and right\)=230px

## CSS Text

Text can be designed by following properties

| color | defines the color of a text |
| :--- | :--- |
| text-align | alignment of text \(left, right, center, justify\) |
| text-decoration | underline, overline, line-through, none |
| line-height | space between lines |
| text-transform | uppercase , lowercase |



