casket = document.querySelector("#casket");
target = document.querySelector("#target");
exitDoor = document.querySelector("#exitDoor");
qwest = document.querySelector("#qwest");
game1 = document.querySelector("#game1");
sudoku = document.querySelector("#sudoku");
sudoku_game = document.querySelector("#sudoku_game");
gameX = document.querySelector("#gameX");
game15 = document.querySelector("#g15");
gameBS = document.querySelector("#bs");
element1 = document.querySelector("#element1");
element2 = document.querySelector("#element2");
element3 = document.querySelector("#element3");
element4 = document.querySelector("#element4");

element1_mi = document.querySelector("#element1_mi");
element2_mi = document.querySelector("#element2_mi");
element3_mi = document.querySelector("#element3_mi");
element4_mi = document.querySelector("#element4_mi");
target__mi = document.querySelector("#target__mi");
sudoku_mi = document.querySelector("#sudoku_mi");
casket_mi = document.querySelector("#casket_mi");
gameX_mi = document.querySelector("#gameX_mi");

h2 = document.querySelector("#h2");
music = document.querySelector("audio");
source = document.querySelector("audio source");
sound == "off"; // "on"
sndIcon = document.querySelector("#sound img");

sndIcon.onclick = function () {
    if (sound == "on") {
        sndIcon.src = "img/mute_sound.png";
        sound = "off";
        music.pause();
    } else {
        sndIcon.src = "img/sound_on.png";
        sound = "on";
        music.play();
    }
};

clickHello = new Audio('./audio/click.mp3');
seabom = new Audio('./audio/bom.mp3');
VictoryMusic = new Audio('./audio/end.mp3');

helloText = document.querySelector("#text");
helloText.innerText = "The strong ringing of the chimes woke you up. Terrible headache. Where are you? Big Ben is visible through the window, it was his ringing that woke you up. Terrible headache. The entrance door is closed and you can't get out. You were not here by yourself - the old pirate Pattinson was with you. You have come to learn about a new trade route to China, but have not received a response. You need to find the secret that is hidden here. Captain Pattinson loves ships and everything connected with them, for sure the secret is connected with them";

fadeIn(hello,500);


btnHello.onclick = function () {
    clickHello.play();
    startGames();
};

function startGames() {
    hello.style.display = "none";
    hello.style.opacity = "0";
    qwest.style.display = "block";
}

var cardsField = document.querySelector("#cards");
var start = document.querySelector("#start");
// ?????????? ??????????
var resetBlock1 = document.querySelector("#rstBlk-g1");
var resetBlock15 = document.querySelector("#rstBlk-g15");
var resetBlockBS = document.querySelector("#rstBlk-gbs");
// ???????????? ??????????
var resetBtn1 = document.querySelector("#reset-g1");
var resetBtn15 = document.querySelector("#reset-g15");
var resetBtnBS = document.querySelector("#reset-gbs");


btlSh = document.querySelector("#btlSh");
btlSh.innerText = "The carabiner is in your hands, now you can attach a strong hook with it. Somewhere there was a book in which there was a detailed instruction on how to make climbing equipment.";
parTx = document.querySelector("#parTx");
parTx.innerText = "The key is in your hands, it is obvious that you need to find a strong rope for the descent? but where is she? where to look for it? this is a serious task for logic, it's good that you are ready to play mind games";
cardsField.style.background = "url(img/key_W.jpg)";
//textVer = document.querySelector = ("#textVer")
//textVer.innerText = "The problem is solved, having received the rope you can easily build climbing equipment and go down from the window, now you have everything to pass on the secret sea route.";

var countCards = 36;

exitDoor.onclick = function () {
    qwestfield.style.display = "none";
    massage.style.display = "block";
    h2.innerText =
        "The old crook has locked you up. You can't leave the room until you find a safe way, it's too high to jump down.";
    fadeIn(massage, 300);
    btnOk.onclick = function () {
        clickHello.play();
        massage.style.display = "none";
        massage.style.opacity = "0";
        qwestfield.style.display = "block";
    };
};

let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

arr.sort(()=>Math.random()-0.5)

var delCards = 0;

var selected = [];

var pauseOpnCard = false;

for (var i = 0; i < countCards; i = i + 1) {
    var li = document.createElement("li");
    li.id = i;
    cardsField.appendChild(li);
}

