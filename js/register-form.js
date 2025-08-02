(() => {
    const form = document.querySelector('form');
    const userType = document.getElementById("tipoUsuario");
    const especiality = document.getElementById("especialidade");
    const crm = document.getElementById("crm");
    const crmUf = document.getElementById("uf_crm");

    form.addEventListener('change', () => {
        const inputRadio = document.querySelector('input[name="tipo_usuario"]:checked')?.value;

        if (inputRadio === 'medico') {
            const doctor = document.getElementById('campos-medico');
            doctor.style.display = 'block';

            especiality?.setAttribute('required', 'true');
            userType?.setAttribute('required', 'true');
            crm?.setAttribute('required', 'true');
            crmUf?.setAttribute('required', 'true');
        } else {
            const doctor = document.getElementById('campos-medico');
            doctor.style.display = 'none';

            especiality?.removeAttribute('required');
            userType?.removeAttribute('required');
            crm?.removeAttribute('required');
            crmUf?.removeAttribute('required');
        }  
    });
})();
