const spinnerElem = document.querySelector('.spinner');

export const spinerShow = () => {
    spinnerElem.classList.remove('spinner_hidden')
};

export const spinerHide = () => {
    spinnerElem.classList.add('spinner_hidden')
};