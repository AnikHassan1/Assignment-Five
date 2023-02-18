document.getElementById('btn-first').addEventListener('click',function(){
    window.location .href='Secound.html';
})

//      The Project use of Dom Fuction. <!-- Part 1:  Triangle-->
let serial = 0;
document.getElementById('btn-triangel').addEventListener('click', function () {
    serial += 1;
    const name = innertextElement('Inner-Text');
    const fristInput = inputElementValue('triangel-1');
  
    const secoundInputValue = inputElementValue('triangel-2');
  
    const totalValue = 0.5 * fristInput * secoundInputValue;
    const Trangglevalue = totalValue.toFixed(2);
    displayData(name, Trangglevalue);
})

//<!--Part 2: Rectangle -->
document.getElementById('btn-Rectangle').addEventListener('click', function () {
    serial += 1;
    const name = innertextElement('Rectangle-Text');
    const RectangleInputElement = inputElementValue('Rectangle-1');
    const inputRectangle = inputElementValue('Rectangle-2');
    const ractangleTotal = RectangleInputElement * inputRectangle;
    const rcttangleValue = ractangleTotal.toFixed(2);
    displayData(name, rcttangleValue);
})
//  <!--Part 3: Parallelogram -->
document.getElementById('btn-Paral').addEventListener('click', function () {
    serial += 1;
    const name = innertextElement('paral-text');
    const inputPara = inputElementValue('paral-1');
    const inputParaValue = inputElementValue('paral-2');
    const paralTotal = inputPara * inputParaValue;
    const paraValue = paralTotal.toFixed(2);
    displayData(name, paraValue);
})
//  <!--Part 4: Rhombus-->
document.getElementById('Rhombus-btn').addEventListener('click', function () {
    serial += 1;
    const name = innertextElement('Rhombus-text');
    const rhombusInput = inputElementValue('Rhombus-1');
    const rhombusInputValue = inputElementValue('Rhombus-2');
    if (rhombusInput <= 0 ||
         rhombusInputValue <=0) {
        const sms = alert('Enter d1 & d2 Number');
        return sms;
    } else {
        const rhomsbusTotal = 0.5 * rhombusInput * rhombusInputValue;
        const rhombusValue = rhomsbusTotal.toFixed(2);
        displayData(name, rhombusValue);
    }
})
// <!--Part 5: Pentagon -->
document.getElementById('btn-Pentagon').addEventListener('click', function () {
    serial += 1;
    const name = innertextElement('Pentagon');
    const pentagonInput = inputElementValue('Pentagon-1');
    const pentagonInputValue = inputElementValue('Pentagon-2');
    const pentagonTotal = 0.5 * pentagonInput * pentagonInputValue;
    const pentagonValue = pentagonTotal.toFixed(2);
    displayData(name, pentagonValue);
})
//       <!--Part 6: Ellipse -->
document.getElementById('btn-Ellipse').addEventListener('click', function () {
    serial += 1;
    const name = innertextElement('Ellipse');
    const ellipseInput = inputElementValue('Ellipse-1');
    const ellipseInputValue = inputElementValue('Ellipse-2');
    const elliipsTotal = 3.1416 * ellipseInput * ellipseInputValue;
    const ellipsValue = elliipsTotal.toFixed(2);
    displayData(name, ellipsValue);
})

//   Commond function  Using By Input Value.
function inputElementValue(id) {
    const elementInput = document.getElementById(id);
    const elementString = elementInput.value;
    const elementValue = parseInt(elementString);
    elementInput.value='';
    return elementValue;
}
//   Commond function  Using By innertext.
function innertextElement(text) {
    const Text = document.getElementById(text);
    const TextValueIInner = Text.innerText;
    return TextValueIInner;
}
//  Html File By creatre Element  .
function displayData(Name, totalInputValue) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${Name}</td>
      <td>${totalInputValue}cm <sup>2</sup></td>
      <td>
      <button id="btn-con" class="btn btn-sm btn-red-500  lg:w-full button">Convert To m <sup>2</sup> </button>
      </td>
    `;
    container.appendChild(tr);
}