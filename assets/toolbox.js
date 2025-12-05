
console.log('=== Initialisation de toolbox.js ===');
// Données des outils
const toolsData = {
    'admin-system': {
        title: 'Administration Système',
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>`,
        description: 'Retrouvez tous nos outils et tutoriels pour l\'administration système. Guides de configuration, scripts utiles, bonnes pratiques et astuces pour gérer efficacement vos serveurs et infrastructures.',
        links: [
            { text: 'Tutoriels d\'administration', url: '/documentation/admin-system', icon: 'book' },
            { text: 'Scripts et outils', url: '/tools/scripts', icon: 'code' },
            { text: 'Guides de configuration', url: '/guides/configuration', icon: 'settings' }
        ]
    },
    'linux-env': {
        title: 'Environnement Linux',
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>`,
        description: 'Des conseils pratiques et des guides détaillés pour mettre en place votre propre environnement Linux. Configuration, personnalisation et optimisation pour tous les niveaux.',
        links: [
            { text: 'Guide d\'installation', url: '/guides/linux-install', icon: 'download' },
            { text: 'Configuration système', url: '/guides/linux-config', icon: 'settings' },
            { text: 'Personnalisation', url: '/guides/customization', icon: 'palette' }
        ]
    },
    'software-lists': {
        title: 'Listes de Logiciels',
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>`,
        description: 'Des listes complètes et commentées de logiciels pour vous aider à faire les meilleurs choix selon vos besoins. Comparatifs, alternatives et recommandations.',
        links: [
            { text: 'Logiciels bureautiques', url: '/software/office', icon: 'document' },
            { text: 'Outils de développement', url: '/software/dev', icon: 'code' },
            { text: 'Applications système', url: '/software/system', icon: 'server' }
        ]
    },
    'tutorials': {
        title: 'Tutoriels',
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>`,
        description: 'Une bibliothèque complète de tutoriels étape par étape pour vous accompagner dans vos projets. Du niveau débutant à expert.',
        links: [
            { text: 'Tutoriels débutant', url: '/tutorials/beginner', icon: 'star' },
            { text: 'Niveau intermédiaire', url: '/tutorials/intermediate', icon: 'trending-up' },
            { text: 'Niveau avancé', url: '/tutorials/advanced', icon: 'zap' }
        ]
    },
    'tchap-forum': {
        title: 'Forum Tchap',
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
        </svg>`,
        description: 'Rejoignez notre communauté sur Tchap pour échanger avec d\'autres utilisateurs, poser vos questions techniques et partager vos expériences. Un espace dédié aux discussions techniques.',
        links: [
            { text: 'Accéder au forum', url: 'https://tchap.gouv.fr', icon: 'external-link', external: true },
            { text: 'Guide d\'utilisation', url: '/guides/tchap', icon: 'help-circle' },
            { text: 'Règles de la communauté', url: '/community/rules', icon: 'shield' }
        ]
    },
    'documentation': {
        title: 'Documentation',
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>`,
        description: 'Accédez à l\'ensemble de nos documentations techniques. Références complètes, guides d\'utilisation et ressources pour approfondir vos connaissances.',
        links: [
            { text: 'Documentation complète', url: '/documentation', icon: 'book-open' },
            { text: 'FAQ', url: '/faq', icon: 'help-circle' },
            { text: 'Glossaire technique', url: '/glossary', icon: 'list' }
        ]
    }
};

