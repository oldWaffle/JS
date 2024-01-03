let animationTime = 0;
let animationWordCount = 0;

function animateText(animationTime, animationWordCount, word1, word2, word3, word4, word5, word6, word7, word8, word9,) {
    if (animationWordCount == 1) {
        setTimeout(() => { textElement.innerHTML += word1 }, animationTime);
    }
    if (animationWordCount == 2) {
        setTimeout(() => { textElement.innerHTML += word1 }, animationTime);
        setTimeout(() => { textElement.innerHTML += word2 }, animationTime * 2);
    }
    if (animationWordCount == 3) {
        setTimeout(() => { textElement.innerHTML += word1 }, animationTime);
        setTimeout(() => { textElement.innerHTML += word2 }, animationTime * 2);
        setTimeout(() => { textElement.innerHTML += word3 }, animationTime * 3);
    }
    if (animationWordCount == 4) {
        setTimeout(() => { textElement.innerHTML += word1 }, animationTime);
        setTimeout(() => { textElement.innerHTML += word2 }, animationTime * 2);
        setTimeout(() => { textElement.innerHTML += word3 }, animationTime * 3);
        setTimeout(() => { textElement.innerHTML += word4 }, animationTime * 4);
    }
    if (animationWordCount == 5) {
        setTimeout(() => { textElement.innerHTML += word1 }, animationTime);
        setTimeout(() => { textElement.innerHTML += word2 }, animationTime * 2);
        setTimeout(() => { textElement.innerHTML += word3 }, animationTime * 3);
        setTimeout(() => { textElement.innerHTML += word4 }, animationTime * 4);
        setTimeout(() => { textElement.innerHTML += word5 }, animationTime * 5);
    }
    if (animationWordCount == 6) {
        setTimeout(() => { textElement.innerHTML += word1 }, animationTime);
        setTimeout(() => { textElement.innerHTML += word2 }, animationTime * 2);
        setTimeout(() => { textElement.innerHTML += word3 }, animationTime * 3);
        setTimeout(() => { textElement.innerHTML += word4 }, animationTime * 4);
        setTimeout(() => { textElement.innerHTML += word5 }, animationTime * 5);
        setTimeout(() => { textElement.innerHTML += word6 }, animationTime * 6);
    }
    if (animationWordCount == 7) {
        setTimeout(() => { textElement.innerHTML += word1 }, animationTime);
        setTimeout(() => { textElement.innerHTML += word2 }, animationTime * 2);
        setTimeout(() => { textElement.innerHTML += word3 }, animationTime * 3);
        setTimeout(() => { textElement.innerHTML += word4 }, animationTime * 4);
        setTimeout(() => { textElement.innerHTML += word5 }, animationTime * 5);
        setTimeout(() => { textElement.innerHTML += word6 }, animationTime * 6);
        setTimeout(() => { textElement.innerHTML += word7 }, animationTime* 7);
    }
    if (animationWordCount == 8) {
        setTimeout(() => { textElement.innerHTML += word1 }, animationTime);
        setTimeout(() => { textElement.innerHTML += word2 }, animationTime * 2);
        setTimeout(() => { textElement.innerHTML += word3 }, animationTime * 3);
        setTimeout(() => { textElement.innerHTML += word4 }, animationTime * 4);
        setTimeout(() => { textElement.innerHTML += word5 }, animationTime * 5);
        setTimeout(() => { textElement.innerHTML += word6 }, animationTime * 6);
        setTimeout(() => { textElement.innerHTML += word7 }, animationTime * 7);
        setTimeout(() => { textElement.innerHTML += word8 }, animationTime * 8);
    }
    if (animationWordCount == 9) {
        setTimeout(() => { textElement.innerHTML += word1 }, animationTime);
        setTimeout(() => { textElement.innerHTML += word2 }, animationTime * 2);
        setTimeout(() => { textElement.innerHTML += word3 }, animationTime * 3);
        setTimeout(() => { textElement.innerHTML += word4 }, animationTime * 4);
        setTimeout(() => { textElement.innerHTML += word5 }, animationTime * 5);
        setTimeout(() => { textElement.innerHTML += word6 }, animationTime * 6);
        setTimeout(() => { textElement.innerHTML += word7 }, animationTime * 7);
        setTimeout(() => { textElement.innerHTML += word8 }, animationTime * 8);
        setTimeout(() => { textElement.innerHTML += word9 }, animationTime * 9);
    }
}