$(document).ready(function() {
    
/******************************************************************    
*       INITIAL SETUP
******************************************************************/
    // get visible section, active menu, and .content objects
    var $currentVisibleSection = $("#content section").not(".hidden");
    var $currentActiveMenu = $("#main-nav.navbar ul li").filter(".active");
    var $content = $('#content');
    var currentBgClass = $content.attr('class');
    
    var schedule = [ {"start": 0, "end": 0 },
                     {"start" : 8, "end": 19},
                     {"start" : 8, "end": 19},
                     {"start" : 8, "end": 20},
                     {"start" : 8, "end": 19},
                     {"start" : 8, "end": 14},
                     {"start" : 10, "end": 13}
    ]
    
    // compose openInfo strings
    var currentInfoO = currentInfo();
    $("#current-date p").text(currentInfoO.currentDt);
    $("#avail p span:first-child").text(currentInfoO.availability.first); 
    $("#avail p span:nth-child(2)").text(currentInfoO.availability.second);
    $("#avail p span:last-child").text(currentInfoO.availability.third);
    
    // Set correct top padding on initial loading
    setTopPadding();
    // set top padding
    setBottomPadding();
    // show seHablaEspanol image
    showSeHablaAnim();

/***********************************************
 *      EVENT HANDLERS
 * ********************************************/
 
    // Adjust padding on resize
    $(window).resize(function() {
        // correct padding
        setTopPadding();
        setBottomPadding();
    });
    
    // collapses the menu on a xs screen after the link was clicked
    $(document).on('click', 'nav .navbar-collapse.in', function(e) {
        if ( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });
    
    // brand button click handler
    $("div.navbar-header a.navbar-brand").click(function(e) {
        var $newActiveMenu = $("#li-home");
        var newSectionId = $(e.target).attr("href").slice(1);
        var $newVisibleSection = $("#" + newSectionId);
        var newBgClass = "bg-" + newSectionId;
        
        // collapse menu on small screen if extended
        $('nav .navbar-collapse.in').collapse('hide');
        
        // change active link
        changeActiveLink($newActiveMenu);
        
        // change site title
        changeSectionTitle (newSectionId);
        
        // change background with fading /in animation
        chgBgAndSectionAnimation (newBgClass, newSectionId, $newVisibleSection);
        
    });
    
    // menu link onclick event handler
    $(".navbar ul li").on("click", function(e){
        var $newActiveMenu = $(e.delegateTarget);
        var newSectionId = $(e.target).attr("href").slice(1);
        var $newVisibleSection = $("#" + newSectionId);
        var newBgClass = "bg-" + newSectionId;

        // change active link
        changeActiveLink($newActiveMenu);
        
        // change site title
        changeSectionTitle (newSectionId);
        
        // change background with fading /in animation
        chgBgAndSectionAnimation (newBgClass, newSectionId, $newVisibleSection);
        
    });
    
/***********************************************
 *      HELPER FUNCTIONS
 * ********************************************/
 
    /** Sets padding on the #content based on navbar height
     * On smaller screens navbar displays in two lines and doubles
     * in size. The function sets body padding-top equal to the 
     * navbar height
     **/
    function setTopPadding() {
        var padding = $('#main-nav.navbar div.container').css('height');
        $content.css('padding-top', padding );
    }
    
    function setBottomPadding() {
        var padding = $('footer').css('height');
        $('#content section').css('padding-bottom', padding);
    }
    
    function changeActiveLink($newActiveMenu) {
        $newActiveMenu.addClass("active");
        $currentActiveMenu.removeClass("active");
        $currentActiveMenu = $newActiveMenu;
    }
    
    function changeSectionTitle (newSectionId) {
        var newTitle = newSectionId.charAt(0).toUpperCase() + newSectionId.slice(1);
        $("title").text(newTitle);
    }
    
    function chgBgAndSectionAnimation (newBgClass, newSectionId, $newVisibleSection) {
        // hide current visible section
        $currentVisibleSection.addClass("hidden");
        $content.animate({opacity: 0}, 'slow', 
            function() {
                $content.removeClass(currentBgClass);
                currentBgClass = newBgClass;
                $content.addClass("bg-" + newSectionId).animate({opacity: 1}, 'slow', 
                    function() {
                        // show new visible section
                        $newVisibleSection.removeClass("hidden");
                        $currentVisibleSection = $newVisibleSection;
                        // show SeHabla image
                        showSeHablaAnim();
                        // update footer time and availability info
                        currentInfoO = currentInfo();
                        $("#current-date p").text(currentInfoO.currentDt);
                        $("#avail p span:first-child").text(currentInfoO.availability.first); 
                        $("#avail p span:nth-child(2)").text(currentInfoO.availability.second);
                        $("#avail p span:last-child").text(currentInfoO.availability.third);
                    });
            });
    }
    
    function showSeHablaAnim() {
        var $homeImg = $('#home-content img');
        $homeImg.css({'width': '0px', 'opacity': 0});
        $homeImg.animate({width: '272px', 'opacity': 1}, 'slow');
    }
    
    function currentInfo() {
        var infoS = {};
        var atlDate = window.moment.tz("America/New_York");
        infoS['currentDt'] = atlDate.format("dddd, MMMM Do YYYY, LT") + " EST";
        var weekday = atlDate.day();
        var hour = atlDate.hour();
        infoS['availability'] = getAvailability(weekday, hour);
        return infoS;
    }
    
    function getAvailability(weekday, hour) {
        var info = {};
        info['first'] = "The office is currently ";
        if (weekday === 0) {
            info['second'] = 'CLOSED';
        }
        else {
            if ((hour >= schedule[weekday]['end']) || (hour < schedule[weekday]['start'])) {
                info['second'] = 'CLOSED';
            }
            else {
                info['second'] = 'OPEN';
                info['third'] = ' until ' + schedule[weekday]['end'] + 'PM';
            }
        }
        return info;
    }
    
});
