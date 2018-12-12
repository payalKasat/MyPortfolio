$(document).ready(function(){
    $('.panel').mouseenter(function(){
        panel_hover(this);
    });
    $('.panel').mouseleave(function(){
        panel_leave(this);
    });
    timeMessage();
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });

});

function panel_hover(element){
    var project1 = $('.project1');
    var project2 = $('.project2');
    var project3 = $('.project3');
    var project4 = $('.project4');
    var project5 = $('.project5');
    var project6 = $('.project6');

    if(project1[0]===element){
        $(element).addClass('hover_panel_animation');
        $('.hover_panel1').css({'display':'block'});
    }
    else if(project2[0] === element){
        $(element).addClass('hover_panel_animation');
        $('.hover_panel2').css({'display':'block'});
    }
    else if(project3[0] === element){
        $(element).addClass('hover_panel_animation');
        $('.hover_panel3').css({'display':'block'});
    }
    else if(project4[0] === element){
        $(element).addClass('hover_panel_animation');
        $('.hover_panel4').css({'display':'block'});
    }
    else if(project5[0] === element){
        $(element).addClass('hover_panel_animation');
        $('.hover_panel5').css({'display':'block'});
    }
    else if(project6[0] === element){
        $(element).addClass('hover_panel_animation');
        $('.hover_panel6').css({'display':'block'});
    }

}

function panel_leave(element){
   $(element).removeClass('hover_panel_animation');
   $('.hover_panel1,.hover_panel2,.hover_panel3,.hover_panel4,.hover_panel5,.hover_panel6').css({'display':'none'});
}
function timeMessage(){
    var time = new Date().getHours();
    // $('.time_message').hide();
    if (time < 12){
        $('.time_message').text('Good Morning!!').show(3000);

    }
    else if(time < 18){
        $('.time_message').text('Good Afternoon!!').show(3000);
    }
    else{
        $('.time_message').text('Good Evening!!').show(3000);
    }
}