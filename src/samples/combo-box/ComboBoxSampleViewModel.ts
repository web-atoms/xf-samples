import { AtomViewModel, Watch } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class ComboBoxSampleViewModel extends AtomViewModel {

    public search: string = "";

    @Watch
    public get countries() {
        let s = this.search;
        if (!s) {
            return this.countryList;
        }
        s = s.toLowerCase();
        return this.countryList.filter((x) => x.label.toLowerCase().indexOf(s) !== -1);
    }

    public countryList = [
            {
              label: "Select Country",
              value: "SELECT"
            },
            {
              label: "Afghanistan",
              value: "AF"
            },
            {
              label: "Albania",
              value: "AL"
            },
            {
              label: "Algeria",
              value: "AG"
            },
            {
              label: "Andorra",
              value: "AN"
            },
            {
              label: "Angola",
              value: "AO"
            },
            {
              label: "Anguilla",
              value: "AV"
            },
            {
              label: "Antarctica",
              value: "AY"
            },
            {
              label: "Antigua and Barbuda",
              value: "AC"
            },
            {
              label: "Argentina",
              value: "AR"
            },
            {
              label: "Armenia",
              value: "AM"
            },
            {
              label: "Aruba",
              value: "AA"
            },
            {
              label: "Ashmore and Cartier Islands",
              value: "AT"
            },
            {
              label: "Australia",
              value: "AS"
            },
            {
              label: "Austria",
              value: "AU"
            },
            {
              label: "Azerbaijan",
              value: "AJ"
            },
            {
              label: "Bahrain",
              value: "BA"
            },
            {
              label: "Bangladesh",
              value: "BG"
            },
            {
              label: "Barbados",
              value: "BB"
            },
            {
              label: "Bassas da India",
              value: "BS"
            },
            {
              label: "Belarus",
              value: "BO"
            },
            {
              label: "Belgium",
              value: "BE"
            },
            {
              label: "Belize",
              value: "BH"
            },
            {
              label: "Benin",
              value: "BN"
            },
            {
              label: "Bermuda",
              value: "BD"
            },
            {
              label: "Bhutan",
              value: "BT"
            },
            {
              label: "Bodies of water",
              value: "OS"
            },
            {
              label: "Bolivia",
              value: "BL"
            },
            {
              label: "Bosnia and Herzegovina",
              value: "BK"
            },
            {
              label: "Botswana",
              value: "BC"
            },
            {
              label: "Bouvet Island",
              value: "BV"
            },
            {
              label: "Brazil",
              value: "BR"
            },
            {
              label: "British Indian Ocean Territory",
              value: "IO"
            },
            {
              label: "British Virgin Islands",
              value: "VI"
            },
            {
              label: "Brunei",
              value: "BX"
            },
            {
              label: "Bulgaria",
              value: "BU"
            },
            {
              label: "Burkina Faso",
              value: "UV"
            },
            {
              label: "Burundi",
              value: "BY"
            },
            {
              label: "Cambodia",
              value: "CB"
            },
            {
              label: "Cameroon",
              value: "CM"
            },
            {
              label: "Canada",
              value: "CA"
            },
            {
              label: "Cape Verde",
              value: "CV"
            },
            {
              label: "Cayman Islands",
              value: "CJ"
            },
            {
              label: "Central African Republic",
              value: "CT"
            },
            {
              label: "Chad",
              value: "CD"
            },
            {
              label: "Chile",
              value: "CI"
            },
            {
              label: "China",
              value: "CH"
            },
            {
              label: "Christmas Island",
              value: "KT"
            },
            {
              label: "Clipperton Island",
              value: "IP"
            },
            {
              label: "Cocos (Keeling) Islands",
              value: "CK"
            },
            {
              label: "Colombia",
              value: "CO"
            },
            {
              label: "Comoros",
              value: "CN"
            },
            {
              label: "Congo (Brazzaville)",
              value: "CF"
            },
            {
              label: "Congo (Kinshasa)",
              value: "CG"
            },
            {
              label: "Cook Islands",
              value: "CW"
            },
            {
              label: "Coral Sea Islands",
              value: "CR"
            },
            {
              label: "Costa Rica",
              value: "CS"
            },
            {
              label: "Cote D'Ivoire",
              value: "IV"
            },
            {
              label: "Croatia",
              value: "HR"
            },
            {
              label: "Cuba",
              value: "CU"
            },
            {
              label: "Cyprus",
              value: "CY"
            },
            {
              label: "Czech Republic",
              value: "EZ"
            },
            {
              label: "Denmark",
              value: "DA"
            },
            {
              label: "Djibouti",
              value: "DJ"
            },
            {
              label: "Dominica",
              value: "DO"
            },
            {
              label: "Dominican Republic",
              value: "DR"
            },
            {
              label: "East Timor",
              value: "TT"
            },
            {
              label: "Ecuador",
              value: "EC"
            },
            {
              label: "Egypt",
              value: "EG"
            },
            {
              label: "El Salvador",
              value: "ES"
            },
            {
              label: "Equatorial Guinea",
              value: "EK"
            },
            {
              label: "Eritrea",
              value: "ER"
            },
            {
              label: "Estonia",
              value: "EN"
            },
            {
              label: "Ethiopia",
              value: "ET"
            },
            {
              label: "Europa Island",
              value: "EU"
            },
            {
              label: "Falkland Islands (Islas Malvinas)",
              value: "FK"
            },
            {
              label: "Faroe Islands",
              value: "FO"
            },
            {
              label: "Fiji",
              value: "FJ"
            },
            {
              label: "Finland",
              value: "FI"
            },
            {
              label: "France",
              value: "FR"
            },
            {
              label: "French Guiana",
              value: "FG"
            },
            {
              label: "French Polynesia",
              value: "FP"
            },
            {
              label: "French Southern and Antarctic Lands",
              value: "FS"
            },
            {
              label: "Gabon",
              value: "GB"
            },
            {
              label: "Gaza Strip",
              value: "GZ"
            },
            {
              label: "Georgia",
              value: "GG"
            },
            {
              label: "Germany",
              value: "GM"
            },
            {
              label: "Ghana",
              value: "GH"
            },
            {
              label: "Gibraltar",
              value: "GI"
            },
            {
              label: "Glorioso Islands",
              value: "GO"
            },
            {
              label: "Greece",
              value: "GR"
            },
            {
              label: "Greenland",
              value: "GL"
            },
            {
              label: "Grenada",
              value: "GJ"
            },
            {
              label: "Guadeloupe",
              value: "GP"
            },
            {
              label: "Guatemala",
              value: "GT"
            },
            {
              label: "Guernsey",
              value: "GK"
            },
            {
              label: "Guinea",
              value: "GV"
            },
            {
              label: "Guinea-Bissau",
              value: "PU"
            },
            {
              label: "Guyana",
              value: "GY"
            },
            {
              label: "Haiti",
              value: "HA"
            },
            {
              label: "Heard Island and McDonald Islands",
              value: "HM"
            },
            {
              label: "Holy See (Vatican City)",
              value: "VT"
            },
            {
              label: "Honduras",
              value: "HO"
            },
            {
              label: "Hong Kong",
              value: "HK"
            },
            {
              label: "Hungary",
              value: "HU"
            },
            {
              label: "Iceland",
              value: "IC"
            },
            {
              label: "India",
              value: "IN"
            },
            {
              label: "Indonesia",
              value: "ID"
            },
            {
              label: "Iran",
              value: "IR"
            },
            {
              label: "Iraq",
              value: "IZ"
            },
            {
              label: "Ireland",
              value: "EI"
            },
            {
              label: "Isle of Man",
              value: "IM"
            },
            {
              label: "Israel",
              value: "IS"
            },
            {
              label: "Italy",
              value: "IT"
            },
            {
              label: "Jamaica",
              value: "JM"
            },
            {
              label: "Jan Mayen",
              value: "JN"
            },
            {
              label: "Japan",
              value: "JA"
            },
            {
              label: "Jersey",
              value: "JE"
            },
            {
              label: "Jordan",
              value: "JO"
            },
            {
              label: "Juan de Nova Island",
              value: "JU"
            },
            {
              label: "Kazakhstan",
              value: "KZ"
            },
            {
              label: "Kenya",
              value: "KE"
            },
            {
              label: "Kiribati",
              value: "KR"
            },
            {
              label: "Kuwait",
              value: "KU"
            },
            {
              label: "Kyrgyzstan",
              value: "KG"
            },
            {
              label: "Laos",
              value: "LA"
            },
            {
              label: "Latvia",
              value: "LG"
            },
            {
              label: "Lebanon",
              value: "LE"
            },
            {
              label: "Lesotho",
              value: "LT"
            },
            {
              label: "Liberia",
              value: "LI"
            },
            {
              label: "Libya",
              value: "LY"
            },
            {
              label: "Liechtenstein",
              value: "LS"
            },
            {
              label: "Lithuania",
              value: "LH"
            },
            {
              label: "Luxembourg",
              value: "LU"
            },
            {
              label: "Macau",
              value: "MC"
            },
            {
              label: "Macedonia",
              value: "MK"
            },
            {
              label: "Madagascar",
              value: "MA"
            },
            {
              label: "Malawi",
              value: "MI"
            },
            {
              label: "Malaysia",
              value: "MY"
            },
            {
              label: "Maldives",
              value: "MV"
            },
            {
              label: "Mali",
              value: "ML"
            },
            {
              label: "Malta",
              value: "MT"
            },
            {
              label: "Martinique",
              value: "MB"
            },
            {
              label: "Mauritania",
              value: "MR"
            },
            {
              label: "Mauritius",
              value: "MP"
            },
            {
              label: "Mayotte",
              value: "MF"
            },
            {
              label: "Mexico",
              value: "MX"
            },
            {
              label: "Moldova",
              value: "MD"
            },
            {
              label: "Monaco",
              value: "MN"
            },
            {
              label: "Mongolia",
              value: "MG"
            },
            {
              label: "Montserrat",
              value: "MH"
            },
            {
              label: "Morocco",
              value: "MO"
            },
            {
              label: "Mozambique",
              value: "MZ"
            },
            {
              label: "Myanmar (Burma)",
              value: "BM"
            },
            {
              label: "Namibia",
              value: "WA"
            },
            {
              label: "Nauru",
              value: "NR"
            },
            {
              label: "Nepal",
              value: "NP"
            },
            {
              label: "Netherlands",
              value: "NL"
            },
            {
              label: "Netherlands Antilles",
              value: "NT"
            },
            {
              label: "New Caledonia",
              value: "NC"
            },
            {
              label: "New Zealand",
              value: "NZ"
            },
            {
              label: "Nicaragua",
              value: "NU"
            },
            {
              label: "Niger",
              value: "NG"
            },
            {
              label: "Nigeria",
              value: "NI"
            },
            {
              label: "Niue",
              value: "NE"
            },
            {
              label: "Norfolk Island",
              value: "NF"
            },
            {
              label: "North Korea",
              value: "KN"
            },
            {
              label: "Norway",
              value: "NO"
            },
            {
              label: "Oman",
              value: "MU"
            },
            {
              label: "Pakistan",
              value: "PK"
            },
            {
              label: "Panama",
              value: "PM"
            },
            {
              label: "Papua New Guinea",
              value: "PP"
            },
            {
              label: "Paracel Islands",
              value: "PF"
            },
            {
              label: "Paraguay",
              value: "PA"
            },
            {
              label: "Peru",
              value: "PE"
            },
            {
              label: "Philippines",
              value: "RP"
            },
            {
              label: "Pitcairn Islands",
              value: "PC"
            },
            {
              label: "Poland",
              value: "PL"
            },
            {
              label: "Portugal",
              value: "PO"
            },
            {
              label: "Qatar",
              value: "QA"
            },
            {
              label: "Reunion",
              value: "RE"
            },
            {
              label: "Romania",
              value: "RO"
            },
            {
              label: "Russia",
              value: "RS"
            },
            {
              label: "Rwanda",
              value: "RW"
            },
            {
              label: "Saint Helena",
              value: "SH"
            },
            {
              label: "Saint Kitts and Nevis",
              value: "SC"
            },
            {
              label: "Saint Lucia",
              value: "ST"
            },
            {
              label: "Saint Pierre and Miquelon",
              value: "SB"
            },
            {
              label: "Saint Vincent and the Grenadines",
              value: "VC"
            },
            {
              label: "Samoa",
              value: "WS"
            },
            {
              label: "San Marino",
              value: "SM"
            },
            {
              label: "Sao Tome and Principe",
              value: "TP"
            },
            {
              label: "Saudi Arabia",
              value: "SA"
            },
            {
              label: "Senegal",
              value: "SG"
            },
            {
              label: "Serbia and Montenegro",
              value: "YI"
            },
            {
              label: "Seychelles",
              value: "SE"
            },
            {
              label: "Sierra Leone",
              value: "SL"
            },
            {
              label: "Singapore",
              value: "SN"
            },
            {
              label: "Slovakia",
              value: "LO"
            },
            {
              label: "Slovenia",
              value: "SI"
            },
            {
              label: "Solomon Islands",
              value: "BP"
            },
            {
              label: "Somalia",
              value: "SO"
            },
            {
              label: "South Africa",
              value: "SF"
            },
            {
              label: "South Georgia and the South Sandwich Islands",
              value: "SX"
            },
            {
              label: "South Korea",
              value: "KS"
            },
            {
              label: "Spain",
              value: "SP"
            },
            {
              label: "Spratly Islands",
              value: "PG"
            },
            {
              label: "Sri Lanka",
              value: "CE"
            },
            {
              label: "Sudan",
              value: "SU"
            },
            {
              label: "Suriname",
              value: "NS"
            },
            {
              label: "Svalbard",
              value: "SV"
            },
            {
              label: "Swaziland",
              value: "WZ"
            },
            {
              label: "Sweden",
              value: "SW"
            },
            {
              label: "Switzerland",
              value: "SZ"
            },
            {
              label: "Syria",
              value: "SY"
            },
            {
              label: "Taiwan",
              value: "TW"
            },
            {
              label: "Tajikistan",
              value: "TI"
            },
            {
              label: "Tanzania",
              value: "TZ"
            },
            {
              label: "Thailand",
              value: "TH"
            },
            {
              label: "The Bahamas",
              value: "BF"
            },
            {
              label: "The Gambia",
              value: "GA"
            },
            {
              label: "Togo",
              value: "TO"
            },
            {
              label: "Tokelau",
              value: "TL"
            },
            {
              label: "Tonga",
              value: "TN"
            },
            {
              label: "Trinidad and Tobago",
              value: "TD"
            },
            {
              label: "Tromelin Island",
              value: "TE"
            },
            {
              label: "Tunisia",
              value: "TS"
            },
            {
              label: "Turkey",
              value: "TU"
            },
            {
              label: "Turkmenistan",
              value: "TX"
            },
            {
              label: "Turks and Caicos Islands",
              value: "TK"
            },
            {
              label: "Tuvalu",
              value: "TV"
            },
            {
              label: "Uganda",
              value: "UG"
            },
            {
              label: "Ukraine",
              value: "UP"
            },
            {
              label: "Undersea features",
              value: "UF"
            },
            {
              label: "United Arab Emirates",
              value: "AE"
            },
            {
              label: "United Kingdom",
              value: "UK"
            },
            {
              label: "United States",
              value: "US"
            },
            {
              label: "Uruguay",
              value: "UY"
            },
            {
              label: "Uzbekistan",
              value: "UZ"
            },
            {
              label: "Vanuatu",
              value: "NH"
            },
            {
              label: "Venezuela",
              value: "VE"
            },
            {
              label: "Vietnam",
              value: "VM"
            },
            {
              label: "Wallis and Futuna",
              value: "WF"
            },
            {
              label: "West Bank",
              value: "WE"
            },
            {
              label: "Western Sahara",
              value: "WI"
            },
            {
              label: "Yemen",
              value: "YM"
            },
            {
              label: "Zambia",
              value: "ZA"
            },
            {
              label: "Zimbabwe",
              value: "ZI"
            }
          ]
          ;

    public country = "IN";

}
