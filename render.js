import { getRepos, userData, userRepos } from "./getAway.js";
import { avatarElem } from "./user.js";

const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const repoListElem = document.querySelector('.repo-list');


const createRepoList = (reposUrl) => {
    repoListElem.innerHTML = '';
    getRepos(reposUrl)
    .then(() => {
    return userRepos
    .map(repos => {
        const reposLi = document.createElement('li');
        reposLi.classList.add('repo-list__item');
        reposLi.append(repos);
        repoListElem.appendChild(reposLi)
        })
    })
    .catch(error => alert(error.massege))
};

export const renderPage = () => {

    avatarElem.src = userData.avatar_url;
    userNameElem.textContent = userData.name;
    userLocationElem.textContent = userData.location;
    createRepoList(userData.repos_url);

};