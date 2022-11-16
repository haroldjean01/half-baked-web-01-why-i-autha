import { redirectIfLoggedIn, signupUser, signInUser } from './fetch-utils.js';

// DOM ELEMENTS
const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

// Wire up sign in and sign up forms to supabase
redirectIfLoggedIn();
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signupUser(data.get('email'), data.get('password'));

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = await signInUser(signInEmail.value, signInPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});
