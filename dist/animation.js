
const motionStyler = document.createElement('style');
document.head.appendChild(motionStyler);
const motionSheet = `

@keyframes motionUp {
  from {
      transform: translateY(100px);
      opacity: 0;
  }
  to {
      transform: translateY(0);
      opacity: 1;
  }
}

@keyframes motionLeft {
  from {
      transform: translateX(-100px);
      opacity: 0;
  }
  to {
      transform: translateX(0);
      opacity: 1;
  }
}

@keyframes motionRight {
  from {
      transform: translateX(100px);
      opacity: 0;
  }
  to {
      transform: translateX(0);
      opacity: 1;
  }
}


@keyframes motionDown {
  from {
      transform: translateY(-100px);
      opacity: 0;
  }
  to {
      transform: translateY(0);
      opacity: 1;
  }
}

@keyframes fadeIn {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}


@keyframes expand {
  from {
      transform: scale(0);
      opacity: 0;
  }
  to {
      transform: scale(1);
      opacity: 1;
  }
}


@keyframes maxSpinLeft {
  from {
      transform: rotate(0);
      opacity: 0;
  }
  to {
      transform: rotate(-360deg);
      opacity: 1;
  }
}



@keyframes maxSpinRight {
  from {
      transform: rotate(0);
      opacity: 0;
  }
  to {
      transform: rotate(360deg);
      opacity: 1;
  }
}

@keyframes minSpinLeft {
  from {
      transform: rotate(90deg);
      opacity: 0;
  }
  to {
      transform: rotate(0);
      opacity: 1;
  }
}


@keyframes minSpinRight {
  from {
      transform: rotate(-90deg);
      opacity: 0;
  }
  to {
      transform: rotate(0);
      opacity: 1;
  }
}

@keyframes flipUp {
  from {
      transform: perspective(400px) rotateX(-90deg);
      opacity: 0;
  }
  to {
      transform: perspective(400px) rotateX(0);
      opacity: 1;
  }
}

@keyframes flipDown {
  from {
      transform: perspective(400px) rotateX(90deg);
      opacity: 0;
  }
  to {
      transform: perspective(400px) rotateX(0);
      opacity: 1;
  }
}



@keyframes flipLeft {
  from {
      transform: perspective(400px) rotateY(90deg);
      opacity: 0;
  }
  to {
      transform: perspective(400px) rotateY(0);
      opacity: 1;
  }
}

@keyframes flipRight {
  from {
      transform: perspective(400px) rotateY(-90deg);
      opacity: 0;
  }
  to {
      transform: perspective(400px) rotateY(0);
      opacity: 1;
  }
}



@keyframes flash {
  0%, 50%, 100% {
      opacity: 1;
  }
  25%, 75% {
      opacity: 0;
  }
}



@keyframes motionBounce {
  from {
      transform: scale(0.5);
      opacity: 0;
  }
  25% {
      transform: scale(1.1);
  }
  50% {
      transform: scale(0.9);
  }
  75% {
      transform: scale(1.05);
  }
  to {
      transform: scale(1);
      opacity: 1;
  }
}




@keyframes bounceUp {
  0% {
      transform: translateY(100px);
      opacity: 0;
  }
  70% {
      transform: translateY(0);
      opacity: 1;
  }
  85% {
      transform: translateY(-20px);
      opacity: 1;
  }
  100% {
      transform: translateY(0);
      opacity: 1;
  }
}





@keyframes bounceDown {
  0% {
      transform: translateY(-100px);
      opacity: 0;
  }
  10% {
      transform: translateY(-100px);
      opacity: 0;
  }
  25% {
      transform: translateY(0);
      opacity: 1;
  }
  40% {
      transform: translateY(20px);
      opacity: 1;
  }
  100% {
      transform: translateY(0);
      opacity: 1;
  }
}


@keyframes flicker {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}


@keyframes flare {
  0%, 70% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}




`;
motionStyler.appendChild(document.createTextNode(motionSheet));


  /* # Motionrack core license
  
  Motionrack is released under the MIT license:
  
  MIT License
  
  Copyright (c) [2023-present] [Demjhon Silver]
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE. */