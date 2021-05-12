let Chu = document.querySelector(".heading").innerHTML;
console.log(Chu);

let arrChu = [...Chu];
// h o v e r m e
console.log(arrChu);

let createBTN = ()=>{
    listBTN = ""
    arrChu.map((item,index)=>{
        listBTN += `<span>${item}</span>`
    })
    let Chu = document.querySelector(".heading").innerHTML = listBTN
}
createBTN();