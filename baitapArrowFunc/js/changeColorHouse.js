const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];

// tạo nút
let makeBTN = ()=>{
    let listBTN = ""; 
    colorList.map((item,index)=>{
        listBTN += `<button class="color-button ${item}" onClick="changeColor('house ${item}')"></button>`
    }) 
    document.getElementById("colorContainer").innerHTML = listBTN;
}

makeBTN();

//đổi màu nhà
let changeColor = (color)=>{
    document.getElementById("house").className = color;
}



