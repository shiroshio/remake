// 게임 시작시 player UI 설정
document.addEventListener("DOMContentLoaded", function() {
    // 게임 시작 시 지능, 마력, 공격력 값을 랜덤하게 할당
    const intelligence = parseInt(localStorage.getItem("intelligence")) || getRandomValue(1, 100);
    const magicPower = parseInt(localStorage.getItem("magicPower")) || getRandomValue(1, 100);
    const attackPower = parseInt(localStorage.getItem("attackPower")) || getRandomValue(1, 100);

    localStorage.setItem("intelligence", intelligence);
    localStorage.setItem("magicPower", magicPower);
    localStorage.setItem("attackPower", attackPower);

    // 해당 값을 HTML에 표시합니다.
    document.getElementById("displayAttackPower").innerText = attackPower;
    document.getElementById("displayMagicPower").innerText = magicPower;
    document.getElementById("displayIntelligence").innerText = intelligence;
    
    const actionPoints = parseInt(localStorage.getItem("actionPoints"), 10) || 0;
    const healthPoints = parseInt(localStorage.getItem("healthPoints"), 10) || 0;

    document.getElementById("displayActionPoints").innerText = actionPoints;
    document.getElementById("displayHealthPoints").innerText = healthPoints;

    // 게임 시작 시 돈을 1억으로 설정하고 localStorage에 저장
    const money = parseInt(localStorage.getItem("money")) || 100000000;
    localStorage.setItem("money", money);

    document.getElementById("displayMoney").innerText = money + "원";

    renderStep(currentStep);

    document.getElementById("gameRestart").addEventListener("click", function() {
        // 지능, 마력, 공격력을 랜덤하게 재설정
        const intelligence = getRandomValue(1, 100);
        const magicPower = getRandomValue(1, 100);
        const attackPower = getRandomValue(1, 100);

        localStorage.setItem("intelligence", intelligence);
        localStorage.setItem("magicPower", magicPower);
        localStorage.setItem("attackPower", attackPower);

        const money = 100000000;
        localStorage.setItem("money", money);
        document.getElementById("displayMoney").innerText = money + "원";

        // 원하는 페이지로 이동
        window.location.href = "../index.html";
    });
});

// min부터 max의 값 중 하나를 랜덤하게 뽑는 함수
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let text1 = "현대 사회에서 열심히 공부하고 대학교에 가서 열심히 공부하여 대기업에 취업에 성공하였습니다. 하지만 당신은 연봉이 높지만, 하루종일 일만 하여 돈만 쌓이고 있는 상황이었습니다. 그래서 항상 당신은 피곤에 찌들어 살았습니다. 결국, 당신은 자기 자신을 위해 여행을 하기로 결정하였습니다. 어디로 여행을 갈 건가요?"

// 간단한 게임 데이터 예시
const gameData = {
    "1": {
        "text": text1,
        "choices": [
            {
                "text": "미국으로 간다. (행동력 20 소모, 돈 1000만원 소모)",
                "nextStep": 2,
                "actionPointsChange": -20,
                "healthPointsChange": 0,
                "moneyChange": -10000000 //1000만원 감소
            },
            {
                "text": "아 몰랑 여행 따위 알 빠야? 나는 쉴거야! (행동력 무한대로 증가)",
                "nextStep": 2,
                "actionPointsChange": 0,
                "healthPointsChange": 0,
                "moneyChange": 0,
                "url": "../game_end_set/Nothing_end/nothing_end.html"
            },
            {
                "text": "",
                "nextStep": 2,
                "actionPointsChange": 0,
                "healthPointsChange": 0,
                "moneyChange": 0
            }
        ]
    },
    "2": {
        "text": "텍스트 2",
        "choices": [
            {
                "text": "선택지 1 (단계 2)",
                "nextStep": 3,
                "actionPointsChange": 0,
                "healthPointsChange": 0,
                "moneyChange": 0
            },
            {
                "text": "선택지 2 (단계 2)",
                "nextStep": 3,
                "actionPointsChange": 0,
                "healthPointsChange": 0,
                "moneyChange": 0
            },
            {
                "text": "선택지 3 (단계 2)",
                "nextStep": 3,
                "actionPointsChange": 0,
                "healthPointsChange": 0,
                "moneyChange": 0
            }
        ]
    },
    "3": {
        "text": "텍스트 3",
        "choices": [
            {
                "text": "선택지 1 (단계 3)",
                "nextStep": 4,
                "actionPointsChange": 0,
                "healthPointsChange": 0,
                "moneyChange": 0
            },
            {
                "text": "선택지 2 (단계 3)",
                "nextStep": 4,
                "actionPointsChange": 0,
                "healthPointsChange": 0,
                "moneyChange": 0
            },
            {
                "text": "선택지 3 (단계 3)",
                "nextStep": 4,
                "actionPointsChange": 0,
                "healthPointsChange": 0,
                "moneyChange": 0
            }
        ]
    },
    "4": {
        "text": "텍스트 4",
        "choices": [
            {
                "text": "선택지 1 (단계 4)",
                "nextStep": 5,
                "actionPointsChange": 0,
                "healthPointsChange": 0,
                "moneyChange": 0
            },
            {
                "text": "선택지 2 (단계 4)",
                "nextStep": 5,
                "actionPointsChange": 0,
                "healthPointsChange": 0,
                "moneyChange": 0
            },
            {
                "text": "선택지 3 (단계 4)",
                "nextStep": 5,
                "actionPointsChange": 0,
                "healthPointsChange": 0,
                "moneyChange": 0
            }
        ]
    },
    "5": {
        "text": "텍스트 5",
        "choices": [
            {
                "text": "선택지 1 (단계 5)",
                "nextStep": 1,
                "actionPointsChange": 0,
                "healthPointsChange": 0,
                "moneyChange": 0
            },
            {
                "text": "선택지 2 (단계 5)",
                "nextStep": 1,
                "actionPointsChange": 0,
                "healthPointsChange": 0,
                "moneyChange": 0
            },
            {
                "text": "선택지 3 (단계 5)",
                "nextStep": 1,
                "actionPointsChange": 0,
                "healthPointsChange": 0,
                "moneyChange": 0
            }
        ]
    }
}


