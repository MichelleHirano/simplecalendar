//Time and Date displayed at the top of the calendar
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);



//Save Function 
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings("description").val();
        var time = $(this).parent().attr("id");    
    
        //Save text in local storage
        localStorage.setItem(time,text);
    })

//current time
    function timeTracker() {
        var timeNow= moment().hour();

//check time blocks to add background colors
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            //Past
            if(blockTime <timeNow){
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }

            else if (blockTime === timeNow){
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }

            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }


        })
    }
     

//get item from local storage
window.onload = function() {

    var loadSave = localStorage.getItem(".description");
    if ("description" !== null) $('#hour9').val("hour9");

}

timeTracker();

