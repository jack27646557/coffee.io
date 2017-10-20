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

    // Get elements
    const preObject = document.getElementById('object');

    // Create references
    const dbRefObject = firebase.database().ref().child('Coffee');

    var div = document.getElementById("X");
    div.textContent = sessionStorage.getItem("test1");
    var text = div.textContent;
    sessionStorage.setItem("test2", "");
    sessionStorage.setItem("test3", "");
    sessionStorage.setItem("test4", "");
    sessionStorage.setItem("test5", "");
    sessionStorage.setItem("test6", "");
    sessionStorage.setItem("test7", "");
    sessionStorage.setItem("test8", "");
    sessionStorage.setItem("test9", "");
    sessionStorage.setItem("test10", "");
    sessionStorage.setItem("test11", "");
    sessionStorage.setItem("test12", "");
    sessionStorage.setItem("test13", "");
    sessionStorage.setItem("test14", "");
    sessionStorage.setItem("test15", "");
    sessionStorage.setItem("test16", "");
    sessionStorage.setItem("test17", "");
    sessionStorage.setItem("test18", "");
    sessionStorage.setItem("test19", "");
    sessionStorage.setItem("test20", "");
    sessionStorage.setItem("test23", "");
    sessionStorage.setItem("test24", "");
    sessionStorage.setItem("test25", "");
    sessionStorage.setItem("test21", "");
    sessionStorage.setItem("test31", "");
    sessionStorage.setItem("test41", "");
    sessionStorage.setItem("test51", "");
    sessionStorage.setItem("test61", "");
    sessionStorage.setItem("test71", "");
    sessionStorage.setItem("test81", "");
    sessionStorage.setItem("test91", "");
    sessionStorage.setItem("test101", "");
    sessionStorage.setItem("test111", "");
    sessionStorage.setItem("test121", "");
    sessionStorage.setItem("test131", "");
    sessionStorage.setItem("test141", "");
    sessionStorage.setItem("test151", "");
    sessionStorage.setItem("test161", "");
    sessionStorage.setItem("test171", "");
    sessionStorage.setItem("test181", "");
    sessionStorage.setItem("test191", "");
    sessionStorage.setItem("test201", "");
    sessionStorage.setItem("test231", "");
    sessionStorage.setItem("test241", "");
    sessionStorage.setItem("test251", "");
    sessionStorage.setItem("test22", "");
    sessionStorage.setItem("test32", "");
    sessionStorage.setItem("test42", "");
    sessionStorage.setItem("test52", "");
    sessionStorage.setItem("test62", "");
    sessionStorage.setItem("test72", "");
    sessionStorage.setItem("test82", "");
    sessionStorage.setItem("test92", "");
    sessionStorage.setItem("test102", "");
    sessionStorage.setItem("test112", "");
    sessionStorage.setItem("test122", "");
    sessionStorage.setItem("test132", "");
    sessionStorage.setItem("test142", "");
    sessionStorage.setItem("test152", "");
    sessionStorage.setItem("test162", "");
    sessionStorage.setItem("test172", "");
    sessionStorage.setItem("test182", "");
    sessionStorage.setItem("test192", "");
    sessionStorage.setItem("test202", "");
    sessionStorage.setItem("test232", "");
    sessionStorage.setItem("test242", "");
    sessionStorage.setItem("test252", "");
}
)
var a = document.getElementById("ch1");
var b = document.getElementById("ch2");
var c = document.getElementById("ch3");
var d = document.getElementById("ch4");
var e = document.getElementById("ch5");
var g = document.getElementById("ch6");
var searchUserInfoBtn = document.getElementById("comfirm");
var searchUserInfoBtn = document.getElementById("cancel");



function add1() {
    var count1 = document.getElementById("count1").value;
    count1++;
    document.getElementById("count1").value = count1;
}

function minus1() {
    var count1 = document.getElementById("count1").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count1").value = count1;
    }
    else {
        count1--;
        document.getElementById("count1").value = count1;
    }
}
function add2() {
    var count2 = document.getElementById("count2").value;
    count2++;
    document.getElementById("count2").value = count2;
}

function minus2() {
    var count2 = document.getElementById("count2").value;
    if (count2 <= 0) {
        count2 = 0;
        document.getElementById("count2").value = count2;
    }
    else {
        count2--;
        document.getElementById("count2").value = count2;
    }
}
function add3() {
    var count3 = document.getElementById("count3").value;
    count3++;
    document.getElementById("count3").value = count3;
}

function minus3() {
    var count3 = document.getElementById("count3").value;
    if (count3 <= 0) {
        count3 = 0;
        document.getElementById("count3").value = count3;
    }
    else {
        count3--;
        document.getElementById("count3").value = count3;
    }
}
function add4() {
    var count4 = document.getElementById("count4").value;
    count4++;
    document.getElementById("count4").value = count4;
}

