/**object: get base , height of a triangle. calculate the area by using the provided formula.and then display the area.
 * step-1: get base value of the triangle
 * step-2: added an id in the base input field
 * step-3:use getElementById to access the input field
 * step-4:get value from the input field
 **step-5:convert the value to number.use parseFloat
 *  
 * */


function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseIText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseIText)
    console.log(base);
    const triangleHeightInput = document.getElementById('triangle-height').value;
    const height = parseFloat(triangleHeightInput)
    console.log(height);

    const area = 0.5 * base * height;
    console.log('area of the triangle is:', area);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}
