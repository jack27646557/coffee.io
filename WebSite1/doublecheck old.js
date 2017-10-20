﻿$(document).ready(function () {
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
    div.textContent1 = sessionStorage.getItem("test2");
    div.textContent2 = sessionStorage.getItem("test3");
    div.textContent3 = sessionStorage.getItem("test4");
    div.textContent4 = sessionStorage.getItem("test5");
    div.textContent5 = sessionStorage.getItem("test6");
    div.textContent6 = sessionStorage.getItem("test7");
    div.textContent7 = sessionStorage.getItem("test8");
    div.textContent8 = sessionStorage.getItem("test9");
    div.textContent9 = sessionStorage.getItem("test10");
    div.textContent10 = sessionStorage.getItem("test11");
    div.textContent13 = sessionStorage.getItem("test12");
    div.textContent14 = sessionStorage.getItem("test13");
    div.textContent15 = sessionStorage.getItem("test14");
    div.textContent16 = sessionStorage.getItem("test15");
    div.textContent17 = sessionStorage.getItem("test16");
    div.textContent18 = sessionStorage.getItem("test17");
    div.textContent19 = sessionStorage.getItem("test18");
    div.textContent20 = sessionStorage.getItem("test19");
    div.textContent23 = sessionStorage.getItem("test20");
    div.textContent24 = sessionStorage.getItem("test23");
    div.textContent25 = sessionStorage.getItem("test24");
    div.textContent26 = sessionStorage.getItem("test25");

    div.textContent11 = sessionStorage.getItem("test21");
    div.textContent21 = sessionStorage.getItem("test31");
    div.textContent31 = sessionStorage.getItem("test41");
    div.textContent41 = sessionStorage.getItem("test51");
    div.textContent51 = sessionStorage.getItem("test61");
    div.textContent61 = sessionStorage.getItem("test71");

    div.textContent71 = sessionStorage.getItem("test81");
    div.textContent81= sessionStorage.getItem("test91");
    div.textContent91 = sessionStorage.getItem("test101");
    div.textContent101 = sessionStorage.getItem("test111");
    div.textContent131 = sessionStorage.getItem("test121");
    div.textContent141 = sessionStorage.getItem("test131");
    div.textContent151 = sessionStorage.getItem("test141");
    div.textContent161 = sessionStorage.getItem("test151");
    div.textContent171 = sessionStorage.getItem("test161");
    div.textContent181 = sessionStorage.getItem("test171");
    div.textContent191 = sessionStorage.getItem("test181");
    div.textContent201 = sessionStorage.getItem("test191");
    div.textContent231 = sessionStorage.getItem("test201");
    div.textContent241 = sessionStorage.getItem("test231");
    div.textContent251 = sessionStorage.getItem("test241");
    div.textContent261 = sessionStorage.getItem("test251");

    div.textContent12 = sessionStorage.getItem("test22");
    div.textContent22 = sessionStorage.getItem("test32");
    div.textContent32 = sessionStorage.getItem("test42");
    div.textContent42 = sessionStorage.getItem("test52");
    div.textContent52 = sessionStorage.getItem("test62");
    div.textContent62 = sessionStorage.getItem("test72");

    div.textContent72 = sessionStorage.getItem("test82");
    div.textContent82 = sessionStorage.getItem("test92");
    div.textContent92 = sessionStorage.getItem("test102");
    div.textContent102 = sessionStorage.getItem("test112");
    div.textContent132 = sessionStorage.getItem("test122");
    div.textContent142 = sessionStorage.getItem("test132");
    div.textContent152 = sessionStorage.getItem("test142");
    div.textContent162 = sessionStorage.getItem("test152");
    div.textContent172 = sessionStorage.getItem("test162");
    div.textContent182 = sessionStorage.getItem("test172");
    div.textContent192 = sessionStorage.getItem("test182");
    div.textContent202 = sessionStorage.getItem("test192");
    div.textContent232 = sessionStorage.getItem("test202");
    div.textContent242 = sessionStorage.getItem("test232");
    div.textContent252 = sessionStorage.getItem("test242");
    div.textContent262 = sessionStorage.getItem("test252");





    var text = "";
    if (div.textContent1 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent1;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent11;
    }
    if (div.textContent2 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent2;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent21;
    }
    if (div.textContent3 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent3;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent31;
    }
    if (div.textContent4 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent4;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent41;
    }
    if (div.textContent5 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent5;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent51;
    }
    if (div.textContent6 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent6;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent61;
     
    }
   //-----------------
    if (div.textContent7 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent7;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent71;

    }
    if (div.textContent8 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent8;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent81;

    }
    if (div.textContent9 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent9;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent91;

    }
    if (div.textContent10 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent10;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent101;

    }
    if (div.textContent13 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent13;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent131;

    }
    if (div.textContent14 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent14;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent141;

    }
    
    if (div.textContent15 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent15;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent151;

    }
    if (div.textContent16 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent16;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent161;

    }
    if (div.textContent17 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent17;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent171;

    }
    if (div.textContent18 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent18;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent181;

    }
    if (div.textContent19 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent19;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent191;

    }
    if (div.textContent20 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent20;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent201;

    }
    if (div.textContent23 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent23;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent231;

    }
    if (div.textContent24 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent24;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent241;

    }
    if (div.textContent25 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent25;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent251;

    }
    if (div.textContent26 != "") {
        var num = document.getElementById("mytable").rows.length;
        var Tr = document.getElementById("mytable").insertRow(num);
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent26;
        Td = Tr.insertCell(Tr.cells.length);
        Td.innerHTML = div.textContent261;

    }








   

    })

