const circle = document.getElementById('circle');
const input = document.getElementById('percent');
const animate = document.getElementById('animate');
const hide = document.getElementById('hide')
const svg = document.querySelector('svg')
const cardpecent = document.getElementById('card__percent')


function circlePercent() {
    let change = 565.49 - (565.49 * input.value) / 100;
    circle.style.strokeDashoffset = change;
		input.placeholder = input.value;
};

function isNumeric(event) {
    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode > 31)) {
        return false;
    }
    if(event.keyCode == 13) {
        changePercent();
    }
};

function changePercent() {
    if(input.value > 100) {
        input.value = '';

    } else {
        circlePercent();
        input.value = '';
    }
};

animate.onclick = () => {
		if (animate.checked) {
			svg.classList.add('animation')
		}
		else {
			svg.classList.remove('animation')
		}
	}

hide.onclick = () => {
	if (hide.checked) {
		cardpecent.classList.add('hidden')
	}
	else {
		cardpecent.classList.remove('hidden')
	}
}