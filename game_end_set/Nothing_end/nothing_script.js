document.getElementById("gameRestart").addEventListener("click", function() {
    const intelligence = getRandomValue(1, 100);
    const magicPower = getRandomValue(1, 100);
    const attackPower = getRandomValue(1, 100);

    localStorage.setItem("intelligence", intelligence);
    localStorage.setItem("magicPower", magicPower);
    localStorage.setItem("attackPower", attackPower);

    const money = 100000000;
    localStorage.setItem("money", money);

    window.location.href = "../../index.html";
});

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
