var app = (function () {

    var _cinema;
    var _date;
    var _functions;

    function _setCinemaName(cinema) {
        _cinema = cinema;
    }
    ;

    function _setDate(date) {
        _date = date;
    }
    ;

    function setCinemaName(cinema) {
        _setCinemaName(cinema);
    }
    ;

    function setDate(date) {
        _setDate(date);
    }
    ;

    function _updateFunctionsData(functions) {
        _functions = [];
        functions.map(function (f) {
            _functions.push({movieName: f.movie.name, genre: f.movie.genre, hour: f.date.substring(11, 16)});
        });
        _updateTableData();
    }

    function _updateTableData() {
        $("#functionsTable > tbody").empty()
        _functions.map(function (movie) {
            var onClick = "app.openSeats(\"" + movie.hour + "\")";
            var btn = "<button class='btn btn-outline-primary' value='Open Seats' onclick=" + onClick + ">Open seats</input>";
            var fila = '<tr><td>' + movie.movieName + '</td><td>' + movie.genre + '</td><td>' + movie.hour + '</td><td>' + btn + '</tr>';
            $("#functionsTable > tbody").append(fila)
        })
        _showMovies();
    }

    function _showMovies() {
        $("#cinemaSelected").text("Cinema Selected: " + _cinema);
        $("#movies").text("Movies:");
        document.getElementById('functions').style.visibility = "visible";
    }

}
)
        