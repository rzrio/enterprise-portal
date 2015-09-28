/**
 * Created by Jawad on 21/09/2015.
 */

$("#login-button").click(function(event){
    event.preventDefault();

    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
});