/**
 * Tính tiền lương nhân viên
 * Khối 1: Input
 *      Nhập dữ liệu số ngày làm, lương một ngày
 * 
 * Khối 2: Xử lý
 *  B1: Lấy dữ liệu số ngày làm và lương một ngày nhập vào gán cho bien soNgay, luongNgay
 *  B2: Lập công thức
 *      Luong = soNgay * luongNgay;
 *  B3: Thông báo kết quả trên giao diện
 * 
 * Khối 3: Output
 *  Số lương nhận được 
 * 
 */

 function tinhluong() {
    var sNgay = document.getElementById("soNgay").value;
    var lNgay = document.getElementById("luongNgay").value;

    console.log(sNgay)

    var tongluong = sNgay * lNgay;

    console.log(tongluong);

    document.getElementById("luong").innerHTML = tongluong;
 }
 
 document.getElementById("btnTinh").onclick = tinhluong;