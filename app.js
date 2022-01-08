
var filmTitleArray = []
var filmImgArray = []

function submitButton() {
    event.preventDefault();
    let inputValue = $('#searchQuery').val()
    console.log(inputValue)

    var searchURL = "https://imdb-api.com/API/AdvancedSearch/k_pbtyp0i1/?count=20&genres=" + inputValue

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

            }
        })
    console.log(filmTitleArray)
    console.log(filmImgArray)

    // setTimeout( initialDisplay, 1000)
    
    function initialDisplay() {
            $('.title').append("<p>" + filmTitleArray[0] + "</p>");
            $('.film-container').append("<img class='film-container' src=" + filmImgArray[0] + "></img>");
         
    }
    
    if (filmImgArray.length  == 0) {
        console.log('Array is empty')
    } else {
        initialDisplay()
    }
}
    






var filmNum = 0
function testButton() {
    filmNum++
    $('.title').replaceWith("<p>" + filmTitleArray[filmNum] + "</p>");
    $('.film-container').replaceWith("<img class='film-container' src=" + filmImgArray[filmNum] + "></img>");
    console.log(filmNum)
}




