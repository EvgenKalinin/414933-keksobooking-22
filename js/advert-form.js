const advertForm = document.querySelector('.ad-form');


advertForm.addEventListener('submit', (evt) => {
evt.preventDefault();

const formData = new FormData(evt.target);

fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
        method: 'POST',
        body: formData,
    },
    );
});

