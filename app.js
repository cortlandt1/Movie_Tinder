
var filmTitleArray = []
var filmImgArray = []

function submitButton() {
    event.preventDefault();
    let inputValue = $('#searchQuery').val()
    console.log(inputValue)

    var searchURL = "https://imdb-api.com/API/AdvancedSearch/k_pbtyp0i1/?genres=" + inputValue

    $.ajax({
        url: searchURL,
        method: 'Get',
        dataType: 'json',
    })

        .then(function (response) {
            console.log(response)
            let results = response;
            let data = results.results
            console.log(results)

            for (let i = 0; i < data.length; i++) {
                let title = data[i].title
                let image = data[i].image
                filmTitleArray.push(title)
                filmImgArray.push(image)
                // console.log(title)
                // $('.title-container').append("<p>" + title + "</p>");
                // $('.title-container').append("<img class='img' src=" + image + "></img>");
            }
        })

}

console.log(filmTitleArray)
console.log(filmImgArray)

