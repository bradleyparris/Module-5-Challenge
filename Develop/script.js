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