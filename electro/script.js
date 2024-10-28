// Получаем все ссылки в навигации
const navLinks = document.querySelectorAll('nav a');

// Добавляем обработчик события mouseover для каждой ссылки
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transition = 'background-color 0.3s ease'; // Добавляем плавный переход
        link.style.backgroundColor = '#a3eaff'; // Меняем цвет фона при наведении
    });

    // Добавляем обработчик события mouseout для возврата к исходному цвету
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = ''; // Возвращаем к исходному цвету
    });
});