let currentStep = 1; // 게임 시작 단계

function renderStep(stepId) {
    const step = gameData[stepId];
    if (!step) return;

    // 텍스트 업데이트
    document.getElementById("gameText").innerText = step.text;

    let emptyChoicesCount = 0; // 비어있는 선택지의 수를 저장하기 위한 변수

    // 모든 버튼 초기화 및 숨기기
    for (let i = 1; i <= 3; i++) {
        const button = document.getElementById(`choice${i}`);
        button.style.display = "none";
        button.onclick = null;
    }

    // 선택지 업데이트
    step.choices.forEach((choice, index) => {
        const button = document.getElementById(`choice${index + 1}`);

        if (choice.text.trim() !== "") { 
            button.innerText = choice.text;
            button.onclick = () => navigateToStep(
                choice.nextStep, 
                choice.actionPointsChange, 
                choice.healthPointsChange,
                choice.moneyChange,
                choice.url
            );
            button.style.display = "block";
        } else {
            button.style.display = "none";
            emptyChoicesCount++; // 선택지가 비어있으면 카운트 증가
        }
    });
}


function navigateToStep(stepId, actionPointsChange = 0, healthPointsChange = 0, moneyChange = 0, url = null) {
    // 선택지에 URL이 있을 경우 해당 URL로 이동
    if (url) {
        window.location.href = url; 
        return;
    }

    // 행동력과 생명력 갱신
    let currentActionPoints = parseInt(localStorage.getItem("actionPoints") || "0");
    let currentHealthPoints = parseInt(localStorage.getItem("healthPoints") || "0");

    currentActionPoints += actionPointsChange;
    currentHealthPoints += healthPointsChange;

    localStorage.setItem("actionPoints", currentActionPoints);
    localStorage.setItem("healthPoints", currentHealthPoints);

    updatePlayerUI();  // 플레이어 UI 갱신

    // 행동력이나 생명력이 0이 되면 지정된 HTML 파일로 이동
    if (currentActionPoints <= 0) {
        window.location.href = "can't_move_end.html";
        return;
    }

    if (currentHealthPoints <= 0) {
        window.location.href = "../game_end_set/life_is_zero_end/life_is_zero_end.html";
        return;
    }

    let currentMoney = parseInt(localStorage.getItem("money") || "0");
    currentMoney += moneyChange;
    localStorage.setItem("money", currentMoney);
    document.getElementById("displayMoney").innerText = currentMoney + "원";



    renderStep(stepId);
}


function updatePlayerUI() {
    const actionPoints = parseInt(localStorage.getItem("actionPoints"), 10);
    const healthPoints = parseInt(localStorage.getItem("healthPoints"), 10);

    document.getElementById("displayActionPoints").innerText = actionPoints;
    document.getElementById("displayHealthPoints").innerText = healthPoints;
}