function search() {
    var today = new Date();
   var mooo = (today.getMonth() + 1);
     
    if (mooo < 10)
    {
        mooo = "0" + mooo.toString();
    }
    var daaa = today.getDate();
    if (daaa < 10) {
        daaa = "0" + daaa.toString();
    }


    
    var cellphone = sessionStorage.getItem("test1");
   // var getthings = document.getElementById("X").value;
    var div = document.getElementById("mytable");
    div.textContent99 = sessionStorage.getItem("test");
    div.textContent1 = sessionStorage.getItem("test2");
    div.textContent2 = sessionStorage.getItem("test3");
    div.textContent3 = sessionStorage.getItem("test4");
    div.textContent4 = sessionStorage.getItem("test5");
    div.textContent5 = sessionStorage.getItem("test6");
    div.textContent6 = sessionStorage.getItem("test7");
    div.textContent7 = sessionStorage.getItem("test8");
    div.textContent8 = sessionStorage.getItem("test9");
    div.textContent9 = sessionStorage.getItem("test10");
    div.textContent10 = sessionStorage.getItem("test11");
    div.textContent13 = sessionStorage.getItem("test12");
    div.textContent14 = sessionStorage.getItem("test13");
    div.textContent15 = sessionStorage.getItem("test14");
    div.textContent16 = sessionStorage.getItem("test15");
    div.textContent17 = sessionStorage.getItem("test16");
    div.textContent18 = sessionStorage.getItem("test17");
    div.textContent19 = sessionStorage.getItem("test18");
    div.textContent20 = sessionStorage.getItem("test19");
    div.textContent23 = sessionStorage.getItem("test20");
    div.textContent24 = sessionStorage.getItem("test23");
    div.textContent25 = sessionStorage.getItem("test24");
    div.textContent26 = sessionStorage.getItem("test25");

    div.textContent11 = sessionStorage.getItem("test21");
    div.textContent21 = sessionStorage.getItem("test31");
    div.textContent31 = sessionStorage.getItem("test41");
    div.textContent41 = sessionStorage.getItem("test51");
    div.textContent51 = sessionStorage.getItem("test61");
    div.textContent61 = sessionStorage.getItem("test71");

    div.textContent71 = sessionStorage.getItem("test81");
    div.textContent81 = sessionStorage.getItem("test91");
    div.textContent91 = sessionStorage.getItem("test101");
    div.textContent101 = sessionStorage.getItem("test111");
    div.textContent131 = sessionStorage.getItem("test121");
    div.textContent141 = sessionStorage.getItem("test131");
    div.textContent151 = sessionStorage.getItem("test141");
    div.textContent161 = sessionStorage.getItem("test151");
    div.textContent171 = sessionStorage.getItem("test161");
    div.textContent181 = sessionStorage.getItem("test171");
    div.textContent191 = sessionStorage.getItem("test181");
    div.textContent201 = sessionStorage.getItem("test191");
    div.textContent231 = sessionStorage.getItem("test201");
    div.textContent241 = sessionStorage.getItem("test231");
    div.textContent251 = sessionStorage.getItem("test241");
    div.textContent261 = sessionStorage.getItem("test251");
   
    div.textContent12 = sessionStorage.getItem("test22");
    div.textContent22 = sessionStorage.getItem("test32");
    div.textContent32 = sessionStorage.getItem("test42");
    div.textContent42 = sessionStorage.getItem("test52");
    div.textContent52 = sessionStorage.getItem("test62");
    div.textContent62 = sessionStorage.getItem("test72");

    div.textContent72 = sessionStorage.getItem("test82");
    div.textContent82 = sessionStorage.getItem("test92");
    div.textContent92 = sessionStorage.getItem("test102");
    div.textContent102 = sessionStorage.getItem("test112");
    div.textContent132 = sessionStorage.getItem("test122");
    div.textContent142 = sessionStorage.getItem("test132");
    div.textContent152 = sessionStorage.getItem("test142");
    div.textContent162 = sessionStorage.getItem("test152");
    div.textContent172 = sessionStorage.getItem("test162");
    div.textContent182 = sessionStorage.getItem("test172");
    div.textContent192 = sessionStorage.getItem("test182");
    div.textContent202 = sessionStorage.getItem("test192");
    div.textContent232 = sessionStorage.getItem("test202");
    div.textContent242 = sessionStorage.getItem("test232");
    div.textContent252 = sessionStorage.getItem("test242");
    div.textContent262 = sessionStorage.getItem("test252");

    //以上複製
    if (div.textContent1 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent1,
            quantity: div.textContent11,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/美式咖啡/' + div.textContent99 + '/' + sessionStorage.getItem("test22").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "美式咖啡",
                        count: parseInt(div.textContent11),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test22").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "美式咖啡",
                        count: parseInt(count) + parseInt(div.textContent11),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test22").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
        })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }
    if (div.textContent2 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent2,
            quantity: div.textContent21,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/美式咖啡/' + div.textContent99 + '/' + sessionStorage.getItem("test32").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "美式咖啡",
                        count: parseInt(div.textContent21),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test32").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "美式咖啡",
                        count: parseInt(count) + parseInt(div.textContent21),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test32").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }
    if (div.textContent3 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent3,
            quantity: div.textContent31,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/拿鐵/' + div.textContent99 + '/' + sessionStorage.getItem("test42").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "拿鐵",
                        count: parseInt(div.textContent31),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test42").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "拿鐵",
                        count: parseInt(count) + parseInt(div.textContent31),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test42").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }
    if (div.textContent4 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent4,
            quantity: div.textContent41,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/拿鐵/' + div.textContent99 + '/' + sessionStorage.getItem("test52").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "拿鐵",
                        count: parseInt(div.textContent41),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test52").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "拿鐵",
                        count: parseInt(count) + parseInt(div.textContent41),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test52").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }
    if (div.textContent5 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent5,
            quantity: div.textContent51,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/卡布奇諾/' + div.textContent99 + '/' + sessionStorage.getItem("test62").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "卡布奇諾",
                        count: parseInt(div.textContent51),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test62").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "卡布奇諾",
                        count: parseInt(count) + parseInt(div.textContent51),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test62").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }
    if (div.textContent6 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent6,
            quantity: div.textContent61,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/黃金榛果拿鐵/' + div.textContent99 + '/' + sessionStorage.getItem("test72").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "黃金榛果拿鐵",
                        count: parseInt(div.textContent61),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test72").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "黃金榛果拿鐵",
                        count: parseInt(count) + parseInt(div.textContent61),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test72").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
           
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }
    //--美式中熱 7 8 

    if (div.textContent7 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent7,
            quantity: div.textContent71,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/美式咖啡/' + div.textContent99 + '/' + sessionStorage.getItem("test82").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "美式咖啡",
                        count: parseInt(div.textContent71),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test82").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "美式咖啡",
                        count: parseInt(count) + parseInt(div.textContent71),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test82").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }

    //美式大熱 8 9 
    if (div.textContent8 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent8,
            quantity: div.textContent81,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/美式咖啡/' + div.textContent99 + '/' + sessionStorage.getItem("test92").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "美式咖啡",
                        count: parseInt(div.textContent81),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test92").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "美式咖啡",
                        count: parseInt(count) + parseInt(div.textContent81),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test92").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }

    //美式大冰 9 10
    if (div.textContent9 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent9,
            quantity: div.textContent91,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/美式咖啡/' + div.textContent99 + '/' + sessionStorage.getItem("test102").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "美式咖啡",
                        count: parseInt(div.textContent91),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test102").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "美式咖啡",
                        count: parseInt(count) + parseInt(div.textContent91),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test102").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }
    //中熱拿鐵 10 11
    if (div.textContent10 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent10,
            quantity: div.textContent101,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/拿鐵/' + div.textContent99 + '/' + sessionStorage.getItem("test112").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "拿鐵",
                        count: parseInt(div.textContent101),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test112").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "拿鐵",
                        count: parseInt(count) + parseInt(div.textContent101),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test112").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }

    //大熱拿鐵 13 12
    if (div.textContent13 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent13,
            quantity: div.textContent131,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/拿鐵/' + div.textContent99 + '/' + sessionStorage.getItem("test122").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "拿鐵",
                        count: parseInt(div.textContent131),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test122").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "拿鐵",
                        count: parseInt(count) + parseInt(div.textContent131),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test122").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }

    //大冰拿鐵  14  13
    if (div.textContent14 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent14,
            quantity: div.textContent141,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/拿鐵/' + div.textContent99 + '/' + sessionStorage.getItem("test132").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "拿鐵",
                        count: parseInt(div.textContent141),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test132").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "拿鐵",
                        count: parseInt(count) + parseInt(div.textContent141),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test132").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }

    // 中熱焦糖瑪奇朵 15 14
    if (div.textContent15 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent15,
            quantity: div.textContent151,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/焦糖瑪琪朵/' + div.textContent99 + '/' + sessionStorage.getItem("test142").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "焦糖瑪琪朵",
                        count: parseInt(div.textContent151),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test142").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "焦糖瑪琪朵",
                        count: parseInt(count) + parseInt(div.textContent151),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test142").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }

    // 中冰焦糖瑪奇朵 16 15
    if (div.textContent16 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent16,
            quantity: div.textContent161,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/焦糖瑪琪朵/' + div.textContent99 + '/' + sessionStorage.getItem("test152").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "焦糖瑪琪朵",
                        count: parseInt(div.textContent161),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test152").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "焦糖瑪琪朵",
                        count: parseInt(count) + parseInt(div.textContent161),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test152").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }

    // 中熱巧克力牛奶 17 16
    if (div.textContent17 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent17,
            quantity: div.textContent171,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/巧克力牛奶/' + div.textContent99 + '/' + sessionStorage.getItem("test162").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "巧克力牛奶",
                        count: parseInt(div.textContent171),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test162").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "巧克力牛奶",
                        count: parseInt(count) + parseInt(div.textContent171),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test162").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }

    // 中熱福岡八女抹茶拿鐵 18 17
    if (div.textContent18 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent18,
            quantity: div.textContent181,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/福岡八女抹茶拿鐵/' + div.textContent99 + '/' + sessionStorage.getItem("test172").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "福岡八女抹茶拿鐵",
                        count: parseInt(div.textContent181),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test172").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "福岡八女抹茶拿鐵",
                        count: parseInt(count) + parseInt(div.textContent181),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test172").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }
    // 中冰福岡八女抹茶拿鐵 19 18
    if (div.textContent19 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent19,
            quantity: div.textContent191,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/福岡八女抹茶拿鐵/' + div.textContent99 + '/' + sessionStorage.getItem("test182").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "福岡八女抹茶拿鐵",
                        count: parseInt(div.textContent191),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test182").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "福岡八女抹茶拿鐵",
                        count: parseInt(count) + parseInt(div.textContent191),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test182").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }
    // 中熱北海道風味特調咖啡 20 19
    if (div.textContent20 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent20,
            quantity: div.textContent201,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/北海道風味特調咖啡/' + div.textContent99 + '/' + sessionStorage.getItem("test192").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "北海道風味特調咖啡",
                        count: parseInt(div.textContent201),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test192").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "北海道風味特調咖啡",
                        count: parseInt(count) + parseInt(div.textContent201),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test192").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }
    // 中冰北海道風味特調咖啡 23 20
    if (div.textContent23 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent23,
            quantity: div.textContent231,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/北海道風味特調咖啡/' + div.textContent99 + '/' + sessionStorage.getItem("test202").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "北海道風味特調咖啡",
                        count: parseInt(div.textContent231),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test202").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "北海道風味特調咖啡",
                        count: parseInt(count) + parseInt(div.textContent231),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test202").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }
    // 中熱阿薩姆風味紅茶拿鐵 24 23
    if (div.textContent24 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent24,
            quantity: div.textContent241,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/阿薩姆風味紅茶拿鐵/' + div.textContent99 + '/' + sessionStorage.getItem("test232").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "阿薩姆風味紅茶拿鐵",
                        count: parseInt(div.textContent241),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test232").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "阿薩姆風味紅茶拿鐵",
                        count: parseInt(count) + parseInt(div.textContent241),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test232").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }
    // 中冰阿薩姆風味紅茶拿鐵 25 24
    if (div.textContent25 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent25,
            quantity: div.textContent251,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/阿薩姆風味紅茶拿鐵/' + div.textContent99 + '/' + sessionStorage.getItem("test242").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "阿薩姆風味紅茶拿鐵",
                        count: parseInt(div.textContent251),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test242").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "阿薩姆風味紅茶拿鐵",
                        count: parseInt(count) + parseInt(div.textContent251),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test242").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }
    // 中熱濃萃拿鐵 26 25
    if (div.textContent26 != "") {
        var postRef = firebase.database().ref('/myCoffee/' + cellphone + '/');
        postRef.push().set({
            coffeeNo: div.textContent26,
            quantity: div.textContent261,
            date: today.getFullYear().toString() + mooo + daaa,
            store: div.textContent99
        }).then(function () {
            console.log("新增Post成功");
            var postRef = firebase.database().ref('/myQ/' + cellphone + '/濃萃拿鐵/' + div.textContent99 + '/' + sessionStorage.getItem("test252").toString() + '/');
            postRef.once("value").then(function (snapshot) {
                var count = snapshot.child('/count/').val();
                if (count == null) {
                    postRef.set({
                        coffeeNo: "濃萃拿鐵",
                        count: parseInt(div.textContent261),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test252").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
                else {
                    postRef.set({
                        coffeeNo: "濃萃拿鐵",
                        count: parseInt(count) + parseInt(div.textContent261),
                        store: div.textContent99,
                        style: sessionStorage.getItem("test252").toString()
                    }).then(function () {
                        console.log("新增Post成功");
                    }).catch(function (err) {
                        console.error("新增Post錯誤：", err);
                    })
                }
            })
        }).catch(function (err) {
            console.error("新增Post錯誤：", err);
        })
    }








    alert("新增成功");
}
