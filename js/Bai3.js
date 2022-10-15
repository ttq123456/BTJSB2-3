/** 
 * Quy đổi tiền
 * Khối 1: Input
 *  Nhập vào số tiền USD cần quy đổi stUSD
 * 
 * Khối 2: Xử lý
 *  B1: Khởi tạo biến stUSD giá cho giá trị lấy từ form
 * 
 *  B2: Công thức
 *      vnd = usd * 23500
 *  B3: thông báo kết quả lên giao diện
 * 
 * Khối 3: Output
 *  Số tiền quy đổi ra VND 
 * 
 */

function doiTien(){
    var usd = document.getElementById("soTienUSD").value ;
    var vnd = usd * 23500;
    vnd = new Intl.NumberFormat('vn-VN').format(vnd);
    document.getElementById("soTienVND").innerHTML = vnd;
}

document.getElementById("btnDoi").onclick = doiTien ;
  
 console.log("Số tiền quy đổi ra VND: ",vnd);