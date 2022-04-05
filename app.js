// https://api.github.com/users/

const APICALL = "https://api.github.com/users/";
const affichage = document.querySelector(".affichage");
const form = document.querySelector(".form-github-recherche");
const inpRecherche = document.querySelector(".inp-recherche");

async function dataGithub(utilisateur) {
	const response = await fetch(`${APICALL}${utilisateur}`);
	const data = await response.json();

	creationCarte(data);
}

function creationCarte(user) {
	const carteHTML = `
    <div class="carte">
        <img src="${user.avatar_url}" alt="icone avatar" class="avatar">
        <h2>${user.name}</h2>
         <ul class="cont-infos">
            <li class="followers">🙋🏼‍♂️ Followers: <span>${user.followers}</span></li>
            <li class="etoiles">⭐️ Repos: <span>${user.public_repos}</span></li>
            <li class="bio">📖 Bio: <span>${user.bio}</span></li>
         </ul>
    </div>
    `;
    affichage.innerHTML = carteHTML; 
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(inpRecherche.value.length > 0) {
        dataGithub(inpRecherche.value);
        inpRecherche.value = "";

    }
})