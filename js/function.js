// document.getElementById('btn-blog').addEventListener('click',function(){
//     window.location='second.html';
// })

//  Using By Commond function  of Input Value.
function common(id){
 const commonInput=document.getElementById(id);
 const commonString=commonInput.value;
 const commonValue=parseFloat(commonString);
 return commonValue;
}
//  Using By Commond function  of innertext.
function text(text){
    const Text=document.getElementById(text);
    const TextValue=Text.innerText;
    return TextValue;
}
// creatre Element By Html File .
function displayData( Name, total) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      
      <td>${Name}</td>
      <td>${total}</td>
      <td>
      <button class="btn btn-sm btn-red-500">Square</button>
      </td>
      
    `;
    container.appendChild(tr);
    
  }

//   Start Dom Fuction use The Project.
let serial=0;
document.getElementById('btn1').addEventListener('click',function(){
    serial +=1;
    const name=text('text');
 const tri=common('tri');
 const tri2=common('tri2');
 const triTotal= 0.5*tri*tri2;
 displayData(name,triTotal);
})
// rec
document.getElementById('btn-rec').addEventListener('click',function(){
    serial +=1;
    const name=text('rec');
 const tri=common('rec1');
 const tri2=common('rec2');
 const triTotal= tri*tri2;
 displayData(name,triTotal);
})
