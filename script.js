function fetchcovoiturage(lien) {
  fetch(
    "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/vtc.json"
  )
    .then((reponse) => reponse.json())
    .then((data) => {
      console.log(data);

      const container = document.getElementById("contenairedata");

      const header = document.getElementById("header");

      header.innerHTML += `
      <div class=carte>
<img id=img1 src="Design sans titre.png" alt="">
     
            <p>${data.phraseAccroche}</p>
            <button>${data.texteAppelAction}</button>
            </div>`;
      data.realisations.forEach((voiture) => {
        let cart = document.getElementById("fiche");
        cart.innerHTML += `
        <div class=carte1>
        <section class=écriture>
<h2>${voiture.titre}</h2>
<p>${voiture.description}</p>
</section>
<img id=img src='${voiture["image-url"]}'>
</div>`;
      });
      data.temoignages.forEach((temoin) => {
        const perso = document.getElementById("personne");
        perso.innerHTML += `
        <secrion class=com>
        <div class=indentification>
<h2> ${temoin.prenom}</h2>
<h3>${temoin.typePrestation}</h3>
</div>
<div class=note>
<p>${temoin.commentaire}</p>
<p>${temoin.note}</p>
</div>
</section>`;
      });
    });
}
fetchcovoiturage(
  "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/vtc.json"
);
// Pour chaque activité dans les données JSON, crée dynamiquement une div contenant un titre, une description et une image.
// Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image.
// // container.innerHTML (){
// // alert={
//  <h1>${nomCommercial}</h1>;
// }

// const card = document.createElement('div');
// function personne= (nom,frase,button){
//     this.nom=nomCommercial;
//     this.frase=phraseAccroche;
//     this.button= texteAppelAction;
// }

// const content = element.innerHTML;

// element.innerHTML = htmlString;

// const valeurSrc = document.getElementById('nomCommercial').getAttribute('nom');
// const <div>
// nom.innerhtml="<i>${nomCommercial}</i>";
// const text=""

// const content = nom.innerHTML;

// nom.innerHTML = `${container}`;