cardsField.onclick = function (event) {
    if (pauseOpnCard == false) {
        var element = event.target;
        if (element.tagName == "LI" && element.className != "active") {
            selected.push(element);
            element.className = "active";
            var img = arr[element.id];
            element.style.backgroundImage = "url(img/" + img + ".png)";

            if (selected.length == 2) {
                pauseOpnCard = true;
                if (arr[selected[0].id] == arr[selected[1].id]) {
                    selected[0].style.visibility = "hidden";
                    selected[1].style.visibility = "hidden";
                    delCards = delCards + 2;
                }
                setTimeout(refreshCards, 500);
            }
        }
    }
};
function refreshCards() {
    for (var i = 0; i < countCards; i = i + 1) {
        cardsField.children[i].className = "";
        cardsField.children[i].style.backgroundImage = 'url("img/chess.png")';
    }
    if (delCards == countCards) {
        //resetBlock1.style.display = "block";
        game1.style.display = "none";
        massage.style.display = "block";
        h2.innerText = "The key is in your hands, it is obvious that you need to find a strong rope for the descent? but where is she? where to look for it? this is a serious task for logic, it's good that you are ready to play mind games";
        fadeIn(massage, 300);
    btnOk.onclick = function () {
        massage.style.display = "none";
        qwestfield.style.display = "block";
        gameX.style.display = "block";
        casket.style.display = "none";
        casket_mi.style.display = "block";

    };
    }
    selected = [];
    pauseOpnCard = false;
}

element1.onclick = function () {
    qwestfield.style.display = "none";
    
    massage.style.display = "block";
    h2.innerText = "Removing the back of the clockwork reveals a list of coordinates and a secret code to help you find your way on a map. Was there a map somewhere? Coordinates need to be applied";
    fadeIn(massage, 300);
    btnOk.onclick = function () {
        clickHello.play();
        massage.style.display = "none";
        massage.style.opacity = "0";
        qwestfield.style.display = "block";
    element1.style.display = "none";
    element1_mi.style.display = "block";
    element2.style.display = "block";
    };

};

element2.onclick = function () {
    qwestfield.style.display = "none";
    element2.style.display = "none";
    element2_mi.style.display = "block";
    element3.style.display = "block";
    massage.style.display = "block";
    h2.innerText = "Removing the back cover of the clock mechanism you find a list of coordinates and a secret cipher that will help you find your way on the map. Was there a map anywhere?";
    fadeIn(massage, 300);
    btnOk.onclick = function () {
        clickHello.play();
        massage.style.display = "none";
        massage.style.opacity = "0";
        qwestfield.style.display = "block";
    };
};

element3.onclick = function () {
    qwestfield.style.display = "none";
    element3.style.display = "none";
    element3_mi.style.display = "block";
    element4.style.display = "block";
    massage.style.display = "block";
    h2.innerText = "The path is mapped, with the help of a cipher you learned a new trade route that will help shorten the month of travel. You need to quench your thirst and think how to get out.";
    fadeIn(massage, 300);
    btnOk.onclick = function () {
        clickHello.play();
        massage.style.display = "none";
        massage.style.opacity = "0";
        qwestfield.style.display = "block";
    };
};
element4.onclick = function () {
    qwestfield.style.display = "none";
    element4.style.display = "none";
    element4_mi.style.display = "block";
    target.style.display = "block";
    massage.style.display = "block";
    h2.innerText = "You refreshed yourself with water. Thoughts cleared up in my head, you need to go down. You need strong fasteners that will allow you to get out of the window, such fasteners are used by naval gunners of the Royal Navy";
    fadeIn(massage, 300);
    btnOk.onclick = function () {
        clickHello.play();
        massage.style.display = "none";
        massage.style.opacity = "0";
        qwestfield.style.display = "block";
    };
};

target.onclick = function () {
    seabom.play();
    qwestfield.style.display = "none";
    gameBS.style.display = "block";
    btnOk.onclick = function () {
        massage.style.display = "none";
        massage.style.opacity = "0";
    };
    resetBtnBS.onclick = function () {
        clickHello.play();
        gameBS.style.display = "none";
        qwestfield.style.display = "block";
        target__mi.style.display = "block";
        sudoku.style.display = "block";
        target.style.display = "none";
        //h3.innerText = "The carabiner is in your hands, now you can attach a strong hook with it. Somewhere there was a book in which there was a detailed instruction on how to make climbing equipment.";
    };
};
sudoku.onclick = function() {
    qwestfield.style.display = "none"
    sudoku_game.style.display = "block"
    sudoku.style.display = "block"
    btnOk.onclick = function() {
        clickHello.play();
        massage.style.display = "none";
        massage.style.opacity = "0";
    }
}

