const dropdown = document.querySelector('.dropdown');
const dropdownBtn = document.querySelector('.dropdownBtn');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('#modalBtn');

function dropdownBtnClick() {
	if (dropdown.style.display === 'block') {
		dropdown.style.display = 'none';
	} else {
		dropdown.style.display = 'block';
	}
}
function closeOnClick() {
	modal.style.display = 'none';
}
function modalOnclick() {
	modal.style.display = 'block';
}
dropdownBtn.onclick = dropdownBtnClick;
closeBtn.onclick = closeOnClick;
modalBtn.onclick = modalOnclick;
