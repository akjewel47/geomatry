// function calculateTriangleArea(){
// const triangleBaseInput = document.getElementById('triangle-base');
// const triangleBaseText = triangleBaseInput.value;
// const base = parseFloat(triangleBaseText);
// console.log(base);

// const triangleheightInput = document.getElementById('triangle-height');
// const triangleheightText =triangleheightInput.value;
// const height =parseFloat(triangleheightText);
// console.log(height);
// }
// // calculate triangle area
// const area = 0.5 * base * height;
// console.log('area of the triangle is:',area);

// // display triangle area
// const triangleAreaSpan = document.getElementById('triangle-area');
// triangleAreaSpan.innerText = area;
function calculateRectangleArea(){
 const triangleBaseInput =document.getElementById('rectangle-length');
 const lengthText = lengthInput.value;
 const length =parseFloat(lengthText);
 console.log(length);
 
 
 const widthInput = document.getElementById('rectangle-width');
 const widthText =widthInput.value;
 const width = parseFloat(widthText);
 console.log(width);
 
 // calculate rectangle area
 const area = length * width;
 console.log('area of the rectangle:',area);
 
 // display rectangle area
 const rectangleAreaSpan = document.getElementById('rectangle-area')
 rectangleAreaSpan.innerText = area;
 }