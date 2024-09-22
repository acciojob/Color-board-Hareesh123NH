//your JS code here. If required.
const div=document.querySelector(".container");
for (let i = 0; i < 800; i++) {
	const square=document.createElement("span");
	square.classList.add("square");
	div.appendChild(square);
}
const squares=document.querySelectorAll(".square");
squares.forEach((square)=>{
	square.addEventListener("mouseover",()=>{
		changeColor(square);

        setTimeout(() => {
            removeColor(square);
        }, 1000);
	});
});

function changeColor(square) {
    const randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
}

function removeColor(square) {
    square.style.backgroundColor = '#1b1b1b';
}

function getRandomColor() {
    const hexColors = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexColors[Math.floor(Math.random() * 16)];
    }
    return color;
}
