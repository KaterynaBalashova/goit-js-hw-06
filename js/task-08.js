const selectors = {
    form: document.querySelector('form'),
    inputEmail: document.querySelector('[type="email"]'),
    inputPassword: document.querySelector('[type="password"]'),
};

selectors.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const data = {
        email: email.value,
        password: password.value,
    };
    if (!email.value || !password.value) {
        return alert('Enter data');
    };
    console.log(data);

    event.currentTarget.reset();
};

 