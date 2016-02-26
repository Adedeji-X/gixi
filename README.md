## GIXI

<img src="https://raw.githubusercontent.com/linuxenko/gixi/master/examples/screenshot.png" align=center />

<br />

Using jQuery library [demo](http://www.linuxenko.pro/gixi/examples/jquery-example.html) <br />
Vanila JS [demo](http://www.linuxenko.pro/gixi/examples/no-jquery-example.html) <br /> <br />
CodePen [live demo](http://codepen.io/linuxenko/pen/oxvroK) <br />

GitHub identicons like pixel/avatar images generator library. <br />
Available as jquery or native library. <br />
GIXI is entirely written using currently available es6 technologies. <br />


## Installation

Installation via npm

```
npm install gixi
```
Using CDN

```
<script src="https://npmcdn.com/gixi@0.0.1/dist/gixi-min.js"></script>
```

Or download it from current release [gixi-min.js ](https://github.com/linuxenko/gixi/releases/download/v0.0.1/gixi-min.js) 2.96Kb

## Usage

### Make identicons using jQuery

  * Download and install gixi-min.js library <br />
  * Use following code to invoke gixification of your dom elements

```
  $('.avatar-element').gixi();

  // or using custom colors

  var color = "#000";
  $('.avatar-element').gixi(color);
```


### Make identicons without jQuery


  * Download and install gixi-min.js library <br />
  * Use following code to invoke gixification of your dom elements

```
 /*
  *  Generate gixi image for size of 300
  */

  var imageSize = 300;
  var imageData = new GIXI(imageSize).getImage();

  /*
   *  Then place it to your dom element
   */

  var element = document.getElementById('gixie');

  element.setAttribute('src', imageData);

```


## License 

Copyright (c) 2016 Svetlana Linuxenko