(() => {
  const form = document.querySelector('form');
  const fullNameInput = document.querySelector('.full_name');
  const emailInput = document.querySelector('.email');
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
        void input.offsetWidth; // força reflow
        input.classList.add("input-error");
      }
    });


    if (isValid) {
      alert('Formulário enviado com sucesso!');
    }

    validForm()

  });



function validForm(){
    validFullName();
}

function validFullName(){
    const fullName = fullNameInput.value.
    trim().
    split(" ").
    filter(word => word.length >= 2);

    fullNameInput.classList.remove("input-error");
    errorMessage.style.display = 'none';

    if (fullName <=2){
        fullNameInput.classList.remove("input-error");
        errorMessage.style.display = 'block';
        void fullNameInput.offsetWidth;
        void errorMessage.offsetWidth;
        fullNameInput.classList.add("input-error");
    }


}


/* Para usar no futuro
   const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (password !== confirmPassword) {
      isValid = false;

      confirmPasswordInput.classList.remove("input-error");
      void confirmPasswordInput.offsetWidth;
      confirmPasswordInput.classList.add("input-error");

    } 

*/

})();
