function doit() {
    let a = document.getElementById("b1").value;
    let b = document.getElementById("b2").value;
    let c = document.getElementById("b3").value;
    if (a=='' || b=='' || c=='') {
        alert("Vui lòng điền hết chỗ trống!")
    } else {
        alert("Gửi biểu mẫu thành công!");
        document.getElementById("b1").value = '';
        document.getElementById("b2").value = '';
        document.getElementById("b3").value = '';
    }
}
