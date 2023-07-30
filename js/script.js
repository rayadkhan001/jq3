// js
// text change
function textChange(){
	document.getElementById('h2').innerHTML = "Hello There!";
}
function textChange2(){
	document.getElementById('h2nd').innerHTML = "oncontextmenu";
}
function textChange3(){
	document.getElementById('h2rd').innerHTML = "ondblclick";
}
// show date
function showDate(){
	document.getElementById('dh2').innerHTML = Date();
}
function showDate2(){
	document.getElementById('dh2nd').innerHTML = Date();
}
function showDate3(){
	document.getElementById('dh2rd').innerHTML = Date();
}
// variable repeat massage
function dataRepeat(){
	var massage = "Welcome to SS. ";
	document.getElementById('dr').innerHTML = massage.repeat(3);
}
function dataRepeat2(){
	var massage = "Welcome to SS. ";
	document.getElementById('dr2').innerHTML = massage.repeat(3);
}
function dataRepeat3(){
	var massage = "Welcome to SS. ";
	document.getElementById('dr2rd').innerHTML = massage.repeat(3);
}
// on/of
function bulbOn(){
	document.getElementById('bulb').src = 'img/on.gif';
}
// bulb on/off
function bulbOff(){
	document.getElementById('bulb').src = 'img/off.gif';
}
// font-size
function fontSize(){
	document.getElementById('fs').style.fontSize = "50px";
}
function fontSize2(){
	document.getElementById('fs2').style.fontSize = "50px";
}
// show/hide
function textShow(){
	document.getElementById('tsh').style.display = "block"
}
function textHide(){
	document.getElementById('tsh').style.display = "none"
}
// addition function
function outPut(){
	var number1 = 10;
	var number2 = 5;
	var result = number1 + number2;
	document.getElementById('op').innerHTML = result; 
}
// subtraction function
function subTract(){
	var num1 = 15;
	var num2 = 8;
	var result = num1 - num2;
	document.getElementById('sf').innerHTML = result;
}
// multiply function
function multiFun(){
	var numb1 = 7;
	var numb2 = 7;
	var result = numb1 * numb2;
	document.getElementById('multi').innerHTML = result;
}
// division function
function divideFun(){
	let numb1, numb2, resilt;
	numb1 = 7;
	numb2 = 7;
	result = numb1 / numb2;
	document.getElementById('df').innerHTML = result;
}
// "get-element-by-class-name" example
function test(){
	document.getElementsByTagName('p')[1].innerHTML = "Welcome";
}
// "getElementsByName" example
function totalElements() {
    var allgenders = document.getElementsByName("gender");
    alert("Total Genders: " + allgenders.length);
}
// getElementsByTagName example
function countPara() {  
    var totalpara = document.getElementsByTagName("p");  
    alert("Total p tags are: " + totalpara.length);  
}
// getElementsByTagName count paragraphs
function counth2() {
    var totalh2 = document.getElementsByTagName("h2");
    alert("Total h2 tags are: " + totalh2.length);
}
function counth3() {
    var totalh3 = document.getElementsByTagName("h3");
    alert("Total h3 tags are: " + totalh3.length);
}
function myfunction(txt) { 
  document.getElementById("demo").innerHTML = txt
} 
// getElementById example
function myfunction(txt) { 
  document.getElementById("demo").innerHTML = txt
} 
function fun() {
    alert("Welcome to the javaTpoint.com");
}
function fun1() {
   document.getElementById("para").innerHTML =  "This is second function";
}
function fun2() {
   document.getElementById("para1").innerHTML =  "This is third function";
}
var mybtn = document.getElementById("btn");
mybtn.addEventListener("click", fun);
mybtn.addEventListener("click", fun1);
mybtn.addEventListener("click", fun2);

// jq

