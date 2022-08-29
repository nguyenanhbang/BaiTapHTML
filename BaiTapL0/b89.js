function ll() {
    document.getElementById('dangnhap').innerHTML = "Đăng nhập hệ thống";
}
var passcu = 'admin';
function validate(){
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    if (user.trim().length == 0) {
        document.getElementById("loiuser").innerHTML = "Xin mời nhập Username";
        return false;
    }else {
        document.getElementById("loiuser").innerHTML = "";
    }
    if (pass.trim().length == 0) {
        document.getElementById("loipass").innerHTML = "Xin mời nhập Pass";
        return false;
    }else {
        document.getElementById('loipass').innerHTML = "";
    }
    if (user != "admin" && user !=null){
        document.getElementById("loipass").innerHTML = "Sai Username";
        return false;
    }else {
        document.getElementById('loipass').innerHTML = '';
    }
    if (pass != "passcu" && pass !=null){
        document.getElementById('loipass').innerHTML = "Sai PassWord";
        return false;
    }else {
        document.getElementById('loipass').innerHTML = '';
    }

    if(true) {
      document.getElementById('dangnhap').innerText = "Đăng nhập thành công !!!";
      document.getElementById('dangnhap').style.background = 'antiquewhite';
      document.getElementById('clone').click();  
    }
}
function lammoi() {
    document.getElementById('user').value = "";
    document.getElementById('pass').value = "";
    document.getElementById('oldpass').value = "";
    document.getElementById('newpass').value = "";
    document.getElementById('loipass').innerHTML = "";
    document.getElementById('loiuser').innerHTML = "";
    document.getElementById('loioldpass').innerHTML = "";
    document.getElementById('loinewpass').innerHTML = "";
    document.getElementById('tcong').innerHTML = "";
}
 function loaddinga() {
    document.getElementById('loadding').innerHTML = 'Loading...';
    setTimeout(function(){
        validate();
        document.getElementById('loadding').innerHTML = 'Login';
    }, 1000);
 }
 function forgot(){
    lammoi();
    document.getElementById('login').style.display = "none";
    document.getElementById('save').style.display = "block";
    document.getElementById('tenform').innerHTML = "Chang You Password";
 }
 function back() {
    lammoi();
    document.getElementById('login').style.display = "none";
    document.getElementById('save').style.display = "block";
    document.getElementById('tenform').innerHTML = "Member Login";
 }
 function validatenew() {
    const oldpass = document.getElementById('oldpass').value;
    const newpass = document.getElementById('newpass').value;

    if(oldpass.trim().length == 0){
        document.getElementById('loioldpass').innerHTML = "Xin mời nhập mật khẩu cũ";
        return false;
    }else {
        document.getElementById('loioldpass').innerHTML = "";
    }
    if (oldpass !== passcu) {
        document.getElementById('loioldpass').innerHTML = 'Sai Pass cũ';
        return false;
    }else {
        document.getElementById('loioldpass').innerHTML = "";
    }
    if(newpass.trim().length == 0) {
        document.getElementById('loinewpass').innerHTML = "xin nhập mật khẩu mới";
        return false;
    }else {
        document.getElementById('loinewpass').innerHTML = "";
    }
    if(newpass == oldpass) {
        document.getElementById('loinewpass').innerHTML = "Mật khẩu mới phải khác mật khẩu cũ";
        return false;
    }else {
        document.getElementById('loinewpass').innerHTML = "";
    }
    if (true){
        passcu=newpass;
        document.getElementById('tcong').innerHTML = "Bạn đã đổi mật khẩu thành công";
        document.getElementById('login').style.display = "block";
        document.getElementById('save').style.display = 'none';
    }
 }