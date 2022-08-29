function load() {
    const so = document.getElementById('so').value;
    const chieudai = document.getElementById('chieudai').value;
    const chieurong = document.getElementById('chieurong').value;
    const margin = document.getElementById('margin').value;
    var check = true;

    if (isNaN(so) && so != null) {
        document.getElementById('loiso').innerHTML = "chỉ nhập số";
        check = false;
    }
    if (so < 0 && so != null) {
        document.getElementById('loiso').innerHTML = "nhập ô số lớn hơn 0";
        check = false;
    }
    if (isNaN(chieudai) && chieudai != null) {
        document.getElementById('loichieudai').innerHTML = "chỉ nhập số";
        check = false;
    }
    if (chieudai < 0 && chieudai != null) {
        document.getElementById('loichieudai').innerHTML = "width lớn hơn 0";
        check = false;
    }
    if (isNaN(chieurong) && chieurong != null) {
        document.getElementById('loichieurong').innerHTML = "chỉ nhập số";
        check = false;
    }
    if (chieurong < 0 && chieurong != null) {
        document.getElementById('loichieurong').innerHTML = "height lớn hơn 0";
        check = false;
    }
    if (isNaN(margin) && margin != null) {
        document.getElementById('loimargin').innerHTML = "chỉ nhập số";
        check = false;
    }
    if (margin < 0 && chieumarginrong != null) {
        document.getElementById('loimargin').innerHTML = "margin lớn hơn 0";
        check = false;
    }
    if (check) {
        if (so != null){
            var html = '';
            let htmlspan = '';
            for (let index= 1; index<= so; index++){
                html += '<li></li>';
                htmlspan += '<span></span>'
            }
            document.getElementById('chanle').innerHTML = html;
            document.getElementById('span').innerHTML = htmlspan;
        }
        if (chieudai != null){
            const li =document.getElementsByTagName('li');
            const span =document.getElementsByTagName('span');
            for(let index= 0; index < li.length; index++){
                li[index].style.width = chieudai + "px";
            }
            for(let index= 0; index < span.length; index++){
                span[index].style.width = chieudai + "px";
            }
        }
        if (chieurong != null){
            const li =document.getElementsByTagName('li');
            const span =document.getElementsByTagName('span');
            for(let index= 0; index<li.length; index++){
                li[index].style.height = chieurong + "px";
            }
            for(let index= 0; index<span.length; index++){
                span[index].style.height = chieurong + "px";
            }
        }
        if(margin !=null){
            const li =document.getElementsByTagName('li');
            const span =document.getElementsByTagName('span');
            for(let index= 0; index<li.length; index++){
                li[index].style.margin = margin + "px";
            }
            for(let index= 0; index<span.length; index++){
                span[index].style.margin = margin + "px";
            }
        }
    }
}