import { PokeApi, PokemonFont, ResultApi } from "./interfaces/interfaces";

export default function fetchPokemon(): void {
  const Apiurl: string = 'https://pokeapi.co/api/v2/pokemon/';
  const divPokemon: HTMLDivElement = <HTMLDivElement>document.getElementById("pokebox"),
  $row:HTMLDivElement = <HTMLDivElement>document.createElement("div");
  $row.setAttribute("class","row");

  fetch(Apiurl).then(
    res => res.json()
  ).then(
    (res:PokeApi) => {
      res.results.forEach((pokemon:ResultApi) => {
        const $col4:HTMLDivElement = <HTMLDivElement>document.createElement("div")
        $col4.setAttribute("class","col-lg-3")
        $col4.classList.add("text-center", "col-md-4", "col-sm-4")

        fetch(pokemon.url).then(
          res => res.json()
        ).then((res:PokemonFont) => {
          $col4.innerHTML =
           `
            <img src="${res.sprites.front_default}" class="foto-pokemon border border-2"/>
            <p class="text-center">${pokemon.name}<p/>
          `
        })
        $row.appendChild($col4)
      });
      divPokemon.appendChild($row);

    }
  )
}