casket.onclick = function () {
    qwestfield.style.display = "none";
    game1.style.display = "block";

    btnOk.onclick = function () {
        clickHello.play();
        massage.style.display = "none";
        massage.style.opacity = "0";
    };

    resetBtn1.onclick = function () {
        clickHello.play();
        game1.style.display = "none";
        qwestfield.style.display = "block";
        gameX.style.display = "block";
        casket.style.display = "none";
        casket_mi.style.display = "block";
    };
};

gameX.onclick = function () {
    qwestfield.style.display = "none";
    game15.style.display = "block";
    btnOk.onclick = function () {
        clickHello.play();
        massage.style.display = "none";
        massage.style.opacity = "0";
    };
    resetBtn15.onclick = function () {
        clickHello.play();
        game15.style.display = "none";
        qwestfield.style.display = "block";
        gameX_mi.style.display = "block";
        exitDoor.style.display = "none";
        openDoor.style.display = "block";
        h2.innerText = "?????????????? ??????????????";
    };
};

openDoor.onclick = function () {
    VictoryMusic.play();
    qwestfield.style.display = "none";
    massage.style.display = "block";
    h2.innerText = "You have found all the answers, CONGRATULATIONS! Lots of wealth and adventures lie ahead. Many thousands of pounds will be made and many sailors' lives saved. Do you want to repeat this day?";
    fadeIn(massage, 300);
    btnOk.onclick = function () {
        location.reload();
    };
};

//???????? 15

var arr15 = [],
    box,
    ei,
    ej;
function swap(arr, i1, j1, i2, j2) {
    t = arr15[i1][j1];
    arr15[i1][j1] = arr15[i2][j2];
    arr15[i2][j2] = t;
}
window.onload = function () {
    box15 = document.querySelector("#g15");
    // box15 = document.getElementById("g15");
    newGame15();
    //document.getElementById("reset").onclick = newGame15;
};
function cellClick(event) {
    var event = event || window.event,
        el = event.srcElement || event.target,
        i = el.id.charAt(0),
        j = el.id.charAt(2);
    if (
        (i == ei && Math.abs(j - ej) == 1) ||
        (j == ej && Math.abs(i - ei) == 1)
    ) {
        document.getElementById(ei + " " + ej).innerHTML = el.innerHTML;
        el.innerHTML = "";
        ei = i;
        ej = j;
        var q = true;
        for (i = 0; i < 4; ++i)
            for (j = 0; j < 4; ++j)
                if (
                    i + j != 6 &&
                    document.getElementById(i + " " + j).innerHTML !=
                        i * 4 + j + 1
                ) {
                    q = false;
                    break;
                }
        if (q) {
            //alert("Victory!");
            resetBlock15.style.display = "block"; //????????????, ???????????? ????????????
            fadeIn(resetBlock15, 300);
        }
    }
}
function newGame15() {
    for (i = 0; i < 4; ++i) {
        arr15[i] = [];
        for (j = 0; j < 4; ++j) {
            if (i + j != 6) arr15[i][j] = i * 4 + j + 1;
            else arr15[i][j] = "";
        }
    }
    ei = 3;
    ej = 3;
    for (i = 0; i < 1600; ++i)
        switch (Math.round(3 * Math.random())) {
            case 0:
                if (ei != 0) swap(arr15, ei, ej, --ei, ej);
                break; // up
            case 1:
                if (ej != 3) swap(arr15, ei, ej, ei, ++ej);
                break; // right
            case 2:
                if (ei != 3) swap(arr15, ei, ej, ++ei, ej);
                break; // down
            case 3:
                if (ej != 0) swap(arr15, ei, ej, ei, --ej); // left
        }
    var table15 = document.createElement("table"),
        tbody15 = document.createElement("tbody");
    table15.appendChild(tbody15);
    for (i = 0; i < 4; ++i) {
        var row15 = document.createElement("tr");
        for (j = 0; j < 4; ++j) {
            var cell15 = document.createElement("td");
            cell15.id = i + " " + j;
            cell15.onclick = cellClick;
            cell15.innerHTML = arr15[i][j];
            row15.appendChild(cell15);
        }
        tbody15.appendChild(row15);
    }
    if (box15.childNodes.length == 1) box15.removeChild(box15.firstChild);
    box15.appendChild(table15);
}
//************************ */
// ???????? ?????????????? ??????
var startBtn = document.querySelector("#startBtn"); // ???????????????????? ???????????? ?????????? ?? html ?????????? id ????????????
var startBlock = document.querySelector("#start"); // ???????????????????? ???????? ??????????-????????
var gameBlock = document.querySelector("#game"); // ???????????????????? ???????? ????????
var enemyBlock = document.querySelector("#enemy");
var gameLand = document.querySelector("#bs");

