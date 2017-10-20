var list;
var listt;
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

    var divv = document.getElementById("X");
    var div = document.getElementById("mytable");
    divv.textContent = sessionStorage.getItem("test1");
    var text1 = divv.textContent;

    const dbRefObjecta = firebase.database().ref().child("Coffee/");
    dbRefObjecta.once('value', function (snapshot) {
        var data = snapshot.val();
        list = [];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                coffeeName = data[key].coffeeName ? data[key].coffeeName : '';
                coffee = data[key].coffee ? data[key].coffee : '';
                if (coffeeName.trim().length > 0) {
                    list.push({
                        name: coffeeName,
                        coffee: coffee,
                        key: key
                    })
                }
            }
        }
        refreshUI(list);
    });

    function refreshUI(list) {
        
        var name = [];
        var count = [];
        var style = [];
        
        for (var ii = 0; ii <= list.length; ii++) {
            var aa = sessionStorage.getItem("name" + ii);
            if (aa != "") {
                var Tr = document.getElementById("mytable").insertRow(num);
                var num = document.getElementById("mytable").rows.length;
                Td = Tr.insertCell(Tr.cells.length);
                Td.innerHTML = sessionStorage.getItem("name" + ii);
                Td = Tr.insertCell(Tr.cells.length);
                Td.innerHTML = sessionStorage.getItem("count" + ii);
                Td = Tr.insertCell(Tr.cells.length);
                Td.innerHTML = sessionStorage.getItem("style" + ii);
            }
            
        }
    }


})

var coffee;
var num;
var sort;
var cellphone = sessionStorage.getItem("test1");;
var div;

function search() {
    div = document.getElementById("mytable");
    for (var i = 1; i < div.rows.length; i++) {        
        //新增myCoffee
        increasemyCoffee(i);
        //新增myQ
        increasemyQ(i);
    }
    alert("新增成功");
    var ab = document.getElementById("comfirm");
    var ac = document.getElementById("cancel");
    ab.disabled = "disable";
    ac.disabled = "disable";

   // gogo();
}

function increasemyCoffee(i) {
    var today = new Date();
    var mooo = (today.getMonth() + 1);

    if (mooo < 10) {
        mooo = "0" + mooo.toString();
    }
    var daaa = today.getDate();
    if (daaa < 10) {
        daaa = "0" + daaa.toString();
    }

    coffee = document.getElementById("mytable").rows[i].cells[0].innerHTML;
    num = document.getElementById("mytable").rows[i].cells[1].innerHTML;
    sort = document.getElementById("mytable").rows[i].cells[2].innerHTML;

    var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');

    postRef.push().set({
        coffeeNo: sort+coffee,
        quantity: num,
        date: today.getFullYear().toString() + mooo + daaa,
        store: sessionStorage.getItem("test"),
        cashier: sessionStorage.getItem("name")
    }).then(function () {
        console.log("新增Post成功");
    }).catch(function (err) {
        console.error("新增Post錯誤：", err);
    })

}

function increasemyQ(i) {
    coffee = document.getElementById("mytable").rows[i].cells[0].innerHTML;
    num = document.getElementById("mytable").rows[i].cells[1].innerHTML;
    sort = document.getElementById("mytable").rows[i].cells[2].innerHTML;
    var co = coffee;
    var nu = num;
    var so = sort;

    var postReff = firebase.database().ref('/myQ/' + cellphone + '/' + co + '/' + sessionStorage.getItem("test") + '/' + so + '/');
    postReff.once("value").then(function (snapshot) {
        var count = snapshot.child('/count/').val();
        if (count == null) {
            postReff.set({
                coffeeNo: co,
                count: nu,
                store: sessionStorage.getItem("test"),
                style: so
            }).then(function () {
                console.log("新增Post成功");
            }).catch(function (err) {
                console.error("新增Post錯誤：", err);
            })
        }
        else if (count != null) {
            postReff.set({
                coffeeNo: co,
                count: parseInt(count) + parseInt(nu),
                store: sessionStorage.getItem("test"),
                style: so
            }).then(function () {
                console.log("新增Post成功");
            }).catch(function (err) {
                console.error("新增Post錯誤：", err);
            })
        }
        else {
            alert("發生錯誤，請重新檢查");
        }
    })

    
}


function gogo()
{
    window.location.href = "login.htm";
    return false;
}
