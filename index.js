// Create constructor function
var express = require("express");

// Create service with required modules
var app = express();

// Allow CORS support
var cors = require('cors');
app.use(cors());
// Instantiate parser for JSON
var bodyParser = require("body-parser");

//Allow to parse the response body and get the JSON
app.use(bodyParser.json());

// Define listen port
var port = process.env.PORT || 10000;

// Run the service on the defined port
app.listen(port, () => {
    console.log("Server Up and listening on port " + port);
});


//Project home page
app.use("/", express.static("./public"));

// Information about the project foundsresearchsources-stats
app.get("/info/foundsresearchsources-stats", (request, response) => {
    response.send("<html><body><div><h3>Info:</h3><p>Esta fuente de datos devuelve la información relativa al porcentaje de aportación de fondos para la investigación y desarrollo por parte de los diferentes organismos de cada pais en el conjunto de los paises de la unión europea entre los años 2014 y 2018 </p></div><table><thead><tr><th>country<br></th><th>year</th><th>percentage of government funding</th><th>percentage of private financing</th><th>percentage of private financing</th></tr></thead><tbody><tr><td>Belgium</td><td>2015</td><td>22.5</td><td>58.6</td><td>0.4</td></tr><tr><td>Denmark</td><td>2015</td><td>30.2</td><td>59.1</td><td>4.4</td></tr><tr><td>Germany</td><td>2015</td><td>27.9</td><td>65.7</td><td>0.3</td></tr><tr><td>Ireland</td><td>2015</td><td>26.1</td><td>48.7</td><td>0.6</td></tr><tr><td>Greece</td><td>2015</td><td>53.1</td><td>31.4</td><td>0.4</td></tr></tbody></table></body></html>"
    )
});

// Information about the project greenhousegasemissions-stats
app.get("/info/greenhousegasemissions-stats", (request, response) => {
    response.send("<html><body><div><h3>Info:</h3><p>Esta fuente de datos muestra información acerca de las emisiones de gases que favorecen el efecto invernadero en Europa entre los años 2014 y 2018</p></div><table><thead><tr><th>country</th><th>year</th><th>carbon dioxide</th><th>methane</th><th>nitrous oxide</th></tr></thead><tbody><tr><td>spain</td><td>2014</td><td>268.71585</td><td>1.51641</td><td>0.06049</td></tr><tr><td>belgium</td><td>2015</td><td>105.3731</td><td>0.32512</td><td>0.02038</td></tr><tr><td>germany</td><td>2016</td><td>826.99377</td><td>2.22042</td><td>0.1278</td></tr><tr><td>italy</td><td>2017</td><td>362.64015</td><td>1.74639</td><td>0.06071</td></tr><tr><td>france</td><td>2018</td><td>349.36757</td><td>2.24392</td><td>0.13534</td></tr></tbody></table></body></html>"
    )
});

// Information about the project renewablepowercapacities-stats
app.get("/info/renewablepowercapacities-stats", (request, response) => {
    response.send("<html><body><div><h3>Info:</h3><p>Esta fuente de datos proporciona la información relativa a la cantidad en MegaVatios generados por energias renovables en diferentes paises de la unión europea entre los años 2014 y 2018. </p><table border='1'><thead><tr><th>country</th><th>year</th><th>solar production in megawatts</th><th>hydraulic production in megawatts</th><th>wind power production in megawatts</th></tr></thead><tbody><tr><td>Germany</td><td>2018</td><td>14586736</td><td>16799700</td><td>15060000</td></tr><tr><td>Belgium</td><td>2018</td><td>4.000,000</td><td>1.417,500</td><td>3.267,900</td></tr><tr><td>Bulgaria</td><td>2018</td><td>1.032,679</td><td>3.379,000</td><td>698,920</td></tr><tr><td>Czechia</td><td>2018</td><td>2.075,072</td><td>2.264,019</td><td>316,200</td></tr><tr><td>Denmark</td><td>2018</td><td>998000</td><td>7153</td><td>6.115,008</td></tr><tr><td>Estonia</td><td>2018</td><td>31,900</td><td>7,300</td><td>310,000</td></tr></tbody></table></div></body></html>"
    )
});



//                         INDIVIDUAL API ENDPOINTS                                  //
// ################################################################################# //
// Student: Jorge Marín Cordero 
// Resource: foundsresearchsources-stats
var foundsResearchSourcesAPI = require("./src/back/foundsResearchSourcesAPI");
// var foundsResearchSourcesAPIv1 = require("./src/back/foundsResearchSourcesAPI/v1");
// var foundsResearchSourcesAPIv2 = require("./src/back/foundsResearchSourcesAPI/v2");
foundsResearchSourcesAPI.init(app);
// foundsResearchSourcesAPIv1.init(app);
// foundsResearchSourcesAPIv2.init(app);

// ################################################################################# //
// Student: Álvaro Caro Jiménez  
// Resource: renewablepowercapacities-stats

var renewablepowercapacities = require("./src/back/renewablepowercapacitiesAPI");
renewablepowercapacities.init(app);

// ################################################################################# //
// Student: Jesús Guerra Adame  
// Resource: greenhousegasemissions-stats

var greenhouseGasEmissionsAPI = require("./src/back/greenhouseGasEmissionsAPI");
greenhouseGasEmissionsAPI.init(app);

// ################################################################################# //


// app.use(express.static('.'));
// Manage all the malformed url requests
app.all('*', function (req, res) {
    res.sendStatus(400);
});