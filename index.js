import { createDefaultAvatar, showUserInfo } from "./user.js";

document.addEventListener('DOMContentLoaded', createDefaultAvatar);

const showButtonElem = document.querySelector('.name-form__btn');

showButtonElem.addEventListener('click', showUserInfo);

