## CSS Fonts

Common properties of css fonts are

| font-family | how font looks like |
| :--- | :--- |
| font-size | size of font |
| font-weight | normal,bold |
| font-style | italic,normal, oblique |

One can also include different types of icons by font-awesome  .

```html
<!DOCTYPE html>
<html>
<head>
  <title>Font</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>

    body
    {
       font-family: Algerian;
       font-weight: bold;
       font-size: 30px;
       font-style: italic;
    }


 </style>
</head>
<body>
 <center><span class="fa fa-home"></span> Font is Algerian</center>
</body>
</html>
```

## CSS Links

The Default link color of html is blue . But it can be changed by css . There are four link states are

* [ ] a
* [ ] a:visited
* [ ] a:hover
* [ ] a:active

```html
<!DOCTYPE html>
<html>
<head>
    <title>Link</title>
    <style>

    a
    {
        color:green;
        text-decoration: none;
    }
    a:hover
    {
        color: orange;
    }
    a:active
    {
        color:blue;
    }




    </style>
</head>
<body>
<a href="http://mektekbd.com">MekTek</a>
</body>
</html>
```

## CSS Tables

We can customize any table by css .  table, th, td, tr can be designed by changing these properties

| border | 1px solid black |
| :--- | :--- |
| border-collapse | collapse all borders into one |
| padding | space of inside elements |
| text-align | center, left or right |
| width | 50% makes table responsive |
| tr:nth-child\(even\) | defines even child color . odd also can be used |

```html
<!DOCTYPE html>
<html>
<head>
  <title>Table</title>
    <style>

     table,th,tr,td
     {
         border: 1px solid black;
         border-collapse: collapse;
         padding:10px;
         text-align: center;
     }
     table
     {
         width: 50%;
     }
     caption
     {
         background-color: green;
         color: white;
         padding: 5px;
     }
     tr:nth-child(even)
     {
         background-color: rgb(198,208,220);
     }



    </style>
</head>
<body>
<center>
<table>
<caption>Table</caption>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Roll</th>
    </tr>
    <tr>
        <td>0</td>
        <td>Shakil</td>
        <td>133008</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Shawon</td>
        <td>133009</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Sakib</td>
        <td>133010</td>
    </tr>
</table>
</center>

</body>
</html>
```

## CSS Display

#### Block Level Element

Display defines how the elements will be placed one after one . We know block level elements are

1. &lt;div&gt;
2. &lt;p&gt;
3. &lt;header&gt;
4. &lt;section&gt;
5. &lt;footer&gt;  .....  etc

This block level elements prints new line automatic .

#### Inline Element

Inline elements are placed side by side as no new line  is printed .

1. &lt;span&gt;
2. &lt;i&gt;
3. &lt;img&gt;
4. &lt;a&gt; ....  etc

So there are three types of display

| block | elements are placed one after one with new line |
| :--- | :--- |
| inline | elements are placed side by side |
| none | elements are hidden |

```html
<!DOCTYPE html>
<html>
<head>
    <title>Display</title>
    <style>

    .display
    {
        display: inline;
        background-color: green;
        color: white;
        padding:20px;

    }

    </style>
</head>
<body>
<center>
<div class="display">Inline 1</div>
<div class="display">Inline 2</div>

</body>
</html>
```

## CSS Position

There are four properties of position

| static | default position of html |
| :--- | :--- |
| relative | default position but has top,right,bottom,left property |
| fixed | fixed position  keeps position fixed according to view |
| absolute | absolute keeps position fixed according to anchestor |

```html
<!DOCTYPE html>
<html>
<head>
<title>Position</title>
<style>
     body
     {
             margin:0;
             padding:0;
          background-image:url("bg-header.png");
          font-family: cursive;

     }
     .part
     {

              position: absolute;
              left: 0;
              width: 100%;
              height: 590px;
              top: 0;
              z-index: -1;
              background-image: url("bg-textura3.png");


     }

    .main
       {
          margin-right: auto;
          margin-left: auto;
          padding-left: 25px;
          padding-right: 25px;

       }
        .logo
       {
             margin-top: 10px;
             background-color: rgba(16, 100, 112,0.41);
             height:100px;
             width:100%;
             text-align: center;



       }
       .wr
       {

          max-width:650px;
          margin:auto;
          height: auto;   

       }
       .adjust
       { 
           padding-top: 20px;
           margin-left: 10px;
           padding-left: 10px;
           font-size:20px; 
           color: white;
           font-family: cursive;
       }




    </style>
</head>
<body>
<div class="part"></div>
<div class="main">

    <div class="logo">

        <div class="wr"><img style="float:left;" src="ruet.png" width="80px" height="80px" /><div class="adjust">Rajshahi University Of Engineering And Technology</div></div>
    </div>
</body>
</html>
```

#### z- Index

z-index defines the stack position of an element \(in front of or behind\)

| z-index:-1 | behind element |
| :--- | :--- |
| z-index:1 | in front of element |

#### css float

There are three properties of float

| left | new element is positioned left of previous element |
| :--- | :--- |
| right | new element is positioned right of previous element |
| none | default position |

#### css clear

this clear property actually clear the left, right float of previous element



