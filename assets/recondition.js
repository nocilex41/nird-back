  // Jeu de reconditionnement
        let assembledParts = new Set();
        const totalParts = 6;

        const partPositions = {
            screen: { emoji: '🖥️', top: '20%', left: '50%', transform: 'translateX(-50%)', size: '60px' },
            keyboard: { emoji: '⌨️', bottom: '25%', left: '50%', transform: 'translateX(-50%)', size: '40px' },
            mouse: { emoji: '🖱️', bottom: '20%', right: '20%', size: '30px' },
            cpu: { emoji: '🧠', top: '40%', left: '20%', size: '35px' },
            ram: { emoji: '💾', top: '40%', right: '20%', size: '35px' },
            disk: { emoji: '💿', bottom: '45%', left: '50%', transform: 'translateX(-50%)', size: '30px' }
        };

        // Attacher les événements aux composants
        document.addEventListener('DOMContentLoaded', function() {
            const components = document.querySelectorAll('.component');
            
            components.forEach(component => {
                component.addEventListener('click', function() {
                    const partName = this.getAttribute('data-part');
                    assemblePart(partName);
                });
            });
        });

        function assemblePart(partName) {
            if (assembledParts.has(partName)) return;

            assembledParts.add(partName);
            
            // Marquer le composant comme assemblé
            const component = document.querySelector(`[data-part="${partName}"]`);
            component.classList.add('assembled');

            // Ajouter la pièce au PC
            const pcDisplay = document.getElementById('pcDisplay');
            const part = document.createElement('div');
            part.className = 'assembled-part';
            part.style.fontSize = partPositions[partName].size;
            part.textContent = partPositions[partName].emoji;
            
            Object.keys(partPositions[partName]).forEach(key => {
                if (key !== 'emoji' && key !== 'size') {
                    part.style[key] = partPositions[partName][key];
                }
            });
            
            pcDisplay.appendChild(part);

            // Mettre à jour la progression
            const progress = (assembledParts.size / totalParts) * 100;
            const progressFill = document.getElementById('progressFill');
            progressFill.style.width = progress + '%';
            progressFill.textContent = Math.round(progress) + '%';

            // Si tout est assemblé
            if (assembledParts.size === totalParts) {
                setTimeout(() => {
                    // Marquer le PC comme complet
                    pcDisplay.classList.add('complete');
                    
                    // Changer l'instruction
                    document.getElementById('instruction').textContent = '🎉 Félicitations ! PC reconditionné !';
                    
                    // Afficher le message de succès
                    document.getElementById('successMessage').classList.add('show');
                    document.getElementById('scrollHint').classList.add('show');
                    
                    // Afficher une alerte après une courte pause
                    setTimeout(() => {
                        alert('🎉 Bravo ! Vous avez reconditionné un PC avec succès !\n\n' +
                              '✅ Toutes les pièces ont été assemblées\n' +
                              '✅ Le système est prêt à être utilisé\n' +
                              '✅ Une nouvelle vie pour cet ordinateur !\n\n' +
                              'Découvrez maintenant les 3 piliers du reconditionnement en scrollant vers le bas.');
                    }, 800);
                    
                    // Révéler le contenu
                    setTimeout(() => {
                        document.getElementById('contentSection').classList.add('revealed');
                        
                        // Animer les piliers au scroll
                        const observerOptions = {
                            threshold: 0.2,
                            rootMargin: '0px'
                        };

                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    entry.target.classList.add('visible');
                                }
                            });
                        }, observerOptions);

                        document.querySelectorAll('.pillar').forEach(pillar => {
                            observer.observe(pillar);
                        });
                    }, 1000);
                }, 500);
            }
        }