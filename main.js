let rocket = document.getElementById("rocket");

window.onload = function () {
  setInterval(changeRocketAssets, 100);
};

function changeRocketAssets() {
  rocket.src = RocketHander.getRocketAssets();
}
