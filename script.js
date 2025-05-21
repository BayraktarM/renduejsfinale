fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/vtc.json")
.then(reponse => reponse.json())
.then(data=>{
    console.log(data);
    
})
const container = document.getElementById('nomCommercial');
const nom= document.getElementById('nom')
console.log(container);
// container.innerHTML (){ 
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

const content = nom.innerHTML;

nom.innerHTML =`${container}`;    