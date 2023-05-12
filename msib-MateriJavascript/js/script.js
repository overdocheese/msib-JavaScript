function tambah(){
    var form = document.getElementById('calculator');
    var a1 = parseFloat(form.angka1.value);
    var a2 = parseFloat(form.angka2.value);
    
    if(isNaN(a1) && isNaN(a2)) {
        alert("Kolom Tidak Boleh Kosong!");
    }else{
        var total = a1 + a2;
        form.hasil.value = total;
    }
}

function kurang(){
    var form = document.getElementById('calculator');
    var a1 = parseFloat(form.angka1.value);
    var a2 = parseFloat(form.angka2.value);
    
    if(isNaN(a1) && isNaN(a2)) {
        alert("Kolom Tidak Boleh Kosong!");
    }else{
        var total = a1 - a2;
        form.hasil.value = total;
    }
}

function bagi(){
    var form = document.getElementById('calculator');
    var a1 = parseFloat(form.angka1.value);
    var a2 = parseFloat(form.angka2.value);
    
    if(isNaN(a1) && isNaN(a2)) {
        alert("Kolom Tidak Boleh Kosong!");
    }else{
        var total = a1 / a2;
        form.hasil.value = total;
    }
}

function kali(){
    var form = document.getElementById('calculator');
    var a1 = parseFloat(form.angka1.value);
    var a2 = parseFloat(form.angka2.value);
    
    if(isNaN(a1) && isNaN(a2)) {
        alert("Kolom Tidak Boleh Kosong!");
    }else{
        var total = a1 * a2;
        form.hasil.value = total;
    }
}

function pangkat(){
    var form = document.getElementById('calculator');
    var a1 = parseFloat(form.angka1.value);
    var a2 = parseFloat(form.angka2.value);
    
    if(isNaN(a1) && isNaN(a2)) {
        alert("Kolom Tidak Boleh Kosong!");
    }else{
        var total = a1 ** a2;
        form.hasil.value = total;
    }
}




