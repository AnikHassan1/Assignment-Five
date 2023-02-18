// document.getElementById('btn-blog').addEventListener('click',function(){
//     window.location='second.html';
// })

//  Using By Commond function  of Input Value.
function common(id) {
    const commonInput = document.getElementById(id);
    const commonString = commonInput.value;
    const commonValue = parseInt(commonString);
    commonInput.value='';
    return commonValue;
}
//  Using By Commond function  of innertext.
function text(text) {
    const Text = document.getElementById(text);
    const TextValue = Text.innerText;
    return TextValue;
}
// creatre Element By Html File .
function displayData(Name, total) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${Name}</td>
      <td>${total}cm <sup>2</sup></td>
      <td>
      <button class="btn btn-sm btn-red-500">Convert To m<sup>2</sup> </button>
      </td>
    `;
    container.appendChild(tr);

}

//   Start Dom Fuction use The Project.
let serial = 0;
document.getElementById('btn1').addEventListener('click', function () {
    serial += 1;
    const name = text('text');
    const tri = common('tri');
    const tri2 = common('tri2');
    const triTotal = 0.5 * tri * tri2;
    const value = triTotal.toFixed(2);
    displayData(name, value);
})
// rec
document.getElementById('btn-rec').addEventListener('click', function () {
    serial += 1;
    const name = text('rec');
    const tri = common('rec1');
    const tri2 = common('rec2');
    const triTotal = tri * tri2;
    const value = triTotal.toFixed(2);
    displayData(name, value);
})
// <!-- Parallelogram -->
document.getElementById('btn-para').addEventListener('click', function () {
    serial += 1;
    const name = text('para');
    const tri = common('para2');
    const tri2 = common('para1');
    const triTotal = tri * tri2;
    const value = triTotal.toFixed(2);
    displayData(name, value);
   
})
// <!-- Rhombus-->
document.getElementById('btn-rhom').addEventListener('click', function () {

    serial += 1;
    const name = text('rhom');
    const tri = common('rhom1');
    const tri2 = common('rhom2');
    
    if (tri <= 0 ||
         tri2 <=0) {
        const sms = alert('Enter d1 & d2 Number');
        return sms;
    } else {
        const triTotal = 0.5 * tri * tri2;
        const value = triTotal.toFixed(2);
        displayData(name, value);
        
    }


})
// pen
document.getElementById('btn-pen').addEventListener('click', function () {
    serial += 1;
    const name = text('pen');
    const tri = common('pen1');
    const tri2 = common('pen2');
    const triTotal = 0.5 * tri * tri2;
    const value = triTotal.toFixed(2);
    displayData(name, value);
})
// eli
document.getElementById('btn-ELi').addEventListener('click', function () {
    serial += 1;
    const name = text('eli');
    const tri = common('eli1');
    const tri2 = common('eli2');
    const triTotal = 3.1416 * tri * tri2;
    const value = triTotal.toFixed(2);
    displayData(name, value);
})


