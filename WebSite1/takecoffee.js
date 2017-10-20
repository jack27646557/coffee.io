var coffeelist = [];
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

    var div = document.getElementById("X");
    div.textContent = sessionStorage.getItem("test1");
    var text = div.textContent;


    const dbRefObjectaaa = firebase.database().ref().child("Coffee/");
    dbRefObjectaaa.once('value', function (snapshot) {
        var data = snapshot.val();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                coffee = data[key].coffee ? data[key].coffee : '';
                style = data[key].style ? data[key].style : '';
                if (coffee.trim().length > 0) {
                    coffeelist.push({
                        coffeena: coffee,
                        stylee: style,
                        key: key
                    })
                }
            }
        }
        coffeelistt(coffeelist);
    });

    function coffeelistt(listt) {
        for (i = 0; i < listt.length; i++) {
            const dbRefObjecta = firebase.database().ref().child("myQ/" + text + "/" + listt[i].coffeena + "/" + sessionStorage.getItem("test") + "/" + listt[i].stylee + "/");
            dbRefObjecta.once('value', function (snapshot) {
                var list = [];

                var coffeeNo = snapshot.child('/coffeeNo/').val();
                var count = snapshot.child('/count/').val();
                var store = snapshot.child('/store/').val();
                var style = snapshot.child('/style/').val();
                if (coffeeNo != null) {
                    list.push({
                        name: coffeeNo,
                        st: count,
                        sty: store,
                        coffeeNo: style
                    })
                }   
                
                refreshUI(list);

            });
        }

    }

    function refreshUI(list) {
            for (var ii = 0; ii < list.length; ii++) {
            var num = document.getElementById("mytable").rows.length;
            var Tr = document.getElementById("mytable").insertRow(num);
            Td = Tr.insertCell(Tr.cells.length);
            Td.innerHTML = list[ii].name;
            Td = Tr.insertCell(Tr.cells.length);
            Td.innerHTML = list[ii].coffeeNo;
            Td = Tr.insertCell(Tr.cells.length);
            Td.innerHTML = list[ii].sty;
            Td = Tr.insertCell(Tr.cells.length);
            Td.innerHTML = list[ii].st;
            Td = Tr.insertCell(Tr.cells.length);
            Td.innerHTML ="<button type=submit style=background:#148df9; onclick=test(this.parentNode.parentNode.rowIndex) >修改</button>";
            };
        }
})

function test(aa) {
            var coffee = document.getElementById("mytable").rows[aa].cells[0];
            var style = document.getElementById("mytable").rows[aa].cells[1];
            var num = document.getElementById("mytable").rows[aa].cells[3];
            var countNo = document.getElementById("countNo").value;
            YA(coffee.innerHTML, style.innerHTML, num.innerHTML,countNo,aa);

}

function YA(coffee, sty, num,countNo,aa) {
    var today = new Date();
    var mooo = (today.getMonth() + 1);

    if (mooo < 10) {
        mooo = "0" + mooo.toString();
    }
    var daaa = today.getDate();
    if (daaa < 10) {
        daaa = "0" + daaa.toString();
    }
    var postRefee = firebase.database().ref('/myCoffee/' + sessionStorage.getItem("test1") + '/');
    //-------------------
        var postRef = firebase.database().ref('/myQ/' + sessionStorage.getItem("test1") + '/'+coffee+'/' + sessionStorage.getItem("test") + '/' + sty + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if(count<countNo)
                {
                    alert("你沒有這麼多杯");
                }
                else if (countNo <= 0 || countNo == "") {
                    alert("請輸入正確的杯數");
                }
                else if (count == countNo) {
                    postRefee.push().set({
                        coffeeNo: sty + coffee,
                        quantity: "-" + countNo,
                        date: today.getFullYear().toString() + mooo + daaa,
                        store: sessionStorage.getItem("test"),
                        cashier: sessionStorage.getItem("name")
                    }).then(function () {
                        console.log("新增Post成功");
                    })
                    firebase.database().ref('/myQ/' + sessionStorage.getItem("test1") + '/' + coffee + '/' + sessionStorage.getItem("test") + '/' + sty + '/').remove().then(function () {
                            console.log("成功刪除")
                        });
                }
                else
                {
                    postRefee.push().set({
                        coffeeNo: sty+coffee,
                        quantity: "-"+countNo,
                        date: today.getFullYear().toString() + mooo + daaa,
                        store: sessionStorage.getItem("test"),
                        cashier: sessionStorage.getItem("name")
                    }).then(function () {
                        console.log("新增Post成功");
                    })
                //--------------------
                   postRef.set({
                        coffeeNo: coffee,
                        count: parseInt(count) - countNo,
                        store: sessionStorage.getItem("test"),
                        style: sty
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                show();
            })
            
}

function show() {
    window.location.href = "takecoffee.html";
    return false;
}

function minus() {
    var countNo = document.getElementById("countNo").value;
    if (countNo <= 0) {
        countNo = 0;
        document.getElementById("countNo").value = countNo;
    }
    else {
        countNo--;
        document.getElementById("countNo").value = countNo;
    }
}

function add() {
    var countNo = document.getElementById("countNo").value;
    countNo++;
    document.getElementById("countNo").value = countNo;
}


