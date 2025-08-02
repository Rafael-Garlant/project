(() => {
    const form = document.querySelector('form');

    form.addEventListener('input', () => {
        const inputRadio = document.querySelector('input[name="tipo_usuario"]:checked').value;

        if (inputRadio === 'medico') {
            const doctor = document.getElementById('campos-medico');
            doctor.style.display = 'block';
            
        } else {
            const doctor = document.getElementById('campos-medico');
            doctor.style.display = 'none';
        }  
    })

})();