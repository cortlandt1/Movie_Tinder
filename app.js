
var filmTitleArray = []
var filmImgArray = []
var likedFilmsImg = []
var likedFilmsTitle = []
var endOfSwipes = false
var filmNum = 0

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

    setTimeout(display, 3000)

    function initialDisplay() {
        $('.title').append("<p>" + filmTitleArray[0] + "</p>");
        $('.film-container').append("<img class='film-container' src=" + filmImgArray[0] + "></img>");

    }

    function display() {
        if (filmImgArray.length == 0) {
            console.log('Array is empty')
        } else {
            initialDisplay()
        }
    }
}

// FUNCTIONS TO DIFFERENTIATE ACTIONS FOR LIKED VS DISLIKED FILMS

function likeButton() {
    filmNum++
    $('.title').replaceWith("<p>" + filmTitleArray[filmNum] + "</p>");
    $('.film-container').replaceWith("<img class='film-container' src=" + filmImgArray[filmNum] + "></img>");
    likedFilmsImg.push(filmImgArray[filmNum])
    likedFilmsTitle.push(filmTitleArray[filmNum])
    if ( filmNum >= 19 ) {
        endOfSwipes = true
        displayLikedFilms()
        console.log('maximum reached')
        console.log(endOfSwipes)
    }
    console.log(filmNum)
    console.log(likedFilmsImg)
    console.log(likedFilmsTitle)

}

function dislikeButton() {
    filmNum++
    $('.title').replaceWith("<p>" + filmTitleArray[filmNum] + "</p>");
    $('.film-container').replaceWith("<img class='film-container' src=" + filmImgArray[filmNum] + "></img>");
    if ( filmNum >= 19 ) {
        endOfSwipes = true
        displayLikedFilms()
        console.log('maximum reached')
    }
    console.log(filmNum)

}

//HANDLE DISPLAY OF MUTUALLY LIKED FILMS

function displayLikedFilms () {
    if (endOfSwipes == true) {
        for (let i = 0; i < likedFilmsTitle.length; i++) {
            $('.results').append("<ul><li>" + likedFilmsTitle[i] + "</li></ul>")
            
        }
        $('.film-container').replaceWith("<h1>Here's what you agreed on:</h1>");
    }
}




