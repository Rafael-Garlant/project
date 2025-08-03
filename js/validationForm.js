(() => {
  const form = document.querySelector('form');
  const fullNameInput = document.querySelector('.full_name');
  const emailInput = document.querySelector('.email');
  const crmInput = document.querySelector('.crm');
  const crmUfInput = document.querySelector('.uf_crm');
  const crmEspecialityInput = document.querySelector('#especialidade');
  const passwordInput = document.querySelector('.password');
  const confirmPasswordInput = document.querySelector('.confirm_password');

  const errorMessage = document.querySelector('.errorMessage');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        isValid = false;

        input.classList.remove("input-error");
        void input.offsetWidth;
        input.classList.add("input-error");
      }
    });



    if (isValid) {
      alert('Formulário enviado com sucesso!');
    }

    validForm()

  });

  function validForm() {
    validFullName();
    validEmail();
    validCRM();
    validUfCrm();
    validEspeciality();
    validPassword();
  }

  function validFullName() {

    const rawFullName = fullNameInput.value.trim();
    const words = rawFullName.split(/\s+/).filter(word => word.length > 0);
    const validWords = words.filter(word => word.length >= 2);
    const noChars = /[0-9!@#$%^&*(),.?":{}|<>]/.test(rawFullName)

    if (words.length < 2) {
      warnAnimationName(errorMessage);
      return false;
    }

    if (validWords.length < 2) {
      warnAnimationName(errorMessage);
      return false;
    }

    if (noChars) {
      warnAnimationName(errorMessage);
      return false;
    }


    if (fullNameInput.value.length > 50 || fullNameInput.value.length < 5) {
      warnAnimationName(errorMessage);
      return false;
    }

    fullNameInput.classList.remove("input-error");
    errorMessage.style.display = 'none';
    return true;

  }

  function validEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.querySelector('.emailError');

    if (!emailRegex.test(email)) {
      warnAnimationEmail(emailError);
      return false;
    }

    errorMessage.style.display = 'none';
    emailInput.classList.remove("input-error");
    return true;
  }

  function validCRM() {
    const crmError = document.querySelector('.crmError');
    const crmValue = crmInput.value.trim();

    const cleanCRM = crmValue.replace(/\D/g, '');
    const crm = !/^\d{6}$/.test(cleanCRM)

    // Verifica se tem exatamente 6 dígitos
    if (crm) {
      warnAnimationCRM(crmError);
      return false;
    }

    crmInput.classList.remove("input-error");
    crmError.style.display = 'none';
    return true;
  }

  function validUfCrm() {
    const ufCrmError = document.querySelector('.ufCrmError');

    if (crmUfInput.value === '') {
      warnAnimationUfCrm(ufCrmError);
      return false;
    }

    ufCrmError.style.display = 'none';
    return true;

  }

  function validEspeciality() {
    const especialityError = document.querySelector('.especialityError');

    if (crmEspecialityInput.value === '' || crmEspecialityInput.value === 'Selecione uma especialidade') {
      warnAnimationEspeciality(especialityError);
      return false;
    }
    especialityError.style.display = 'none';
    return true;
  }

  function validPassword() {
    const passwordError = document.querySelector('.passwordError');
    const confirmPasswordError = document.querySelector('.confirmPasswordError');
    const password = passwordInput.value.trim();

    if (password.length < 6) {
      warnAnimationPassword(passwordError);
      return false;
    }

    if (confirmPasswordInput.value.trim() === '') {
      // confirmPasswordError.textContent = 'Por favor, confirme sua senha.';
      warnAnimationConfirmPassword(confirmPasswordError);
      return false;
    }

    if (confirmPasswordInput.value !== password) {
      // confirmPasswordError.textContent = 'As senhas não coincidem.';
      warnAnimationConfirmPassword(confirmPasswordError);
      return false;
    }

    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';
    return true;
  }


  function warnAnimationName(name) {
    name.style.display = 'none';
    void errorMessage.offsetWidth;
    name.style.display = 'block';
    name.focus();

  }

  function warnAnimationEmail(email) {
    email.style.display = 'none';
    void errorMessage.offsetWidth;
    email.style.display = 'block';
    email.focus();
  }

  function warnAnimationCRM(crmError) {
    crmError.style.display = 'none';
    void crmError.offsetWidth;
    crmError.style.display = 'block';
    crmError.focus();
  }

  function warnAnimationUfCrm(ufCrmError) {
    ufCrmError.style.display = 'none';
    void ufCrmError.offsetWidth;
    ufCrmError.style.display = 'block';
    ufCrmError.focus();
  }

  function warnAnimationEspeciality(especialityError) {
    especialityError.style.display = 'none';
    void especialityError.offsetWidth;
    especialityError.style.display = 'block';
    especialityError.focus();
  }

  function warnAnimationPassword(passwordError) {
    passwordError.style.display = 'none';
    void passwordError.offsetWidth;
    passwordError.style.display = 'block';
    passwordError.focus();
  }

  function warnAnimationConfirmPassword(confirmPasswordError) {
    confirmPasswordError.classList.remove("confirmPasswordError"); // ou sua classe animada
    void confirmPasswordError.offsetWidth;
    confirmPasswordError.classList.add("confirmPasswordError");
  }

})();
