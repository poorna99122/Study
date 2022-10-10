const btnPrint = document.getElementById("btnPrint");
const inpNum = document.getElementById("inpNum");
const listNum = document.getElementById("ListNum");


//DOM - Document Obejct Modal
btnPrint.onclick = function() {
    const start = Date.now();
    // console.log(inpNum.value);
    const num = parseInt(inpNum.value);
    console.log(typeof num);
    let data = '';
    for(let i=1;i<=num;i++){
        const li = document.createElement('li');
        li.innerText = i
        listNum.appendChild(li);
    }
    listNum.innerHTML = data;
    const end = Date.now();
    console.log("Time Taken is "+(end -start));
}


