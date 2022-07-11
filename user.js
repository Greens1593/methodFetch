import { getUserData } from "./getAway.js";
import { renderPage } from "./render.js";
import { spinerShow, spinerHide } from "./spiner.js";

export const avatarElem = document.querySelector('.user__avatar');
const inputValueElem = document.querySelector('.name-form__input');


export const createDefaultAvatar = () => {
    avatarElem.src = 'https://avatars3.githubusercontent.com/u10001'
} 

export const showUserInfo = () => {
    const userName = inputValueElem.value;
    inputValueElem.value = '';
    spinerShow()
    getUserData(userName)
    .then(() => renderPage())
    .catch(error => alert(error.message))
    .finally(() => spinerHide())
} 
