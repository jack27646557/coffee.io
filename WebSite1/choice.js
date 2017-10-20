var list = [];
var abc = 0;
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


    const dbRefObjecta = firebase.database().ref().child("Coffee/");
    dbRefObjecta.once('value', function (snapshot) {
        var data = snapshot.val();
        list = [];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                classs = data[key].cla ? data[key].cla : '';
                coffee = data[key].coffee ? data[key].coffee : '';
                coffeeName = data[key].coffeeName ? data[key].coffeeName : '';
                coffeeNo = data[key].coffeeNo ? data[key].coffeeNo : '';
                style = data[key].style ? data[key].style : '';
                if (classs.trim().length > 0) {
                    list.push({
                        coffeeName: coffeeName,
                        name: coffee,
                        no: coffeeNo,
                        sty: style,
                        cla: classs,
                        key: key
                    })
                }
            }
        }
        // refresh the UI
        refreshUI(list);
        for (var ii = 0; ii <= list.length; ii++) {
            sessionStorage.setItem("name" + ii, "");
            sessionStorage.setItem("count" + ii, "");
            sessionStorage.setItem("style" + ii, "");
        }
    });

    

    function refreshUI(list) {
        var Tr = document.getElementById("mytable").insertRow(num);
        var aa = sessionStorage.getItem("show");
        for (var ii = 0; ii < list.length; ii++) {
            if (aa == "1") {
                if (list[ii].cla == "美式咖啡") {
                    abc = abc + 1;
                    var num = document.getElementById("mytable").rows.length;
                    Td = Tr.insertCell(Tr.cells.length);
                    Td.innerHTML = "<input type=checkbox id=ch" + list[ii].key + "><label for=ch" + list[ii].key + ">" + list[ii].coffeeName + "</label>";
                    Td = Tr.insertCell(Tr.cells.length);
                    Td.innerHTML = "<button type=submit id=minus" + list[ii].key + " style=background:green; onclick=minus(" + list[ii].key + ")>-</button>"
                                 + "<input type=text id=count" + list[ii].key + " value=0 />"
                                 + "<button type=submit id=add" + list[ii].key + " style=background:green; onclick=add(" + list[ii].key + ")>+</button>";
                    if (Tr.cells.length % 6 == 0) {
                        var Tr = document.getElementById("mytable").insertRow(num);

                    }
                }
            }
            else if (aa == 2) {
                if (list[ii].cla == "拿鐵") {
                    abc = abc + 1;
                    var num = document.getElementById("mytable").rows.length;
                    Td = Tr.insertCell(Tr.cells.length);
                    Td.innerHTML = "<input type=checkbox id=ch" + list[ii].key + "><label for=ch" + list[ii].key + ">" + list[ii].coffeeName + "</label>";
                    Td = Tr.insertCell(Tr.cells.length);
                    Td.innerHTML = "<button type=submit id=minus" + list[ii].key + " style=background:green; onclick=minus(" + list[ii].key + ")>-</button>"
                                 + "<input type=text id=count" + list[ii].key + " value=0 />"
                                 + "<button type=submit id=add" + list[ii].key + " style=background:green; onclick=add(" + list[ii].key + ")>+</button>";
                    if (Tr.cells.length % 6 == 0) {
                        var Tr = document.getElementById("mytable").insertRow(num);

                    }
                }
            }
            else if (aa == 3) {
                if (list[ii].cla == "牛奶") {
                    abc = abc + 1;
                    var num = document.getElementById("mytable").rows.length;
                    Td = Tr.insertCell(Tr.cells.length);
                    Td.innerHTML = "<input type=checkbox id=ch" + list[ii].key + "><label for=ch" + list[ii].key + ">" + list[ii].coffeeName + "</label>";
                    Td = Tr.insertCell(Tr.cells.length);
                    Td.innerHTML = "<button type=submit id=minus" + list[ii].key + " style=background:green; onclick=minus(" + list[ii].key + ")>-</button>"
                                 + "<input type=text id=count" + list[ii].key + " value=0 />"
                                 + "<button type=submit id=add" + list[ii].key + " style=background:green; onclick=add(" + list[ii].key + ")>+</button>";
                    if (Tr.cells.length % 6 == 0) {
                        var Tr = document.getElementById("mytable").insertRow(num);

                    }
                }
            }
            else if (aa == 4) {
                if (list[ii].cla == "其他") {
                    abc = abc + 1;
                    var num = document.getElementById("mytable").rows.length;
                    Td = Tr.insertCell(Tr.cells.length);
                    Td.innerHTML = "<input type=checkbox id=ch" + list[ii].key + "><label for=ch" + list[ii].key + ">" + list[ii].coffeeName + "</label>";
                    Td = Tr.insertCell(Tr.cells.length);
                    Td.innerHTML = "<button type=submit id=minus" + list[ii].key + " style=background:green; onclick=minus(" + list[ii].key + ")>-</button>"
                                 + "<input type=text id=count" + list[ii].key + " value=0 />"
                                 + "<button type=submit id=add" + list[ii].key + " style=background:green; onclick=add(" + list[ii].key + ")>+</button>";
                    if (Tr.cells.length % 6 == 0) {
                        var Tr = document.getElementById("mytable").insertRow(num);

                    }
                }
            }
            else {
                abc = abc + 1;
                var num = document.getElementById("mytable").rows.length;
                Td = Tr.insertCell(Tr.cells.length);
                Td.innerHTML = "<input type=checkbox id=ch" + list[ii].key + "><label for=ch" + list[ii].key + ">" + list[ii].coffeeName + "</label>";
                Td = Tr.insertCell(Tr.cells.length);
                Td.innerHTML = "<button type=submit id=minus" + list[ii].key + " style=background:green; onclick=minus(" + list[ii].key + ")>-</button>"
                             + "<input type=text id=count" + list[ii].key + " value=0 />"
                             + "<button type=submit id=add" + list[ii].key + " style=background:green; onclick=add(" + list[ii].key + ")>+</button>";
                if (Tr.cells.length % 6 == 0) {
                    var Tr = document.getElementById("mytable").insertRow(num);
                }
            }
            

        };
    }

})

function add(aa) {
    var count1 = document.getElementById("count" + aa).value;
    if (count1 < 0) {
        count1 = 0;
        document.getElementById("count" + aa).value = count1;
    }
    else {
        count1++;
        document.getElementById("count" + aa).value = count1;
    }
}

function minus(aa) {
    var count1 = document.getElementById("count" + aa).value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count" + aa).value = count1;
    }
    else {
        count1--;
        document.getElementById("count" + aa).value = count1;
    }
}
function check()
{
    var cott = 0;
    var id = [];
    var count = [];
    for (i = 1; i <= list.length; i++)
    {
        
        count = document.getElementById("count" + i);
        id = document.getElementById("ch" + i);
        if (id != null) {
            if (id.checked == true && count.value != 0) {
                sessionStorage.setItem("name" + i, list[(i - 1)].name);
                sessionStorage.setItem("count" + i, count.value);
                sessionStorage.setItem("style" + i, list[(i - 1)].sty);
                cott = cott + 1;
                //alert(sessionStorage.getItem("name" + i));
                //alert(sessionStorage.getItem("count" + i));
                //alert(sessionStorage.getItem("style" + i));
            }            
        }
    }
    if (cott != 0) {
        window.location.href = "doublecheck.html";
        return false;
    }
    else {
        alert("請選擇咖啡/杯數");
        window.location.reload();
    }
}
 
function Coffee(aa) {
    sessionStorage.setItem("show", aa);
    window.location.reload();
}