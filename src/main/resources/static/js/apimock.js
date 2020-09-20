
apimock = (function () {

    var seats = [[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]];
    var mockdata = [];
    var function1Y = {"movie": {"name": "SuperHeroes Movie", "genre": "Action"}, "seats": seats, "date": "2018-12-19 17:00"};
    var function2Y = {"movie": {"name": "The Night", "genre": "Horror"}, "seats": seats, "date": "2018-12-19 19:40"};
    var function3Y = {"movie": {"name": "SuperHeroes Movie", "genre": "Action"}, "seats": seats, "date": "2018-12-19 14:30"};
    var function4Y = {"movie": {"name": "The Enigma", "genre": "Drama"}, "seats": seats, "date": "2018-12-20 17:00"};
    var function5Y = {"movie": {"name": "Coraline", "genre": "Horror"}, "seats": seats, "date": "2018-12-20 17:00"};
    var function6Y = {"movie": {"name": "Shrek", "genre": "Comedy"}, "seats": seats, "date": "2018-12-20 17:00"};
    var function7Y = {"movie": {"name": "Shrek 2", "genre": "Comedy"}, "seats": seats, "date": "2018-12-20 17:00"};
    var function8Y = {"movie": {"name": "Inception", "genre": "Drama"}, "seats": seats, "date": "2018-12-20 17:00"};
    
    mockdata["cinemaX"] = {"name": "cinemaX", "functions": [{"movie": {"name": "The Enigma", "genre": "Drama"}, "seats": seats, "date": "2018-12-18 15:30"}, {"movie": {"name": "The Enigma 2", "genre": "Drama"}, "seats": seats, "date": "2018-12-18 15:30"}]};
    mockdata["cinemaY"] = {"name": "cinemaY", "functions": [function1Y, function2Y, function3Y, function4Y]};
    mockdata["cinemaZ"] = {"name": "cinemaZ", "functions": [function5Y, function6Y]};
    mockdata["cinemaW"] = {"name": "cinemaW", "functions": [function7Y, function8Y]};
    
    return {
        getFunctionsByCinema: function (cinema_name, callback) {
            callback(mockdata[cinema_name]);
        },
        getFunctionsByCinemaAndDate: function (cinema_name, fdate, callback) {
            callback(
                    mockdata[cinema_name].functions.filter(
                    funct => funct.date.includes(fdate))
            );
        }

    }

})();







/*
 Example of use:
 var fun=function(list){
 console.log(list);
 }
 apimock.getFunctionsByCinema("cinemaX",fun);
 apimock.getFunctionsByCinemaAndDate("cinemaX","2018-12-18",fun);*/
