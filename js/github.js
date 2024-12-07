const usernameInput = document.querySelector('.username');  
const searchBtn = document.querySelector('.searchBtn');     
const userInfo = document.querySelector('.userInfo');       


async function init() {
    const username = usernameInput.value.trim(); 
    userInfo.innerHTML = "<p>Yükleniyor...</p>"; 
    const response = await fetch(`https://api.github.com/users/${username}`)
    const userData = await response.json();

    userInfo.innerHTML = `
            <img id="avatar" src="${userData.avatar_url}" width="150">
            <h2 id="login">${userData.login}</h2>
            <p id="name">${userData.name}</p>
            <p id="html"><a href="${userData.html_url}" id="html" target="_blank">https://github.blog</a></p>
            <p id="bio"> ${userData.bio}</p>
            <p id="repos"> ${userData.public_repos}</p>
            <p id="followers"> ${userData.followers}</p>
            <p id="following"> ${userData.following}</p>`;
}
searchBtn.addEventListener('click', init);


const toggleButton = document.querySelector('.container'); 
function darkenPage() {
    toggleButton.classList.toggle('darkened'); 
}
toggleButton.addEventListener('click', darkenPage); 

