
function calculateTriangleArea(){
 const triangleBaseInput =document.getElementById('triangle-base');
 const triangleBaseText = triangleBaseInput.value;
 const base =parseFloat(triangleBaseText);
 console.log(base);
 
 
 const triangleheightInput = document.getElementById('triangle-height');
 const triangleheightText =triangleheightInput.value;
 const height = parseFloat(triangleheightText);
 console.log(height);
 
 // calculate rectangle area
 const area =0.5 * base * height;
 console.log('area of the rectangle:',area);
 
 // display rectangle area
 const triangleBaseSpan = document.getElementById('triangle-area')
 triangleBaseSpan.innerText = area;
 }