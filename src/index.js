import './sass/main.scss';
import template from './template/main.hbs';
import massive from './menu.json';

// window.onload = () => {
//     const container = document.getElementById("menu");
// container.innerHTML = template(massive)};
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const classMenu = document.querySelector('.js-menu');
const menuMarkup = template(massive);

classMenu.insertAdjacentHTML('beforeend', menuMarkup);

//Тема
const themeChange = document.querySelector('.theme-switch__toggle');
const body = document.body;

themeChange.addEventListener('change', onThemeChange);

function onThemeChange(event){
    if (themeChange.checked) {
		body.classList.add(`${Theme.DARK}`);
        body.classList.remove(`${Theme.LIGHT}`);
        localStorage.setItem('theme', `${Theme.DARK}`);
	}
	else {
        body.classList.remove(`${Theme.DARK}`)
		body.classList.add(`${Theme.LIGHT}`);
        localStorage.setItem('theme', `${Theme.LIGHT}`);
    }
};

function currentTheme(){
    const savedTheme = localStorage.getItem('theme');

    if(currentTheme === `${Theme.DARK}`){
        themeSwitcher.checked = true;
        body.classList.add(`${Theme.DARK}`);
    }
    else{
        themeSwitcher.checked = false;
        body.classList.add(`${Theme.LIGHT}`);
    }
};

currentTheme();