const form = document.querySelector('form');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    try {
        let pokemon1 = document.getElementById("myInput").value; 
        let pokemon2 = "https://pokeapi.co/api/v2/pokemon/" + pokemon1;
        
        const response = await fetch(pokemon2);
        
        if(!response.ok){
            throw new Error("Could not fetch pokemon");
        }

        const data = await response.json();
        console.log(data.sprites.front_default);
        document.getElementById("pokemon").src = data.sprites.front_default;
        
    } catch(error) {
        console.error(error);
        document.getElementById("pokemon").src = "";
    }
});