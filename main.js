let rocket = document.getElementById("rocket");

window.onload = function () {
  setInterval(changeRocketAssets, 100);
  window.onmousemove = function (e) {
    if (e.clientX <= window.innerWidth - 100) {
      rocket.style.left = e.clientX + "px";
    }
    if (e.clientY <= window.innerHeight - 180) {
      rocket.style.top = e.clientY + "px";
    }
  };
  createEnemy();
};

function changeRocketAssets() {
  rocket.src = RocketHander.getRocketAssets();
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let enemyterVal = null;
function createEnemy() {
  let enemy = document.createElement("img");
  enemy.src = `src/assets/enemy${getRandom(1, 5)}.png`;
  enemy.className = "enemy";
  enemy.style.top = "-100px";
  enemy.style.left = getRandom(0, window.innerWidth - 150) + "px";
  document.body.appendChild(enemy);
  enemyterVal = setInterval(moveEnemy, 1, enemy);
}

function moveEnemy(enemy) {
  let posation = Number(enemy.style.top.replace("px", ""));
  if (posation > innerHeight + 100) {
    clearInterval(enemyterVal);
    enemy.remove();
    createEnemy();
  }
  enemy.style.top = posation + 2 + "px";
}
