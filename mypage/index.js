const dropdown = document.querySelector('.dropdown');
const dropdownBtn = document.querySelector('.dropdownBtn');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('#modalBtn');

//dropdown
dropdownBtn.addEventListener('click', function () {
	dropdownBtn.classList.toggle('active');
});

//modal
closeBtn.onclick = function () {
	modal.style.display = 'none';
};
modalBtn.onclick = function () {
	modal.style.display = 'block';
};

// 처음 만든 드롭다운
// dropdownBtn.onclick = dropdownBtnClick;
// function dropdownBtnClick() {
// 	if (dropdown.style.display === 'block') {
// 		dropdown.style.display = 'none';
// 	} else {
// 		dropdown.style.display = 'block';
// 	}
// }
