(() => {
  // 1. Elementos do Formulário (Apenas os campos do Paciente)
  const form = document.querySelector('form');
  
  // Elementos de Input
  const fullNameInput = form.querySelector('.full_name');
  const emailInput = form.querySelector('.email');
  const passwordInput = form.querySelector('.password');
  const confirmPasswordInput = form.querySelector('.confirm_password');

  // --- Funções de Ajuda de Interface (UI Helpers) ---
  
  /**
   * Remove a classe de erro do input e esconde a mensagem.
   */
  function clearError(input, errorElement) {
    input.classList.remove('input-error');
    errorElement.style.display = 'none';
  }

  /**
   * Adiciona a classe de erro ao input e exibe/reseta a animação da mensagem.
   */
  function displayError(input, errorElement) {
    // 1. Adiciona a classe de erro para a borda do input
    input.classList.add('input-error');
    
    // 2. Garante que a mensagem de erro é exibida (usando a técnica de reset da animação)
    errorElement.style.display = 'none';
    void errorElement.offsetWidth; // Força o reflow
    errorElement.style.display = 'block';
    
    errorElement.focus();
  }


  // --- Funções de Validação de Campo (Comuns) ---

  function validFullName() {
    const errorElement = document.querySelector('.errorMessage');
    const rawFullName = fullNameInput.value.trim();
    const words = rawFullName.split(/\s+/).filter(word => word.length > 0);
    const noChars = /[0-9!@#$%^&*(),.?":{}|<>]/.test(rawFullName);

    // Condições de Falha
    if (words.length < 2 || rawFullName.length < 5 || rawFullName.length > 50 || noChars) {
      displayError(fullNameInput, errorElement);
      return false;
    }

    // Condição de Sucesso
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

    // 1. Validação da Senha Principal
    if (password.length < 6) {
      displayError(passwordInput, passwordError);
      isPasswordValid = false;
    } else {
      clearError(passwordInput, passwordError);
    }
    
    // 2. Validação da Confirmação
    if (!isPasswordValid || confirmPassword === '' || confirmPassword !== password) {
      displayError(confirmPasswordInput, confirmPasswordError);
      return false;
    }
    
    // 3. Sucesso (Ambas válidas)
    clearError(confirmPasswordInput, confirmPasswordError);
    return true;
  }

  // --- Lógica Principal (Submit) ---

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Executa as validações do Paciente (apenas as comuns)
    const isValidName = validFullName();
    const isValidEmail = validEmail();
    const isValidPassword = validPasswordAndConfirmation(); 
    
    // Verifica se TODAS as validações retornaram TRUE
    const isFormValid = isValidName && isValidEmail && isValidPassword;

    if (isFormValid) {
      alert('Formulário de Paciente enviado com sucesso!');
      // TODO: Insira aqui a lógica de envio (fetch/axios) para o seu backend.
    }
  });
})();