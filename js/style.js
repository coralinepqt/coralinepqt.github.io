(function(){
    "use strict"; /* oblige à déclarer toute variable utilisée */

    $(document).ready(initialiser);
    function initialiser(evt){
    //    $('.bande').addClass('play');
        let menu = $(".navProjet a");
        menu.click(select);
        
        let menu1 = $(".infographie");
        menu1.trigger("click");
 

    function select(evt){        
        let menuPreced= $(".navProjet a");
        menuPreced.removeClass("select");
        let menuSelect = $(this)
        menuSelect.toggleClass("select");
    }
    }

    }());