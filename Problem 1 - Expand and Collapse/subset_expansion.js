$(document).ready(function() {
    $("a").click(function() {

        // Reveals or hides the rest of the paragraph's text if hidden after being clicked
        $(this).prev().toggleClass("hide");

        // If statement to replace the Show More/ Show Less link text when clicked
        if ($(this).prev().attr("class") != "hide") {
            $(this).text("Show Less")
        }
        else {
            $(this).text("Show More")
        }
    }); // end click
});// end ready