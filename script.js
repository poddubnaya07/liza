const claimForm = document.querySelector('.claim-form');

claimForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const formData = new FormData(claimForm);

    fetch('/submit-claim', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // Обработать ответ от сервера
        console.log('Претензия отправлена!');
        // Можно добавить сообщение об успешной отправке, очистить форму и т.д.
    })
    .catch(error => {
        // Обработать ошибку отправки
        console.error('Ошибка отправки претензии:', error);
        // Можно добавить сообщение об ошибке
    });
});

