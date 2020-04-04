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

// Traitement des données du fichier JSON reçu depuis l'API weatherbit pour les prévisions des 5 prochains jours pour Melbourne
ajaxGet("https://api.weatherbit.io/v2.0/forecast/daily?&city=Melbourne&state=Victoria&key=2efb0738c35141ef9ee890c303f25215", function (reponse) {

    var meteo = JSON.parse(reponse);

	// Affichage des données dans le tableau de prévisions
    document.getElementById("previsions").innerHTML = 
    "<tr>" + 
	"	<td>" + meteo.data[0].datetime + "</td>" + // Date
	"	<td>" + meteo.data[0].min_temp + "°C</td>" + // Température minimale
	"	<td>" + meteo.data[0].max_temp + "°C</td>" + // Température maximale
	"	<td>" + Math.round(meteo.data[0].precip) + " mm</td>" + // Pluie
	"	<td>" + Math.round(meteo.data[0].wind_gust_spd * 3.6) + " km/h " + meteo.data[0].wind_cdir + "</td>" + // Vent (vitesse + direction)
	"</tr>" + 
	"<tr>" + 
	"	<td>" + meteo.data[1].datetime + "</td>" +
	"	<td>" + meteo.data[1].min_temp + "°C</td>" +
	"	<td>" + meteo.data[1].max_temp + "°C</td>" +
	"	<td>" + Math.round(meteo.data[1].precip) + " mm</td>" +
	"	<td>" + Math.round(meteo.data[1].wind_gust_spd * 3.6) + " km/h " + meteo.data[1].wind_cdir + "</td>" +
	"</tr>" + 
	"<tr>" + 
	"	<td>" + meteo.data[2].datetime + "</td>" +
	"	<td>" + meteo.data[2].min_temp + "°C</td>" +
	"	<td>" + meteo.data[2].max_temp + "°C</td>" +
	"	<td>" + Math.round(meteo.data[2].precip) + " mm</td>" +
	"	<td>" + Math.round(meteo.data[2].wind_gust_spd * 3.6) + " km/h " + meteo.data[2].wind_cdir + "</td>" +
	"</tr>" +
	"<tr>" + 
	"	<td>" + meteo.data[3].datetime + "</td>" +
	"	<td>" + meteo.data[3].min_temp + "°C</td>" +
	"	<td>" + meteo.data[3].max_temp + "°C</td>" +
	"	<td>" + Math.round(meteo.data[3].precip) + " mm</td>" +
	"	<td>" + Math.round(meteo.data[3].wind_gust_spd * 3.6) + " km/h " + meteo.data[3].wind_cdir + "</td>" +
	"</tr>" +
	"<tr>" + 
	"	<td>" + meteo.data[4].datetime + "</td>" +
	"	<td>" + meteo.data[4].min_temp + "°C</td>" +
	"	<td>" + meteo.data[4].max_temp + "°C</td>" +
	"	<td>" + Math.round(meteo.data[4].precip) + " mm</td>" +
	"	<td>" + Math.round(meteo.data[4].wind_gust_spd * 3.6) + " km/h " + meteo.data[4].wind_cdir + "</td>" +
	"</tr>";
});

// Traitement des données issues du temps actuel
ajaxGet("https://api.weatherbit.io/v2.0/current?city=Melbourne&state=Victoria&key=2efb0738c35141ef9ee890c303f25215", function (reponse) {

    var meteo = JSON.parse(reponse);
    
	var urlImage = "https://www.weatherbit.io/static/img/icons/" + meteo.data[0].weather.icon + ".png"; // Icône fournie par l'API
	var altImage = meteo.data[0].weather.description; // Description
	
	// Modifications des attributs de la balise d'image
	document.getElementById("temps_actuel").setAttribute("src", urlImage);
	document.getElementById("temps_actuel").setAttribute("alt", altImage);
	
	// Affichage des données concernant le temps actuel
	document.getElementById("temps").innerHTML = 
    "<tr>" + 
	"	<td>" + meteo.data[0].temp + "°C</td>" + // Température
	"	<td>" + Math.round(meteo.data[0].precip) + " mm</td>" + // Pluie
	"	<td>" + Math.round(meteo.data[0].wind_spd * 7.2) + " km/h " + meteo.data[0].wind_cdir + "</td>" + // Vent (vitesse + direction)
	"</tr>"
	
	// Date et heure de l'observation
	document.getElementById("heure_observation").innerHTML = 
	"<p> Last observation time : " + meteo.data[0].ob_time + "</p>";
});
