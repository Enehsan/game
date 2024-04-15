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
function createEnemy() {
  let enemy = document.createElement("img");
  enemy.src = `src/assets/enemy1.png`;
  enemy.className = "enemy";
  enemy.style.top = "0px";
  enemy.style.left = getRandom(0, window.innerWidth - 150) + "px";
  document.body.appendChild(enemy);
}