function minus4() {
    var count4 = document.getElementById("count4").value;
    if (count4 <= 0) {
        count4 = 0;
        document.getElementById("count4").value = count4;
    }
    else {
        count4--;
        document.getElementById("count4").value = count4;
    }
}
function add5() {
    var count5 = document.getElementById("count5").value;
    count5++;
    document.getElementById("count5").value = count5;
}

function minus5() {
    var count5 = document.getElementById("count5").value;
    if (count5 <= 0) {
        count5 = 0;
        document.getElementById("count5").value = count5;
    }
    else {
        count5--;
        document.getElementById("count5").value = count5;
    }
}
function add6() {
    var count6 = document.getElementById("count6").value;
    count6++;
    document.getElementById("count6").value = count6;
}

function minus6() {
    var count6 = document.getElementById("count6").value;
    if (count6 <= 0) {
        count6 = 0;
        document.getElementById("count6").value = count6;
    }
    else {
        count6--;
        document.getElementById("count6").value = count6;
    }
}
function add7() {
    var count1 = document.getElementById("count7").value;
    count1++;
    document.getElementById("count7").value = count1;
}

function minus7() {
    var count1 = document.getElementById("count7").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count7").value = count1;
    }
    else {
        count1--;
        document.getElementById("count7").value = count1;
    }
}
function add8() {
    var count1 = document.getElementById("count8").value;
    count1++;
    document.getElementById("count8").value = count1;
}

function minus8() {
    var count1 = document.getElementById("count8").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count8").value = count1;
    }
    else {
        count1--;
        document.getElementById("count8").value = count1;
    }
}
function add9() {
    var count1 = document.getElementById("count9").value;
    count1++;
    document.getElementById("count9").value = count1;
}

function minus9() {
    var count1 = document.getElementById("count9").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count9").value = count1;
    }
    else {
        count1--;
        document.getElementById("count9").value = count1;
    }
}
function add10() {
    var count1 = document.getElementById("count10").value;
    count1++;
    document.getElementById("count10").value = count1;
}

function minus10() {
    var count1 = document.getElementById("count10").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count10").value = count1;
    }
    else {
        count1--;
        document.getElementById("count10").value = count1;
    }
}
function add11() {
    var count1 = document.getElementById("count11").value;
    count1++;
    document.getElementById("count11").value = count1;
}

function minus11() {
    var count1 = document.getElementById("count11").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count11").value = count1;
    }
    else {
        count1--;
        document.getElementById("count11").value = count1;
    }
}
function add12() {
    var count1 = document.getElementById("count12").value;
    count1++;
    document.getElementById("count12").value = count1;
}

function minus12() {
    var count1 = document.getElementById("count12").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count12").value = count1;
    }
    else {
        count1--;
        document.getElementById("count12").value = count1;
    }
}
function add13() {
    var count1 = document.getElementById("count13").value;
    count1++;
    document.getElementById("count13").value = count1;
}

function minus13() {
    var count1 = document.getElementById("count13").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count13").value = count1;
    }
    else {
        count1--;
        document.getElementById("count13").value = count1;
    }
}
function add14() {
    var count1 = document.getElementById("count14").value;
    count1++;
    document.getElementById("count14").value = count1;
}

function minus14() {
    var count1 = document.getElementById("count14").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count14").value = count1;
    }
    else {
        count1--;
        document.getElementById("count14").value = count1;
    }
}
function add15() {
    var count1 = document.getElementById("count15").value;
    count1++;
    document.getElementById("count15").value = count1;
}

function minus15() {
    var count1 = document.getElementById("count15").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count15").value = count1;
    }
    else {
        count1--;
        document.getElementById("count15").value = count1;
    }
}
function add16() {
    var count1 = document.getElementById("count16").value;
    count1++;
    document.getElementById("count16").value = count1;
}

function minus16() {
    var count1 = document.getElementById("count16").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count16").value = count1;
    }
    else {
        count1--;
        document.getElementById("count16").value = count1;
    }
}
function add17() {
    var count1 = document.getElementById("count17").value;
    count1++;
    document.getElementById("count17").value = count1;
}

function minus17() {
    var count1 = document.getElementById("count17").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count17").value = count1;
    }
    else {
        count1--;
        document.getElementById("count17").value = count1;
    }
}
function add18() {
    var count1 = document.getElementById("count18").value;
    count1++;
    document.getElementById("count18").value = count1;
}

function minus18() {
    var count1 = document.getElementById("count18").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count18").value = count1;
    }
    else {
        count1--;
        document.getElementById("count18").value = count1;
    }
}
function add19() {
    var count1 = document.getElementById("count19").value;
    count1++;
    document.getElementById("count19").value = count1;
}

