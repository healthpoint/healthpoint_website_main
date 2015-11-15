$(document).ready(function() {
    
/******************************************************************    
*       INITIAL SETUP
******************************************************************/

    // Set correct padding on initial loading
    setPadding();
    
    // get visible section, active menu, and .content objects
    var currentVisibleSection = $("#content section").not(".hidden");
    var currentActiveMenu = $("#main-nav.navbar ul li").filter(".active");
    var $content = $("#content");
    var currentBgClass = $content.attr('class');

   // set up event handlers for menu buttons clicks
    // menu link onclick event handler
    $(".navbar ul li").on("click", function(e){
        var newActiveMenu = e.delegateTarget;
        var newSectionId = $(e.target).attr("href").slice(1);
        var newVisibleSection = $("#" + newSectionId);

        // change active link
        $(newActiveMenu).addClass("active");
        $(currentActiveMenu).removeClass("active");
        currentActiveMenu = newActiveMenu;
        
        // change site title
        var newTitle = newSectionId.charAt(0).toUpperCase() + newSectionId.slice(1);
        $("title").text(newTitle);
        
        // hide current visible section
        $(currentVisibleSection).addClass("hidden");
        
        // change background with fading out/in animation
        var newBgClass = "bg-" + newSectionId;
        $content.animate({opacity: 0}, 'slow', function() {
            $("#content").removeClass(currentBgClass);
            currentBgClass = newBgClass;
            $("#content").addClass("bg-" + newSectionId).animate({opacity: 1}, 'slow', function() {
                // show new visible section
                $(newVisibleSection).removeClass("hidden");
                currentVisibleSection = newVisibleSection;
            });
        });
            
    });
    // collapses the menu on a xs screen after the link was clicked
    $(document).on('click', 'nav .navbar-collapse.in', function(e) {
        if ( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });
    
/***********************************************
 *      EVENT HANDLERS
 * ********************************************/
 
 // Adjust padding on resize
    $(window).resize(function() {
        setPadding();
    });
    
/***********************************************
 *      HELPER FUNCTIONS
 * ********************************************/
 
  /** Sets padding on the #content based on navbar height
     * On smaller screens navbar displays in two lines and doubles
     * in size. The function sets body padding-top equal to the 
     * navbar height
     **/
    function setPadding() {
        var padding = $('#main-nav.navbar div.container').css('height');
        $('#content').css('padding-top', padding );
    }
});