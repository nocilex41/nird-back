        const regionsData = {
            lyon: {
                title: "Ville de Lyon",
                text: "La Ville de Lyon remplace progressivement les logiciels de Microsoft par des alternatives libres pour renforcer la souveraineté technologique et prolonger la durée de vie des équipements informatiques."
            },
            strasbourg: {
                title: "Métropole de Strasbourg",
                text: "Création d'une cellule « Stratégie Logiciels Libres » dans le cadre de la démarche Numérique Responsable. L'utilisation de logiciels libres favorise la prolongation de la durée de vie des équipements et réduit l'empreinte environnementale."
            },
            grenoble: {
                title: "Ville de Grenoble",
                text: "Kit d'accès aux logiciels libres, pédagogique et facile à utiliser pour permettre à chacun d'échapper à l'emprise des GAFAM en utilisant des logiciels et services libres, sans traçage."
            },
            centre: {
                title: "Région Centre-Val de Loire",
                text: "Déploiement d'une offre Linux en collège et lycée pour s'inscrire dans la démarche NIRD, avec fin de support Windows 10, souveraineté numérique et ouverture des programmes d'enseignement."
            },
            aura: {
                title: "Région AURA",
                text: "Mise à disposition d'un master Linux pour les postes de travail dans les lycées. Après une phase test sur des lycées pilotes, déploiement avec des outils de restauration comparables à Windows."
            },
            blois: {
                title: "Ville de Blois",
                text: "Face à l'obsolescence programmée de Windows 10, conversion progressive des ordinateurs des écoles sous Linux (PrimTux). Expérimentation dans trois écoles élémentaires pour prolonger la durée de vie des ordinateurs."
            },
            angouleme: {
                title: "Ville d'Angoulême",
                text: "Mise en place de Linux dans les écoles pour montrer que ça ne change rien, faire réfléchir les agents et faire durer les ordinateurs. La maintenance est intégrée dans le marché public (UGAP)."
            }
           
        };

        let discoveredRegions = new Set();
        const totalRegions = 7;

        document.addEventListener('DOMContentLoaded', function() {
            const markers = document.querySelectorAll('.region-marker');
            
            markers.forEach(marker => {
                marker.addEventListener('click', function() {
                    const region = this.getAttribute('data-region');
                    discoverRegion(region, this);
                });
            });
        });

        function discoverRegion(regionName, markerElement) {
            if (discoveredRegions.has(regionName)) {
                // Déjà découvert, juste afficher les infos
                showModal(regionName);
                return;
            }

            discoveredRegions.add(regionName);
            markerElement.classList.add('discovered');
            
            // Mettre à jour le compteur
            document.getElementById('discoveredCount').textContent = discoveredRegions.size;

            // Afficher le modal
            showModal(regionName);

            // Si toutes les régions sont découvertes
            if (discoveredRegions.size === totalRegions) {
                setTimeout(() => {
                    document.getElementById('successMessage').classList.add('show');
                    document.getElementById('scrollHint').classList.add('show');
                    
                    // Afficher une alerte
                    setTimeout(() => {
                        alert('🎉 Félicitations !\n\nVous avez découvert les 7 collectivités pionnières de la démarche NIRD !\n\n✅ Ces territoires montrent la voie vers un numérique plus libre et responsable.\n\nDécouvrez maintenant comment les collectivités peuvent soutenir cette démarche en scrollant vers le bas.');
                    }, 800);

                    // Révéler le contenu
                    setTimeout(() => {
                        document.getElementById('contentSection').classList.add('revealed');
                        
                        // Observer pour les cartes
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    entry.target.classList.add('visible');
                                }
                            });
                        }, { threshold: 0.2 });

                        document.querySelectorAll('.benefit-card, .action-card').forEach(card => {
                            observer.observe(card);
                        });
                    }, 1000);
                }, 500);
            }
        }

        function showModal(regionName) {
            const data = regionsData[regionName];
            document.getElementById('modalTitle').textContent = data.title;
            document.getElementById('modalText').textContent = data.text;
            document.getElementById('modal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('modal').classList.remove('active');
        }

        // Fermer le modal en cliquant en dehors
        document.getElementById('modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    