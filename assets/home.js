// Gestion des bulles interactives
document.addEventListener('DOMContentLoaded', function() {
    const bubbles = document.querySelectorAll('.bubble');
    
    bubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        bubble.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
        
        // Click handler pour navigation future
        bubble.addEventListener('click', function() {
            const bubbleId = this.getAttribute('data-bubble');
            console.log('Navigation vers la section:', bubbleId);
            // Ici vous pourrez ajouter la navigation vers les différentes sections
        });
    });
    
    // Animation du bouton CTA
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('click', function() {
        console.log('Rejoindre la résistance !');
        // Ici vous pourrez ajouter l'action d'inscription
    });
});