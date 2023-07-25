$(function() {
    $("#cards").sortable({
        update: function(event, ui) {
                getIdsOfImages();
            }    
    });
});

function getIdsOfImages() {
    var values = [];
    $('.card').each(function(index) {
        values.push($(this).attr("id")
                    .replace("nb", ""));
    });
}