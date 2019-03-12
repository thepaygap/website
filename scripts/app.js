const navItem = document.querySelector('a.toggle-nav');
const navList = document.querySelector('.nav-list');

function toggleNavigation() {
  navList.classList.toggle('active');
}

navItem.addEventListener('click', toggleNavigation);

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const account = document.getElementById('account');

signUpButton.addEventListener('click', () => {
	account.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	account.classList.remove("right-panel-active");
});
