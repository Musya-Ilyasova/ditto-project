export const validateInputEmail = () => {
  let input = document.querySelector('#email');
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  input.addEventListener('input', function() {
    console.log(EMAIL_REGEXP.test(input.value));
    if(EMAIL_REGEXP.test(input.value)) {
      input.classList.remove('form__input_error');
      input.classList.add('form__input_success');
    } else {
      input.classList.remove('form__input_success');
      input.classList.add('form__input_error');
    }
  })
}

export const formSubmit = () => {
  const form = document.querySelector('.form');
  const formBtn = form.querySelector('[type=submit]');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(document.querySelector('#email').classList.contains('form__input_success')) {
      formBtn.classList.remove('disabled');
      form.submit();
      form.reset();
    } else {
      formBtn.classList.add('disabled');
      document.querySelector('#email').classList.add('form__input_error')
    }
  })
}
