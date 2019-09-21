(function(){
    "use strict"; /* oblige à déclarer toute variable utilisée */

    $(document).ready(initialiser);
    function initialiser(evt){
    //    $('.bande').addClass('play');
        let menu = $(".navProjet a");
        menu.click(select); 

        function select(evt){        
            let menuPreced= $(".navProjet a");
            menuPreced.removeClass("select");
            let menuSelect = $(this)
            menuSelect.toggleClass("select");
        }
        
        let annexeProjet=$(".annexe");
        annexeProjet.mouseenter(allerProjet);
        annexeProjet.mouseleave(partirProjet);
        
        function allerProjet(evt){
            $(this).css("background-size", "100% 100%");
            $(this).css("transition-duration", "1s");
            $(this).css("border", "solid black 1.5px");
            $(this).css("font-size", "2rem");
        }
        function partirProjet(evt){
            $(this).css("background-size", "50% 50%");
            $(this).css("transition-duration", "1s");
            $(this).css("border", "none");
            $(this).css("font-size", "1.5rem"); 
        }
        
        
        
        let cv=$(".texte .annexe")
        cv.mouseenter(allerCv);
        cv.mouseleave(partirCv);
        
        function allerCv(evt){
            $(this).css("font-size", "2.5rem");
        }
        function partirCv(evt){
            $(this).css("font-size", "2rem");
        }
        
        
        
        
        $(this).css("font-size", "2.5rem");
        
        
        $(this).css("font-size", "2rem");
        
        
        
    }

    }());