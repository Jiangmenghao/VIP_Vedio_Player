function play() {
    let myApi = document.getElementById("api");
    let index = myApi.selectedIndex;
    let apiValue = myApi.options[index].value;
    let myText = document.getElementById("mediaUrl").value;
    if (myText !== '') {
        document.getElementById("player").src = apiValue + myText;

        const timer = null;
        scrollTop(timer);
        setTimeout(function () {
            let donate = document.getElementsByClassName("donate")[0];
            donate.style.opacity = "1";
        },2000);
    }else {
        alert("请输入视频链接");
    }
}

function playNewWindow() {
    let myApi = document.getElementById("api");
    let index = myApi.selectedIndex;
    let apiValue = myApi.options[index].value;

    let myText = document.getElementById("mediaUrl").value;

    if (myText !== '') {
        window.open(apiValue + myText);
    }else {
        alert("请输入视频链接");
    }
}

function scrollTop(timer) {
    timer = setInterval(function(){
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let iSpeed = Math.ceil(osTop / 50);
        document.documentElement.scrollTop = document.body.scrollTop = osTop - iSpeed;

        if (osTop === 0) {
            clearInterval(timer);
        }
    },10)
}

function hiddenDonate() {
    let donate = document.getElementsByClassName("donate")[0];
    donate.style.opacity = "0";
}