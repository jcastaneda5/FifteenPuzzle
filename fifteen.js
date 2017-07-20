 var timetracker = 0;
 var elapsedtimevariable = 0;
 

 
 function elapsedtime()
 {
     if (elapsedtimevariable == 1)
	 {
		 setTimeout(setupthetimer, 10);
	 }


 }
 
 function changebackgroundoption1 ()
 {
	 document.body.style.backgroundImage = "url('castle.jpg')";
 }
 
 function changebackgroundoption2 ()
 {
	 document.body.style.backgroundImage = "url('mountain.jpg')";
	 
 }
 
 function changebackgroundoption3 ()
 {
	 document.body.style.backgroundImage = "url('ocean.jpg')";
	 
 }
 
 function changebackgroundoption4 ()
 {
	 document.body.style.backgroundImage = "url('space.jpg')";
	 
 }
 
 
 function newdraggingfunction (eventparameter)
	{
		
		eventparameter.dataTransfer.setData("picture", eventparameter.target.id);
		
	}
	
	
	function droppingpermission(eventparameter)
 {
	 eventparameter.preventDefault();
	 
 }
 
 
 function setupthetimer()
 {
	 timetracker ++;
	 var minutes = Math.floor(timetracker/100/60);
	 var seconds = Math.floor(timetracker/100);
	 
	 if (minutes < 10)
	 {
		 minutes += "0";
		 
	 }
	 
	 if (seconds < 10)
	 {
		 seconds += "0";
	 }
	 
	 document.getElementById('timetracker').innerHTML = minutes + ":" + seconds;
	 elapsedtime();
 }
 
 
 function initialtime()
 {
	
	 
	 if (elapsedtimevariable <= 0)
	 {
		 elapsedtimevariable = 1;
		 setupthetimer();
	 }
	 
	 else 
	 {
		 alert("An error has occured");
	 }
	 
	
}

 
 
 function newdroppingfunction (eventparameter)
	{
		eventparameter.preventDefault();
	    var variabletoholdtheimages = eventparameter.dataTransfer.getData("picture");
		eventparameter.target.appendChild(document.getElementById(variabletoholdtheimages));
	}
 
 