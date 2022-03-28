$(document).ready(function () {

    // FETCHING DATA FROM JSON FILE
    $.getJSON("gfgdetails.json",
        function (data) {
            var farmerMsp = '';

            // ITERATING THROUGH OBJECTS
            $.each(data, function (key, value) {

                //CONSTRUCTION OF ROWS HAVING
                // DATA FROM JSON OBJECT
                farmerMsp += '<tr>';
                farmerMsp += '<td>' +
                    value.Crop + '</td>';

                farmerMsp += '<td>' +
                    value.MSPforRMS22 + '</td>';

                farmerMsp += '<td>' +
                    value.MSPforRMS23 + '</td>';

                farmerMsp += '<td>' +
                    value.CostOfProduction + '</td>';

                farmerMsp += '<td>' +
                    value.AbsoluteIncrease + '</td>';

                farmerMsp += '<td>' +
                    value.Return + '</td>';

                farmerMsp += '</tr>';
            });

            //INSERTING ROWS INTO TABLE
            $('#table').append(farmerMsp);
        });
});