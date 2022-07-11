const baseUrl = 'https://api.github.com/users'
export let userData
export let userRepos = []

const checkStatusGetaway = (response) => {
    if (response.ok){
    return response.json()}
    else {
        throw new Error('Failed to load data');
    }
};

export const getUserData = (userName) =>{
    return fetch(`${baseUrl}/${userName}`)
    .then(data => checkStatusGetaway(data))
    .then(data => {
        const {avatar_url, name, location, repos_url} = data;
            userData = {
            avatar_url, 
            name, 
            location, 
            repos_url,
        }
    })
}

export const getRepos = (reposUrl) => {
    return fetch(reposUrl)
    .then(data => checkStatusGetaway(data))
    .then(data => {
        data
        .map(rep => {
              const {name} = rep;
              userRepos.push(name)
        });
    })
} 
