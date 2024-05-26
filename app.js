particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
    const music = document.getElementById('bg-music');
    music.play().catch(error => {
        console.log('Music playback was prevented');
    });
});

let messages = [
    "从见到你的那一刻起，我的心中便充满了爱意。你的一笑一颦，都是我心中的阳光。愿我们的未来充满幸福与美好，携手共度每一个美妙的瞬间。",
    "欣欣，每次看到你，我的心都会跳动得更加激烈。你的微笑是我最大的动力。",
    "无论未来如何，我都会一直爱你，陪伴你，与你共同面对生活中的每一个挑战。",
    "你是我生命中的阳光，照亮了我的每一天，带给我无尽的温暖和快乐。"
];

function showMore() {
    let message = document.getElementById('message');
    let currentMessage = message.innerText;
    let nextMessageIndex = (messages.indexOf(currentMessage) + 1) % messages.length;
    message.innerText = messages[nextMessageIndex];
    growTree();
}

function updateTimer() {
    let startTime = new Date("2023-04-03T00:00:00"); // 你们在一起的开始时间
    let now = new Date();
    let diff = now - startTime;
    
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('timer').innerText = `我们在一起的时间：${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
}

setInterval(updateTimer, 1000);

function growTree() {
    const treeSVG = document.getElementById('tree');
    treeSVG.innerHTML = `
        <path id="trunk" d="M50 90 L50 50" stroke="brown" stroke-width="2"></path>
        <path id="branch1" d="M50 50 Q40 40 30 50" stroke="brown" stroke-width="2"></path>
        <path id="branch2" d="M50 50 Q60 40 70 50" stroke="brown" stroke-width="2"></path>
        <circle id="leaf1" cx="30" cy="50" r="3" fill="green"></circle>
        <circle id="leaf2" cx="70" cy="50" r="3" fill="green"></circle>
        <circle id="flower" cx="50" cy="45" r="2" fill="red"></circle>
    `;
    animateTree();
}

function animateTree() {
    anime({
        targets: '#trunk, #branch1, #branch2',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: false
    });

    anime({
        targets: '#leaf1, #leaf2, #flower',
        r: [0, 3],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1500,
        direction: 'alternate',
        loop: false
    });
}

function toggleMusic() {
    const music = document.getElementById('bg-music');
    const controlButton = document.getElementById('music-control');
    if (music.paused) {
        music.play();
        controlButton.innerText = '暂停音乐';
    } else {
        music.pause();
        controlButton.innerText = '播放音乐';
    }
}

function showTips() {
    document.getElementById('tips-modal').style.display = 'block';
}

function closeTips() {
    document.getElementById('tips-modal').style.display = 'none';
}
