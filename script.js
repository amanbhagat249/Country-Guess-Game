const data = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Colombia",
    "Comoros",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Côte d'Ivoire",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "North Korea",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn Islands",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of the Congo",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Pierre",
    "Saint Vicent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tomé and Príncipe",
    "Saudi Arabia",
    "Senegal",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Soloman Islands",
    "Somalia",
    "South Africa",
    "South Georgia",
    "South Korea",
    "Soviet Union",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Tibet",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "UAE",
    "Uganda",
    "United Kingdom",
    "Ukraine",
    "Uruguay",
    "United States of America",
    "US Virgin Islands",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Wallis and Futuna",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]

const image = [
    "./assets/Afghanistan.png",
    "./assets/Albania.png",
    "./assets/Algeria.png",
    "./assets/American_Samoa.png",
    "./assets/Andorra.png",
    "./assets/Angola.png",
    "./assets/Anguilla.png",
    "./assets/Antigua_and_Barbuda.png",
    "./assets/Argentina.png",
    "./assets/Armenia.png",
    "./assets/Aruba.png",
    "./assets/Australia.png",
    "./assets/Austria.png",
    "./assets/Azerbaijan.png",
    "./assets/Bahamas.png",
    "./assets/Bahrain.png",
    "./assets/Bangladesh.png",
    "./assets/Barbados.png",
    "./assets/Belarus.png",
    "./assets/Belgium.png",
    "./assets/Belize.png",
    "./assets/Benin.png",
    "./assets/Bermuda.png",
    "./assets/Bhutan.png",
    "./assets/Bolivia.png",
    "./assets/Bosnia.png",
    "./assets/Botswana.png",
    "./assets/Brazil.png",
    "./assets/British_Virgin_Islands.png",
    "./assets/Brunei.png",
    "./assets/Bulgaria.png",
    "./assets/Burkina_Faso.png",
    "./assets/Burundi.png",
    "./assets/Cambodia.png",
    "./assets/Cameroon.png",
    "./assets/Canada.png",
    "./assets/Cape_Verde.png",
    "./assets/Cayman_Islands.png",
    "./assets/Central_African_Republic.png",
    "./assets/Chad.png",
    "./assets/Chile.png",
    "./assets/China.png",
    "./assets/Christmas_Island.png",
    "./assets/Colombia.png",
    "./assets/Comoros.png",
    "./assets/Cook_Islands.png",
    "./assets/Costa_Rica.png",
    "./assets/Croatia.png",
    "./assets/Cuba.png",
    "./assets/Cyprus.png",
    "./assets/Czech_Republic.png",
    "./assets/Côte_d'Ivoire.png",
    "./assets/Democratic_Republic_of_the_Congo.png",
    "./assets/Denmark.png",
    "./assets/Djibouti.png",
    "./assets/Dominica.png",
    "./assets/Dominican_Republic.png",
    "./assets/Ecuador.png",
    "./assets/Egypt.png",
    "./assets/El_Salvador.png",
    "./assets/Equatorial_Guinea.png",
    "./assets/Eritrea.png",
    "./assets/Estonia.png",
    "./assets/Ethiopia.png",
    "./assets/Falkland_Islands.png",
    "./assets/Faroe_Islands.png",
    "./assets/Fiji.png",
    "./assets/Finland.png",
    "./assets/France.png",
    "./assets/French_Polynesia.png",
    "./assets/Gabon.png",
    "./assets/Gambia.png",
    "./assets/Georgia.png",
    "./assets/Germany.png",
    "./assets/Ghana.png",
    "./assets/Gibraltar.png",
    "./assets/Greece.png",
    "./assets/Greenland.png",
    "./assets/Grenada.png",
    "./assets/Guam.png",
    "./assets/Guatemala.png",
    "./assets/Guinea.png",
    "./assets/Guinea_Bissau.png",
    "./assets/Guyana.png",
    "./assets/Haiti.png",
    "./assets/Honduras.png",
    "./assets/Hong_Kong.png",
    "./assets/Hungary.png",
    "./assets/Iceland.png",
    "./assets/India.png",
    "./assets/Indonesia.png",
    "./assets/Iran.png",
    "./assets/Iraq.png",
    "./assets/Ireland.png",
    "./assets/Israel.png",
    "./assets/Italy.png",
    "./assets/Jamaica.png",
    "./assets/Japan.png",
    "./assets/Jordan.png",
    "./assets/Kazakhstan.png",
    "./assets/Kenya.png",
    "./assets/Kiribati.png",
    "./assets/Kuwait.png",
    "./assets/Kyrgyzstan.png",
    "./assets/Laos.png",
    "./assets/Latvia.png",
    "./assets/Lebanon.png",
    "./assets/Lesotho.png",
    "./assets/Liberia.png",
    "./assets/Libya.png",
    "./assets/Liechtenstein.png",
    "./assets/Lithuania.png",
    "./assets/Luxembourg.png",
    "./assets/Macao.png",
    "./assets/Macedonia.png",
    "./assets/Madagascar.png",
    "./assets/Malawi.png",
    "./assets/Malaysia.png",
    "./assets/Maldives.png",
    "./assets/Mali.png",
    "./assets/Malta.png",
    "./assets/Marshall_Islands.png",
    "./assets/Martinique.png",
    "./assets/Mauritania.png",
    "./assets/Mauritius.png",
    "./assets/Mexico.png",
    "./assets/Micronesia.png",
    "./assets/Moldova.png",
    "./assets/Monaco.png",
    "./assets/Mongolia.png",
    "./assets/Montserrat.png",
    "./assets/Morocco.png",
    "./assets/Mozambique.png",
    "./assets/Myanmar.png",
    "./assets/Namibia.png",
    "./assets/Nauru.png",
    "./assets/Nepal.png",
    "./assets/Netherlands.png",
    "./assets/Netherlands_Antilles.png",
    "./assets/New_Zealand.png",
    "./assets/Nicaragua.png",
    "./assets/Niger.png",
    "./assets/Nigeria.png",
    "./assets/Niue.png",
    "./assets/Norfolk_Island.png",
    "./assets/North_Korea.png",
    "./assets/Norway.png",
    "./assets/Oman.png",
    "./assets/Pakistan.png",
    "./assets/Palau.png",
    "./assets/Panama.png",
    "./assets/Papua_New_Guinea.png",
    "./assets/Paraguay.png",
    "./assets/Peru.png",
    "./assets/Philippines.png",
    "./assets/Pitcairn_Islands.png",
    "./assets/Poland.png",
    "./assets/Portugal.png",
    "./assets/Puerto_Rico.png",
    "./assets/Qatar.png",
    "./assets/Republic_of_the_Congo.png",
    "./assets/Romania.png",
    "./assets/Russian_Federation.png",
    "./assets/Rwanda.png",
    "./assets/Saint_Kitts_and_Nevis.png",
    "./assets/Saint_Lucia.png",
    "./assets/Saint_Pierre.png",
    "./assets/Saint_Vicent_and_the_Grenadines.png",
    "./assets/Samoa.png",
    "./assets/San_Marino.png",
    "./assets/Sao_Tomé_and_Príncipe.png",
    "./assets/Saudi_Arabia.png",
    "./assets/Senegal.png",
    "./assets/Serbia_and_Montenegro.png",
    "./assets/Seychelles.png",
    "./assets/Sierra_Leone.png",
    "./assets/Singapore.png",
    "./assets/Slovakia.png",
    "./assets/Slovenia.png",
    "./assets/Soloman_Islands.png",
    "./assets/Somalia.png",
    "./assets/South_Africa.png",
    "./assets/South_Georgia.png",
    "./assets/South_Korea.png",
    "./assets/Soviet_Union.png",
    "./assets/Spain.png",
    "./assets/Sri_Lanka.png",
    "./assets/Sudan.png",
    "./assets/Suriname.png",
    "./assets/Swaziland.png",
    "./assets/Sweden.png",
    "./assets/Switzerland.png",
    "./assets/Syria.png",
    "./assets/Taiwan.png",
    "./assets/Tajikistan.png",
    "./assets/Tanzania.png",
    "./assets/Thailand.png",
    "./assets/Tibet.png",
    "./assets/Timor-Leste.png",
    "./assets/Togo.png",
    "./assets/Tonga.png",
    "./assets/Trinidad_and_Tobago.png",
    "./assets/Tunisia.png",
    "./assets/Turkey.png",
    "./assets/Turkmenistan.png",
    "./assets/Turks_and_Caicos_Islands.png",
    "./assets/Tuvalu.png",
    "./assets/UAE.png",
    "./assets/Uganda.png",
    "./assets/United_Kingdom.png",
    "./assets/Ukraine.png",
    "./assets/Uruguay.png",
    "./assets/United_States_of_America.png",
    "./assets/US_Virgin_Islands.png",
    "./assets/Uzbekistan.png",
    "./assets/Vanuatu.png",
    "./assets/Vatican_City.png",
    "./assets/Venezuela.png",
    "./assets/Vietnam.png",
    "./assets/Wallis_and_Futuna.png",
    "./assets/Yemen.png",
    "./assets/Zambia.png",
    "./assets/Zimbabwe.png"
]

var random = Math.floor((Math.random() * 222) + 1)
var country = data[random]
country = country.toUpperCase()
// console.log(random)

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}
show_image(image[random],470,280, data[random]);

// console.log("everything loaded")

function hello(){
    var guess = document.getElementById("guess").value
    guess.toString()
    guess = guess.toUpperCase()
    // console.log(guess)
    if(JSON.stringify(guess)===JSON.stringify(country)){
        // console.log("correct")
        document.getElementById('guess').style.display = "none"
        document.getElementById('check').style.display = "none"
        document.getElementById('result').style.color = 'green'
        document.getElementById('result').innerHTML = 'Your Guess Was Correct'

    }
    else{
        // console.log("wrong")
        document.getElementById('answer').innerHTML = "The Correct Answer Was: "+data[random]
        document.getElementById('guess').style.display = "none"
        document.getElementById('check').style.display = "none"
        document.getElementById('result').style.color = 'red'
        document.getElementById('result').innerHTML = 'Your Guess Was Incorrect'
        document.getElementById('play').style.display = 'block'
    }

}

function play(){
    window.location.reload(true)
}