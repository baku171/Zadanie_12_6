var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';

    $.ajax({
        method: 'GET',
        url: url + countryName,
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();

    resp.forEach(function(item){
        $('<li>').text(item.name).appendTo(countriesList);
        console.log(item.name);
    });
}