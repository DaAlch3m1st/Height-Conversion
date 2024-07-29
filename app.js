const btnConvert = document.getElementById('convert')

function operate() {
    const feet = document.getElementById('feet').value;
    const inch = document.getElementById('inches').value;
    const result = document.getElementById('result')
    // conver the value of the inputs to float numbers
    const feetInt = parseFloat(feet);
    const inchInt = parseFloat(inch);

    if (isNaN(feetInt) || isNaN(inchInt)) {
        alert('Invalid input');
    } else {
        let cm = (feetInt * 30.48) + (inchInt * 2.54);
        console.log(`${cm} Cm`)
        result.textContent = `${cm.toFixed(2)} cm`;
    }
}
 
btnConvert.addEventListener('click', operate)