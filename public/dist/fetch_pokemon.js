export default function fetchPokemon() {
    const Apiurl = 'https://pokeapi.co/api/v2/pokemon/';
    const divPokemon = document.getElementById("pokebox"), $row = document.createElement("div");
    $row.setAttribute("class", "row");
    fetch(Apiurl).then(res => res.json()).then((res) => {
        res.results.forEach((pokemon) => {
            const $col4 = document.createElement("div");
            $col4.setAttribute("class", "col-lg-3");
            $col4.classList.add("text-center", "col-md-4", "col-sm-4");
            fetch(pokemon.url).then(res => res.json()).then((res) => {
                $col4.innerHTML =
                    `
            <img src="${res.sprites.front_default}" class="foto-pokemon border border-2"/>
            <p class="text-center">${pokemon.name}<p/>
          `;
            });
            $row.appendChild($col4);
        });
        divPokemon.appendChild($row);
    });
}
