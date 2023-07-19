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
    let positionCard;
    
    carte.on('dragstart', (e) => {
        selectedCard = $(e.target);
        positionCard = selectedCard.position();   
    })

    carte.on('dragstop', (e) => {

        e.preventDefault();
        e.stopPropagation();

        console.log('coucou')

        let dropX = e.pageX;
        let dropY = e.pageY;

        carte.each(() => {
            
            let choosenCard = $(e.target);
            let pos = choosenCard.position();

            console.log(choosenCard);


            if(
                dropX <= pos.left
            ){
                console.log("Coucou")
            }

        })
            


        //savoir si je chevauche une autre carte
        // si c'est le cas, la carte chevauchée prends la position initale
    })

    

    


})







