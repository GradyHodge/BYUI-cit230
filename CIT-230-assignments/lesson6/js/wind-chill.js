<script language="javascript" type="text/javascript">

function doInputOutput () {
//Can I remove the var from the input?
var temp = parseFloat (document.getElementById('temp').value);
var windSpeed = parseFloat (document.getElementById('windSpeed').value);
//windChill();
var itsCold = windChill(temp,windSpeed)

var div = document.getElementById ('output');
	div.innerHTML = itsCold;
}

function windChill (t,v) {

var itFeelsLike = 35.74 + 0.6215 * t -35.75* a + .4275 * t * a;
var a = Math.pow(v,.16);


//I got the formula from www.onlineconversion.com/windchill.htm.  
//I verified the formula from a few separate sources as well

//var itFeelsLike =___________
return itFeelslike;

}


</script>

<body>

<input type="text" id="temp"> Temperature </input>
<input type="text" id="windSpeed"> Wind Speed </input>
</br>
</br>
<button type="button" onClick="doInputOutput();">Wind Chill</button>
<!--<button type="button" onclick="fifteen();">Click</button>-->
<div id="output"></div>
</body>
</html>