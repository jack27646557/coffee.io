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


    //const dbRefObjecta = firebase.database().ref().child("myCoffee/"+title);
    //按鈕
    var searchUserInfoBtn = document.getElementById("searchUserInfoBtn");


    const dbRefObjecta = firebase.database().ref().child("myCoffee/" + text);
    //alert=(preObject.innerText=JSON.stringify(snap.val(),null,3));
      
           dbRefObjecta.once('value', function (snapshot) {
            var data = snapshot.val();
            var list = [];
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    coffeeNo = data[key].coffeeNo ? data[key].coffeeNo : '';
                    date = data[key].date ? data[key].date : '';
                    store = data[key].store ? data[key].store : '';
                    quantity = data[key].quantity ? data[key].quantity : '';
                    cashier = data[key].cashier ? data[key].cashier : '';
                    if (coffeeNo.trim().length > 0) {
                        list.push({
                            name: coffeeNo,
                            da: date,
                            st: store,
                            sty: quantity,
                            cas: cashier,
                            key: key
                        })
                    }
                }
            }
            // refresh the UI
            refreshUI(list);
        });

        function refreshUI(list) {

            for (var ii = 0; ii < list.length; ii++) {
                if(list[ii].st == sessionStorage.getItem("test")){
                    var num = document.getElementById("mytable").rows.length;
                    var Tr = document.getElementById("mytable").insertRow(num);
                    Td = Tr.insertCell(Tr.cells.length);
                    Td.innerHTML = list[ii].name;
                    Td = Tr.insertCell(Tr.cells.length);
                    Td.innerHTML = list[ii].da;
                    Td = Tr.insertCell(Tr.cells.length);
                    Td.innerHTML = list[ii].st;
                    Td = Tr.insertCell(Tr.cells.length);
                    Td.innerHTML = list[ii].sty;
                    Td = Tr.insertCell(Tr.cells.length);
                    Td.innerHTML = list[ii].cas;
                }
            }
        }
})