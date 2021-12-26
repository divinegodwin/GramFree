function showSignup() {
    let signupForm = document.querySelector("#signup-form");
    signupForm.style.display = "block";
}

function closeSignup() {
    let signupForm = document.querySelector("#signup-form");
    signupForm.style.display = "none";
}

function showSignin() {
    let signinForm = document.querySelector("#signin-form");
    signinForm.style.display = "block";
}

function closeSignin() {
    let signinForm = document.querySelector("#signin-form");

    signinForm.style.display = "none";
}

function showMessage() {
    alert("backend not available at the moment");
}



