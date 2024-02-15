function calculateRectangleArea() {
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    const area = length * width;
    console.log('area of the rectangle :', area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}

function calculateParallelogramArea(){
        const bInput = document.getElementById('parallelogram-b');
        const bText = bInput.value;
        const b = parseFloat(bText);
        console.log(b);

        const hInput = document.getElementById('parallelogram-h');
        const hText = hInput.value;
        const h = parseFloat(hText);
        console.log(h);

        const area = b * h;
        console.log('area of the parallelogram :', area);

        const parallelogramAreaSpan = document.getElementById('parallelogram-area');
        parallelogramAreaSpan.innerText = area;

}