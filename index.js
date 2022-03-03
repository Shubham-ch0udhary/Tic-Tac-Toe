let turn = 'X';
var gameOver = false;

function changeTurn () {
    return turn === 'X' ? 'O' : 'X';
}

const decideWinner = () => {
    let boxSpans = document.getElementsByClassName('boxSpan');
    let wins = [
        [0,1,2, 5, 5, 0],
        [3,4,5, 5, 15.5, 0],
        [6,7,8, 5, 25, 0],
        [0,3,6, -9, 15, 90],
        [1,4,7, 2, 15.5, 90],
        [2,5,8, 11, 16, 90],
        [0,4,8, 3, 17, 210],
        [2,4,6, -1, 16, -210]
    ];
    wins.forEach(element => {
        if((boxSpans[element[0]].innerText === boxSpans[element[1]].innerText) && (boxSpans[element[1]].innerText === boxSpans[element[2]].innerText) && (boxSpans[element[1]].innerText !== '')) {
            alert(boxSpans[element[0]].innerText + '  Won ');
            gameOver = true;
            document.querySelector('.line').style.width = '30vw'
            document.querySelector('.line').style.transform = `translate(${element[3]}vw, ${element[4]}vw) rotate(${element[5]}deg)`
        }
    })
}

let elements = document.getElementsByClassName("boxText");

Array.from(elements).forEach((element) => {
  let boxTexts = element.querySelector(".boxSpan");

  element.addEventListener("click", function () {
    console.log(boxTexts);
    if (boxTexts.innerText === "" ) {
      if(!gameOver) {
        boxTexts.innerText = turn;
        turn = changeTurn();
        decideWinner();
      } else {
        alert('Game is Over');
      }
      
    }
    
  });
});
