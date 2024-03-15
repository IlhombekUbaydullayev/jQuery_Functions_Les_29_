$(document).ready(function () {
    $("#add").click(function () {
        var catName = $("#category").val();
        if (catName !== '') {
            // document.getElementById("display").innerHTML = "<span class='badge badge-success'>" + catName + "</span>"
            var tx = "<span class='badge badge-success mr-2'>" + catName + "</span>";
            var h4 = "<h4 class='border p-3'>" + catName + "</h4>"
            // $("#display").html(tx);
            $("#display").append(tx);
            // $("#display").prepend(tx);
            // $("#display").after(h4);
            // $("#display").before(h4);
            $("#category").val("");
        }
    })
    // $("#display").wrap("<div class='card-body border'></div>");
    // $("#display").unwrap(".col-md-6");
    // $("#display").empty();
    // $("#display").find("span");
    // $("#display").remove();

    $("#hide").click(function () {
        $("#card").hide(500);
    })
    $("#show").click(function () {
        $("#card").show(500);
    })
    $("#toogle").click(function () {
        $("#card").toggle(500);
    })
    $("#fadeOut").click(function () {
        $("#card").fadeOut(500);
    })
    $("#fadeIn").click(function () {
        $("#card").fadeIn(500);
    })
    $("#fadeToggle").click(function () {
        $("#card").fadeToggle(500);
    })
    $("#slideUp").click(function () {
        $("#card").slideUp(500);
    })
    $("#slideDown").click(function () {
        $("#card").slideDown(500);
    })
    $("#slideToggle").click(function () {
        $("#card").slideToggle(500);
    })
    $("#animate").click(function () {
        $("#card").animate({"opacity" : "0","width" : "0"})
    })
})