// Icônes pour les liens
const linkIcons = {
    'book': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
    'code': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`,
    'settings': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
    'download': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>`,
    'palette': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>`,
    'document': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`,
    'server': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>`,
    'star': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>`,
    'trending-up': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`,
    'zap': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
    'external-link': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>`,
    'help-circle': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    'shield': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
    'book-open': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
    'list': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`
};

//console.log('=== Script toolbox.js chargé ===');

// Fonction pour ouvrir le modal
function openModal(toolId) {
    //console.log('📦 openModal appelée avec toolId:', toolId);
    
    const toolData = toolsData[toolId];
    if (!toolData) {
        console.error('❌ Outil non trouvé:', toolId);
        return;
    }

    //console.log('✅ Données de l\'outil:', toolData.title);

    const modal = document.getElementById('toolModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const linksContainer = document.getElementById('modalLinks');

    if (!modal || !modalIcon || !modalTitle || !modalDescription || !linksContainer) {
        console.error('❌ Éléments du modal non trouvés');
        return;
    }

    // Remplir le contenu du modal
    modalIcon.innerHTML = toolData.icon;
    modalTitle.textContent = toolData.title;
    modalDescription.textContent = toolData.description;

    // Créer les liens
    linksContainer.innerHTML = '';
    
    toolData.links.forEach(function(link) {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'modal-link';
        if (link.external) {
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer';
        }
        
        linkElement.innerHTML = linkIcons[link.icon] + '<span>' + link.text + '</span>';
        linksContainer.appendChild(linkElement);
    });

    // Afficher le modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    //console.log('✅ Modal affiché');
}

// Fonction pour fermer le modal
function closeModal() {
    //console.log('🔒 Fermeture du modal');
    const modal = document.getElementById('toolModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM chargé - Initialisation des événements');

    // Récupérer tous les éléments
    const toolboxClosed = document.getElementById('toolboxClosed');
    const toolboxOpened = document.getElementById('toolboxOpened');
    const closeToolboxBtn = document.getElementById('closeToolbox');
    const modal = document.getElementById('toolModal');
    const modalClose = document.getElementById('modalClose');

    /*console.log('🔍 Éléments trouvés:');
    console.log('- toolboxClosed:', toolboxClosed ? '✅' : '❌');
    console.log('- toolboxOpened:', toolboxOpened ? '✅' : '❌');
    console.log('- closeToolboxBtn:', closeToolboxBtn ? '✅' : '❌');
    console.log('- modal:', modal ? '✅' : '❌');
    console.log('- modalClose:', modalClose ? '✅' : '❌');*/

    // 1. Ouvrir la boîte à outils
    if (toolboxClosed) {
        toolboxClosed.addEventListener('click', function(e) {
            console.log('🔓 Clic sur la boîte fermée');
            e.preventDefault();
            toolboxClosed.classList.add('hidden');
            if (toolboxOpened) {
                toolboxOpened.classList.add('active');
                console.log('✅ Boîte ouverte');
            }
        });
        console.log('✅ Event listener ajouté sur toolboxClosed');
    } else {
        console.error('❌ toolboxClosed non trouvé dans le DOM');
    }

    // 2. Fermer la boîte à outils
    if (closeToolboxBtn) {
        closeToolboxBtn.addEventListener('click', function(e) {
            console.log('🔒 Clic sur fermer la boîte');
            e.preventDefault();
            if (toolboxOpened) {
                toolboxOpened.classList.remove('active');
            }
            if (toolboxClosed) {
                toolboxClosed.classList.remove('hidden');
            }
           // console.log('✅ Boîte fermée');
        });
        console.log('✅ Event listener ajouté sur closeToolboxBtn');
    }

    // 3. Ouvrir le modal pour chaque outil
    const toolItems = document.querySelectorAll('.tool-item');
    console.log('🔧 Nombre d\'outils trouvés:', toolItems.length);
    
    toolItems.forEach(function(item, index) {
        const toolId = item.getAttribute('data-tool');
        //console.log(`- Outil ${index + 1}: ${toolId}`);
        
        item.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🖱️ Clic sur outil:', toolId);
            openModal(toolId);
        });
    });

    if (toolItems.length > 0) {
        //console.log('✅ Event listeners ajoutés sur les outils');
    } else {
        console.error('❌ Aucun outil trouvé (.tool-item)');
    }

    // 4. Fermer le modal avec la croix
    if (modalClose) {
        modalClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        });
        console.log('✅ Event listener ajouté sur modalClose');
    }

    // 5. Fermer en cliquant en dehors du modal
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        console.log('✅ Event listener ajouté sur modal backdrop');
    }

    // 6. Fermer avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            closeModal();
        }
    });
    //console.log('✅ Event listener ajouté pour touche Escape');

    //console.log('🎉 Initialisation terminée');
});