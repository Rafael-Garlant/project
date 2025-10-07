(() => {
  const form = document.querySelector('form');

  const fullNameInput = form.querySelector('.full_name');
  const emailInput = form.querySelector('.email');
  const passwordInput = form.querySelector('.password');
  const confirmPasswordInput = form.querySelector('.confirm_password');


  function clearError(input, errorElement) {
    input.classList.remove('input-error');
    errorElement.style.display = 'none';
  }

  function displayError(input, errorElement) {
    input.classList.add('input-error');

    errorElement.style.display = 'none';
    void errorElement.offsetWidth;
    errorElement.style.display = 'block';

    errorElement.focus();
  }


  function validFullName() {
    const errorElement = document.querySelector('.errorMessage');
    const rawFullName = fullNameInput.value.trim();
    const words = rawFullName.split(/\s+/).filter(word => word.length > 0);
    const noChars = /[0-9!@#$%^&*(),.?":{}|<>]/.test(rawFullName);

    if (words.length < 2 || rawFullName.length < 5 || rawFullName.length > 50 || noChars) {
      displayError(fullNameInput, errorElement);
      return false;
    }

    clearError(fullNameInput, errorElement);
    return true;
  }

  function validEmail() {
    const emailError = document.querySelector('.emailError');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      displayError(emailInput, emailError);
      return false;
    }

    clearError(emailInput, emailError);
    return true;
  }

  function validPasswordAndConfirmation() {
    const passwordError = document.querySelector('.passwordError');
    const confirmPasswordError = document.querySelector('.confirmPasswordError');
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    let isPasswordValid = true;

    if (password.length < 6) {
      displayError(passwordInput, passwordError);
      isPasswordValid = false;
    } else {
      clearError(passwordInput, passwordError);
    }

    if (!isPasswordValid || confirmPassword === '' || confirmPassword !== password) {
      displayError(confirmPasswordInput, confirmPasswordError);
      return false;
    }

    clearError(confirmPasswordInput, confirmPasswordError);
    return true;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValidName = validFullName();
    const isValidEmail = validEmail();
    const isValidPassword = validPasswordAndConfirmation();

    const isFormValid = isValidName && isValidEmail && isValidPassword;

    if (isFormValid) {
      const formDataPatient = {
        name: fullNameInput,
        email: emailInput,
        password: passwordInput
      };

      const dataJSON = JSON.stringify(formDataPatient);

      function submitData() {
        const urlController = 'index.php?controller=User&action=salvarDados';

        fetch(urlController, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: dataJSON
        })
          .then(response => {
            if (response.ok) {
              alert('Dados enviados com sucesso!');
            } else {
              alert('Erro ao enviar os dados.');
            }
          })
        }
      }
    });

})();