function minus19() {
    var count1 = document.getElementById("count19").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count19").value = count1;
    }
    else {
        count1--;
        document.getElementById("count19").value = count1;
    }
}
function add20() {
    var count1 = document.getElementById("count20").value;
    count1++;
    document.getElementById("count20").value = count1;
}

function minus20() {
    var count1 = document.getElementById("count20").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count20").value = count1;
    }
    else {
        count1--;
        document.getElementById("count20").value = count1;
    }
}
function add21() {
    var count1 = document.getElementById("count21").value;
    count1++;
    document.getElementById("count21").value = count1;
}

function minus21() {
    var count1 = document.getElementById("count21").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count21").value = count1;
    }
    else {
        count1--;
        document.getElementById("count21").value = count1;
    }
}
function add22() {
    var count1 = document.getElementById("count22").value;
    count1++;
    document.getElementById("count22").value = count1;
}

function minus22() {
    var count1 = document.getElementById("count22").value;
    if (count1 <= 0) {
        count1 = 0;
        document.getElementById("count22").value = count1;
    }
    else {
        count1--;
        document.getElementById("count22").value = count1;
    }
}



function check() {
    var a = document.getElementById("ch1");
    var g= document.getElementById("ch7");
    var h= document.getElementById("ch8");
    var b = document.getElementById("ch2");
    var i= document.getElementById("ch9");
    var c = document.getElementById("ch3");
    var j= document.getElementById("ch10");
    var k= document.getElementById("ch11");
    var d = document.getElementById("ch4");
    var l= document.getElementById("ch12");
    var e = document.getElementById("ch5");
    var f = document.getElementById("ch6");
    var m= document.getElementById("ch13");
    var n= document.getElementById("ch14");
    var o= document.getElementById("ch15");
    var p= document.getElementById("ch16");
    var q= document.getElementById("ch17");
    var r= document.getElementById("ch18");
    var s= document.getElementById("ch19");
    var t= document.getElementById("ch20");
    var u= document.getElementById("ch21");
    var v= document.getElementById("ch22");

    var count1 = document.getElementById("count1").value;
    var count2 = document.getElementById("count2").value;
    var count3 = document.getElementById("count3").value;
    var count4 = document.getElementById("count4").value;
    var count5 = document.getElementById("count5").value;
    var count6 = document.getElementById("count6").value;
    var count7 = document.getElementById("count7").value;
    var count8 = document.getElementById("count8").value;
    var count9 = document.getElementById("count9").value;
    var count10 = document.getElementById("count10").value;
    var count11 = document.getElementById("count11").value;
    var count12 = document.getElementById("count12").value;
    var count13 = document.getElementById("count13").value;
    var count14 = document.getElementById("count14").value;
    var count15 = document.getElementById("count15").value;
    var count16 = document.getElementById("count16").value;
    var count17 = document.getElementById("count17").value;
    var count18 = document.getElementById("count18").value;
    var count19 = document.getElementById("count19").value;
    var count20 = document.getElementById("count20").value;
    var count21 = document.getElementById("count21").value;
    var count22 = document.getElementById("count22").value;
   


    if (a.checked == true && count1 != 0) {
        sessionStorage.setItem("test2", "小熱美式");
        sessionStorage.setItem("test21", count1.toString());
        sessionStorage.setItem("test22", "小熱");
    }
    if (b.checked == true && count2 != 0) {
        sessionStorage.setItem("test3", "中冰美式");
        sessionStorage.setItem("test31", count2.toString());
        sessionStorage.setItem("test32", "中冰");
    }
    if (c.checked == true && count3 != 0) {
        sessionStorage.setItem("test4", "小熱拿鐵");
        sessionStorage.setItem("test41", count3.toString());
        sessionStorage.setItem("test42", "小熱");
    }
    if (d.checked == true && count4 != 0) {
        sessionStorage.setItem("test5", "中冰拿鐵");
        sessionStorage.setItem("test51", count4.toString());
        sessionStorage.setItem("test52", "中冰");
    }
    if (e.checked == true && count5 != 0) {
        sessionStorage.setItem("test6", "中熱卡布奇諾");
        sessionStorage.setItem("test61", count5.toString());
        sessionStorage.setItem("test62", "中熱");
    }
    if (f.checked == true && count6 != 0) {
        sessionStorage.setItem("test7", "中熱黃金榛果拿鐵");
        sessionStorage.setItem("test71", count6.toString());
        sessionStorage.setItem("test72", "中熱");
    }
    if (g.checked == true && count7 != 0) {
        sessionStorage.setItem("test8", "中熱美式");
        sessionStorage.setItem("test81", count7.toString());
        sessionStorage.setItem("test82", "中熱");
    }
    if (h.checked == true && count8 != 0) {
        sessionStorage.setItem("test9", "大熱美式");
        sessionStorage.setItem("test91", count8.toString());
        sessionStorage.setItem("test92", "大熱");
    }
    if (i.checked == true && count9 != 0) {
        sessionStorage.setItem("test10", "大冰美式");
        sessionStorage.setItem("test101", count9.toString());
        sessionStorage.setItem("test102", "大冰");
    }
    if (j.checked == true && count10 != 0) {
        sessionStorage.setItem("test11", "中熱拿鐵");
        sessionStorage.setItem("test111", count10.toString());
        sessionStorage.setItem("test112", "中熱");
    }
    if (k.checked == true && count11 != 0) {
        sessionStorage.setItem("test12", "大熱拿鐵");
        sessionStorage.setItem("test121", count11.toString());
        sessionStorage.setItem("test122", "大熱");
    }
    if (l.checked == true && count12 != 0) {
        sessionStorage.setItem("test13", "大冰拿鐵");
        sessionStorage.setItem("test131", count12.toString());
        sessionStorage.setItem("test132", "大冰");
    }
    if (m.checked == true && count13 != 0) {
        sessionStorage.setItem("test14", "中熱焦糖瑪琪朵");
        sessionStorage.setItem("test141", count13.toString());
        sessionStorage.setItem("test142", "中熱");
    }
    if (n.checked == true && count14 != 0) {
        sessionStorage.setItem("test15", "大冰焦糖瑪琪朵");
        sessionStorage.setItem("test151", count14.toString());
        sessionStorage.setItem("test152", "大冰");
    }
    if (o.checked == true && count15 != 0) {
        sessionStorage.setItem("test16", "中熱巧克力牛奶");
        sessionStorage.setItem("test161", count15.toString());
        sessionStorage.setItem("test162", "中熱");
    }
    if (p.checked == true && count16 != 0) {
        sessionStorage.setItem("test17", "中熱福岡八女抹茶拿鐵");
        sessionStorage.setItem("test171", count16.toString());
        sessionStorage.setItem("test172", "中熱");
    }
    if (q.checked == true && count17 != 0) {
        sessionStorage.setItem("test18", "大冰福岡八女抹茶拿鐵");
        sessionStorage.setItem("test181", count17.toString());
        sessionStorage.setItem("test182", "大冰");
    }
    if (r.checked == true && count18 != 0) {
        sessionStorage.setItem("test19", "中熱北海道風味特調咖啡");
        sessionStorage.setItem("test191", count18.toString());
        sessionStorage.setItem("test192", "中熱");
    }
    if (s.checked == true && count19 != 0) {
        sessionStorage.setItem("test20", "大冰北海道風味特調咖啡");
        sessionStorage.setItem("test201", count19.toString());
        sessionStorage.setItem("test202", "大冰");
    }
    if (t.checked == true && count20 != 0) {
        sessionStorage.setItem("test23", "中熱阿薩姆風味紅茶拿鐵");
        sessionStorage.setItem("test231", count20.toString());
        sessionStorage.setItem("test232", "中熱");
    }
    if (u.checked == true && count21 != 0) {
        sessionStorage.setItem("test24", "大冰阿薩姆風味紅茶拿鐵");
        sessionStorage.setItem("test241", count21.toString());
        sessionStorage.setItem("test242", "大冰");
    }
    if (v.checked == true && count22 != 0) {
        sessionStorage.setItem("test25", "中熱濃萃拿鐵");
        sessionStorage.setItem("test251", count22.toString());
        sessionStorage.setItem("test252", "中熱");
    }
    if(count1 == 0 && count2 == 0 && count3 == 0 && count4 == 0 && count5 == 0 && count6 == 0 && count7 == 0 && count8 == 0 && count9 == 0 && count10 == 0
            && count11 == 0 && count12 == 0 && count13 == 0 && count14 == 0 && count15 == 0 && count16 == 0 && count17 == 0 && count18 == 0 && count19 == 0 && count20 == 0
            && count21 == 0 && count22 == 0) {
            alert("請選擇杯數");
            document.location.href = "choice.html";
    }
    else if (a.checked != true && b.checked != true && c.checked != true && d.checked != true && e.checked != true && f.checked != true && g.checked != true && h.checked != true && i.checked != true && j.checked != true && k.checked != true && l.checked != true && m.checked != true && n.checked != true && o.checked != true && p.checked != true && q.checked != true && r.checked != true && s.checked != true && t.checked != true && u.checked != true && v.checked != true) {
        alert("什麼都沒選");
        document.location.href = "choice.html";
    }    
    else {
        document.location.href = "doublecheck.html";
    }
    // document.location.href = "doublecheck.html";

}