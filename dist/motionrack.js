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

  import './animation.js';

  const animatedElements = new Set();

  function resetAnimations() {
    animatedElements.forEach((element) => {
      element.style.animation = 'none';
      element.offsetHeight; // Trigger a reflow
      element.style.animation = 'none';
    });
    animatedElements.clear();
  }
  
  export function motionRack() {
    const motionElementHold = document.querySelectorAll('[data-motionrack-once]');
  
    const optionHold = {
      root: null,
      rootMargin: '0px',
      threshold: .10,
    };
  
    if (motionElementHold.length > 0) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const motionData = entry.target.getAttribute('data-motionrack-once').split(' ');
            const animationName = motionData[0];
            const animationDuration = motionData[1] || '2.5s';
            entry.target.style.animation = `${animationName} ${animationDuration} forwards`;
            observer.unobserve(entry.target);
          }
        });
      }, optionHold);
  
      motionElementHold.forEach(element => {
        observer.observe(element);
      });
    }
  
    const motionElementRelease = document.querySelectorAll('[data-motionrack]');
  
    const optionRelease = {
      root: null,
      rootMargin: '0px',
      threshold: 0.10,
    };
  
    if (motionElementRelease.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const motionData = entry.target.getAttribute('data-motionrack').split(' ');
            const animationName = motionData[0];
            const animationDuration = motionData[1] || '2.5s';
  
            if (entry.target.style.animation !== 'none') {
              // Stop the animation if it's already running
              entry.target.style.animation = 'none';
              entry.target.offsetHeight; // Trigger a reflow
            }
  
            entry.target.style.animation = `${animationName} ${animationDuration} forwards`;
  
            animatedElements.add(entry.target);
          } else {
            animatedElements.delete(entry.target);
          }
        });
      }, optionRelease);
  
      motionElementRelease.forEach((element) => {
        observer.observe(element);
      });
  
      const resetObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            animatedElements.delete(entry.target);
            // Stop the animation if the element is not in the viewport
            entry.target.style.animation = 'none';
            entry.target.offsetHeight; // Trigger a reflow
          }
        });
      }, optionRelease);
  
      motionElementRelease.forEach((element) => {
        resetObserver.observe(element);
      });
  
      window.addEventListener('scroll', () => {
        if (window.scrollY < 0) {
          resetAnimations();
        }
      });
    }
  }
  



  const motionStylerLayout = document.createElement('style');
  document.head.appendChild(motionStylerLayout);
  const motionSheetLayout = `
  
  .mr-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  
  .motionrack-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    overflow-x: hidden;
    width: auto;
    max-width: 1140px;
    margin: 0 auto;
  }
  
  
  .monoPad {
    display: flex;
    justify-content: center;
  }
  
  .monoBox {
    width: 999px; 
    min-height: 200px;
    height: auto;
    max-height: 670px;
    display: flex;
    opacity: 0;
    margin: 10px;
  }
  
  .duoPad {
    display: flex;
    justify-content: center;
  }
  
  
  .duoBox {
    width: 490px;
    min-height: 200px;
    height: auto;
    max-height: 670px; 
    display: flex;
    opacity: 0;
    margin: 10px;
  }
  
  
  .trioPad {
    display: flex;
    justify-content: center;
  }
  
  
  .trioBox {
    width: 320px; 
    min-height: 200px;
    height: auto;
    max-height: 670px; 
    display: flex;
    opacity: 0;
    margin: 10px;
  }
  
  
  .hidden {
    display: none;
  }
  
  `;
  motionStylerLayout.appendChild(document.createTextNode(motionSheetLayout));






const  motionRQuery = document.createElement('style');
document.head.appendChild(motionRQuery);
const rackMQuery = `
@media (max-width: 1060px) {
  .monoPad {
      width: 100%;
  }
  .monoBox {
      width:940px;
  }
  .duoPad {
      width: 100%;
  }
  .duoBox {
      width: 460px; 
  }
  .trioPad {
      width: 100%;
  }
  .trioBox {
      width: 300px; 
  }
}
`;

motionRQuery.appendChild(document.createTextNode(rackMQuery));

const  motionRQuery2 = document.createElement('style');
document.head.appendChild(motionRQuery2);
const rackMQuery2 = `
@media (max-width: 740px) {

  .duoPad{
      flex-direction: column; 
      align-items: center;
  }
  .duoBox {
      max-width: 350px;
      width: 100%;
      display: flex;
      justify-content: center; 
      align-items: center; 
  }
  .trioPad {
      width: 100%;
  }
  .trioBox {
      width:940px;
  }
}
`;

motionRQuery2.appendChild(document.createTextNode(rackMQuery2));


const  motionRQuery3= document.createElement('style');
document.head.appendChild(motionRQuery3);
const rackMQuery3 = `
@media (max-width: 630px) {
  .monoPad {
      flex-direction: column; 
      align-items: center; 
  }
  .monoBox {
      max-width: 350px;
      margin: 5px;
      width: 100%; 
      display: flex;
      justify-content: center; 
      align-items: center; 
  }
  .duoPad {
      flex-direction: column; 
      align-items: center; 

  }
  .duoBox {
      max-width: 350px;
      margin: 5px;
      width: 100%; 
      display: flex;
      justify-content: center; 
      align-items: center; 
  }
  .trioPad {
      flex-direction: column; 
      align-items: center; 
  }
  .trioBox {
      max-width: 350px;
      width: 100%;
      display: flex;
      justify-content: center; 
      align-items: center; 
  }
}
`;
motionRQuery3.appendChild(document.createTextNode(rackMQuery3));

const  motionRQuery4= document.createElement('style');
document.head.appendChild(motionRQuery4);
const rackMQuery4 = `
@media (max-width: 400px) {
  .monoPad {
      flex-direction: column; 
      align-items: center; 
  }
  .monoBox {
      max-width: 300px;
      margin: 5px;
      width: 100%; 
      display: flex;
      justify-content: center; 
      align-items: center;
  }
  .duoPad {
      flex-direction: column; 
      align-items: center; 

  }
  .duoBox {
      max-width: 300px;
      margin: 5px;
      width: 100%; 
      display: flex;
      justify-content: center;
      align-items: center; 
  }
  .trioPad {
      flex-direction: column; 
      align-items: center; 
  }
  .trioBox {
      max-width: 300px;
      margin: 5px;
      width: 100%;
      display: flex;
      justify-content: center; 
      align-items: center; 
  }

}
`;

motionRQuery4.appendChild(document.createTextNode(rackMQuery4));

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
