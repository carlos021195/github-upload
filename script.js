window.onscroll = function(){clearMenu()};
function menu(){
    $('#menu').toggleClass("hide-menu");
}
function clearMenu(){
    $('#menu').addClass("hide-menu");
}