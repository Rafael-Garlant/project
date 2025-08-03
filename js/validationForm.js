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
  // const fullName = fullNameInput.value
  // .trim()
  // .split(" ")
  // .filter(word => word.length >= 2);

  // if (fullName.length < 2) {
  //   warnAnimation(fullNameInput, errorMessage);
  //   return false;
  // }

  const rawFullName = fullNameInput.value.trim();
console.log("Nome bruto:", rawFullName);

const fullName = rawFullName
  .split(" ")
  .filter(word => word.length >= 2);

console.log("Palavras válidas:", fullName);
console.log("Quantidade de palavras válidas:", fullName.length);

if (fullName.length < 2) {
  warnAnimation(fullNameInput, errorMessage);
  return false;
}
    const strContainsNumber = /[^a-zA-Z\s]/.test(fullName);
    

    fullNameInput.classList.remove("input-error");
    errorMessage.style.display = 'none';

    if (fullNameInput.value.length > 50 || fullNameInput.value.length < 5) {
      warnAnimation(fullNameInput, errorMessage); 
      return false;
    }
    

    if(strContainsNumber){
      warnAnimation(fullNameInput, errorMessage)
      return false;
    }


}

function warnAnimation(element, element2){
  element.classList.remove('input-error');
  element2.style.display = 'none';
  void fullNameInput.offsetWidth;
  void errorMessage.offsetWidth;
  element2.style.display = 'block';
  element.classList.add("input-error");
  
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
