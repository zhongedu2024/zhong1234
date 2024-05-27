document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ["从见到你的那一刻起，我的心中便充满了爱意。", "你的一笑一颦，都是我心中的阳光。", "愿我们的未来充满幸福与美好，携手共度每一个美妙的瞬间。"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    };
    var typed = new Typed("#message", options);

    VANTA.WAVES({
        el: "#vanta-bg",
        color: 0x33334d,
        shininess: 50,
        waveHeight: 20,
        waveSpeed: 1.5,
        zoom: 1
    });

    // 初始化日记编辑器
    var simplemde = new SimpleMDE({ element: document.getElementById("diary-editor") });

    // 显示日记模态框
    window.showDiary = function () {
        document.getElementById('diary-modal').style.display = 'block';
        updateDiaryHeader();
    };

    // 关闭日记模态框
    window.closeDiary = function () {
        document.getElementById('diary-modal').style.display = 'none';
    };

    // 显示失眠治愈模态框
    window.showCure = function () {
        document.getElementById('cure-modal').style.display = 'block';
    };

    // 关闭失眠治愈模态框
    window.closeCure = function () {
        document.getElementById('cure-modal').style.display = 'none';
    };

    // 更新日记头部信息
    function updateDiaryHeader() {
        const date = moment().format('YYYY年MM月DD日 HH:mm');
        document.getElementById('diary-date').innerText = date;

        // 获取天气信息
        fetchWeather().then(weather => {
            document.getElementById('diary-weather').innerText = weather;
        });
    }

    // 获取天气信息
    async function fetchWeather() {
        const apiKey = 'your_openweathermap_api_key';
        const city = 'your_city';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=zh_cn`;

        const response = await fetch(url);
        const data = await response.json();
        return `${data.weather[0].description}, ${data.main.temp}°C`;
    }

    // 保存日记
    window.saveDiary = function () {
        const content = simplemde.value();
        const date = moment().format('YYYY-MM-DD HH:mm');
        const diary = { date, content };

        // 存储到本地存储
        let diaries = JSON.parse(localStorage.getItem('diaries')) || [];
        diaries.push(diary);
        localStorage.setItem('diaries', JSON.stringify(diaries));

        alert('日记已保存');
        closeDiary();
    };

    // 创建并动画化树
    function createTree() {
        const s = Snap("#tree");
        const trunk = s.rect(47, 50, 6, 40).attr({ fill: "brown" });
        const branch1 = s.line(50, 50, 30, 30).attr({ stroke: "brown", strokeWidth: 2 });
        const branch2 = s.line(50, 50, 70, 30).attr({ stroke: "brown", strokeWidth: 2 });
        const leaves = s.circle(50, 45, 0).attr({ fill: "green" });
        const flower = s.circle(50, 45, 0).attr({ fill: "red" });

        trunk.animate({ height: 40 }, 1000);
        branch1.animate({ x2: 30, y2: 30 }, 1000);
        branch2.animate({ x2: 70, y2: 30 }, 1000);
        leaves.animate({ r: 10 }, 1000);
        flower.animate({ r: 5 }, 1000);
    }

    // 显示更多文字时触发树的动画
    window.showMore = function () {
        let message = document.getElementById('message');
        let currentMessage = message.innerText;
        let nextMessageIndex = (messages.indexOf(currentMessage) + 1) % messages.length;
        message.innerText = messages[nextMessageIndex];
        createTree();
    };
});

let messages = [
    "从见到你的那一刻起，我的心中便充满了爱意。你的一笑一颦，都是我心中的阳光。愿我们的未来充满幸福与美好，携手共度每一个美妙的瞬间。",
    "欣欣，每次看到你，我的心都会跳动得更加激烈。你的微笑是我最大的动力。",
    "无论未来如何，我都会一直爱你，陪伴你，与你共同面对生活中的每一个挑战。",
    "你是我生命中的阳光，照亮了我的每一天，带给我无尽的温暖和快乐。"
];
