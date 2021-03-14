//Time and Date displayed at the top of the calendar
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {

//Save Function 
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings("description").val();
        var time = $(this).parent().attr("id");    
    
        //Save text in local storage
        localStorage.setItem(time,text);
    })

//current time

//check time blocks to add background colors

//get item from local storage
})