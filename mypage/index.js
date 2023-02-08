const dropdown = document.querySelector('.dropdown');
const dropdownBtn = document.querySelector('.dropdownBtn');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('#modalBtn');
const dropD = document.querySelector('.dropD');

//dropdown
dropD.addEventListener('click', function () {
	if (dropdownBtn.classList.contains('active')) {
		dropdownBtn.classList.remove('active');
	} else {
		dropdownBtn.classList.add('active');
	}
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

//두번째로 만든 드롭다운
// dropdownBtn.addEventListener('click', function () {
// 	this.classList.toggle('active');
// });
