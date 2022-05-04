var messageArray = ["> Hello there <br>> welcome to Yarin's portfolio website. <br> > Contact me in upwork: https://www.upwork.com/freelancers/~01a47561b89ee67655"]
var textPosition = 0;
var speed = 100;

typewriter = () => {
    document.querySelector("#author").innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";
    
    if(textPosition++ != messageArray[0].length) {
        setTimeout(typewriter, speed);
    }
}

window.addEventListener("load", typewriter);
