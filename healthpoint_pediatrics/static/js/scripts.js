$(document).ready(function() {
   // check what is active and download active background via ajax
        // get visible section, active menu, and bg class
        var currentVisibleSection = $("#content section").not(".hidden");
        var currentActiveMenu = $("#navbar ul li").filter(".active");
        var $content = $("#content");
        var currentBgClass = $content.attr('class');

        // ajax call to download background picture
        // save it in a cash
        // display it
   
   // set up event handlers for menu buttons clicks
        // menu link onclick event handler
        $("#navbar ul li").on("click", function(e){
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
});