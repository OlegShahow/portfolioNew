"use strict";



// Находим картинку и все параграфы внутри .nav__icon
const h1 = document.querySelector('h1');
const image = document.querySelector('.nav__icon img');
const paragraphs = document.querySelectorAll('.nav__icon p');

// Добавляем обработчик ховера на картинку
image.addEventListener('mouseenter', function () {
	paragraphs.forEach(p => {
		p.style.opacity = '1';  // Параграфы становятся видимыми
		p.style.transform = 'scale(3)';  // Восстановление масштаба
	});
	image.style.transform = 'scale(3)';  // Увеличиваем картинку
	h1.style.opacity= '0';
});

// Добавляем обработчик для снятия ховера
image.addEventListener('mouseleave', function () {
	paragraphs.forEach(p => {
		p.style.opacity = '0';  // Параграфы становятся невидимыми
		p.style.transform = 'scale(0)';  // Скрываем параграфы
	});
	image.style.transform = 'scale(1)';  // Возвращаем картинку в исходное состояние
	h1.style.opacity = '1';
});
