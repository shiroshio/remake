// 게임 시작 버튼 함수
function startGame() {
    const actionPoints = parseInt(document.getElementById('actionPoints').value);
    const healthPoints = parseInt(document.getElementById('healthPoints').value);

    if (isNaN(actionPoints) || isNaN(healthPoints) || actionPoints < 1 || actionPoints > 100 || healthPoints < 1 || healthPoints > 100) {
        alert('다시 입력해주세요. 행동력과 생명력은 1 ~ 100 사이의 값만 가능합니다.');
        return;
    }

    localStorage.setItem('actionPoints', actionPoints);
    localStorage.setItem('healthPoints', healthPoints);
    
    // 다음 화면 URL을 'nextScreen.html'로 가정
    window.location.href = 'game_main/game_screen.html';
}
