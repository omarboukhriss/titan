document.addEventListener('DOMContentLoaded', function() {
    // Navigation active
    const menus = document.querySelectorAll('.a5');
    const url = window.location.pathname;
    
    menus.forEach(function(menu) {
        const href = menu.getAttribute('href');
        if (url.includes(href) && href !== 'index.html' && href !== '#contact') {
            menu.classList.add('a6');
        } else if (href === 'index.html' && (url.endsWith('/') || url.endsWith('index.html'))) {
            menu.classList.add('a6');
        }
    });

    // Animations au défilement
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.n3, .n4');
    animatedElements.forEach(function(el) {
        if (window.getComputedStyle(el).animationName !== 'none') {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        }
    });

    // Gestion Dynamique des Membres
    const formAddMember = document.getElementById('form_add_member');
    if (formAddMember) {
        formAddMember.addEventListener('submit', function(e) {
            e.preventDefault();
            const nom = this.nom.value;
            const email = this.email.value;
            const tableBody = document.querySelector('.o2 tbody');
            const randId = Math.floor(Math.random() * 9000 + 1000);
            
            const row = document.createElement('tr');
            row.className = 'o6 o1 n3';
            row.innerHTML = '<td class="o6">#' + randId + '</td><td class="o6" style="font-weight: 600; color: #1f2937;">' + nom + '</td><td class="o6">' + email + '</td><td class="o6"><span class="p2 p5">Pro</span></td><td class="o6"><span class="p2 p3">Actif</span></td><td class="o6"><div class="o7"><a href="#edit_member" class="o8 o9 q6">Modifier</a><label class="o8 p1 q6" onclick="this.closest(\'tr\').remove()">Supprimer</label></div></td>';
            
            tableBody.appendChild(row);
            window.location.hash = ''; // Fermer la modale CSS
            this.reset();
        });
    }

    // Gestion Dynamique des Équipements
    const formAddEq = document.getElementById('form_add_eq');
    if (formAddEq) {
        formAddEq.addEventListener('submit', function(e) {
            e.preventDefault();
            const nom = this.nom.value;
            const loc = this.loc.value;
            const tableBody = document.querySelector('.o2 tbody');
            const randEq = Math.floor(Math.random() * 900 + 100);
            
            const row = document.createElement('tr');
            row.className = 'o6 o1 n4';
            row.innerHTML = '<td class="o6">EQ-' + randEq + '</td><td class="o6" style="font-weight: 600; color: #1f2937;">' + nom + '</td><td class="o6">Général</td><td class="o6">' + loc + '</td><td class="o6"><span class="p2 p3">Opérationnel</span></td><td class="o6"><div class="o7"><a href="#edit_eq" class="o8 o9 q6">Modifier</a><label class="o8 p1 q6" onclick="this.closest(\'tr\').remove()">Supprimer</label></div></td>';
            
            tableBody.appendChild(row);
            window.location.hash = ''; // Fermer la modale CSS
            this.reset();
        });
    }

    // Simulation Modification (Affiche juste une alerte pour la démo)
    const formEditMember = document.getElementById('form_edit_member');
    if (formEditMember) {
        formEditMember.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Membre modifié avec succès (Simulation) !');
            window.location.hash = '';
        });
    }

    const formEditEq = document.getElementById('form_edit_eq');
    if (formEditEq) {
        formEditEq.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Équipement modifié avec succès (Simulation) !');
            window.location.hash = '';
        });
    }

    // Login Redirect
    const loginForm = document.querySelector('form[action="index.html"]') || document.querySelector('form[action="login.php"]');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = "index.html";
        });
    }
});
