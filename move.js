var box1 = document.querySelector("#i1");
var box2 = document.querySelector("#i2");
var box3 = document.querySelector("#i3");
var box4 = document.querySelector("#i4");
var box8 = document.querySelector("#i8");
var box12 = document.querySelector("#i12");
var box16 = document.querySelector("#i16");
var box15 = document.querySelector("#i15");
var box14 = document.querySelector("#i14");
var box13 = document.querySelector("#i13");
var box9 = document.querySelector("#i9");
var box5 = document.querySelector("#i5");

var d = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

var arrivdiv = [box1, box2, box3, box4, box8, box12, box16, box15, box14, box13, box9, box5];

const player1 = document.getElementById('btn1');
const player2 = document.getElementById('btn2');
console.log(d.length);
console.log(player1);
console.log(player2);

player1.addEventListener('click', rollDice_1);
player2.addEventListener('click', rollDice_2);

var person1 = ["pkp", 0, 1000];
var person2 = ["pkp1", 0, 1000];

function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1; //1 minimum score
    console.log("Person 1 Play", position);
    changePosition_1(person1[1], position);
}

function rollDice_2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("Person 2 PLays", position);
    changePosition_2(person2[1], position);
}

var count = 0;


function changePosition_1(old, current_position) {
    count++;
    var newPostion = old + current_position;
    person1[1] = newPostion;
    newPostion = newPostion % 11;
    //changing the image postion
    var img = document.getElementById('img1');
    img.style.visibility = "hidden";
    console.log(" count" + count);
    if (count > 1) {
        var elem = document.getElementById('img11');
        elem.remove();
    }

    let template = '<img src="./images/p1.png" id="img11" alt="red" style="width:36px;">';
    arrivdiv[newPostion].innerHTML += template;
    console.log(" person1 play" + person1[1]);
    changeMoney1(person1[1]);
}

var count2 = 0;


function changePosition_2(old, current_position) {
    count2++;
    var newPostion = old + current_position;
    person2[1] = newPostion;
    newPostion = newPostion % 11;
    //changing the image postion
    var img = document.getElementById('img2');
    img.style.visibility = "hidden";
    console.log(" count2" + count);
    if (count2 > 1) {
        var elem = document.getElementById('img12');
        elem.remove();
    }

    let template = '<img src="./images/p2.png" id="img12" alt="red" style="width:36px;">';
    arrivdiv[newPostion].innerHTML += template;
    console.log(" person 2 play" + person2[1]);
    changeMoney2(person2[1]);
}

function changeMoney1(p2) {
    var updateMoney = 0;
    if (p2 < d.length) {
        updateMoney = person1[2] - d[p2 - 1];
    } else {
        p2 %= 11;
        updateMoney = person1[2] - d[p2 - 1];
    }

    person1[2] = updateMoney;

    if (updateMoney > 0) {
        document.querySelector('.item3').innerHTML = updateMoney;
    } else {
        document.querySelector('.item3').innerHTML = "PLayer 2 Win";
    }
    console.log(updateMoney);
}

function changeMoney2(p2) {
    var updateMoney = 0;
    if (p2 < d.length) {
        updateMoney = person1[2] - d[p2 - 1];
    } else {
        p2 %= 11;
        updateMoney = person1[2] - d[p2 - 1];
    }

    person2[2] = updateMoney;

    console.log("Hello " + person1[2] + " - " + d[p2 - 1]);
    if (updateMoney > 0) {
        document.querySelector('.item4').innerHTML = updateMoney;
    } else {
        document.querySelector('.item4').innerHTML = "PLayer 1 Win";
    }
    console.log(updateMoney);
}