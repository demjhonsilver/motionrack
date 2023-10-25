
<p align="center">

      <img src="https://raw.githubusercontent.com/demjhonsilver/motionrack/main/img/logo.png" alt="Logo" width="70" height="70"/>

</p>

<div align="center">

Motionrack
--------
[![npm version](https://img.shields.io/npm/v/motionrack.svg?logo=npm&style=flat-square&label=Alpha&color=blue)](https://www.npmjs.com/package/motionrack)
![Downloads](https://img.shields.io/npm/dt/motionrack.svg?&style=flat-square&label=Downloads&color=orange)
[![License](https://img.shields.io/npm/l/motionrack.svg?style=flat-square&label=License&color=green)](https://github.com/demjhonsilver/motionrack/blob/main/LICENSE.md)
</div>

---------------------

## Table of Contents

- [Description](#description)
- [Release Notes](#release-notes)
- [Features](#features)
- [Installation](#installation)
- [Example](#example)



## Description

Motionrack is a lightweight JavaScript library designed to simplify web page scrolling by animating elements as they come into view. When elements enter the viewport, making it easy to create engaging and interactive web experiences without the need for complex event handling, mousewheel or extensive JavaScript code.

## Release-notes
Version 0.1.0

-------

Major Changes:


Minor Changes:
- Docs

Patch changes:




## Features

- Compatible for React, Vue, Angular and Svelte
- Supports TypeScript

animations | usage  |  supported tags
------ | -------- | -------- | 
`motionUp` | data-motionrack="motionUp" |  img, class, p, header, etc.  |
`motionDown` |  data-motionrack="motionDown" | img, class, p, header, etc.  |
`motionLeft` |  data-motionrack="motionLeft" | img, class, p, header, etc.  |
`motionRight` | data-motionrack="motionRight"| img, class, p, header, etc.  | 

---------

- Animations

 * | *  | *  | *  | *  |
------ | -------- | -------- | -------- | ------------
zoomIn | motionUp |  motionDown  | motionLeft | motionRight
fadeIn |flipUp |  flipDown  | flipLeft | flipRight
flash |  bounceUp| bounceDown | minSpinLeft | minSpinRight |
flare | flicker| motionBounce |  maxSpinLeft  | maxSpinRight |
------------------

Optional layouts
--------------
class name to wrap:

`motionrack-wrap`

------

layouts | quantity  | layers 
------ | -------- | ------------- |
`monoPad` | monoBox |  1 |
`duoPad` | duoBox |   2 |
`trioPad` | trioBox |  3 |




## Installation

To install the motionrack, you can use the following npm command:

```bash
npm install motionrack
```


## Example
React
-------------
Direct method: `applicable for custom CSS, Bootstrap, Tailwind and Bulma`
-----------

- Bootstrap

```js
import { useEffect } from 'react';
import { motionRack } from 'motionrack'; 

export const ExampleComponent = () => {
  useEffect(() => {
    motionRack();
  });

  return (
    <div>
      <div className="btn btn-primary" data-motionrack="zoomIn">
        zoomIn 
      </div>
    </div>
  );
};
```

- Tailwind

```js
import React, { useEffect } from 'react';
import { motionRack } from 'motionrack'; 

export const ExampleComponent = () => {
  useEffect(() => {
    motionRack();
  });

  return (
    <div>
      <div className="bg-blue-500 text-white px-4 py-2" data-motionrack="zoomIn">
        zoomIn 
      </div>
    </div>
  );
};
```
------------
Layouts method (optional)
--------

```js
import { useEffect } from 'react';
import { motionRack } from 'motionrack'; 

export const ExampleComponent = () => {
  useEffect(() => {
    motionRack();
  });

  return (
    <div>
      <div className="motionrack-wrap">
        <div className="monoPad">
          <div className="monoBox" data-motionrack="zoomIn" style={{backgroundColor: 'gray'}}>
          zoomIn 
             </div>
        </div>
        <div className="duoPad">
          <div className="duoBox" data-motionrack="motionLeft" style={{backgroundColor: 'gray'}}>
            motionLeft
          </div>
          <div className="duoBox" data-motionrack="motionRight" style={{backgroundColor: 'gray'}}>
            motionRight
          </div>
        </div>
        <div className="monoPad">
          <div className="monoBox" data-motionrack="motionDown" style={{backgroundColor: 'gray'}}>
            motionDown</div>
        </div>
        <div className="duoPad">
          <div className="duoBox" data-motionrack="flipUp" style={{backgroundColor: 'gray'}}>
            flipUp
          </div>
          <div className="duoBox" data-motionrack="flipDown" style={{backgroundColor: 'gray'}}>
            flipDown</div>
        </div>
        <div className="trioPad">
          
          <div className="trioBox" data-motionrack="flipLeft" style={{backgroundColor: 'gray'}}>
            flipLeft
          </div>
          <div className="trioBox" data-motionrack="fadeIn" style={{backgroundColor: 'gray'}}>
            fadeIn</div>
          <div className="trioBox" data-motionrack="flipRight" style={{backgroundColor: 'gray'}}>
            flipRight</div>
        </div>
      </div>
   
    </div>
  );
};
```

## License

[MIT](http://www.opensource.org/licenses/MIT)

----------------------------------------------------
## Author

Demjhon Silver
