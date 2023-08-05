import fetchPokemon from "./fetch_pokemon";

fetchPokemon();
const navBar:HTMLElement | null = document.getElementById("navbarNav");

function NavBarResize() {
    if(navBar){
        const navBarWidth = window.innerWidth;
        if(navBarWidth >= 992){
            navBar.classList.add("d-flex" , "justify-content-end")
        } else {
            navBar.classList.remove("d-flex" , "justify-content-end")
        }
    }
}

window.addEventListener('resize', NavBarResize);

NavBarResize();
