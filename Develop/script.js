// Displays current day
var currentDay = moment().format('dddd MMM Do');
$("#currentDay").html(currentDay);

// Determine if time blocks are past, present, or future
var currentHour = moment().hour();
console.log(currentHour);
$(".time-block").each(function() {
    var blockTime = $(this).attr("id");
    console.log(blockTime);

    if (blockTime == currentHour) {
        $(this).addClass("present");
    }
    else if (blockTime < currentHour) {
        $(this).addClass("past");
    }
    else if (blockTime > currentHour) {
        $(this).addClass("future");
    }
})

// Save buttons
$(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
})

// Pulls from local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));