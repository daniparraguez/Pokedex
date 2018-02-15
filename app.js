$(document).ready(function(){
    var dibujarGifs = function(data){
        var gif ='';
        var url ='';
        data.forEach(function(element){
            gif = element.images.downsized_large.url;
            url = element.bitly_gif_url;
            $('#elementos').append(armarTemplate(gif, url));
        });
    }

    var armarTemplate = function(gif,url){
        var t = "<div class ='elemento'><img src = '" + gif + "'/><a href = '" + url +
        "'>Ver más</></div>"
        return t;
    };
    var ajaxGif = function(gif) {
        $.ajax({
            url: 'http://api.giphy.com/v1/gifs/search',
            type: 'GET',
            dataType: 'json',
            data: {
                q: gif,
                api_key: 'vDfxqR872XEvf6QQeBv8q9iJ5EGnapqa'
            }
        })
        .done(function(response) {
            console.log(response);
            dibujarGifs(response.data);
        })
        .fail(function() {
            console.log("error");
        });
    };
    $('#buscar-gif').click(function(event) {
        console.log('entro');
        $('#elementos').empty();
        var gif = $('#gif-text').val();
        ajaxGif(gif);
    });
});
