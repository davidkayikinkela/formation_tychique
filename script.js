const functionOM = () => {
    let copyText = document.querySelector(".numero1") 
    let range = document.createRange();
    range.selectNode(copyText)

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try{ 
        let successful = document.execCommand("copy")
        let msg = successful ? "numéro copié avec succès !" : "Echec de la copie"
        const OM = document.querySelector('.alerteOM'),
        block = document.querySelector('block');
        OM.classList.add('block');
        setTimeout(() => {
            OM.classList.remove('block');
        }, 2000);

    } catch(err){
        alert("Erreur !!")
    }

    window.getSelection().removeAllRanges();
}
const functionMP = () => {
    let copyText = document.querySelector(".numero2") 
    let range = document.createRange();
    range.selectNode(copyText)

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try{ 
        let successful = document.execCommand("copy")
        let msg = successful ? "numéro copié avec succès !" : "Echec de la copie"
        const MP = document.querySelector('.alerteMP'),
        block = document.querySelector('block');
        MP.classList.add('block');
        setTimeout(() => {
            MP.classList.remove('block');
        }, 2000);
    } catch(err){
        alert("Erreur !!")
    }

    window.getSelection().removeAllRanges();
}
const functionAM = () => {
    let copyText = document.querySelector(".numero3") 
    let range = document.createRange();
    range.selectNode(copyText)

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try{ 
        let successful = document.execCommand("copy")
        let msg = successful ? "numéro copié avec succès !" : "Echec de la copie"
        const AM = document.querySelector('.alerteAM'),
        block = document.querySelector('block');
        AM.classList.add('block');
        setTimeout(() => {
            AM.classList.remove('block');
        }, 2000);
    } catch(err){
        alert("Erreur !!")
    }

    window.getSelection().removeAllRanges();
}
const popup = document.querySelector(".popup"),
croix = document.querySelector(".croix"),
notice = document.querySelector(".notice");

notice.addEventListener("click", () => {
    popup.classList.toggle("none1")
    

})
croix.addEventListener("click", () => { 
    popup.classList.toggle("none1")

}); 









// surveillance




const bouton1 = document.getElementById('bouton1');
const bouton2 = document.getElementById('bouton2');
const resultat = document.getElementById('resultat');

bouton1.addEventListener('click', () => {
    localStorage.setItem('premierClic', 'true');
});

bouton2.addEventListener('click', () => {
    if (localStorage.getItem('premierClic') === 'true') {
        const date = new Date();
        const heure = date.toLocaleTimeString();
        const message = "Les deux boutons ont été cliqués à " + heure;

        const nouveauParagraphe = document.createElement('p');
        nouveauParagraphe.textContent = message;
        resultat.appendChild(nouveauParagraphe);

        // Effacer la valeur pour réinitialiser
        localStorage.removeItem('premierClic');
    } else {
        alert("Veuillez cliquer sur le premier bouton avant le second.");
    }
});

















