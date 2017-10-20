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


    const dbRefObjecta = firebase.database().ref().child("employee/");
   

    dbRefObjecta.once('value', function (snapshot) {
        var data = snapshot.val();
        var list = [];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                position = data[key].position ? data[key].position : '';
                store = data[key].store ? data[key].store : '';
                name = data[key].name ? data[key].name : '';
                phone = data[key].cellphone ? data[key].cellphone : '';
                if (position.trim().length > 0) {
                    list.push({
                        poss: position,
                        stoo: store,
                        namm: name,
                        phoo: phone,
                        key: key
                    })
                }
            }
        }
        refreshUI(list);
    });

    function refreshUI(list) {
    

        for (var ii = 0; ii < list.length; ii++) {
            if (list[ii].stoo == sessionStorage.getItem("test")) {
                var num = document.getElementById("mytable").rows.length;
                var Tr = document.getElementById("mytable").insertRow(num);
                Td = Tr.insertCell(Tr.cells.length);
                Td.innerHTML = list[ii].key;
                Td = Tr.insertCell(Tr.cells.length);
                Td.innerHTML = list[ii].poss;
                Td = Tr.insertCell(Tr.cells.length);
                Td.innerHTML = list[ii].stoo;
                Td = Tr.insertCell(Tr.cells.length);
                Td.innerHTML = "<input id=inpp" + list[ii].key + " type=text disabled=disabled style=width:100px value=" + list[ii].namm + " />";
                Td = Tr.insertCell(Tr.cells.length);
                Td.innerHTML = "<input id=iupp" + list[ii].key + " type=text disabled=disabled style=width:100px value=" + list[ii].phoo + " />";
                Td = Tr.insertCell(Tr.cells.length);
                Td.innerHTML = "<button id=butt" + list[ii].key + " type=submit style=background:#148df9; onclick=change(" + list[ii].key + ",this.parentNode.parentNode.rowIndex)>修改</button>";
                Td = Tr.insertCell(Tr.cells.length);
                Td.innerHTML = "<button type=submit style=background:#ff0000; onclick=del(this.parentNode.parentNode.rowIndex)>刪除</button>";
            }
        }
    }
})

function change(aa,bb) {
    var btn = document.getElementById("butt" + aa);
    var name = document.getElementById("inpp" + aa);
    var phone = document.getElementById("iupp" + aa);
    if (btn.innerHTML == "修改") {
        name.disabled = false;
        phone.disabled = false;
        btn.innerHTML = "存檔";
    }
    else {
        var posi = document.getElementById("mytable").rows[bb].cells[1].innerHTML;
        var stor = document.getElementById("mytable").rows[bb].cells[2].innerHTML;
        var postRef = firebase.database().ref('/employee/' + aa);
        postRef.once("value").then(function (snapshot) {
            var name = document.getElementById("inpp" + aa).value;
            var phone = document.getElementById("iupp" + aa).value; 
                postRef.set({
                    name: name,
                    cellphone: phone,
                    position: posi,
                    store:stor
                }).then(function () {
                    console.log("新增Post成功");
                })
            })
        name.disabled = true;
        phone.disabled = true;
        btn.innerHTML = "修改";
    }
}

function del(aa) {
    var keyy = document.getElementById("mytable").rows[aa].cells[0].innerHTML;
    var postRef = firebase.database().ref('/employee/' + keyy);
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
    Td.innerHTML = "<input id=idd type=text style=width:100px />";
    Td = Tr.insertCell(Tr.cells.length);
    Td.innerHTML = "<input id=poss type=text style=width:100px  />";
    Td = Tr.insertCell(Tr.cells.length);
    Td.innerHTML =sessionStorage.getItem("test");
    Td = Tr.insertCell(Tr.cells.length);
    Td.innerHTML = "<input id=namm type=text  style=width:100px />";
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
    var idd = document.getElementById("idd").value;
    var postre = firebase.database().ref('/employee/');
    postre.once("value").then(function (snapshot) {
        var count = snapshot.child('/' + idd + '/').val();
        if (count == null) {
            test();
        }
        else{
            alert("已經有此員工編號了喔!");
        }
    })
}

function test() {
    var idd = document.getElementById("idd").value;
    var poss = document.getElementById("poss").value;
    var namm = document.getElementById("namm").value;
    var cell = document.getElementById("cell").value;
    var postRef = firebase.database().ref('/employee/' + idd);

    postRef.once("value").then(function (snapshot) {
        postRef.set({
            name: namm,
            cellphone: cell,
            position: poss,
            store: sessionStorage.getItem("test")
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