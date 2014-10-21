/*
 * Controller file to provide data for Flight search app.
 */

function flightController($scope, $http) {
    
    // Parameter on the basis on which, data is sorted.
    $scope.sortingFactor = 'price';
    
    /*
    * Dictionary object containing key value pairs of
    * Airlines code and Airline names.
    */
    $scope.airlineMap = {
    "SJ" : "Spicejet",
    "AI" : "Air India",
    "G8" : "Go Air",
    "JA" : "Jet Airways",
    "IN" : "Indigo"
    };

    /*
    * Dictionary object containing key value pairs of
    * Airport code and Airport names.
    */
    $scope.airportMap = {
        "DEL" : "New Delhi",
        "MUM" : "Mumbai"
    };
    
    /*
    * Dictionary object containing flight data.
    * Note: I used this data as provided. However, in real time scenario,
    * we can use $http service of AngularJS to get data from server.
    */
    $scope.flightsData = [
        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396614600000",
            landingTime : "1396625400000",
            price : "11500",
            airlineCode : "G8",
            class : "Business"
        },

        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396616400000",
            landingTime : "1396623600000",
            price : "14400",
            airlineCode : "AI",
            class : "Business"
        },

        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396618200000",
            landingTime : "1396629000000",
            price : "12300",
            airlineCode : "JA",
            class : "Business"
        },

        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396620000000",
            landingTime : "1396627200000",
            price : "15200",
            airlineCode : "SJ",
            class : "Business"
        },

        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396621800000",
            landingTime : "1396632600000",
            price : "16700",
            airlineCode : "IN",
            class : "Business"
        },

        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396596600000",
            landingTime : "1396607400000",
            price : "5500",
            airlineCode : "G8",
            class : "Economy"
        },

        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396598400000",
            landingTime : "1396605600000",
            price : "4400",
            airlineCode : "AI",
            class : "Economy"
        },

        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396600200000",
            landingTime : "1396611000000",
            price : "4600",
            airlineCode : "JA",
            class : "Economy"
        },

        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396602000000",
            landingTime : "1396609200000",
            price : "7800",
            airlineCode : "SJ",
            class : "Economy"
        },

        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396603800000",
            landingTime : "1396614600000",
            price : "8700",
            airlineCode : "IN",
            class : "Economy"
        },

        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396605600000",
            landingTime : "1396612800000",
            price : "5000",
            airlineCode : "G8",
            class : "Economy"
        },

        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396607400000",
            landingTime : "1396618200000",
            price : "9800",
            airlineCode : "AI",
            class : "Economy"
        },

        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396609200000",
            landingTime : "1396616400000",
            price : "4100",
            airlineCode : "JA",
            class : "Economy"
        },

        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396611000000",
            landingTime : "1396621800000",
            price : "4600",
            airlineCode : "SJ",
            class : "Economy"
        },

        {
            originCode : "DEL",
            destinationCode : "MUM",
            takeoffTime : "1396612800000",
            landingTime : "1396620000000",
            price : "5700",
            airlineCode : "IN",
            class : "Economy"
        }
    ];
    
    
    /*
     * Function to get Airport name for corresponding
     * airport code.
     */
    $scope.getAirport = function(airportCode) {
    return $scope.airportMap[airportCode];
    };

    /*
     * Function to get Airline name for corresponding
     * airline code.
     */
    $scope.getAirline = function(airlineCode) {
    return $scope.airlineMap[airlineCode];
    };

    /*
     *Function to date from string format to Date object.
     */
    $scope.getDateObject = function(dateString) {
    var d = new Date(parseInt(dateString));
    return d.toDateString();
    };
}

