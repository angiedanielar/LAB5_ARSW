var app = (function () {

    var _cinema;
    var _date;

    function _setCinemaName(cinema) {
        _cinema = $("cinema");
    };

    function _setDate(date) {
        _date = $("date");
    };


    function _map(functions) {
        return mapList = functions.map(function(cinemaFunction){
            return {
                nombre:cinemaFunction.movie.name,
                genero:cinemaFunction.movie.genre,
                hora:cinemaFunction.date.split(" ")[1]
            }
        })

    }

    function _mapOneByOne(cinemaFunctions){
        functions = _map(cinemaFunctions);
        $("#cines > tbody").empty();
        functions.map(function(f){
            var fila = '<tr><td>' + f.nombre + '</td><td>' + f.genero + '</td><td>' + f.hora + '</td><td>';
            $("#cines > tbody").append(fila)
        })


    }

    function getFunctions(){
        _cinema = $("#cinema").val();
        _date = $("#date").val();
        $("#cinemaSelected").text("Cinema Selected: "+_cinema);
        apimock.getFunctionsByCinemaAndDate(_cinema,_date,_mapOneByOne)
    }

    return {
        getFunctions: getFunctions
    };

})();
        