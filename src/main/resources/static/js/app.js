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
        var tabla = $("cines");
        var body = $("tbody");
        if (body != null) {
            body.remove();
        }
        tabla.append("<tbody>");
        var tblBody = $("tbody");
        functions.map(function(f){
            var fila = '<tr><td>' + f.nombre + '</td><td>' + f.genero + '</td><td>' + f.hora + '</td><td>';
            tblBody.append(fila);
        })
        tabla.append(tblBody);
        tabla.append("</tbody>");

    }

    function getFunctions(){
        cinemaName = $("#name").val();
        cinemaDate = $("#date").val();
        apimock.getFunctionsByCinemaAndDate(cinemaName,cinemaDate,_mapOneByOne)
    }

    return {
        getFunctions: getFunctions
    };

})();
        