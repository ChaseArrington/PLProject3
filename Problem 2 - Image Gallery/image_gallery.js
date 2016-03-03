$(document).ready(function() {
    $("#image_list a").each(function() {
        var newImage = new Image();
        newImage.src = $(this).attr("href");
    });
    // event handlers
    $("#image_list a").click(function(evt) {
        var imageURL = $(this).attr("href");   // change image
        $("#image").attr("src", imageURL);

        var caption = $(this).attr("title");
        $("#caption").text(caption);

        evt.preventDefault(); // cancel default
    });

    $("li:first-child a").focus();
});