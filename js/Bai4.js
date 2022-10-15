/**
 * Tính diện tích và chu vi hình chữ nhật
 * Khối 1: Input
 *  Nhập vào chiều dài và chiều rộng của hình chữ nhật dai, rong
 * 
 * Khối 2: Các bước xử lý
 *  B1: Khởi tạo biến và gán giá trị từ form
 *  B2: Công thức
 *      dienTich = dai * rong
 *      chuVi = (dai + rong) * 2
 *  B3: Thông báo kết quả lên màn hình
 * 
 */

function tinhDtCv() {
    var dai = document.getElementById("chieuDai").value;
    var rong = document.getElementById("chieuRong").value ;
    var dienTich = dai * rong;
    var chuVi = (Number(dai) + Number(rong)) * 2

    document.getElementById("result").innerHTML = "Diện tích: " + dienTich + ", Chu vi: " + chuVi;
}

document.getElementById("btnTinhDT").onclick = tinhDtCv;
 
 