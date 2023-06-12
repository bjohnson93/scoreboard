console.log('The JS is all hooked up')

let homeScore = 0

let awayScore = 0

function addHome(num) {
  homeScore += num
  drawHome()

}

function drawHome() {
  let totalScoreElem = document.getElementById('homeScore')
  totalScoreElem.innerText = homeScore
}

function addAway(num) {
  awayScore += num

  drawAway()
}

function drawAway() {
  let totalScoreElem = document.getElementById('awayScore')
  totalScoreElem.innerText = awayScore
}





function resetScore() {
  awayScore *= 0
  homeScore *= 0

  let resetAwayScoreElem = document.getElementById('awayScore')
  resetAwayScoreElem.innerText = awayScore

  let resetHomeScoreElem = document.getElementById('homeScore')
  resetHomeScoreElem.innerText = homeScore
}
