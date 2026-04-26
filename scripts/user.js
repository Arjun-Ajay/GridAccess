const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const toggleLogin = document.getElementById('toggle-login');
const toggleSignup = document.getElementById('toggle-signup');
const goToSignup = document.getElementById('go-to-signup');
const goToLogin = document.getElementById('go-to-login');

function showLogin() {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    toggleLogin.classList.add('active');
    toggleSignup.classList.remove('active');
}

function showSignup() {
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    toggleSignup.classList.add('active');
    toggleLogin.classList.remove('active');
}

toggleLogin.addEventListener('click', showLogin);
toggleSignup.addEventListener('click', showSignup);
goToSignup.addEventListener('click', (e) => { e.preventDefault(); showSignup(); });
goToLogin.addEventListener('click', (e) => { e.preventDefault(); showLogin(); });
