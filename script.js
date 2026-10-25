const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('.year').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#form-message').textContent =
      'Thank you! This demo form works in the browser, but it is not connected to a mail server.';
    form.reset();
  });
}
