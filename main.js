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
};

function changeRocketAssets() {
  rocket.src = RocketHander.getRocketAssets();
}
