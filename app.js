/*let mercure = $("#mercure").draggable();
let venus = $("#venus").draggable();
let terre = $("#terre").draggable();
let mars = $("#mars").draggable();
let jupiter = $("#jupiter").draggable();
let saturne = $("#saturne").draggable();
let neptune = $("#neptune").draggable();
let uranus = $("#uranus").draggable();
let pluton = $("#pluton").draggable();*/

$(document).ready(() => {
    let carte = $(".card").draggable();
  
    let selectedCard;
    let originalTop;
    let originalLeft;
  
    carte.on('dragstart', (e) => {
      selectedCard = $(e.target);
      let boundingRect = selectedCard.get(0).getBoundingClientRect();
      originalTop = boundingRect.top;
      originalLeft = boundingRect.left;
    });
  
    carte.on('dragstop', (e) => {
      e.preventDefault();
      e.stopPropagation();
  
      let dropX = e.pageX;
      let dropY = e.pageY;
  
      let dropCard = null;
  
      carte.not(selectedCard).each((index, element) => {
        let choosenCard = $(element);
        let boundingRect = choosenCard.get(0).getBoundingClientRect();
  
        if (
          dropX <= boundingRect.left + boundingRect.width &&
          dropX >= boundingRect.left &&
          dropY <= boundingRect.top + boundingRect.height &&
          dropY >= boundingRect.top
        ) {
          dropCard = choosenCard;
          return false;
        }
      });
  
      if (dropCard) {
        // Échanger les positions des cartes
        let tempTop = dropCard.css('top');
        let tempLeft = dropCard.css('left');
  
        dropCard.css({
          top: originalTop + "px",
          left: originalLeft + "px",
        });
  
        selectedCard.css({
          top: tempTop,
          left: tempLeft,
        });
      } else {
        // Remettre la carte à sa position d'origine si elle n'est pas lâchée sur une autre carte
        selectedCard.css({
          top: originalTop + "px",
          left: originalLeft + "px",
        });
      }
    });
  });