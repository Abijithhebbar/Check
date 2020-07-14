$(document).ready(function() {
	// $("#btn").hide();
	var Click = 0; // check the number of  times the questions button is clicked.
	var score = 0;
	// var display = 0;
	$("#btn").click(function() { // click function
		// click++;
		// console.log(click);
		
    if (Click < 5) { // since we have only 5 question we have written the condition.
    	Click++;
    	// display++;
    	// console.log(Click);
    	var link = "https://raw.githubusercontent.com/Abijithhebbar/Check/master/Question%20" + Click + ".json"; // link for AJAX to perform the operation. It changes dynamically.
    	// console.log(link);

    	$.ajax({ // ajax linking
  		url: link, // the url is stored in variable link.
  			data: {
   				 format: 'json' // specifying the data format.
  					},
  		  success: function(data) { // if the link is reached successfully it starts executing the code below.
  		  	console.log(data); // checking the json data
  		  	$('#btn').prop("disabled", true);// disabling the new question button
    			var $title = $('<h3>').text(data.Question);// reading the questions to a variable.
    			var $description =  $('<button>').text(data.Options[0]);// reading the options to a varaible.
    			var $description1 = $('<button>').text(data.Options[1]);
    			var $description2 = $('<button>').text(data.Options[2]);
    			var $description3 = $('<button>').text(data.Options[3]);
    			$("#display")
    			.append($title)
    			.append($description)
    			.append($description1)
    			.append($description2)
    			.append($description3);// printing the question and options on the screen.
    			$('button').click(function() { // checking the click of the options.
    				var check = $(this).text();
    				// console.log(data.Answer);
    				if(check == data.Answer){ // verifying the selected option with the correct answer.
    					// console.log("hip hip Hurray!");
    					// alert("Correct Answer you scored 1 point :)");
    					$(this).prop("disabled", true); // disabling the selected button.
    					$("button").prop("disabled",true);// disabling all the buttons.
    					$('#btn').prop("disabled", false); // enabling the next question button.
    					var answer = $('<p>').text(data.Answer); // reading the correct answer.
    					// $('p').text("correct Answer is ");
    					$("#display").append(answer); // displaying the correct answer.
    					// console.log(data.Result);
    					score++; // Incrementing the score.
    					// break;
    					// console.log(score);
    							if (Click == 5){ // if the max questions are reached then the condition gets executed.
								$("#btn").prop("disabled", true);// disabling the next question button.
								alert("Total score " + score); // popping the total score.
								// $("#display").closest('div').remove();
								// $("#btn").hide();
								// var finalscore = "The total score is " + score;
								// // alert(finalscore);
								// // $("display").append(finalscore);
								// var displayfinalScore = $("<h2>").text(finalscore);
								// alert(displayfinalScore);
								// $("#display").append(displayfinalScore);
								// var finalscore = $('<p> Total Score is ').text(score);
								// $("#display").append(finalscore)
								// $('#display').html('<p>An error has occurred</p>');
								// $('#display').append(score);
								}

    				}
    				else{
    					var dcheck= $(this).text(); // reading the text on the button clicked.
    					if(dcheck != "Click for a Question!"){ // checking the condition for the wrong answer.
    						$("button").prop("disabled",true); // diasbling all the buttons.
    						$('#btn').prop("disabled", false); // enabling the next question button.
    						var answer = $('<p>').text(data.Answer); // reading the correct answer.
    						$("#display").append(answer); // displaying the correct answer.
    						// alert("Wrong Answer you scored 0 for this question");
    						    if (Click == 5){ // if the maximum number of questions is reached then the condition executes.
								$("#btn").prop("disabled", true);// disabing the next question button.
								alert("Total score " + score); // popping the total score.
								// $("#display").closest('div').remove();
								// $("#btn").hide();
								// var finalscore = "The total score is " + score;
								// alert(finalscore);
								// $('#display').html('<h2>The Total Score is </h2>');
								// var displayfinalScore = $("<h2>").text(finalscore);
								// alert(displayfinalScore);
								// $("#display").append(score);

								// var finalscore = $('<p> Total Score is ').text(score);
								// $("#display").append(score);
								}
    					}
    					
    					// break;
    				}
    				console.log(check); // displaying the selected button text.
    			});
  },
  		error: function() { // if there is an error in reaching the URL.
    			$('#display').html('<p>An error has occurred</p>'); // displaying the error message.
  				},	
  		// dataType: 'jsonp',

  type: 'GET' // ajax get method.
});
		// $.get
	// 	if (Click == 5){
	// 	$("#btn").prop("disabled", true);
	// 	console.log(score);
	// 	// $("scores").append(score);
	// }

    } 

    // else {
    //     $("#btn").hide();
    // }
    // // click++;
});
	// $("<div></div>").appendTo("body");
});
// https://github.com/Abijithhebbar/Check/blob/master/Question%201.json