var countLifes = 3; // ?????????????? ????????????
var countEnemy = 2; // ???????????????????? ????????????
var gamerSkin = "skin_1";

var score = document.querySelector("#score span"); // ???????????????????? ???????? ???????????????? ??????????

// ?????????????? ?????? ?????????? ???? ???????????? "Start"
startBtn.onclick = function () {
    startGame();
};

var gamer = document.querySelector("#player"); // ???????????????????? ???????? ????????????
movePlayer(gamer); // ???????????????? ????????????

// ?????????????? ????????
function startGame() {
    startBlock.style.display = "none"; // "??????????" ???????? ??????????
    gameBlock.style.display = "block"; // ???????????????? (????????????????????) ???????? ????????
    gamer.className = gamerSkin;
    createLifes(); // ???????????????????? ??????????
    createEnemy(countEnemy); //
}
// ?????????????????????? ????????????
// ???????? ???????????????????? ???????????? ?? ????????????, ?????????? ?????????? ?? ???????????? ???????????? ???????? ???? +/- ???????????? ???????????????? ????????????
function movePlayer(obj) {
    document.onkeydown = function (event) {
        // ???????????????????? ?????????????? ???? ?????????????? ????????????
        if (event.keyCode == 83 && obj.offsetTop < 490) {
            // ???????? ???????????? ?????????????? "w", "W", "??", "??" ???????????????????? ???? ??????????????????
            obj.style.top = obj.offsetTop + 20 + "px"; // ?? ?????????????? ?????????????????????? ???? ?????????????????? ?????????????????? 10 ????????????????
        } else if (event.keyCode == 87 && obj.offsetTop > 80) {
            // ???????? ???????????? ?????????????? "s", "S", "??", "??" ???????????????????? ???? ??????????????????
            obj.style.top = obj.offsetTop - 20 + "px"; // ?? ?????????????? ?????????????????????? ???? ?????????????????? ???????????????? 10 ????????????????
        } else if (event.keyCode == "32") {
            // ???????? ?????????? ????????????
            createBullet(); // ????????????????...
        }
    };
}
// **** ???????????? ?? ?????????????? ****
// ?????????????? ??????????
function createEnemy(cnt) {
    for (let i = 1; i <= cnt; i++) {
        let enemy = document.createElement("div"); // ???????????????????? ???????? ??????????
        enemy.className = "enemy " + typeEnemy(); // ?????????????????????? ?????????? ??????????
        enemy.style.top = random(100, gameLand.clientHeight - 100) + "px"; // ???????????????????? ?????????????? ??????????
        enemy.style.left = gameLand.clientWidth - 100 + "px";
        enemyBlock.appendChild(enemy); // ?????????????? ???????????????? ?????????????? ???????????????? ?????????? Enemy
        moveEnemy(); // ?????????????? ???????? ??????????
    }
}

