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
    div.textContent = sessionStorage.getItem("name");
    var text = div.textContent;
    var divv = document.getElementById("XX");
    divv.textContent = sessionStorage.getItem("position");
    var textt = divv.textContent;

    check();
    
    sessionStorage.setItem("show", 0);
}
)
function check() {
    var pos = sessionStorage.getItem("position");
    if (pos != "店長" && pos != "副店長"&& pos != "Superuser") {
        var btnn1 = document.getElementById("management");
        btnn1.style.display = "none";

    }
    if (pos != "Superuser") {
        var btnn2 = document.getElementById("managecoffee");
        btnn2.style.display = "none";
    }
    if (pos == "Superuser") {
        var btnn = document.getElementById("searchbtn");
        btnn.style.display = "none";
    }


    

}

var title = document.getElementById("cell");

//按鈕
var searchUserInfoBtn = document.getElementById("searchbtn");


function search() {
    var a = document.getElementById("btn1");
    var b = document.getElementById("btn2");
    var c = document.getElementById("btn3");
    if (a.checked == true && b.checked == true && c.checked == true) {
        alert("請選擇寄杯/取杯/明細");
    }
    else if (a.checked == true && b.checked != true && c.checked != true) {
        var title = document.getElementById("cell").value;
        if (title == "") {
            alert("請輸入客戶號碼!");
        }
        else {
            var db = firebase.database();
            db.ref().child("member/" + title + "/").on("value", function (snap) {
                var data = null;

                data = snap.val();

                if (data != null) {
                    sessionStorage.setItem("test1", title.toString());
                    window.location.href = "choice.html";
                    return false;
                }
                else {
                    alert("查無此會員!");
                }

            });
        }
    }
    else if (b.checked == true && a.checked != true && c.checked != true) {
        var title = document.getElementById("cell").value;
        if (title == "") {
            alert("請輸入客戶號碼!");
        }
        else {
            var db = firebase.database();
            db.ref().child("member/" + title + "/").on("value", function (snap) {
                var data = null;

                data = snap.val();

                if (data != null) {
                    sessionStorage.setItem("test1", title.toString());
                    window.location.href = "takecoffee.html";
                    return false;
                }
                else {
                    alert("查無此會員!");
                }

            });
        }
    } else if (c.checked == true && b.checked != true && a.checked != true) {
        var title = document.getElementById("cell").value;
        if (title == "") {
            alert("請輸入客戶號碼!");
        }
        else {
            var db = firebase.database();
            db.ref().child("member/" + title + "/").on("value", function (snap) {
                var data = null;

                data = snap.val();

                if (data != null) {
                    sessionStorage.setItem("test1", title.toString());
                    window.location.href = "getcoffee.html";
                    return false;
                }
                else {
                    alert("查無此會員!");
                }

            });
        }
    }
    else {
        alert("請選擇寄杯/取杯/明細");
    }
}