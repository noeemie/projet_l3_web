// Fonction de récupération des données
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

// Traitement des données du fichier JSON reçu depuis l'API weatherbit pour Melbourne
ajaxGet("https://api.weatherbit.io/v2.0/forecast/daily?&city=Melbourne&state=Victoria&key=2efb0738c35141ef9ee890c303f25215", function (reponse) {
    var meteo = JSON.parse(reponse);
    // Récupération de certains résultats
    console.log(meteo.city_name);
    console.log(meteo.data[0].wind_gust_spd);
    // !!! Penser à faire : afficher dans la console le nombre de requêtes restantes (si possible)
    /*var temperature = meteo.current_observation.temp_c;
    var humidite = meteo.current_observation.relative_humidity;
    var imageUrl = meteo.current_observation.icon_url;
    // Affichage des résultats
    var conditionsElt = document.createElement("div");
    conditionsElt.textContent = "Il fait actuellement " + temperature +
        "°C et l'humidité est de " + humidite;
    var imageElt = document.createElement("img");
    imageElt.src = imageUrl;
    var meteoElt = document.getElementById("meteo");
    meteoElt.appendChild(conditionsElt);
    meteoElt.appendChild(imageElt);*/
});

