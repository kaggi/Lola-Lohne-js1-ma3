
//Question 2

console.log("Question 2");

const displayGamesDiv = document.querySelector(".displayGames");

displayGamesDiv.innerHTML="";

function showResults(games) {
    for (let i = 0; i < games.length; i++) {
        let gameName = games[i].name;
        let gameRating = games[i].rating;
        let gameTags = games[i].tags.length;

        displayGamesDiv.innerHTML += `<div class="gameInfo"><p></p>Name: ${gameName}<p></p>Rating: ${gameRating}<p>Number of tags: ${gameTags}</p></div>`
        if(i===7){
            break
        }        

    }
}

const url = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ef04ada82d234eee94ed92702438552e';



async function getGames() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        const games = results.results;

        
        showResults(games);
        

    } catch (error) {
       console.log(error);
       displayGamesDiv.innerHTML = "An error occured";
    }
}

getGames();
