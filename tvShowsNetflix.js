// Gestione caricamento pagine
const PATH_PAGINA_TVSHOWS = "tvShowsNetflix.html";

function caricaPaginaTVShows() {
  console.log("Funzione caricaPaginaTVShows eseguita!");
  caricaPagina(PATH_PAGINA_TVSHOWS);
}

function caricaPagina(pagina) {
  // console.log("caricaPagina ", pagina)
  window.location.replace(pagina);
}


// Scroll bottoni
function scrollCarousel(button, direction) {

  let carouselWrapper = button.closest(".carousel-wrapper"); // ".closest" cerca il contenitore più vicino con classe .carousel-wrapper partendo dal bottone
  if (!carouselWrapper) return; // Il punto esclamativo prima di un valore od una parola significa "non"

  let track = carouselWrapper.querySelector(".carousel-track");   // Seleziono il contenitore scorrevole
  if (!track) return;

  let card = track.querySelector(".card-copertina");              // Quanto scrollare: la larghezza di una card, gap compreso
  if (!card) return;

  let cardStyle = getComputedStyle(card);
  let cardWidth = card.offsetWidth + parseInt(cardStyle.marginRight || 0);

  // Scroll orizzontale del container, direzione moltiplicata per larghezza card
  track.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth",
  });
}
