
//This is only my third jquery project so it might be messy

$(document).ready(function(){
    $(".textbox").click(function(){ // Open the accordian when the textboxs are pressed
        $(".accordianContainer").slideToggle();
        $(".accordianContainer").children(".subcat").slideDown();
    });

    //the magic
    //when the labels are pressed 
    $(".selectable").click(function(event){
        $(event.currentTarget).children(".button").css({'transform': 'rotate(0deg)'}); // change the arrow to right
        if( $(event.currentTarget).siblings(".subcat").is(":hidden") ) // if item is toggled
        {
            $(event.currentTarget).children(".button").css({'transform': 'rotate(90deg)'}); // change the arrow to down
        }
        $(event.currentTarget).siblings(".subcat").slideToggle(); //lower or rase the category
        $(event.currentTarget).parent().siblings(".subcat").children(".subcat").slideUp(); //raise all other similar categories that may be open
        $(event.currentTarget).parent().siblings(".subcat").children(".selectable").children(".button").css({'transform': 'rotate(0deg)'}); //rotate the button of those similar categories

    })

    //when the site is selected the system closes all of the categories and writes the site to the text box
    $(".siteT").click(function(event){
        console.log(event.currentTarget.innerHTML);
        $(".textbox").val(event.currentTarget.innerHTML); 
        $(".accordianContainer").slideUp();
        $(".subcat").slideUp();
        $(".button").css({'transform': 'rotate(0deg)'});
    });
});