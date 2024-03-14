// Attend que le contenu de la page soit entièrement chargé avant d'exécuter le code JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Écouteur d'événements pour le formulaire de contact lorsqu'il est soumis
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupération des valeurs des champs du formulaire
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Création de l'objet FormData pour envoyer les données en POST
        var formData = new FormData();
        formData.append('name', name); // Ajoute le champ "name" avec sa valeur
        formData.append('email', email); // Ajoute le champ "email" avec sa valeur
        formData.append('message', message); // Ajoute le champ "message" avec sa valeur

        // Configuration de la requête AJAX
        var xhr = new XMLHttpRequest(); // Crée un nouvel objet XMLHttpRequest
        xhr.open('POST', 'https://hook.eu2.make.com/a4azuqu662hl2fzihhl7d62tgh3q4a8j'); // Définit la méthode et l'URL de la requête
        xhr.setRequestHeader('Content-Type', 'application/json'); // Définit l'en-tête Content-Type pour JSON

        // Événement déclenché lorsque la requête AJAX est terminée
        xhr.onload = function() {
            if (xhr.status === 200) { // Si la requête a abouti (code de statut HTTP 200)
                alert('Message envoyé avec succès !'); // Affiche un message de succès
                // Réinitialiser le formulaire après l'envoi réussi
                document.getElementById('contactForm').reset();
            } else { // Si la requête a échoué
                alert('Une erreur est survenue lors de l\'envoi du message.'); // Affiche un message d'erreur
            }
        };

        // Envoi de la requête avec les données du formulaire au format JSON
        xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
    });
});