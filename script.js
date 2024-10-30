document.addEventListener('DOMContentLoaded', () => {
    const optionsBtn = document.getElementById('optionsBtn');
    const optionsMenu = document.getElementById('optionsMenu');


    // evento al hacer clic en el menu responsive
    optionsBtn.addEventListener('click', () => {
        optionsMenu.classList.remove('d-none');
        optionsMenu.classList.add('d-block');
    });
});