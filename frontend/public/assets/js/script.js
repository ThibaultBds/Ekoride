const boutonFiltres = document.getElementById('toggleFiltres');
const formulaireFiltres = document.getElementById('zoneFiltres');

function basculerAffichageFiltres() {
    formulaireFiltres.classList.toggle('filtres-actifs');
    
    const estActif = formulaireFiltres.classList.contains('filtres-actifs');
    
    boutonFiltres.setAttribute('aria-expanded', estActif);
    
    if (estActif) {
        boutonFiltres.textContent = "Masquer les options ▲";
        formulaireFiltres.classList.remove('filtres-masques'); 
    } else {
        boutonFiltres.textContent = "Voir les options 🔽";
        formulaireFiltres.classList.add('filtres-masques'); 
    }
}

boutonFiltres.addEventListener('click', basculerAffichageFiltres);