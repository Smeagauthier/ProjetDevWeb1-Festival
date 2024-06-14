// ------------------------- MENU BURGER ----------------------
const burger = document.querySelector('.menu-burger');
const nav = document.querySelector('header');

function openedMenu() {
    nav.classList.add('menuOpened');
}

function closeMenu() {
    nav.classList.remove('menuOpened');
}

burger.addEventListener('click', () => {
    if (nav.classList.contains('menuOpened')) {
        closeMenu();
    } else {
        openedMenu();
    }
});


//--------------------- SPINNER - TICKETS -----------------------
document.addEventListener('DOMContentLoaded', function () {
    
    // Sélectionner tous les contrôles de quantité
    const quantity = document.querySelectorAll('.spinner');
    
    quantity.forEach((control) => {
        const minus = control.querySelector('.minus');
        const plus = control.querySelector('.plus');
        const number = control.querySelector('.number');
        const price = control.parentElement.querySelector('.price');
        const unitPrice = parseFloat(price.getAttribute('data-price'));
        
        let ticketCount = 0;
        
        // Mettre à jour le prix
        function updatePrice() {
            const totalPrice = (ticketCount * unitPrice).toFixed(2);
            price.innerHTML = `€ ${totalPrice}`;
        }
        
        //A chaque click, mettre à jour le prix -
        minus.addEventListener('click', () => {
            if (ticketCount > 0) {
                ticketCount--;
                number.innerHTML = ticketCount;
                updatePrice();
            }
        });
        
        //A chaque click, mettre à jour le prix +
        plus.addEventListener('click', () => {
            ticketCount++;
            number.innerHTML = ticketCount;
            updatePrice();
        });
    });
});

//---------------------- TRI PAR JOUR --------------------

// JavaScript: Gestion du tri par jour
// main.js

// Fonction de gestion du menu burger
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.menu-burger');
    const header = document.querySelector('nav');
    
    function openedMenu() {
        header.classList.add('menuOpened');
    }
    
    function closeMenu() {
        header.classList.remove('menuOpened');
    }
    
    burger.addEventListener('click', () => {
        if (header.classList.contains('menuOpened')) {
            closeMenu();
        } else {
            openedMenu();
        }
    });
    
    // Fonction de tri par jour sur CardLineUp
    const allArtists = document.querySelector('.allArtists');
    const vendredi = document.querySelector('.vendredi');
    const samedi= document.querySelector('.samedi');
    const dimanche = document.querySelector('.dimanche');
    
    allArtists.addEventListener('click', () => filterArtists('all'));
    vendredi.addEventListener('click', () => filterArtists('vendredi'));
    samedi.addEventListener('click', () => filterArtists('samedi'));
    dimanche.addEventListener('click', () => filterArtists('dimanche'));
    
    function filterArtists(day) {
        const artistCards = document.querySelectorAll('.artist-card');
        
        artistCards.forEach(card => {
            const artistDay = card.getAttribute('data-day');
            
            if (day === 'all' || artistDay === day) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Fonction de gestion du spinner (exemple pour la page des tickets)
    const quantityControls = document.querySelectorAll('.spinner');
    
    quantityControls.forEach(control => {
        const minus = control.querySelector('.minus');
        const plus = control.querySelector('.plus');
        const number = control.querySelector('.number');
        const price = control.parentElement.querySelector('.price');
        const unitPrice = parseFloat(price.getAttribute('data-price'));
        
        let ticketCount = 0;
        
        // Mettre à jour le prix
        function updatePrice() {
            const totalPrice = (ticketCount * unitPrice).toFixed(2);
            price.innerHTML = `€ ${totalPrice}`;
        }
        
        //A chaque click, mettre à jour le prix -
        minus.addEventListener('click', () => {
            if (ticketCount > 0) {
                ticketCount--;
                number.innerHTML = ticketCount;
                updatePrice();
            }
        });
        
        //A chaque click, mettre à jour le prix +
        plus.addEventListener('click', () => {
            ticketCount++;
            number.innerHTML = ticketCount;
            updatePrice();
        });
    });
});
