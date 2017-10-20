(function () {

    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyCJm2bz1AvJNnYaLn5qz0J0PsLBQObbQbQ",
        authDomain: "test-bfe7d.firebaseapp.com",
        databaseURL: "https://test-bfe7d.firebaseio.com",
        projectId: "test-bfe7d",
        storageBucket: "test-bfe7d.appspot.com",
        messagingSenderId: "402530968567"

    };
    firebase.initializeApp(config);

    // Get elements
    const preObject = document.getElementById('object');

    // Create references
    const dbRefObject = firebase.database().ref().child('Coffee');

    // Sync object changes
    /*dbRefObject.on('value', snap => {
    
      preObject.innerText=JSON.stringify(snap.val(),null,3);
      
    });*/



}());
const preObject = document.getElementById('object');

var title = document.getElementById("postTitle");

//const dbRefObjecta = firebase.database().ref().child("myCoffee/"+title);
//按鈕
var searchUserInfoBtn = document.getElementById("searchUserInfoBtn");
//員工登入檢查    
function search() {
    const preObject = document.getElementById('object');
    var title = document.getElementById("postTitle").value;
    if (title == "") {
        alert("請輸入員工號碼!");
    }
    else {
        var db = firebase.database();
        db.ref().child("employee/" + title + "/").on("value", function (snap) {
            var data = null;

            data = snap.val();

            if (data != null) {
                var loc = firebase.database().ref('/employee/'+title.toString()+'/');
                loc.once("value").then(function (snapshot) {
                    var sto = snapshot.child('/store/').val();
                    var pos = snapshot.child('/position/').val();
                    var na = snapshot.child('/name/').val();
                    sessionStorage.setItem("test", sto.toString());
                    sessionStorage.setItem("position", pos.toString());
                    sessionStorage.setItem("name", na.toString());
                    window.location.href = "cellphone.html";
                    return false;
                })
            }
            else {
                alert("輸入錯誤請重新輸入!");
            }

        });
    }
}
