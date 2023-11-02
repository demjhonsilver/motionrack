<p align="center">
      <img src="https://raw.githubusercontent.com/demjhonsilver/motionrack/main/img/logo.png" alt="Logo" width="70" height="70"/>
</p>

<div align="center">

Motionrack
--------
[![npm version](https://img.shields.io/npm/v/motionrack.svg?logo=npm&style=flat-square&label=Latest&color=blue)](https://www.npmjs.com/package/motionrack)
![Package Size](https://img.shields.io/bundlephobia/minzip/motionrack?style=flat-square&color=darkgreen)
![Downloads](https://img.shields.io/npm/dt/motionrack.svg?&style=flat-square&label=Downloads&color=orange)
[![License](https://img.shields.io/npm/l/motionrack.svg?style=flat-square&label=License&color=green)](https://github.com/demjhonsilver/motionrack/blob/main/LICENSE.md)
</div>

---------------------

## Table of Contents

- [Description](#description)
- [Release Notes](#release-notes)
- [Installation](#installation)
- [Features](#features)
- [Sample](#sample)
- [Demo](#demo)
- [React](#react)
- [Vue](#vue)
- [Angular](#angular)
- [Svelte](#svelte)



## Description

Motionrack is a free and open source JavaScript library animated web page scrolling in React, Vue, Angular, and Svelte. When elements enter the viewport, making it easy to create engaging and interactive web experiences.



Frameworks / Libraries | Tested versions
------ | -------- | 
 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) | 18 & above
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)  | 3 & above
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)  | 16 & above
![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white) | 3 & above



-----



## Release-notes
Version 1.0.1

-------

Major Changes:
- Two syntax tags  `data-motionrack` & `data-motionrack-once`
- Can set any time duration or delay for animations
- With demo animations
- You can apply to any formats like images, headers , paragraphs, text, tables, buttons, and etc.

Minor Changes:
- zoomIn renamed into expand

Patch changes:

1.0.1
- Added 5 new animations: `pump`, `slopeUpLeft`, `slopeUpRight`, `slopeDownLeft`, and `slopeDownRight`.

1.0.0
- Add docs for speed

## Installation

To install the motionrack, you can use the following npm command:

```bash
npm install motionrack
```

## Features

- Compatible for React, Vue, Angular and Svelte
- Supports TypeScript

Motion Type | default syntax  | syntax with time duration  |  animation effect 
------ | -------- | -------- | -------- | 
`data-motionrack` | data-motionrack="motionUp" |  data-motionrack="motionUp 5s"  | 5 seconds scrolling repeated
`data-motionrack-once` |  data-motionrack-once="motionUp" | data-motionrack-once="motionUp 5s"  | 5 seconds one time animation

----

You can set any number for `Time Duration`

time syntax | value | speed |
------ | -------- | ---------------
0.1s | 0.1 seconds | superfast
0.2s | 0.2 seconds | 
0.3s | 0.3 seconds | 
0.4s | 0.4 seconds | 
0.5s | 0.5 seconds | semi-fast
0.6s | 0.6 seconds | 
0.7s | 0.7 seconds | 
0.8s | 0.8 seconds | 
0.9s | 0.9 seconds | fast
1s | 1 seconds | moderate
2s | 2 seconds | 
2.5s | 2.5 seconds | default
3s | 3 seconds | slow
4s | 4 seconds | delay
5s | 5 seconds | super-delay
-----------


---------
```html
expand, motionUp, motionDown, motionLeft, motionRight
fadeIn, flipUp, flipDown, flipLeft, flipRight
flash, bounceUp, bounceDown, minSpinLeft, minSpinRight
flare, flicker, motionBounce, maxSpinLeft, maxSpinRight
pump, slopeUpLeft, slopeUpRight, slopeDownLeft, slopeDownRight
```

------------------

Optional layouts
--------------
Class name to wrap:

`motionrack-wrap`

------

layouts | quantity  | layers 
------ | -------- | ------------- |
`monoPad` | monoBox |  1 |
`duoPad` | duoBox |   2 |
`trioPad` | trioBox |  3 |


## Sample
------
Sample website that used Motionrack

[energize-coffee-house](https://energize-coffee-house.vercel.app)

## Demo 

[Demo Animations](https://demo-motionrack.vercel.app/)

## React
-------------

Direct method: 

-------------

`applicable for custom CSS, Bootstrap, Tailwind and Bulma`

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
      <div className="btn btn-primary" data-motionrack="expand 0.4s">
        expand 
      </div>
    </div>
  );
};
```

- Tailwind

```js
import { useEffect } from 'react';
import { motionRack } from 'motionrack'; 

export const ExampleComponent = () => {
  useEffect(() => {
    motionRack();
  });

  return (
    <div>
      <div className="bg-blue-500 text-white px-4 py-2" data-motionrack="expand 4s">
        expand 
      </div>
    </div>
  );
};
```

- Bulma

```js
import { useEffect } from 'react';
import { motionRack } from 'motionrack'; 

export const ExampleComponent = () => {
  useEffect(() => {
    motionRack();
  });

  return (
    <div>
      <div className="box has-background-primary has-text-white p-4" data-motionrack="expand">
        expand
      </div>
    </div>
  );
};
```

## Vue

```js
<template>
  <div>
    <div class="btn btn-primary" data-motionrack="expand 1.4s">
      expand
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { motionRack } from 'motionrack';

export default {
  setup() {
    onMounted(() => {
      motionRack();
    });
  },
};
</script>
```

## Angular

```ts
import { Component, OnInit } from '@angular/core';
import { motionRack } from 'motionrack';

@Component({
  selector: 'app-example',
  template: `
    <div>
      <div class="btn btn-primary" data-motionrack-once="expand 1.4s">
        expand
      </div>
    </div>
  `,
})
export class ExampleComponent implements OnInit {
  ngOnInit() {
    motionRack();
  }
}
```

## Svelte

```js
<script>
  import { onMount } from "svelte";
  import { motionRack } from "motionrack";

  onMount(() => {
    motionRack();
  });
</script>

<div>
  <div class="btn btn-primary" data-motionrack="expand 1.4s">
    expand
  </div>
</div>
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
          <div className="monoBox" data-motionrack-once="expand 0.9s" style={{backgroundColor: 'gray'}}>
          expand 
             </div>
        </div>
        <div className="duoPad">
          <div className="duoBox" data-motionrack="motionLeft" style={{backgroundColor: 'gray'}}>
            motionLeft
          </div>
          <div className="duoBox" data-motionrack-once="motionRight" style={{backgroundColor: 'gray'}}>
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

- This library package is FREE for both commercial and personal use. ❤️

----------------------------------------------------
## Author

Demjhon Silver
