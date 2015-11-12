$(document).ready(function() {
   // check what is active and download active background via ajax
        // get visible section, active menu, and bg class
        var currentVisibleSection = $("#content section").not(".hidden");
        var currentActiveMenu = $("#navbar ul li").filter(".active");
        var currentBgClass = $("#bg").attr('class');

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
            
            // change visible section
            $(currentVisibleSection).addClass("hidden");
            $(newVisibleSection).removeClass("hidden");
            currentVisibleSection = newVisibleSection;
            
            // change site title
            var newTitle = newSectionId.charAt(0).toUpperCase() + newSectionId.slice(1);
            $("title").text(newTitle);
            
            // change background
            // var newBgClass = "bg-" + newSectionId;
            // $("#bg").removeClass(currentBgClass);
            // $('#bg').addClass("bg-" + newSectionId);
            // currentBgClass = newBgClass;
            
            var newBgClass = "bg-" + newSectionId;
            $("#bg").animate({opacity: 0}, 'slow', function() {
                $("#bg").removeClass(currentBgClass);
                $('#bg').addClass("bg-" + newSectionId).animate({opacity: 1});
                currentBgClass = newBgClass;
            });
            // $('#bg').animate({opacity: 0}, 'slow', function() {
            //     $(this).css({'background-image': 'url(1.jpg)'}).animate({opacity: 1});
                //});
        });
        // change visible section
        // show section, hide others
        // if background picture for the section -> display it
        // else ajax call for the background picture
            // save it in cash
            // display it
   
   // set up animation functions to change page sections
   
   // ajax requests for other backgrounds
});