$(document).ready(function () {
    const config = {
        apiKey: "AIzaSyCJm2bz1AvJNnYaLn5qz0J0PsLBQObbQbQ",
        authDomain: "test-bfe7d.firebaseapp.com",
        databaseURL: "https://test-bfe7d.firebaseio.com",
        projectId: "test-bfe7d",
        storageBucket: "test-bfe7d.appspot.com",
        messagingSenderId: "402530968567"

    };
    firebase.initializeApp(config);


    const dbRefObjecta = firebase.database().ref().child("Coffee/");
   

    dbRefObjecta.once('value', function (snapshot) {
        var data = snapshot.val();
        var list = [];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                cla = data[key].cla ? data[key].cla : '';
                coffee = data[key].coffee ? data[key].coffee : '';
                coffeename = data[key].coffeeName ? data[key].coffeeName : '';
                coffeeno = data[key].coffeeNo ? data[key].coffeeNo : '';
                style = data[key].style ? data[key].style : '';
                if (cla.trim().length > 0) {
                    list.push({
                        claa: cla,
                        coffeee: coffee,
                        coffeenamee: coffeename,
                        coffeenoo: coffeeno,
                        stylee: style,
                        key: key
                    })
                }
            }
        }
        refreshUI(list);
    });

    function refreshUI(list) {
    
        for (var ii = 0; ii < list.length; ii++) {
            var num = document.getElementById("mytable").rows.length;
            var Tr = document.getElementById("mytable").insertRow(num);
            Td = Tr.insertCell(Tr.cells.length);
            Td.innerHTML = list[ii].coffeenoo;
            Td = Tr.insertCell(Tr.cells.length);
            Td.innerHTML = "<input id=inpcla" + list[ii].key + " type=text disabled=disabled style=width:100px value=" + list[ii].claa + " />";
            Td = Tr.insertCell(Tr.cells.length);
            Td.innerHTML = "<input id=inpcof" + list[ii].key + " type=text disabled=disabled style=width:200px value=" + list[ii].coffeee + " />";
            Td = Tr.insertCell(Tr.cells.length);
            Td.innerHTML = "<input id=inpp" + list[ii].key + " type=text disabled=disabled style=width:200px value=" + list[ii].coffeenamee + " />";
            Td = Tr.insertCell(Tr.cells.length);
            Td.innerHTML = "<input id=iupp" + list[ii].key + " type=text disabled=disabled style=width:100px value=" + list[ii].stylee + " />";
            Td = Tr.insertCell(Tr.cells.length);
            Td.innerHTML = "<button id=butt" + list[ii].key + " type=submit style=background:#148df9; onclick=change(" + list[ii].key + ",this.parentNode.parentNode.rowIndex)>修改</button>";
            Td = Tr.insertCell(Tr.cells.length);
            Td.innerHTML = "<button type=submit style=background:#ff0000; onclick=del(this.parentNode.parentNode.rowIndex)>刪除</button>";
            
        }
    }
})

function change(aa, bb) {
    var claa = document.getElementById("inpcla" + aa);
    var coffee = document.getElementById("inpcof" + aa);
    var btn = document.getElementById("butt" + aa);
    var name = document.getElementById("inpp" + aa);
    var phone = document.getElementById("iupp" + aa);
    if (btn.innerHTML == "修改") {
        claa.disabled = false;
        coffee.disabled = false;
        name.disabled = false;
        phone.disabled = false;
        btn.innerHTML = "存檔";
    }
    else {
        var cofno = document.getElementById("mytable").rows[bb].cells[0].innerHTML;
        var postRef = firebase.database().ref('/Coffee/' + aa);
        postRef.once("value").then(function (snapshot) {
            var name = document.getElementById("inpp" + aa).value;
            var phone = document.getElementById("iupp" + aa).value;
            var claa = document.getElementById("inpcla" + aa).value;
            var coffee = document.getElementById("inpcof" + aa).value;
            postRef.set({
                cla: claa,
                coffee: coffee,
                coffeeName: name,
                coffeeNo: cofno,
                style: phone
                }).then(function () {
                    console.log("新增Post成功");
                })
        })
        claa.disabled = true;
        coffee.disabled = true;
        name.disabled = true;
        phone.disabled = true;
        btn.innerHTML = "修改";
    }
}

function del(aa) {
    var keyy = document.getElementById("mytable").rows[aa].cells[0].innerHTML;
    var postRef = firebase.database().ref('/Coffee/' + keyy);
    if (confirm("確定要刪除嗎?")) {
        postRef.remove().then(function () {
            console.log("成功刪除")
        })
        window.location.reload();
    }
}
function add()
{
    var num = document.getElementById("mytable").rows.length;
    var Tr = document.getElementById("mytable").insertRow(num);
    Td = Tr.insertCell(Tr.cells.length);
    Td.innerHTML = "<input id=noo type=text style=width:30px />";
    Td = Tr.insertCell(Tr.cells.length);
    Td.innerHTML = "<input id=idd type=text style=width:100px />";
    Td = Tr.insertCell(Tr.cells.length);
    Td.innerHTML = "<input id=poss type=text style=width:200px  />";
    Td = Tr.insertCell(Tr.cells.length);
    Td.innerHTML = "<input id=namm type=text  style=width:200px />";
    Td = Tr.insertCell(Tr.cells.length);
    Td.innerHTML = "<input id=cell type=text  style=width:100px />";
    Td = Tr.insertCell(Tr.cells.length);
    Td.innerHTML = "<button type=submit style=background:#148df9; onclick=save(this.parentNode.parentNode.rowIndex)>儲存</button>";
    Td = Tr.insertCell(Tr.cells.length);
    Td.innerHTML = "<button type=submit style=background:#ff0000; onclick=cancel(this.parentNode.parentNode.rowIndex)>取消</button>";
    var btnn = document.getElementById("create");
    btnn.disabled = true;
}
function cancel(aa)
{
    document.getElementById("mytable").rows[aa].remove();
    var btnn = document.getElementById("create");
    btnn.disabled = false;
}
function save(aa)
{
    var noo = document.getElementById("noo").value;
    var postre = firebase.database().ref('/Coffee/');
    postre.once("value").then(function (snapshot) {
        var count = snapshot.child('/' + noo + '/').val();
        if (count == null) {
            test();
        }
        else{
            alert("已經有此咖啡編號了喔!");
        }
    })
}

function test() {
    var noo = document.getElementById("noo").value;
    var idd = document.getElementById("idd").value;
    var poss = document.getElementById("poss").value;
    var namm = document.getElementById("namm").value;
    var cell = document.getElementById("cell").value;
    var postRef = firebase.database().ref('/Coffee/' + noo);

    postRef.once("value").then(function (snapshot) {
        postRef.set({
            cla: idd,
            coffee: poss,
            coffeeName: namm,
            coffeeNo: noo,
            style: cell
        }).then(function () {
            console.log("新增Post成功");
        })
    })
    if (alert("新增成功")) {
        window.location.reload();
    }
    else {
        window.location.reload();
    }
}