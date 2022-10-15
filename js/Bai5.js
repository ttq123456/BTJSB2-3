/**
 * Tính tổng các chữ số có hai chữ số
 * Khối 1: Input
 *  Nhập vào số có hai chữ số 
 * 
 * Khối 2: Các bước xử lý
 *     B1: Khởi tạo biến num và lấy giá trị từ form
 *     B2: Công thức
 *          phần chục = num / 10 và lấy phần nguyên: Math.floor(num/10)
 *          phần đơn vị = lấy num % 10
 *      tong = phần chục + phần đơn vị
 *     B3: Thông báo kết quả lên giao diện
 * 
 * Khối 3: Output
 *  Tổng các chữ số
 * 
 */

function tinhTong() {
    var num = document.getElementById("numhaiCS").value;
    num = Number(num);
    var tong = Math.floor(num/10) + (num % 10);  
    
    document.getElementById("kq").innerHTML = tong ;   
}
 
 document.getElementById("btnhai").onclick = tinhTong;
 console.log("Tổng số các chữ số là: ",tong);