$(document).ready(function(){
	// alert
	$('#btn').on("click", function(){
		alert("Assalamu Alaikum");
	});
	// hide
	$('#btnh').on('click', function(){
		$('h2').fadeOut();
	});
	// show
	$('#btns').on('click', function(){
		$('h2').fadeIn();
	});
	// toggle
	$('#btnt').on('dblclick', function(){
		$('h2').fadeToggle(3000);
	});
	// 
	$( document ).on("ajaxComplete", function() {
	  $( ".log" ).text( "Triggered ajaxComplete handler." );
	} );
	// 
	$( ".trigger" ).on('click', function() {
	  $( ".result" ).load( "ajax/test.html" );
	} );
	// 
	$( document ).on( "ajaxComplete", function( event, xhr, settings ) {
	  if ( settings.url === "ajax/test.html" ) {
	    $( ".log" ).text( "Triggered ajaxComplete handler. The result is " +
	      xhr.responseText );
	  }
	});
	// I will disappear
	$(document).ready(function(){
	  $("p").on("click", function(){
	    $(this).hide();
	  });
	});
	// show/hide
	$(document).ready(function(){
		$('.show1').on('click', function(){
			$('.show2').slideToggle(3000);
		})
	})
	// 
	$(document).ready(function(){
	  $("#p1").mouseenter(function(){
	    alert("You entered p1!");
	  });
	});
	// 
	$(document).ready(function(){
	  $("#p1").mouseleave(function(){
	    alert("Bye! You now leave p1!");
	  });
	});
	// 
	$(document).ready(function(){
	  $("input").focus(function(){
	    $(this).css("background-color", "yellow");
	  });
	  $("input").blur(function(){
	    $(this).css("background-color", "green");
	  });
	});
	// 
	$(document).ready(function(){
	  $("p").on({
	    mouseenter: function(){
	      $(this).css("background-color", "gray");
	    },  
	    mouseleave: function(){
	      $(this).css("background-color", "blue");
	    }, 
	    click: function(){
	      $(this).css("background-color", "yellow");
	    }  
	  });
	});
	// 
	$(document).ready(function(){
	  $("input").on('select', function(){
	    $("input").after(" Select event triggered!");
	  });
	  $("button").on('click', function(){
	    $("input").triggerHandler("select");
	  });
	});
	// 
	$(document).ready(function(){
	  $("p").on("click", function(){
	    $(this).css("background-color", "pink");
	  });
	  $("button").on('click', function(){
	    $("p").off("click");
	  });
	});
	// alert
	$(document).ready(function(){
	  $("p").on("click", function(){
	    alert("The paragraph was clicked.");
	  });
	});
	// scrollbar in the div
	var x = 0;
	$(document).ready(function(){
	  $("div").on('scroll', function(){
	    $("span").text( x += 1);
	  });
	});
	// Select some text
	// $(document).ready(function(){
	//   $("input").on('select', function(){
	//     alert("Text marked!");
	//   });
	// });
	// Submit
	$(document).ready(function(){
	  $("form").on('submit', function(){
	    alert("Submitted");
	  });
	});
	// Run test function
	$(document).ready(function(){
	  var objPerson = {
	    name: "John Doe",
	    age: 32,
	    test: function(){
	      $("p").after("Name: " + this.name + "<br> Age: " + this.age);
	    }
	  };
	  $("button").on('click', $.proxy(objPerson, "test"));
	});
	// ques/ans
	$(document).ready(function(){
		$('.ques').on('click', function(){
			$('.ans').slideToggle(1000);
		})
	})
	// draggable
	$( function() {
	    $( "#draggable" ).draggable();
	} );
	// accordion
	$( function() {
	    $( "#accordion" ).accordion({
	    	collapsible: true,
	    	heightStyle: "content"
	    });
	});

	$( function() {
	    $( "#sortable" ).sortable();
	});
	// 
	$( function() {
	    $( ".widget input[type=submit], .widget a, .widget button" ).button();
	    $( "button, input, a" ).on( "click", function( event ) {
	      event.preventDefault();
	    });
	});
	// availableTags
	$( function() {
	    var availableTags = [
	      "ActionScript",
	      "AppleScript",
	      "Asp",
	      "BASIC",
	      "C",
	      "C++",
	      "Clojure",
	      "COBOL",
	      "ColdFusion",
	      "Erlang",
	      "Fortran",
	      "Groovy",
	      "Haskell",
	      "Java",
	      "JavaScript",
	      "Lisp",
	      "Perl",
	      "PHP",
	      "Python",
	      "Ruby",
	      "Scala",
	      "Scheme"
	    ];
	    $( "#tags" ).autocomplete({
	      source: availableTags
	    });
	});
	// datepicker
	$( function() {
	  $( "#datepicker" ).datepicker();
	});
	// tooltip
	$( function() {
	    $( document ).tooltip();
	});
	// navtab
	$( function() {
	    $( "#tabs" ).tabs();
	});
	// select-menu
	$( function() {
	    $( "#speed" ).selectmenu();
	    $( "#files" ).selectmenu();
	    $( "#number" )
	      .selectmenu()
	      .selectmenu( "menuWidget" )
	      	.addClass( "overflow" );
	    $( "#salutation" ).selectmenu();
	});
	// menu
	$( function() {
	    $( "#menu" ).menu();
	});
	//button 
	$( function() {
	    $( ".widget input[type=submit], .widget a, .widget button" ).button();
	    $( "button, input, a" ).on( "click", function( event ) {
	      event.preventDefault();
	    });
	});

	// addClass
	$( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
  	function callback() {
  	    setTimeout(function() {
  	      $( "#effect" ).removeClass( "newClass" );
  	    }, 1500 );
  	  }
  	});
	// removeClass
	$( function() {
	    $( "#button" ).on( "click", function() {
	      $( "#effect" ).removeClass( "newClass", 1000, callback );
	    });
	 
	    function callback() {
	      setTimeout(function() {
	        $( "#effect" ).addClass( "newClass" );
	      }, 1500 );
	    }
	});
	// toggleClass
	$( function() {
	    $( "#button" ).on( "click", function() {
	      $( "#effect" ).toggleClass( "newClass", 1000 );
	    });
	});
	// 
});
