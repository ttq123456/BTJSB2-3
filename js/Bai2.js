/**
 * Tính trung bình 5 số
 * Khối 1: Input
 *  Nhập vào 5 số num1, num2, num3, num4, num5
 * 
 * Khối 2: Xử lý
 *  B1: Khởi tạo biến và lấy giá trị từ form
 *  B2: Công thức
 *      trungBinh = (num1 + num2 + num3 + num4 + num5) /5
 *  B3: thông báo kết quả lên giao diện
 * 
 * Khối 3: Output
 *  Giá trị trung bình của 5 số
 * 
 */

function tinhTB() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    var num5 = document.getElementById("number5").value;
    var tb = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5))/5;
    
    document.getElementById("trungbinh").innerHTML = tb ;
}
 
    document.getElementById("btnTB").onclick = tinhTB ; 
  console.log("Giá trị trung bình của 5 số: ",tb);