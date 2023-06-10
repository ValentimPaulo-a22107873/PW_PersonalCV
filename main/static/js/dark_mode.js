let darkMode = false;
const LOCAL_KEY = 'dark-mode';

function setDarkMode() {
    applyDarkMode();
    updateLocalPreference('dark');
    darkMode = true;
}

function setLightMode() {
    applyLightMode();
    updateLocalPreference('light');
    darkMode = false;
}

function toggleDarkMode() {
    console.log("xxxxxxxx")
    darkMode ? setLightMode() : setDarkMode();
}

function applyDarkMode() {
    const buttonDark = document.querySelector('.dark_mode_button');
    var element = document.body;

    element.classList.add('dark-mode');

    buttonDark.innerHTML = 'Escuro';
    buttonDark.style.cursor = 'pointer';
    counter = 0;
        
}

function applyLightMode() {
    const buttonDark = document.querySelector('.dark_mode_button');
    var element = document.body;

    element.classList.remove('dark-mode');

    buttonDark.innerHTML = 'Claro';
    buttonDark.style.cursor = 'pointer';
    counter = 1;
}

function getLocalPreference() {
    return localStorage.getItem(LOCAL_KEY)
}

function updateLocalPreference(mode) {
    localStorage.setItem(LOCAL_KEY, mode);
}

window.addEventListener('DOMContentLoaded', () => {
    let localPreference = getLocalPreference();
    // Gets dark mode preference from local storage on window load
    // If there's no preference sets dark mode by default
    if (localPreference === null || localPreference == 'dark') {
        setDarkMode();
    } else {
        setLightMode();
    }
});
