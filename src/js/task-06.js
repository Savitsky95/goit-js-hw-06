const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputLength = event.target.value.length;
  const requiredLength = Number(event.target.dataset.length);

  if (inputLength === requiredLength) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
}