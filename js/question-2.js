
//Question 2

console.log("Question 2");

const url = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ef04ada82d234eee94ed92702438552e';

async function getGames() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        const games = results.results;

        
        showResults(games);
        

    } catch (error) {
        console.log(error);
        //resultsContainer.innerHTML = alert("error", error);
    }
}

getGames();

function showResults(games) {
    for (let i = 0; i < 8; i++) {
        console.log("Game " + (i+1));
        console.log(games[i].name);
        console.log(games[i].rating);
        console.log(games[i].tags.length);          

    }
}