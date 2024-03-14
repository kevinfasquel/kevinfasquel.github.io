document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupération des valeurs des champs
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Création de l'objet FormData pour envoyer les données en POST
        var formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        // Configuration de la requête AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://n8n.oriatec.fr/webhook/cplr-versionning');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert('Message envoyé avec succès !');
                // Réinitialiser le formulaire après l'envoi réussi
                document.getElementById('contactForm').reset();
            } else {
                alert('Une erreur est survenue lors de l\'envoi du message.');
            }
        };

        // Envoi de la requête avec les données du formulaire
        xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
    });
});