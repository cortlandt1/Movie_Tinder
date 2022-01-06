
function submitButton() {
    event.preventDefault();
    let inputValue = $('#searchQuery').val()
    console.log(inputValue)
    
    var searchURL = "https://imdb-api.com/API/AdvancedSearch/k_g3c4oo25/?genres=" + inputValue 

    $.ajax({
        url: searchURL ,
        method: 'Get',
        dataType: 'json',
    })

        .then(function (response) {
            console.log(response)

            //   let results = response;
            //   console.log(results.results[1].title)

            //   var title = results.results[3].title;
            //   var p = $("<p>").text("Title: " + title);

            //   $('.test').append(p)
        })
}

