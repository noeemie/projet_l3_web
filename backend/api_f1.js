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


ajaxGet("http://ergast.com/api/f1/current/drivers.json", function (reponse) {
    var res = JSON.parse(reponse);
    // Récupération de certains résultats
    var driver = ;
    console.log(res.city_name);
    console.log(res.data[0].wind_gust_spd);
});

ajaxGet("http://ergast.com/api/f1/current/drivers/" + driver + "/results.json", function (reponse) {
    var res = JSON.parse(reponse);
    // Récupération de certains résultats
    console.log(res.city_name);
    console.log(res.data[0].wind_gust_spd);
});