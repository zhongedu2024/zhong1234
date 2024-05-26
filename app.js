particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
    document.getElementById('bg-music').play();
});

let messages = [
    "从见到你的那一刻起，我的心中便充满了爱意。愿我们的未来一起度过每一个美好的时光。",
    "欣欣，每次看到你，我的心都会跳动得更加激烈。",
    "无论未来如何，我都会一直爱你，陪伴你。",
    "你是我生命中的阳光，照亮了我的每一天。"
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
    const trunk = document.getElementById('trunk');
    const branch1 = document.getElementById('branch1');
    const branch2 = document.getElementById('branch2');
    const leaf1 = document.getElementById('leaf1');
    const leaf2 = document.getElementById('leaf2');
    const flower = document.getElementById('flower');

    trunk.setAttribute('stroke-dasharray', trunk.getTotalLength());
    trunk.setAttribute('stroke-dashoffset', trunk.getTotalLength());
    trunk.style.animation = 'draw 2s forwards';

    branch1.setAttribute('stroke-dasharray', branch1.getTotalLength());
    branch1.setAttribute('stroke-dashoffset', branch1.getTotalLength());
    branch1.style.animation = 'draw 2s forwards 2s';

    branch2.setAttribute('stroke-dasharray', branch2.getTotalLength());
    branch2.setAttribute('stroke-dashoffset', branch2.getTotalLength());
    branch2.style.animation = 'draw 2s forwards 2s';

    leaf1.style.animation = 'grow 1s forwards 4s';
    leaf2.style.animation = 'grow 1s forwards 4s';
    flower.style.animation = 'bloom 1s forwards 5s';

    // 添加交互效果
    leaf1.addEventListener('mouseenter', () => leaf1.setAttribute('fill', 'lightgreen'));
    leaf1.addEventListener('mouseleave', () => leaf1.setAttribute('fill', 'green'));

    leaf2.addEventListener('mouseenter', () => leaf2.setAttribute('fill', 'lightgreen'));
    leaf2.addEventListener('mouseleave', () => leaf2.setAttribute('fill', 'green'));

    flower.addEventListener('click', () => flower.setAttribute('fill', 'pink'));
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
