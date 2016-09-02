$(document).ready(function(){
// нестандартный Select
        $('#selectcontrol').MultiColumnSelect({
            menuclass : 'mcs', 
            openmenuClass : 'mcs-open',
            openmenuText : 'Choose an Option...',
            containerClass : 'mcs-container',
            itemClass : 'mcs-item',
            duration : 200,
          
        });
        
        $('#selectcontrolm').MultiColumnSelect({
            multiple: true,
            menuclass : 'mcs', 
            openmenuClass : 'mcs-open',
            openmenuText : 'Choose an Option...',
            containerClass : 'mcs-container',
            itemClass : 'mcs-item',
	    	idprefix : 'yourOwnID-',
            hideclass : 'hidden',
            openclass : 'open',
            duration : 200,
            hideselect : false,
                     
        });
        
        // $('#selectcontrolm').MultiColumnSelectDestroy();
        $('#selectcontrolm').MultiColumnSelectAddItem('New','New Item');
// /нестандартный Select
// animated menu
	$( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
    $( '.sub-menu' ).mouseenter(
    	function () {
    		$(this).animate({
    			backgroundColor:"rgb(255,100,100)",
    		},1000);
    });
    $( '.sub-menu' ).mouseleave(
    	function () {
    		$(this).animate({
    			backgroundColor:"rgb(255,10,10)",
    		},1000);
    	}
    	);
});



