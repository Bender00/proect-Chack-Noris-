function loadJoke(e) {

    e.preventDefault()

    $('#root').html('Loading...');
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();

    fetch('http://api.icndb.com/jokes/random?firstName='+firstName+'&lastName='+lastName)
    .then(function(response) {

        return response.json();

    })
    .then(function(response) {
        console.log(response);

        var initial = response.value.joke;
            i = 0;

        var timer = setInterval(function() {
            $('#root').html(initial.slice(0, i));

            if (i === initial.length) {
                clearInterval(timer)

            }
            else {
                i++

            }
        }, 50)
        
    });
}

    $('#СhuckNorris').on('click', loadJoke);

