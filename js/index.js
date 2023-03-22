"use strict";

const app = {
    items: [],
    init() {
    },
    getData() {
        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10')
        .then( function (response){
return response.json();
        })
        then(function (json){
json.jokes.forEach(function (jokeData){
    const joke = new Joke(jokedata.category, jokeData.setup, jokeData.delivery);
    app.items.push(joke);

    
});
        })
    },
    onSearch() {
    },
    render(message) {
    }

}
app.init()