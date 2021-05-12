
let khoiLop1va2 = (...diem) => {
    let chia = diem.length;
    let dtb = 0;
    for (var i = 0; i < chia; i++) {
        dtb += diem[i];
    }
    return dtb / chia
}

document.getElementById("btnKhoi1").addEventListener("click", () => {
    let toan = document.getElementById("inpToan").value;
    let ly = document.getElementById("inpLy").value;
    let hoa = document.getElementById("inpHoa").value;

    DTB = khoiLop1va2(+toan, +ly, +hoa);
    document.getElementById("tbKhoi1").innerHTML = DTB
})

document.getElementById("btnKhoi2").addEventListener("click", () => {
    let van = document.getElementById("inpVan").value;
    let su = document.getElementById("inpSu").value;
    let dia = document.getElementById("inpDia").value;
    let english = document.getElementById("inpEnglish").value;

    DTB = khoiLop1va2(+van, +su, +dia, +english);
    document.getElementById("tbKhoi2").innerHTML = DTB
})