function typeEnemy() {
    let type = random(1, 2);
    if (random(1, 2) == 1) {
        return "type-1";
    } else {
        return "type-2";
    }
}
// ???????????????? ????????????
function moveEnemy() {
    // ???????????????????????????? ????????????
    for (let i = 0; i < enemyBlock.children.length; i++) {
        let enemy = enemyBlock.children[i];
        let timerID = setInterval(function () {
            enemy.style.left = enemy.offsetLeft - 10 + "px"; // ???????????? ???????????????????? ?????????? - ?????????????? ??????????
            // ?????????????????? ????????????????????
            if (enemy.offsetLeft <= -1) {
                //enemy.style.left = gameLand.clientWidth + 200 + "px"; // ???????????????????? ?????????? ?? "???????????? ????????"
                enemy.remove(); // ?????????????? ???????? ??????????
                // ?????????????? ???????????? ?????????? ?? "???????????? ????????"
                clearInterval(timerID); // ?????????????? ????????????
                //console.dir(enemyBlock);
                createEnemy(1);
                die();
            } else if (enemy.offsetLeft < 160) {
                enemy.style.opacity = 0;
            }
        }, 500);
    }
}
// **** ???????????????? ****
// ?????????????? Bullet
//???????????? ?????????????? ???????? ?? ?????????????????????? ???? ????????????
function createBullet() {
    let bullet = document.createElement("div"); // ???????????????????? ???????? ????????
    bullet.className = "bullet"; // ?????????????????????? ?????????? ??????????
    bullet.style.top = gamer.offsetTop + 20 + "px"; // ???????????????????? ?????????????? ??????????
    gameBlock.appendChild(bullet); // ?????????????? ???????????????? ?????????????? ???????????????? ??????????
    moveBullet(bullet); // ?????????????? ???????? ????????
}
// ???????????????? ????????
function moveBullet(obj) {
    // ???????????????????????????? ????????????
    let timerId = setInterval(function () {
        obj.style.left = obj.offsetLeft + 20 + "px"; // ???????????? ???????????????????? ???????? - ?????????????? ????????????
        // ?????????????????? ????????????????????
        if (obj.offsetLeft > gameLand.clientWidth) {
            obj.remove(); // ?????????????? ???????? ????????
            clearInterval(timerId); // ?????????????? ????????????
        }
        isBoom(obj); // ??????????
    }, 50);
}
// ???????????? ?????????? ?????? ?????????????????? ???? ??????????
function isBoom(obj) {
    for (let i = 0; i < enemyBlock.children.length; i++) {
        let enemy = enemyBlock.children[i];
        // let enemy = document.querySelector(".enemy"); // ???????????????????? ???????? ??????????
        if (
            // ???????????? ???????????????? ???? ?????????????????? ???????? ???? ??????????
            obj.offsetTop > enemy.offsetTop &&
            obj.offsetTop < enemy.offsetTop + enemy.clientHeight &&
            obj.offsetLeft > enemy.offsetLeft
        ) {
            createBoom(enemy.offsetLeft, enemy.offsetTop);
            obj.remove(); // ?????????????? ???????? ????????
            enemy.remove(); // ?????????????? ???????? ??????????
            score.innerText = Number(score.innerText) + 1;
            if (Number(score.innerText) == 5) {
                countEnemy = countEnemy + 1;
                createEnemy(1);
            } else if (Number(score.innerText) == 10) {
                countEnemy = countEnemy + 1;
                createEnemy(1);
            } else if (Number(score.innerText) == 20) {
                countEnemy = countEnemy + 1;
                createEnemy(1);
            } else if (Number(score.innerText) == 30) {
                endGame();
            }
            createEnemy(1); //?????????????? ???????????? ??????????
        }
    }
}
// ????????????????, ???????? ???? ????????, ???????????????? ???? ????????????
function die() {
    countLifes = countLifes - 1; // ?????????????????? ?????????????? ????????????
    if (countLifes <= 0) {
        endGame(); // ???????? ???????????? ?????? - ??????????????
    } else {
        createLifes(); // ???????????????????? ???????????????? (??????????)
    }
}
// ?????????????????????? ???????????????? "???????????????????? ????????????"
function createLifes() {
    let lifesBlock = document.querySelector("#lifes"); // ???????????????????? ???????? ????????????
    lifesBlock.innerHTML = ""; // ???????????????? ????????
    let i = 0; // ?????????????? ?????? ?????????? ?? ????????
    while (i < countLifes) {
        // ???????? ???????????????? ???????????????? ?????????? ???????????? ???????????????? "????????????"
        let span = document.createElement("span"); // ???????????????????? ???????? span "????????????????"
        lifesBlock.appendChild(span); // ?????????????????? ???????? ???????????????? ?? ???????? ????????????

        i = i + 1; // ?????????????????????? ?????????????? ??????????
    }
}

function createBoom(left, top) {
    let boom = document.createElement("div"); // ???????????????????? ???????? ????????????
    boom.className = "boom"; // ?????????????????????? ?????????? ??????????
    boom.style.left = left - 50 + "px";
    boom.style.top = top - 50 + "px"; // ???????????????????? ?????????????? ??????????

    gameBlock.appendChild(boom); // ?????????????? ???????????????? ??????????????
    setTimeout(function () {
        boom.remove(); // ?????????????? ???????? ???????????? 1 ??????.
    }, 1000);
}

function endGame() {
    let scoreBlk = document.querySelector("#end h3 span");
    scoreBlk.innerText = score.innerText;
    gameBlock.innerHTML = "";
    let endBlock = document.querySelector("#end");
    endBlock.style.display = "block";
    let restartBtn = document.querySelector("#end button");
    restartBtn.onclick = restart;
}

function restart() {
    //location.reload();
    gameBS.style.background = 0;
    resetBlockBS.style.display = "block";
    fadeIn(resetBlockBS, 300);
}

function random(min, max) {
    let rnd = Math.random() * (max - min) + min;
    return Math.round(rnd);
}

// ?????????????? ?????????????????? ???????????????? ?? ???????????????? ??????????????????
function fadeIn(el, speed) {
    var step = 1 / speed;
    var interval = setInterval(function() {
      if (+el.style.opacity >= 1)
        clearInterval(interval);
      el.style.opacity = +el.style.opacity + step;
    }, speed / 1000);
  }
