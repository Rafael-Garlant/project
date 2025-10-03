(() => {
  const form = document.querySelector('form');
  const fullNameError = document.querySelector('.fullNameError');
  const fullNameInput = form.querySelector('.full_name');
  const emailInput = form.querySelector('.email');
  const passwordInput = form.querySelector('.password');
  const confirmPasswordInput = form.querySelector('.confirm_password');

  const crmInput = form.querySelector('.crm');
  const crmUfInput = form.querySelector('.uf_crm');
  const crmEspecialityInput = form.querySelector('#especialidade');

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
    const errorElement = fullNameError;
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

  function validCRM() {
    const crmError = document.querySelector('.crmError');
    const crmValue = crmInput.value.trim();
    const cleanCRM = crmValue.replace(/\D/g, '');

    if (!/^\d{6}$/.test(cleanCRM)) {
      displayError(crmInput, crmError);
      return false;
    }

    clearError(crmInput, crmError);
    return true;
  }

  function validUfCrm() {
    const ufCrmError = document.querySelector('.ufCrmError');

    if (crmUfInput.value === '') {
      displayError(crmUfInput, ufCrmError);
      return false;
    }

    crmUfInput.classList.remove('input-error');
    clearError(crmUfInput, ufCrmError);
    return true;
  }

  function validEspeciality() {
    const especialityError = document.querySelector('.especialityError');

    if (crmEspecialityInput.value === '' || crmEspecialityInput.value === 'Selecione uma especialidade') {
      displayError(crmEspecialityInput, especialityError);
      return false;
    }

    crmEspecialityInput.classList.remove('input-error');
    clearError(crmEspecialityInput, especialityError);
    return true;
  }


  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValidName = validFullName();
    const isValidEmail = validEmail();
    const isValidPassword = validPasswordAndConfirmation();
    const isValidCrm = validCRM();
    const isValidUf = validUfCrm();
    const isValidEspeciality = validEspeciality();

    const isFormValid = isValidName && isValidEmail && isValidPassword &&
      isValidCrm && isValidUf && isValidEspeciality;

    if (isFormValid) {
      alert('Formulário de Médico enviado com sucesso!');
      // TODO: Insira aqui a lógica de envio (fetch/axios) para o seu backend.
    }
  });
})();