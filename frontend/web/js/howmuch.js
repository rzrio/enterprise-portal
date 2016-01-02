// JavaScript Document

// no of pixels from top of page 6800
var scrollDest = -100;



if(window.addEventListener)
{
    window.addEventListener("load",howInit,false);
}
else if(window.attachEvent)
{
    window.attachEvent("onload",howInit);
}


var guideOn = false;
var x1;
var x2;
var canvasA;
var cxa;
var FPS = 40;

var initYes = 0;
var beginYes = 0;
var testCount = 0;

//function initVars() {
//RATIO//
var cRat = [
1, // bio
0.6875, // plants
0.3125, // bacteria
0.00625, // protists
0.003125, // funghi
0.0015625, // animals
0.5625, // forests
0.0625, // grasslands
0.3125, // tropical forests
0.15625, // boreal forests
0.0009375, // land invertebrates
0.00000625, // land vertebrates
0.0001875, // domestic
0.000078125, // people
0.0003125, // marine
0.0000625, // earthworms
0.0004375, // insects
0.0000625, // termites
0.0000003, // elephants
0.00010625, // cattle
0.00001875, // pigs
0.0000125, // poultry
0.000125, // Marine invertebrates
0.00015625, // marine vertebrates
0.000125, // fish
0.0000125, // whales
0.03125, // soil bacteria
0.125, // subterranean  bacteria
0.003125, // aquatic bacteria
0.125, // subsea bacteria
0.00003125, // krill (30)
0.0000000375, // wildebeest
0.0000000015625 // chimps
];
//TONS//
var cTons = [
"1,600,000,000,000",// bio
"1,100,000,000,000", // plants
"500,000,000,000", // bacteria
"10,000,000,000", // protists
"5,000,000,000", // funghi
"2,500,000,000", // animals
"900,000,000,000", // forests
"100,000,000,000", // grasslands
"500,000,000,000", // tropical forests
"250,000,000,000", // boreal forests
"1,500,000,000", // land invertebrates
"10,000,000", // land vertebrates
"300,000,000", // domestic
"125,000,000", // people
"500,000,000", // marine
"100,000,000", // earthworms
"700,000,000", // insects
"100,000,000", // termites
"500,000", // elephants
"170,000,000", // cattle
"30,000,000", // pigs
"20,000,000", // poultry
"200,000,000", // Marine invertebrates
"250,000,000", // marine vertebrates
"200,000,000", // fish
"20,000,000", // whales
"50,000,000,000", // soil bacteria
"200,000,000,000", // subterranean  bacteria
"5,000,000,000", // aquatic bacteria
"200,000,000,000", // subsea bacteria
"50,000,000", // krill
"60,000", // wildebeest
"2,500" // chimps
];
//GT//
var cGT = [
"1,600", // bio
"1,100", // plants
"500", // bacteria
"10", // protists
"5", // funghi
"2.5", // animals
"900", // forests
"100", // grasslands
"500", // tropical forests
"250", // boreal forests
"1.5", // land invertebrates
"0.01", // land vertebrates
"0.3", // domestic
"0.125", // people
"0.5", // marine
"0.1", // earthworms
"0.7", // insects
"0.1", // termites
"0.0005", // elephants
"0.17", // cattle
"0.03", // pigs
"0.02", // poultry
"0.2", // Marine invertebrates
"0.25", // marine vertebrates
"0.2", // fish
"0.02", // whales
"50", // soil bacteria
"200", // subterranean  bacteria
"5", // aquatic bacteria
"200", // subsea bacteria
"0.05", // krill
"0.00006", // wildebeest
"0.0000025" // chimps
];


//ZOOM//
var cZoom = [1];

//Y LEVEL//
var cY = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];




var rollOver = 0;
var beginAlpha = 100;
var introAlpha = 1;
var introY = 1000;
var introDestY = 1000;
var caveats = false;
var compare = false;
var caveatsAlpha = 0;
var compareAlpha = 0;
var compareRect = 60;

var pathHere = 1;

var test1 = 0;
var test2 = 0;
var test3 = 0;

var newFrame = 1;
var backFrame = 0;

var endCount = 500;
var buttonLock = 0;

// DRAWING CONSTANTS //

var roll = [false,false];
var thisBase = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var thisDestBase = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
roll[100] = false;
roll[101] = false;
var stageA = [1,1];
var stageDestA = [1,1];

var upA = 1;
var thisA = 1;
var downA = 0;

var fadeIn = 1;
var fadeOut = 0;
var fadeNone = 0;

var fadeDestIn = 1;
var fadeDestOut = 0;

var upDestA = 1;
var thisDestA = 1;
var downDestA = 0;

var headLine = 50;
var headDestLine = 50;


var camX = 0;
var camY = -366;
var camDestX = 0;
var camDestY = -366;
var camSpeed = 6;
var camSpeedDest = 6;

var TTAlpha = 100;

var chartStage = 1;
var infoStage = 0;
var stageAlpha1 = 0;
var masterRad = 0;
var bioAlpha = 1;
var bioSwitch = 0;
var bioGlow = 0;
var bioGlowSwitch = 0;
var overlayA = 1;
var overlayDestA = 1;


//circles//
var cx = 0;
var cy = 0;
var cRad = 0;

var earthTint1 = 100;
var earthTint2 = 0;
var earthTint3 = 0;


//var bgImg = new Image();
//bgImg.src = 'images/streaks.gif';
//var bg2Img = new Image();
//bg2Img.src = 'images/bg2.gif';

var bgaImg = new Image();
bgaImg.src = '/img/bga.jpg';
var bgcImg = new Image();
bgcImg.src = '/img/bgc.jpg';
//var guideImg = new Image();
//guideImg.src = 'images/guide2.jpg';

var paperImg = new Image();
paperImg.src = '/img/paper.jpg';


var overlayImg = new Image();
overlayImg.src = '/img/overlay.png';

var fillAlpha = 1;
var fillDestAlpha = fillAlpha;

var copyColor = "#FFF";
var bgColor = "#28282a";
var overAlpha = 0.3;
var overDest = overAlpha;

var noCol = "#333c42";
var noCol2 = "#333c42";


// UNITS //

var halfX = 0;
var halfY = 0;

var fullX = 0;
var fullY = 0;
var units = 0;
var unitOne = 0;
var unitSmall = 0;

var pUnit = 0;
var lUnit = 0;
var tx = 0;
var ty = 0;
var dx = 0;
var dy = 0;

var mouseX = 0;
var mouseY = 0;

// ZOOM //

var zoomLevel = 0.03;
var zoomDest = 0.03;
var zSpeed = 2;
var zSpeedDest = 2;
var zoomGrad = 1;
var zoomState = 0;

var headerType = 40;
var midType = 26;
var bodyType = 12;



// MESSAGING //

var msgA = [0,0,0,0,0,0,0,0,0,0];
var msgState = [0,0,0,0,0,0,0,0,0,0];





// LIFE PARTICLES //

lifeNo = 1000;

var lifeA = [];
var lifeX = [];
var lifeY = [];
var lifeXS = [];
var lifeYS = [];

var lifeR = [];
var lifeC = [];



dustNo = 300;

var dustX = [];
var dustY = [];
var dustS = [];


// GROUND COLOUR //



var colRad1 = 2000;
var colRad2 = 2000;
var colRad3 = 2000;
var colRad4 = 2000;

var colSwitch1 = 0;
var colSwitch2 = 0;
var colSwitch3 = 0;
var colSwitch4 = 0;

// BEAMS //

var beamNo = 11;
var beamW = [];
var beamX = [];
var beamA = [];
var beamC = [];
var beamT = [];

// SPARKS //

var sparkNo = 15;
var sparkY = [];
var sparkX = [];
var sparkA = [];
var sparkC = [];
var sparkAlpha = 0;



// FLASHES //

var redCount = 50;
var redAlpha = 0;
var purpleCount = 70;
var purpleAlpha = 0;

// THROB //

var throbA = 0;
var throbDir = 0;
var throbA2 = 0;
var throbDir2 = 1;
var throbTime = 0;




// MOVEMENT //

var progress = 0;
var carSpeed = 0;
var carDest = 0;
var speedMulti = 1;
var multiDest = 1;

var y1 = "0";
var y2 = "0";
var h1 = "0";
var h2 = "0";
var desty1 = "0";
var desty2 = "0";
var desth1 = "0";
var desth2 = "0";
var bgx = "0";
var bgw = "0";
var destbgx = "0";
var destbgw = "0"; // fix these?
var dateA = 0;
var destDateA = 0;

var wvOver = false;
var shareOver = false;
var infoOver = false;

//} // END INIT VARS


//////////////// BROWSER DETECT //////////////////

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();




function howInit() {
	
	////////////// SETUP CANVAS ////////////
	
	//initVars();
	
	canvasA = document.getElementById("layerA");
	
	
	if (canvasA.addEventListener){
	  canvasA.addEventListener("mousedown", getPosition, false);
	  canvasA.addEventListener("mousemove", mouseMove, false);
	  document.addEventListener('scroll', onScroll);
	} else if (canvasA.attachEvent){
	  canvasA.attachEvent("mousedown", getPosition);
	  canvasA.attachEvent("mousemove", mouseMove);
	  document.attachEvent('scroll', onScroll);
	  
	}
	
	
	
	
    cxa = canvasA.getContext("2d");
	initYes = 1;
	
	
	// SET CANVAS & DRAWING POSITIONS //
	resize_canvas();
	
	
	beginAlpha = 120;
	introY = fullY;
	introDestY = halfY+(unitOne*3);
	
	y1 = desty1 = halfY-units;
	h1 = desth1 = units*2;
	
	
	
	
	/// DUST PARTICLES SETUP ///
	
	for (i=0;i<dustNo;i++) {
		
		dustX[i] = (Math.random()*(fullX*4))-(fullX*2);
		dustY[i] = (Math.random()*(fullY*4))-(fullY);
		dustS[i] = Math.floor(Math.random()*3)+1;
		
	}
	
	
	/// LIFE PARTICLES SETUP ///
	
	for (i=0;i<lifeNo;i++) {
		
		lifeX[i] = -100 + (Math.random()*1124);
		lifeY[i] = 380 + (Math.random()*1500);
		lifeR[i] = 0.5 + (Math.random()*1.5);
		lifeC[i] = Math.round(Math.random()*50);
		
		speedRand = 45 + Math.round(Math.random()*300);	
		
		if (lifeX[i]<halfX) {
			lifeDestX = halfX - Math.random()*10;
		} else {
			lifeDestX = halfX + Math.random()*10;
		}
		
		lifeXS[i] = ((lifeDestX-lifeX[i])/speedRand);
		lifeYS[i] = ((384-lifeY[i])/speedRand);
		
		lifeA[i] = 0;
		
	}
	// concentrate more
	for (i=200;i<300;i++) {
		
		lifeX[i] = (halfX-50) + (Math.random()*100);
		lifeY[i] = 380 + (Math.random()*500);
		speedRand = 45 + Math.round(Math.random()*100);
		if (lifeX[i]<halfX) {
			lifeDestX = halfX - Math.random()*10;
		} else {
			lifeDestX = halfX + Math.random()*10;
		}
		
		lifeXS[i] = ((lifeDestX-lifeX[i])/speedRand);
		lifeYS[i] = ((384-lifeY[i])/speedRand);
		
	}
	
	// BEAM SETUP //
	for (i=0;i<beamNo;i++) {
		
		beamW[i] = 1 + (Math.random()*4);
		beamA[i] = 0;
		beamC[i] = 5 + Math.round(Math.random()*20);
		beamX[i] = ((halfX - (masterRad*0.8)) + (Math.random()*(masterRad*1.6)));
		beamT[i] = Math.floor(Math.random()*3);
	}
	// SPARK SETUP //
	for (i=0;i<sparkNo;i++) {
		
		
		sparkA[i] = 0;
		sparkC[i] = 1 + Math.round(Math.random()*400);
		sparkX[i] = ((halfX - masterRad) + (Math.random()*(masterRad*2)));
		sparkY[i] = halfY + 80 + (Math.floor(Math.random()*-120));
	}
	
	
	beginYes = 1;
	
} // END INIT

////////////////////////////// ON EVERY FRAME CALL THESE FUNCTIONS ////////////////


setInterval(function() {
	
	if (initYes==1&&beginYes==0) {
		
		drawBG();
		drawChart();
		drawDisplay();
		
	}
	if (beginYes==1) {
		
		doCount();
		update();
		drawBG();
		if (testCount<300) {
		    drawEarth();
		}
		drawChart();
		drawDisplay();
		
	}
	if (beginYes==2) {
		
		
		update();
		drawBG();
		drawChart();
		drawDisplay();
		
	}
	
	testing();
	
}, 1000/FPS);

// END INTERVAL


////////////////////////// UPDATE EVENTS //////////////////////////

function doCount() {
	// UPDATE PROGRESS //
	if (beginAlpha<60) {
	    testCount += 1;
	}
}

function update() {
	
	// SKIP //
	/*if (beginYes==1) {
		
		TTAlpha = 0;
		beginAlpha = 0;
		beginYes = 2;
		testCount = 800;
		zoomLevel = zoomDest = 1;
		camY = camDestY = 1.3;
		fillAlpha = fillDestAlpha = 0;
		infoStage = 1;
		stageAlpha = 100;
		masterRad = 124;
	}*/
	
	
	
	// ZOOMING //
	zCalc = ((zoomDest-zoomLevel)/100)*zSpeed;
	zoomLevel += zCalc; 
	zSpeed += ((zSpeedDest-zSpeed)/100)*4;
	
	// CAMERA POSITION //
	camX += ((camDestX-camX)/100)*camSpeed;
	camY += ((camDestY-camY)/100)*camSpeed;
	camSpeed += ((camSpeedDest-camSpeed)/100)*4;
	
	// CHART ALPHAS //
	upA += ((upDestA-upA)/100)*8;
	thisA += ((thisDestA-thisA)/100)*8;
	downA += ((downDestA-downA)/100)*8;
	headLine += ((headDestLine-headLine)/100)*15;
	
	fadeIn += ((fadeDestIn-fadeIn)/100)*8;
	fadeOut += ((fadeDestOut-fadeOut)/100)*8;
	
	
	
	// CHART BASELINES //
	for (i=0;i<thisBase.length;i++) {
		thisBase[i] += ((thisDestBase[i]-thisBase[i])/100)*10;
	}
	
	
	
	
	
	// PAPER ALPHA //
	fillAlpha += ((fillDestAlpha-fillAlpha)/100)*3;
	
	overlayA += ((overlayDestA-overlayA)/100)*10;
	
	

	// SCRIPTED INTRO EVENTS //
	
	// fade out BG
	if (testCount == 1) {
		fillDestAlpha = 0;
	}
	
	// fade out TT
	if (testCount>100 && TTAlpha>0) {
		TTAlpha -= 1;
		earthTint1 -= 1;
	}
	
	// earth tint
	
	if (testCount>120 && testCount<300 && earthTint2<100) {
		earthTint2 += 2;
	}
	
	if (testCount==300) {
		earthTint2 = 0;
	}
	
	if (testCount>250 && testCount<800 && earthTint3<100 && zoomLevel>0.99) {
		earthTint3 += 2;
	}
	if (testCount==800) {
		earthTint3 = 0;
	}
	
	if (testCount==200) {
		colSwitch1 = 1;
	}
	if (testCount==250) {
		colSwitch2 = 1;
	}
	if (testCount==300) {
		colSwitch3 = 1;
	}
	if (testCount==350) {
		colSwitch4 = 1;
	}
	
	if (testCount==500) {
		infoStage = 1;
	}
	
	if (testCount>450 && stageAlpha1<100) {
		stageAlpha1 += 1;
	}
	
	
	// grow biosphere
	if (bioSwitch==1 && masterRad<124) {
		if (masterRad<62) {
			masterRad += 1;
		} else {
			masterRad += ((124-masterRad)/100)*1.6;
		}
	}
	
	// zooms
	if (testCount == 60) {
		zoomGrad = 1;
		camTo(0,1.3,6,4);
		
	}
	if (testCount == 120) {
		zoomTo(1,4,0.001);
		
	}
	
	if (testCount==500) {
		beginYes = 2;
	}
	
	
		
	units = unitOne*zoomLevel;
	
	
	
	
	// OVERLAY ALPHA
	overAlpha += ((overDest-overAlpha)/100);
	
	
	
	
	
	
} /////   END UPDATE 



	

////////////////////////////////////////////   DRAWING   ////////////////////////////////////////////
////////////////////////////////////////////   _______   ////////////////////////////////////////////

// BG //
function drawBG() {
	
	cxa.globalAlpha = 1;
	cxa.fillStyle = bgColor;
	cxa.fillRect(0,0,fullX,fullY);
	
	
	if (testCount<300) {
		cxa.drawImage(bgaImg,0,0,fullX,fullY);
	} else {
		cxa.drawImage(bgcImg,0,0,fullX,fullY);
	}
	
	if (guideOn==true) {
	    //cxa.drawImage(guideImg,0,0,fullX,fullY);
	}
	
	// OVERLAY //
	cxa.globalAlpha = overlayA;
	if (testCount>499) {
	    cxa.drawImage(overlayImg,0,halfY + (camY*(units*1.1))-303,fullX,410);
	}
	
	
}


// CHART //
function drawChart() {
	
	
	// FILL //
	cxa.globalAlpha = fillAlpha;
	cxa.fillStyle = "#28252b";
	cxa.fillRect(0,0,fullX,fullY);
	
	
	
	// INTRO GROUND //
	if (testCount>100 && testCount<500) {
		groundAnim();
	}
	
	// BEAMS //
	if (testCount>250 && testCount< 420) {
		beams();
	}
	
	
	if (zoomLevel>0.09) {
	    chart1();
	}
	
	// LIFE PARTICLES //
	if (testCount>180 && testCount<500) {
		lifeParticles();
	}
	if (testCount>180 && testCount<400) {
		flashes("#21dfc6",6);
	}
	
	
}



// DISPLAY
function drawDisplay() {
	
	
	// SETUP //
	cxa.globalAlpha = 1;
	cxa.lineWidth = 1;
	cxa.strokeStyle = "#fff";
	cxa.fillStyle = "#fff";
	cxa.textAlign = 'center';
	
	
	
	
	// TITLE //
	cxa.font = "300 60px Roboto Condensed ";
	tWidth1 = (cxa.measureText("HOW MUCH ").width);
	tWidth3 = (cxa.measureText("IS THERE ON ").width);
	
	
	cxa.font = "700 60px Roboto Condensed ";
	tWidth2 = (cxa.measureText("RZR ").width);
	tWidth4 = (cxa.measureText("EARTH?").width);
	
	tWidth = tWidth1 + tWidth2 + tWidth3 + tWidth4;
	
	cxa.globalAlpha = TTAlpha/100;
	cxa.fillStyle = "#fff";
	cxa.textAlign = 'left';
	
	cxa.font = "300 60px Roboto Condensed ";
	cxa.fillText("HOW MUCH ", halfX - (tWidth/2), 300);
	cxa.fillText("IS THERE ON ", (halfX - (tWidth/2)) + tWidth1 + tWidth2, 300);
	
	cxa.font = "700 60px Roboto Condensed ";
	cxa.fillText("RZR ", (halfX - (tWidth/2)) + tWidth1, 300);
	cxa.fillText("EARTH?", (halfX - (tWidth/2)) + tWidth1 + tWidth2 + tWidth3, 300);
	
	
	cxa.globalAlpha = stageAlpha1/100;
	
	
	
	
	// CAVEATS
	cxa.globalAlpha = stageAlpha1/100;
	
	
	if (roll[100]==false) {
	    cxa.fillStyle = noCol;
	} else {
		cxa.fillStyle = "#fff";
	}
	
	cxa.beginPath();
	cxa.arc(fullX-30, 30, 15, 0, 2 * Math.PI, false);
	cxa.closePath();
	cxa.fill();
	
	cxa.textAlign = 'center';
	cxa.font = "300 italic 18px Cabin";
	
	if (roll[100]==false) {
		cxa.fillStyle = "#fff";
	} else {
		cxa.fillStyle = noCol;
	}
	cxa.fillText("?", fullX-30, 37);
	
	
	
	
	
	if (caveats==true) {
		if (caveatsAlpha<100) {
			caveatsAlpha += 10;
		}
		cxa.globalAlpha = caveatsAlpha/100;
		//cxa.globalAlpha = (caveatsAlpha*0.8)/100;
		//cxa.fillStyle = "#111";
		//cxa.fillRect(0,0,fullX,fullY);
		cxa.drawImage(bgcImg,0,0,fullX,fullY);
		
		cxa.fillStyle = "#fff";
		cxa.textAlign = 'left';
		
		cxa.font = "300 49px Roboto Condensed ";
		tWidth1 = (cxa.measureText("HOW MUCH ").width);
		tWidth3 = (cxa.measureText("IS THERE ON ").width);
		
		
		cxa.font = "700 49px Roboto Condensed ";
		tWidth2 = (cxa.measureText("RZR ").width);
		tWidth4 = (cxa.measureText("EARTH?").width);
		
		tWidth = tWidth1 + tWidth2 + tWidth3 + tWidth4;
		
		
		cxa.font = "300 49px Roboto Condensed ";
		cxa.fillText("HOW MUCH ", halfX - (tWidth/2), 145);
		cxa.fillText("IS THERE ON ", (halfX - (tWidth/2)) + tWidth1 + tWidth2, 145);
		
		cxa.font = "700 49px Roboto Condensed ";
		cxa.fillText("RZR ", (halfX - (tWidth/2)) + tWidth1, 145);
		cxa.fillText("EARTH?", (halfX - (tWidth/2)) + tWidth1 + tWidth2 + tWidth3, 145);
		
		
	    cxa.textAlign = 'left';
		cxa.font = "14.5px Cabin";
	    
		/*var txt1 = 'All values are expressed in terms of dry biomass. Some of these values (biomass of domestic animals and people) can be calculated with an error no larger than ± 20%; other values are just the best available conservative estimates and their real totals may be significantly higher; estimates of bacterial, protist and invertebrate biomass have by far the greatest uncertainties, for subterranean and subsea bacteria even the order of the magnitude may be wrong.';
		var txt2 = "The total mass of the Earth's biosphere is on the order 1,600 billion metric tons or 1.6 trillion metric tons. Plants account for about 2/3 of the total, bacteria for nearly a third, all animal biomass adds up to a small fraction of a percent of all planetary biomass.";*/
		
		var txt1 = "Razormind is a network of companies which provide enterprise and internet based services. The group includes partners, investors, suppliers, architects, coders, project managers, and field experts. ";
		
		
		
		var txt2 = "Services provided include enterprise architecture, big data, deep learning and ai, scalability, blockchain based tech, financial services, data centers, mobile architecture.";
		
		var txt3 = "There are just under 60 core staff and 300 support staff fulltime.";
		
		var txt4 = "Razormind is privately owned and operated in a socially responsible manner.";
	
		printAtWordWrap(cxa, txt1, halfX-362, 224, 20, 342 );
	
	    printAtWordWrap(cxa, txt2, halfX-362, 344, 20, 342 );
	
		printAtWordWrap(cxa, txt3, halfX+20, 224, 20, 342 );
		
		printAtWordWrap(cxa, txt4, halfX+20, 363, 20, 342 );
		
		cxa.fillText("*", halfX +10, 363);
		
		cxa.beginPath();
		cxa.moveTo(halfX-362,452.5);
		cxa.lineTo(halfX+362,452.5);
		cxa.stroke();
	
	    cxa.textAlign = 'center';
		cxa.font = "14px Cabin";
		cxa.fillText("CLOSE", halfX, 492);
	
	
	} else {
		if (caveatsAlpha>0) {
			caveatsAlpha -= 10;
			
			cxa.globalAlpha = (caveatsAlpha*0.8)/100;
			cxa.fillStyle = "#111";
			cxa.fillRect(0,0,fullX,fullY);
			cxa.drawImage(bgcImg,0,0,fullX,fullY);
		}
	}
	
	
	cxa.globalAlpha = 1;
	
	/// START FADE IN ///
	
	if (beginAlpha>0) {
		cxa.globalAlpha = beginAlpha/100;
		cxa.fillStyle = "#111";
		cxa.fillRect(0,0,fullX,fullY);
		if (beginYes==1) {
		    beginAlpha -= 2;
		}
	}
	
	
}



/////////////////////////////// SETUP PARALAX LAYERS ///////////////////////////////




function baseline(y,rat) {
	
	//area = (Math.PI*(masterRad*masterRad)) * rat;
	//cRad = Math.sqrt(area/Math.PI) * zoomLevel;
	cRad = ratToRad(rat);
	cy = (y-cRad)/unitOne;
	var baseline = cy;
}


function circleDraw(x,y,c1,c2,rat,a) {
	
	
	// DIMENSIONS
	//area = (Math.PI*(masterRad*masterRad)) * rat;
	//cRad = Math.sqrt(area/Math.PI) * zoomLevel;
	cRad = ratToRad(rat);
	cx = halfX + ((x + camX)*units);
	cy = halfY + ((y + camY)*units);
	
	// GRAD
	var grd = cxa.createLinearGradient(cx,cy-cRad,cx,cy+cRad);
	grd.addColorStop(0, c1); 
	grd.addColorStop(1, c2);
	cxa.fillStyle = grd;
	cxa.globalAlpha = a;
	
	// DRAW //
	cxa.beginPath();
	cxa.arc(cx, cy, cRad, 0, 2 * Math.PI, false);
	cxa.closePath();
	cxa.fill();
	
	
}

function circleDraw2(x,y,c1,c2,rat,a) {
	
	
	// DIMENSIONS
	//area = (Math.PI*(masterRad*masterRad)) * rat;
	//cRad = Math.sqrt(area/Math.PI) * zoomLevel;
	cRad = ratToRad(rat);
	cx = halfX + ((x + camX)*units);
	cy = halfY + ((y + camY)*units);
	
	// GRAD
	var grd = cxa.createLinearGradient(cx,cy-cRad,cx,cy+cRad);
	grd.addColorStop(0, c1); 
	grd.addColorStop(1, c2);
	cxa.fillStyle = grd;
	cxa.globalAlpha = a;
	
	// DRAW //
	cxa.beginPath();
	cxa.arc(cx, cy-cRad, cRad, 0, 2 * Math.PI, false);
	cxa.closePath();
	cxa.fill();
	
	
}
function circleDrawMouse(x,y,c1,c2,rat,a) {
	
	
	cRad = ratToRad(rat);
	
	if (cRad<8) {
		cx = 30 + x;
		cy = 30 + y;
	}
	if (cRad>8 && cRad<100) {
		cx = 15 + cRad + x;
		cy = 15 + cRad + y;
	}
	if (cRad>100) {
		cx = 0 + x;
		cy = 0 + y;
	}
	cxa.globalAlpha = a;
	
	if (cRad<100) {
		//arrow
		cxa.fillStyle = '#fff';
		cxa.beginPath();
		cxa.moveTo(0,cy-10);
		cxa.lineTo(10,cy);
		cxa.lineTo(0,cy+10);
		cxa.closePath();
		cxa.fill();
	}
	
	// GRAD
	var grd = cxa.createLinearGradient(cx,cy-cRad,cx,cy+cRad);
	grd.addColorStop(0, c1); 
	grd.addColorStop(1, c2);
	cxa.fillStyle = grd;
	
	
	// DRAW //
	cxa.beginPath();
	cxa.arc(cx, cy, cRad, 0, 2 * Math.PI, false);
	cxa.closePath();
	cxa.fill();
	
	
	cxa.fillStyle = '#fff';
	cxa.textAlign = 'left';
	
	v1 = cTons[13]+" metric tons";
	v2 = cGT[13]+" Gt";
	
	
	
	if (cRad<100) {
		cxa.font = "700 19px Roboto Condensed";
		cxa.fillText("PEOPLE", cx+(cRad*1)+10, cy+8);
	} else {
		cxa.font = "700 34px Roboto Condensed";
		//cxa.fillText("PEOPLE", 80, 130);
		cxa.fillText("PEOPLE", 40, 60);
	}
	
	cxa.font = "11px Cabin";
	//cxa.fillText(v1, cx, cy+(cRad*1)+55);
	//cxa.fillText(v2, cx, cy+(cRad*1)+71);
	
	if (roll[101]==true) {
		if (cRad>8 && cRad<100) {
			compareRect = 15 + (cRad*2);
		}
		if (cRad>100) {
			compareRect = (cRad*0.7);
		}
	}
	
}


function buttonDraw(x,y,b,a) {
	
	cx = halfX + ((x + camX)*units);
	cy = halfY + ((y + camY)*units);
		
	cxa.globalAlpha = a;
	cxa.fillStyle = '#fff';
	cxa.textAlign = 'center';
	
	
	
	
	cxa.font = "72px Cabin";
	cxa.fillText(b, cx, cy+20);
}

function headerDraw(x,y,s1,s2,t,gt,h,a) {

    cx = halfX + ((x + camX)*units);
    cy = halfY + ((y + camY)*units);
		
	cxa.globalAlpha = a;
	cxa.fillStyle = '#fff';
	cxa.textAlign = 'center';
	
	cxa.font = "700 34px Roboto Condensed ";
	
	underlineWidth = (cxa.measureText(s1).width)/2;
	cxa.fillText(s1, cx, cy);
	
	
	
	cxa.font = "italic 18px Cabin";
	cxa.fillText(s2, cx-17, cy-5);
	
	
	
	cxa.globalAlpha = a;
	
	cxa,lineWidth = 1;
	cxa.strokeStyle = '#fff';
	cxa.beginPath();
	cxa.moveTo(cx-underlineWidth,cy+59.5);
	cxa.lineTo(cx+underlineWidth,cy+59.5);
	cxa.stroke();
	
	
	
	cxa.font = "13px Cabin";
	cxa.fillText(t, cx, cy+28);
	cxa.fillText(gt, cx, cy+43);
}

function headerDraw2(s1,s2,a) {

	cxa.globalAlpha = a;
	cxa.fillStyle = '#fff';
	cxa.textAlign = 'center';
	
	cxa.font = "700 34px Roboto Condensed";
	cxa.fillText(s1, halfX, 60);
	
	cxa.font = "italic 18px Cabin";
	cxa.fillText(s2, halfX-17, 55);
	
	
	/*cxa,lineWidth = 1;
	cxa.strokeStyle = '#fff';
	cxa.beginPath();
	cxa.moveTo(120,90);
	cxa.lineTo(fullX-120,90);
	cxa.stroke();*/
}



function infoDraw(x,y,n,v1,v2,nest,a) {
	
	
	// DIMENSIONS
	
	cx = halfX + ((x + camX)*units);
	cy = halfY + ((y + camY)*units);
	
	// DRAW
	
	cxa.globalAlpha = a;
	cxa.fillStyle = '#fff';
	cxa.textAlign = 'center';
	
	v1 = v1+" metric tons";
	v2 = v2+" Gt";
	
	
	cxa.font = "700 24px Roboto Condensed";
	cxa.fillText(n, cx, cy+41);
	cxa.font = "11px Cabin";
	cxa.fillText(v1, cx, cy+71);
	cxa.fillText(v2, cx, cy+86);
	
	cxa,lineWidth = 1;
	cxa.strokeStyle = '#fff';
	cxa.beginPath();
	cxa.moveTo(cx-80,cy+99.5);
	cxa.lineTo(cx+80,cy+99.5);
	cxa.stroke();
	
	if (nest==true) {
		cxa.font = "48px Cabin";
		cxa.fillText("+", cx, cy+139);
	}
	
}

function infoDraw2(x,y,l,n1,n2,v1,v2,nest,a) {
	
	
	// DIMENSIONS
	
	cx = halfX + ((x + camX)*units);
	cy = halfY + ((y + camY)*units);
	
	// DRAW
	
	cxa.globalAlpha = a;
	cxa.fillStyle = '#fff';
	cxa.textAlign = 'center';
	
	v1 = v1+" metric tons";
	v2 = v2+" Gt";

	
	
	cxa.font = "700 19px Roboto Condensed";
	if (l==1) {
	     cxa.fillText(n1, cx, cy+39);
	} else {
		cxa.fillText(n1, cx, cy+30);
		cxa.fillText(n2, cx, cy+48);
	}
	cxa.font = "11px Cabin";
	cxa.fillText(v1, cx, cy+71);
	cxa.fillText(v2, cx, cy+86);
	
	cxa,lineWidth = 1;
	cxa.strokeStyle = '#fff';
	cxa.beginPath();
	cxa.moveTo(cx-76,cy+99.5);
	cxa.lineTo(cx+76,cy+99.5);
	cxa.stroke();
	
	if (nest==true) {
		cxa.font = "48px Cabin";
		cxa.fillText("+", cx, cy+139);
	}
	
}


function lineDraw(x,y,x2,rat,b,a) {
	
	cRad = ratToRad(rat);
	
	lx = halfX + ((x + camX)*units);
	ly = halfY + ((y + camY)*units);
	lx2 = halfX + ((x2 + camX)*units);
	ly2 = halfY + (((thisBase[b] + camY)*units)-cRad);
	
	
	
	cxa.globalAlpha = a;
	cxa,lineWidth = 1;
	cxa.strokeStyle = '#fff';
	
	cxa.beginPath();
	cxa.moveTo(lx,ly);
	cxa.lineTo(lx2,ly2);
	cxa.stroke();
}

function underline(x,b) {
	
	lx = halfX + ((x + camX)*units);
	ly = halfY + (((thisBase[b] + camY)*units) + 146);
	
	
	
	cxa.globalAlpha = 1;
	cxa,lineWidth = 1;
	cxa.strokeStyle = '#fff';
	
	cxa.beginPath();
	cxa.moveTo(lx-20,ly);
	cxa.lineTo(lx+ 20,ly);
	cxa.stroke();
	
}

function underline2(x,b,rat) {
	
	lx = halfX + ((x + camX)*units);
	ly = halfY + (((thisBase[b] + camY)*units) + 146);
	
	
	
	cxa.globalAlpha = 1;
	cxa,lineWidth = 1;
	cxa.strokeStyle = '#fff';
	
	cxa.beginPath();
	cxa.moveTo(lx-20,ly);
	cxa.lineTo(lx+ 20,ly);
	cxa.stroke();
	
	//circleDraw(x,thisBase[b],"#fff","#fff",1,0.3);
	
	cRad = ratToRad(rat);
	cx = halfX + ((x + camX)*units);
	cy = halfY + ((((thisBase[b]) + camY)*units)-cRad);
	
	cxa.fillStyle = "#fff";
	cxa.globalAlpha = 0.3;
	
	// DRAW //
	cxa.beginPath();
	cxa.arc(cx, cy, cRad, 0, 2 * Math.PI, false);
	cxa.closePath();
	cxa.fill();
	
}



function ratToRad(rat) {
	var area = (Math.PI*(masterRad*masterRad)) * rat;
	var newRad = Math.sqrt(area/Math.PI) * zoomLevel;
	return newRad;
}

function earthDraw(x,y,c1,c2,rat,a) {
	
	
	// DIMENSIONS
	area = (Math.PI*(160*160)) * rat;
	cRad = Math.sqrt(area/Math.PI) * zoomLevel;
	//cRad = ratToRad(rat);
	cx = halfX + ((x + camX)*units);
	cy = halfY + ((y + camY)*units);
	
	// GRAD
	var grd = cxa.createLinearGradient(cx,cy-cRad,cx,cy+cRad);
	grd.addColorStop(0, c1); 
	grd.addColorStop(1, c2);
	cxa.fillStyle = grd;
	cxa.globalAlpha = a;
	
	// DRAW //
	cxa.beginPath();
	cxa.arc(cx, cy, cRad, 0, 2 * Math.PI, false);
	cxa.closePath();
	cxa.fill();
	
	
}

function earthMask(x,y,rat) {
	
	
	// DIMENSIONS
	area = (Math.PI*(160*160)) * rat;
	cRad = Math.sqrt(area/Math.PI) * zoomLevel;
	cx = halfX + ((x + camX)*units);
	cy = halfY + ((y + camY)*units);
	
	
	
	// DRAW //
	cxa.beginPath();
	cxa.arc(cx, cy, cRad, 0, 2 * Math.PI, false);
	cxa.closePath();
	
	
}

function printAtWordWrap( context , text, x, y, lineHeight, fitWidth)
{
    fitWidth = fitWidth || 0;
    
    if (fitWidth <= 0)
    {
        context.fillText( text, x, y );
        return;
    }
    var words = text.split(' ');
    var currentLine = 0;
    var idx = 1;
    while (words.length > 0 && idx <= words.length)
    {
        var str = words.slice(0,idx).join(' ');
        var w = context.measureText(str).width;
        if ( w > fitWidth )
        {
            if (idx==1)
            {
                idx=2;
            }
            context.fillText( words.slice(0,idx-1).join(' '), x, y + (lineHeight*currentLine) );
            currentLine++;
            words = words.splice(idx-1);
            idx = 1;
        }
        else
        {idx++;}
    }
    if  (idx > 0)
        context.fillText( words.join(' '), x, y + (lineHeight*currentLine) );
}


/////////////////////////////////////// DRAWING SFX //////////////////////////////////////




function flashes(c,a) {
	
	//if (progress<700) {
		if (redCount>100) {
			redAlpha = Math.round(a/3);
			redCount = Math.round(Math.random()*95);
		}
		if (purpleCount>100) {
			purpleAlpha = Math.round(a);
			purpleCount = Math.round(Math.random()*95);
		}
	//}
	
	
	redCount += 1;
	purpleCount += 1;
	

	
	if (redAlpha>0.2) {
		redAlpha -= 0.5;
	}
	if (purpleAlpha>0) {
		purpleAlpha -= 0.5;
	}
	
	// DRAWING //
	cxa.globalAlpha = redAlpha/100;
	cxa.fillStyle = "#fff";
	cxa.fillRect(0,0,fullX,fullY);
	cxa.globalAlpha = purpleAlpha/100;
	cxa.fillStyle = c;
	cxa.fillRect(0,0,fullX,fullY);
}



function lifeParticles() {
	
	
	radWidth = masterRad;
	if (radWidth<1) {
		radWidth = 1;
	}
	
	for (i=0;i<lifeNo;i++) {
		
		// CURVE //
		thisDist = radWidth+200;
		thisCurve = 0;
		
		tw = 0.2;
		tl = 3;
		
		if (lifeX[i]>(halfX-(thisDist)) && lifeX[i]<(halfX+(thisDist))) {
			
			if (lifeXS[i]>0) {
				
				mult = (lifeX[i] - (halfX-thisDist))/thisDist;
				thisCurve = (lifeXS[i]*1)*mult;
			    lifeY[i] -= thisCurve;
			} else {
				
				mult = ((halfX+thisDist) - lifeX[i])/thisDist;
				thisCurve = (-lifeXS[i]*1)*mult;
				lifeY[i] -= thisCurve;
			}
			
		}
		
		// RESET //
		if (lifeY[i]<(312-(lifeYS[i]-thisCurve)) && masterRad<108) {
			
			bioSwitch = 1;
			
			lifeX[i] = -500 + (Math.random()*2030);
		    lifeY[i] = 400 + (Math.random()*300);
			/*if (masterRad<80) {
			    lifeR[i] = 1 + (Math.random()*3);
			} else {
				lifeR[i] = 0.5 + (Math.random()*1.5);
			}*/
			speedRand = 10 + Math.round(Math.random()*200);
			
			if (lifeX[i]<halfX) {
				lifeDestX = halfX - Math.random()*masterRad;
			} else {
				lifeDestX = halfX + Math.random()*masterRad;
			}
			
			lifeXS[i] = ((lifeDestX-lifeX[i])/speedRand);
			lifeYS[i] = ((384-lifeY[i])/speedRand);
			
			lifeA[i] = 0;
			
		}
		
		
		
		
		
		
		
		
		
		if (masterRad<97) {
		
			// MOVE //
			lifeX[i] += lifeXS[i];
			lifeY[i] += lifeYS[i];
			
			
			
			
			
			lifeC[i] -= 1;
			
			if (lifeC[i]<1 && lifeA[i]<100) {
				lifeA[i] += 1;
			}
			
			// DRAWING //
			cxa.globalAlpha = lifeA[i]/100;
			cxa.fillStyle = '#19d1c9';
			//cxa.beginPath();
			//cxa.arc(lifeX[i], lifeY[i], lifeR[i], 0, 2 * Math.PI, false);
			//cxa.closePath();
			//cxa.fill();
			
			ytw = lifeYS[i]*tw;
			xtw = lifeXS[i]*tw;
			
			if (ytw>4) {
				ytw = 4;
			}
			if (xtw>4) {
				xtw = 4;
			}
			
			
			// TAIL //
			cxa.beginPath();
			cxa.moveTo(lifeX[i]+ytw,lifeY[i]-xtw);
			cxa.lineTo(lifeX[i]-(lifeXS[i]*tl),lifeY[i]-((lifeYS[i]-thisCurve)*tl));
			cxa.lineTo(lifeX[i]-ytw,lifeY[i]+xtw);
			cxa.closePath();
			cxa.fill();
			
			
		}
		else if (lifeY[i]>halfY && lifeY[i]<570 && lifeX[i]>-10 && lifeX[i]<1035) {
		
			// MOVE //
			lifeX[i] += lifeXS[i];
			lifeY[i] += lifeYS[i];
			
			if (masterRad<113 && lifeA[i]<100) {
				lifeA[i] += 1;
			}
			
			// DRAWING //
			cxa.globalAlpha = lifeA[i]/100;
			cxa.fillStyle = '#19d1c9';
			//cxa.beginPath();
			//cxa.arc(lifeX[i], lifeY[i], lifeR[i], 0, 2 * Math.PI, false);
			//cxa.closePath();
			//cxa.fill();
			
			// TAIL //
			cxa.beginPath();
			cxa.moveTo(lifeX[i]+(lifeYS[i]*tw),lifeY[i]-(lifeXS[i]*tw));
			cxa.lineTo(lifeX[i]-(lifeXS[i]*tl),lifeY[i]-((lifeYS[i]-thisCurve)*tl));
			cxa.lineTo(lifeX[i]-(lifeYS[i]*tw),lifeY[i]+(lifeXS[i]*tw));
			cxa.closePath();
			cxa.fill();
		}
		
		if (masterRad>113 && lifeA[i]>0) {
				lifeA[i] -= 1;
		}
		
		
	}
}

function beams() {
	// BEAMS //
		for (i=0;i<beamNo;i++) {
			
			beamC[i] -= 1;
			
			if (beamA[i]>0) {
				beamA[i] -= 10;
			}
			
			if (beamC[i]==0 && beamA[i]==0 && testCount<580) { // RESET
				beamA[i] = 100;
				beamC[i] = 10 + Math.round(Math.random()*30);
				beamX[i] = ((halfX - (masterRad*0.5)) + (Math.random()*(masterRad)));
				beamT[i] = Math.floor(Math.random()*3);
			}
			
			// DRAW //
			cxa.globalAlpha = beamA[i]/100;
			cxa.fillStyle = '#02bacb';
			if (beamT[i]==0) {
				cxa.beginPath();
				cxa.moveTo(beamX[i]-(beamW[i]/2),300);
				cxa.lineTo(beamX[i],360 + (Math.random()*40));
				cxa.lineTo(beamX[i]+(beamW[i]/2),300);
			} else {
				cxa.beginPath();
				cxa.moveTo(beamX[i]-(beamW[i]/2),424);
				cxa.lineTo(beamX[i],380 - (Math.random()*40));
				cxa.lineTo(beamX[i]+(beamW[i]/2),424);

			}
			cxa.closePath();
			cxa.fill();
			
			
		}
}

function dust() {
	
	
	tw = 0.02;
	//tw = 0.2;
	tl = 4;
	
	for (i=0;i<dustNo;i++) {
		
		thisXS = ((camDestX-camX)*(dustS[i]));
	    thisYS = (((camDestY-camY)*1.2)*(dustS[i]));
		
		
		dustX[i] += thisXS;
		dustY[i] += thisYS;
		
		cxa.globalAlpha = fadeOut*0.1;
		cxa.fillStyle = '#fff';
		
		
		cxa.beginPath();
		//cxa.arc(halfX + (dustX[i]*zoomLevel), halfY + (dustY[i]*zoomLevel), 2, 0, 2 * Math.PI, false);
		
		
		cxa.moveTo(dustX[i]+(thisYS*tw),dustY[i]-(thisXS*tw));
		cxa.lineTo(dustX[i]-(thisXS*tl),dustY[i]-(thisYS*tl));
		cxa.lineTo(dustX[i]-(thisYS*tw),dustY[i]+(thisXS*tw));
		cxa.lineTo(dustX[i]+(thisXS*tl),dustY[i]+(thisYS*tl));
		
		
		cxa.closePath();
		cxa.fill();
	
	}
	
}

function throb() {
	
	if (throbDir==0&&throbA<100) {
		throbA += 2;
	}
	if (throbDir==1&&throbA>0) {
		throbA -= 2;
	}
	if (throbA==100) {
		throbDir = 1;
	}
	if (throbA==0&&throbDir==1) {
		setTimeout(function(){
			throbDir = 0;
		},1000);
	}
	
	if (throbDir2==0&&throbA2<100) {
		throbA2 += 2;
	}
	if (throbDir2==1&&throbA2>0) {
		throbA2 -= 2;
	}
	if (throbA2==100) {
		throbDir2 = 1;
	}
	if (throbA2==0&&throbDir2==1&&throbTime!==1) {
		throbTime = 1;
		setTimeout(function(){
			throbTime = 0;
			throbDir2 = 0;
		},6000);
	}
	
	
	
    circleDraw(0,0,"#0080ec","#00fcff",1,throbA/120);
	circleDraw(0,0,"#00fcff","#0080ec",1,throbA2/110);

}

function sparks() {
	
	if (sparkAlpha<100) {
		sparkAlpha += 1;
	}
	
	for (i=0;i<sparkNo;i++) {
			if (sparkC[i]>0) {
			    sparkC[i] -= 2;
			}
			sparkY[i] -= 7 + Math.floor(Math.random()*8);
			
			if (sparkA[i]>0) {
				sparkA[i] -= 4;
			}
			
			if (sparkC[i]<1 && sparkA[i]==0) { // RESET
				sparkA[i] = 100;
				sparkC[i] = 300;
				sparkX[i] = ((halfX - (masterRad*0.8)) + (Math.random()*(masterRad*1.6)));
				sparkY[i] = halfY + 80 + (Math.floor(Math.random()*-90));
			}
			
			// DRAW //
			cxa.globalAlpha = (sparkA[i]/100)*(sparkAlpha/100);
			cxa.fillStyle = '#01edf0';
			cxa.beginPath();
			cxa.moveTo(sparkX[i]-1,sparkY[i]+12);
			cxa.lineTo(sparkX[i],sparkY[i]-(sparkA[i]*0.7));
			cxa.lineTo(sparkX[i]+1,sparkY[i]+12);
			cxa.lineTo(sparkX[i],sparkY[i]+20+(sparkA[i]*0.3));
			
			cxa.closePath();
			cxa.fill();
			
			
		}
}



///////   ZOOMING /////////////

function zoomTo(z,d,s) {
	zSpeed = s;
	zSpeedDest = d;
	zoomDest = z;
}

///////  CAMERA  ///////////////

function camTo(x,y,d,s) {
	camSpeed = s;
	camSpeedDest = d;
	camDestX = x;
	camDestY = y;
}





////////////////////////////// RESIZE EVERYTHING ////////////////////////////


function resize_canvas() {
	
	canvasDestW = canvasA.width = 1024;
	canvasDestH = canvasA.height = 560;
	
	
	var pageHeight = window.innerHeight;
	document.getElementById("layerA").style.marginTop = ""+((pageHeight - canvasDestH)/2)+"px";
	
	
	unitOne = Math.round(canvasA.width/64);
	units = unitOne*zoomLevel;
	
	unitSmall = canvasA.width/2000;
	
	halfX = Math.round(canvasA.width/2);
	halfY = Math.round(canvasDestH/2);
	fullX = canvasA.width;
	fullY = canvasDestH;	
	headerType = Math.round(canvasA.width/24);
	midType = Math.round(canvasA.width/30);
	bodyType = Math.round(canvasA.width/80);
	subType = Math.round(canvasA.width/130);
	
	if (headerType<30) {
		headerType = 30;
	}
	if (midType<22) {
		midType = 22;
	}
	if (bodyType<12) {
		bodyType = 12;
	}
	if (subType<6) {
		subType = 6;
	}
	if (units<30) {
		units = 30;
	}
	
	
	y1 = desty1 = halfY-units;
	h1 = desth1 = units*2;
	bgx = destbgx = units*2;
	bgw = destbgw = fullX-(units*4);
	introDestY = halfY+(unitOne*3);
	
			
}


//////////////////////////////  MOUSE/KEYBOARD/TOUCH FUNCTIONS ////////////////////////////////

// SCROLL INIT //

function onScroll(e) {
  var topScroll = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  /*var scrollDest = canvasA.offsetTop-300;
  
  if (topScroll > scrollDest && beginYes == 0) {
	  beginYes = 1;
  }*/
  
  //var topScroll = document.body.scrollTop();
  if (topScroll > scrollDest && beginYes == 0) {
	  beginYes = 1;
  }
}



function setRollover() {
	rollOver = 1;
}

function setRollout() {
	rollOver = 0;
}

function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}


function mouseMove(event) {
	
	var pos = findPos(this);
    var x = event.pageX - pos.x;
    var y = event.pageY - pos.y;

    var mox = x;
	var moy = y;
	
	mouseX = mox;
    mouseY = moy;
	
	rollCheck();
}

function rollCheck() {
	
	mox = mouseX;
	moy = mouseY;
	
	if (masterRad>122) {
	roll[100] = rectCheck(fullX-50,10,40,40,mox,moy);
	roll[101] = rectCheck(0,0,compareRect,compareRect,mox,moy);
	}
	
	if (chartStage==1) {
	    roll[0] = circleCheck(0,0,mox,moy,masterRad);
	}
	if (chartStage==2) { // BIO
	    roll[1] = circleCheck(0,0,mox,moy,masterRad*zoomLevel);
		roll[2] = squareCheck2(-34,thisBase[2],ratToRad(cRat[1]),mox,moy);
		roll[3] = squareCheck2(-17,thisBase[2],ratToRad(cRat[2]),mox,moy);
		roll[4] = squareCheck2(34,thisBase[2],ratToRad(cRat[5]),mox,moy);
	}
	if (chartStage==3) { // PLANTS
	    roll[5] = circleCheck(-34,cY[3],mox,moy,ratToRad(cRat[1]));
		roll[6] = squareCheck2(-44,thisBase[3],ratToRad(cRat[6]),mox,moy);
	}
	if (chartStage==4) { // BACTERIA
	    roll[7] = circleCheck(-17,cY[4],mox,moy,ratToRad(cRat[2]));
	}
	if (chartStage==5) { // ANIMALS
	    roll[8] = circleCheck(30,cY[5],mox,moy,ratToRad(cRat[5]));
		roll[9] = squareCheck2(28.7,thisBase[5],ratToRad(cRat[10]),mox,moy);
		roll[10] = squareCheck2(29.35,thisBase[5],ratToRad(cRat[14]),mox,moy);
		roll[11] = squareCheck2(30,thisBase[5],ratToRad(cRat[12]),mox,moy);
		roll[12] = squareCheck2(31.3,thisBase[5],ratToRad(cRat[11]),mox,moy);
	}
	if (chartStage==6) { // FORESTS
	    roll[13] = circleCheck(-44,cY[6],mox,moy,ratToRad(cRat[6]));
	}
	if (chartStage==7) { // INVERTEBRATES
	    roll[14] = circleCheck(28.8,cY[7],mox,moy,ratToRad(cRat[10]));
		roll[18] = squareCheck2(28.4,thisBase[7],ratToRad(cRat[16]),mox,moy);
	}
	if (chartStage==8) { // MARINE ANIMALS
	    roll[15] = circleCheck(29.4,cY[8],mox,moy,ratToRad(cRat[14]));
		roll[20] = squareCheck2(29.6,thisBase[8],ratToRad(cRat[22]),mox,moy);
		roll[22] = squareCheck2(29.2,thisBase[8],ratToRad(cRat[23]),mox,moy);
	}
	if (chartStage==9) { // DOMESTIC ANIMALS
	    roll[16] = circleCheck(30,cY[9],mox,moy,ratToRad(cRat[12]));
	}
	if (chartStage==10) { // WILD ANIMALS
	    roll[17] = circleCheck(31.2,cY[10],mox,moy,ratToRad(cRat[11]));
	}
	if (chartStage==11) { // INVERTEBRATES
	    roll[19] = circleCheck(28.4,cY[11],mox,moy,ratToRad(cRat[16]));
	}
	if (chartStage==12) { // MARINE INVERTEBRATES
	    roll[21] = circleCheck(29.6,cY[12],mox,moy,ratToRad(cRat[22]));
	}
	if (chartStage==13) { // MARINE VERTEBRATES
	    roll[23] = circleCheck(29.2,cY[13],mox,moy,ratToRad(cRat[23]));
	}
}

function rectCheck(x,y,w,h,mx,my) { // IS CURSOR WITHIN GIVEN BOUNDARIES

    cx = x;
	cy = y;
	cw = w;
	ch = h;
	
	if (mx>cx && mx<(cx+cw) && my>cy && my<(cy+ch)) {
		return true;
	} else {return false};
	
}

function squareCheck(x,y,mx,my) { // IS CURSOR WITHIN GIVEN BOUNDARIES

    cx = (halfX + ((x + camX)*units)) - 64;
	cy = halfY + ((y + camY)*units);
	cw = 128;
	ch = 160;
	
	if (mx>cx && mx<(cx+cw) && my>cy && my<(cy+ch)) {
		return true;
	} else {return false};
	
}

function squareCheck2(x,y,rad,mx,my) { // IS CURSOR WITHIN GIVEN BOUNDARIES

    cx1 = (halfX + ((x + camX)*units));
    cx = cx1 - 64;
	cy = halfY + ((y + camY)*units);
	cw = 128;
	ch = 160;
	
	dx = cx1-mx;
	dy = (cy-rad)-my;
	dxdy = Math.sqrt((dx * dx) + (dy * dy));
	
	if ((mx>cx && mx<(cx+cw) && my>cy && my<(cy+ch))||dxdy<rad) {
		return true;
	} else {return false};
	
}

function circleCheck(x, y, mx, my, rad) {
	
	cx = halfX + ((x + camX)*units);
	cy = halfY + ((y + camY)*units);

    dx = cx-mx;
    dy = cy-my;
    dxdy =  Math.sqrt((dx * dx) + (dy * dy));
	if (dxdy<rad) {
		return true;
	} else {return false};
	
}

function rollTimer(t) {
	setTimeout(function(){
				
				rollCheck();
				},t);
}


function getPosition(event) { // ANY MOUSECLICK

  if (caveats==false) {
	  
	if (roll[100]==true) {
		caveats = true;
	}
	
	
	
	rollTimer(500);
	rollTimer(1000);
	
	if (chartStage==1) {
		if (roll[0]==true) { // BIO EXPAND
		    roll[0] = false;
			chartStage = 2;
			pathHere = 1;
			
			camTo(0,-9.4,12,12);
			zoomTo(0.7,12,12);
			cY[2] = 0;
			
			
			overlayDestA = 0;
			
			thisBase[2] = cY[2] + 18;
			thisDestBase[2] = cY[2] + 18;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = fadeDestOut = 1;
			
			
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[2] = cY[2] + 18.6;
				},600);
			
		}
	} else if (chartStage==2) {
		if (roll[1]==true) { // BIO BACK
		    roll[1] = false;
			chartStage = 1;
			pathHere = 2;
			
			camTo(0,1.3,12,12);
			zoomTo(1,12,12);
			overlayDestA = 1;
			
			downA = thisA;
			upA = 0;
			upDestA = 1;
			thisDestBase[2] = 12;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = fadeDestOut = 1;
			
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				},700);
			
			
		}
		else if (roll[2]==true) { // PLANTS EXPAND
		    roll[2] = false;
			chartStage = 3;
			pathHere = 1;
			
			camTo(34,-20,12,12);
			zoomTo(0.84,12,12);
			cY[3] = 12.2;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = fadeDestOut = 1;
			
			thisDestBase[3] = thisBase[3] = cY[3] + 15.5;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[3] = cY[3] + 15.5;
				},800);
			
		}
		else if (roll[3]==true) { // BACTERIA EXPAND
		    roll[3] = false;
			chartStage = 4;
			
			camTo(17,-19.6,12,12);
			zoomTo(1.25,12,12);
			cY[4] = 14.3;
			
			thisDestBase[4] = thisBase[4] = cY[4] + 10;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = fadeDestOut = 1;
			
			
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[4] = cY[4] + 10.5;
				},800);
			
		}
		else if (roll[4]==true) { // ANIMALS EXPAND
		    roll[4] = false;
			chartStage = 5;
			pathHere = 1;
			
			camTo(-30,-18.67,12,10);
			zoomTo(1.3,12,12);
			setTimeout(function(){
				zoomTo(17.5,12,0);
				},600);
				
			
			cY[5] = 18.29;
			
			thisDestBase[5] = thisBase[5] = cY[5] + 0.75;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = fadeDestOut = 1;
			
			
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[5] = cY[5] + 0.75;
				},1000);
			
		}
		
		
		
	} else if (chartStage==3) {
		if (roll[5]==true) { // BACK FROM PLANTS
		    roll[5] = false;
			
			chartStage = 2;
			pathHere = 2;
			
			camTo(0,-9.4,12,12);
			zoomTo(0.7,12,12);
			
			fadeIn = fadeDestIn = 0;
			fadeOut = 1;
			fadeDestOut = 0;
			thisDestBase[2] = cY[2] + 18.6;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[2] = cY[2] + 18.6;
				},800);
		}
		
		if (roll[6]==true) { // FORESTS EXPAND
		    roll[6] = false;
			chartStage = 6;
			
			
			camTo(44,-29,12,12);
			zoomTo(0.93,12,12);
			cY[6] = 21.9;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = fadeDestOut = 1;
			
			thisDestBase[6] = thisBase[6] = cY[6] + 14;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[6] = cY[6] + 14;
				},800);
		}
		
		
		
		
		
	} else if (chartStage==4) {
		if (roll[7]==true) { // BACK FROM BACTERIA
		    roll[7] = false;
			chartStage = 2;
			pathHere = 3;
			
			camTo(0,-9.4,12,12);
			zoomTo(0.7,12,12);
			
			fadeIn = fadeDestIn = 0;
			fadeOut = 1;
			fadeDestOut = 0;
			thisDestBase[2] = cY[2] + 18.6;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[2] = cY[2] + 18.6;
				},800);
		}
		
		
		
		
	} else if (chartStage==5) {
		if (roll[8]==true) { // BACK FROM ANIMALS
		    roll[8] = false;
			chartStage = 2;
			pathHere = 4;
			
			camTo(0,-9.4,12,12);
			zoomTo(0.7,12,12);
			
			fadeIn = fadeDestIn = 0;
			fadeOut = 1;
			fadeDestOut = 0;
			thisDestBase[2] = cY[2] + 18.6;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[2] = cY[2] + 18.6;
				},800);
		}
		if (roll[9]==true) { // INVERTEBRATES EXPAND
		    roll[9] = false;
			chartStage = 7;
			pathHere = 1;
			
			camTo(-28.8,-19.086,12,12);
			zoomTo(23,12,12);
			cY[7] = 18.804;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = fadeDestOut = 1;
			
			thisDestBase[7] = thisBase[7] = cY[7] + 0.565;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[7] = cY[7] + 0.565;
				},800);
		}
		if (roll[10]==true) { // MARINE ANIMALS EXPAND
		    roll[10] = false;
			chartStage = 8;
			pathHere = 1;
			
			camTo(-29.4,-19.07,12,12);
			zoomTo(40,12,0);
			cY[8] = 18.903;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = fadeDestOut = 1;
			
			thisDestBase[8] = thisBase[8] = cY[8] + 0.33;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[8] = cY[8] + 0.33;
				},800);
		}
		if (roll[11]==true) { // DOMESTIC ANIMALS EXPAND
		    roll[11] = false;
			chartStage = 9;
			
			camTo(-30,-19.064,12,12);
			zoomTo(51,12,0);
			cY[9] = 18.934;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = fadeDestOut = 1;
			
			thisDestBase[9] = thisBase[9] = cY[9] + 0.257;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[9] = cY[9] + 0.257;
				},1000);
		}
		if (roll[12]==true) { // WILD ANIMALS EXPAND
		    roll[12] = false;
			chartStage = 10;
			
			camTo(-31.2,-19.0445,12,12);
			zoomTo(50,12,0);
			setTimeout(function(){
				zoomTo(278,12,0);
			},500);
			cY[10] = 19.0205;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = fadeDestOut = 1;
			
			thisDestBase[10] = thisBase[10] = cY[10] + 0.047;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[10] = cY[10] + 0.047;
				},1000);
		}
		
		
		
		
		
	} else if (chartStage==6) {
		if (roll[13]==true) { // BACK FROM FORESTS
		    roll[13] = false;
			chartStage = 3;
			pathHere = 2;
			
			camTo(34,-20,12,12);
			zoomTo(0.84,12,12);
			cY[3] = 12.2;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = 1;
			fadeDestOut = 0;
			thisDestBase[3] = thisBase[3] = cY[3] + 15.5;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[3] = cY[3] + 15.5;
				},800);
		}
		
	} else if (chartStage==7) {
		if (roll[14]==true) { // BACK FROM INVERTEBRATES
		    roll[14] = false;
			chartStage = 5;
			pathHere = 2;
			
			camTo(-30,-18.67,12,12);
			zoomTo(17.5,12,0);
				
			
			cY[5] = 18.29;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = 1;
			fadeDestOut = 0;
			thisDestBase[5] = thisBase[5] = cY[5] + 0.75;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[5] = cY[5] + 0.75;
				},800);
		}
		if (roll[18]==true) { // INSECTS EXPAND
		    roll[18] = false;
			chartStage = 11;
			
			camTo(-28.4,-19.4,12,12);
			zoomTo(34,12,12);
			cY[11] = 19.207;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = fadeDestOut = 1;
			
			thisDestBase[11] = thisBase[11] = cY[11] + 0.385;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[11] = cY[11] + 0.385;
				},800);
		}
		
	} else if (chartStage==8) {
		if (roll[15]==true) { // BACK FROM MARINE ANIMALS
		    roll[15] = false;
			chartStage = 5;
			pathHere = 3;
			
			camTo(-30,-18.67,12,12);
			zoomTo(17.5,12,0);
				
			
			cY[5] = 18.29;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = 1;
			fadeDestOut = 0;
			thisDestBase[5] = thisBase[5] = cY[5] + 0.75;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[5] = cY[5] + 0.75;
				},800);
		}
		if (roll[20]==true) { // MARINE INVERTEBRATES EXPAND
		    roll[20] = false;
			chartStage = 12;
			
			camTo(-29.6,-19.253,12,12);
			zoomTo(62,12,12);
			cY[12] = 19.146;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = fadeDestOut = 1;
			
			thisDestBase[12] = thisBase[12] = cY[12] + 0.21;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[12] = cY[12] + 0.21;
				},800);
		}
		if (roll[22]==true) { // MARINE VERTEBRATES EXPAND
		    roll[22] = false;
			chartStage = 13;
			
			camTo(-29.2,-19.25,12,12);
			zoomTo(57,12,12);
			cY[13] = 19.136;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = fadeDestOut = 1;
			
			thisDestBase[13] = thisBase[13] = cY[13] + 0.228;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[13] = cY[13] + 0.228;
				},800);
		}
		
	} else if (chartStage==9) {
		if (roll[16]==true) { // BACK FROM DOMESTIC ANIMALS
		    roll[16] = false;
			chartStage = 5;
			pathHere = 4;
			
			camTo(-30,-18.67,12,12);
			zoomTo(17.5,12,0);
				
			
			cY[5] = 18.29;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = 1;
			fadeDestOut = 0;
			thisDestBase[5] = thisBase[5] = cY[5] + 0.75;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[5] = cY[5] + 0.75;
				},800);
		}
		
	} else if (chartStage==10) {
		if (roll[17]==true) { // BACK FROM WILD ANIMALS
		    roll[17] = false;
			chartStage = 5;
			pathHere = 5;
			
			camTo(-30,-18.67,12,12);
			zoomTo(17.5,12,0);
				
			
			cY[5] = 18.29;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = 1;
			fadeDestOut = 0;
			thisDestBase[5] = thisBase[5] = cY[5] + 0.75;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[5] = cY[5] + 0.75;
				},800);
		}
		
	}
	else if (chartStage==11) {
		if (roll[19]==true) { // BACK FROM INSECTS
		    roll[19] = false;
			chartStage = 7;
			pathHere = 2;
			
			
			camTo(-28.8,-19.086,12,12);
			zoomTo(23,12,12);
			cY[7] = 18.804;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = 1;
			fadeDestOut = 0;
			thisDestBase[7] = thisBase[7] = cY[7] + 0.565;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[7] = cY[7] + 0.565;
				},800);
		}
		
	}
	else if (chartStage==12) {
		if (roll[21]==true) { // BACK FROM MARINE INVERTEBRATES
		    roll[21] = false;
			chartStage = 8;
			pathHere = 3;
			
			
			camTo(-29.4,-19.07,12,12);
			zoomTo(40,12,0);
			cY[8] = 18.903;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = 1;
			fadeDestOut = 0;
			thisDestBase[8] = thisBase[8] = cY[8] + 0.33;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[8] = cY[8] + 0.33;
				},800);
		}
		
	}
	else if (chartStage==13) {
		if (roll[23]==true) { // BACK FROM MARINE VERTEBRATES
		    roll[23] = false;
			chartStage = 8;
			pathHere = 2;
			
			
			camTo(-29.4,-19.07,12,12);
			zoomTo(40,12,0);
			cY[8] = 18.903;
			
			fadeIn = fadeDestIn = 0;
			fadeOut = 1;
			fadeDestOut = 0;
			thisDestBase[8] = thisBase[8] = cY[8] + 0.33;
			setTimeout(function(){
				
				fadeDestIn = 1;
				fadeDestOut = 0;
				thisDestBase[8] = cY[8] + 0.33;
				},800);
		}
		
	}
	
	
  } else {
	  caveats = false;
  }
	
}




//////////////////////////////////  SCENES  /////////////////////////////////////
//////////////////////////////////  ______  /////////////////////////////////////



function groundAnim() {
	
	cxa.globalAlpha = earthTint3/100;
	
	// COLOURS //
	
	if (testCount>200) { // delay drawing these 3 colours
	
		// 4
		
		// MOVE
		if (colSwitch4==1) {
			colRad4 += ((0-colRad4)/100)*3;
		}
		
		// DRAW
		cxa.fillStyle = '#382a47';
		//cxa.fillStyle = '#153047';
		
		cxa.save();
		cxa.scale(1, 0.19);
		cxa.beginPath();
		cxa.arc(halfX, 2210 + (colRad4/3), colRad4, 0, Math.PI*2, false);
		cxa.fill();
		cxa.closePath();
		cxa.restore();
		
		// 3
		
		// MOVE
		if (colSwitch3==1) {
			colRad3 += ((0-colRad3)/100)*3;
		}
		
		// DRAW
		cxa.fillStyle = '#003551';
		//cxa.fillStyle = '#003947';
		
		cxa.save();
		cxa.scale(1, 0.19);
		cxa.beginPath();
		cxa.arc(halfX, 2210 + (colRad3/3), colRad3, 0, Math.PI*2, false);
		cxa.fill();
		cxa.closePath();
		cxa.restore();
		
		// 2
		
		// MOVE
		if (colSwitch2==1) {
			colRad2 += ((0-colRad2)/100)*3;
		}
		
		// DRAW
		cxa.fillStyle = '#004a47';
		//cxa.fillStyle = '#004e4f';
		
		cxa.save();
		cxa.scale(1, 0.19);
		cxa.beginPath();
		cxa.arc(halfX, 2210 + (colRad2/3), colRad2, 0, Math.PI*2, false);
		cxa.fill();
		cxa.closePath();
		cxa.restore();
	
    }
	
	// 1
	
	// MOVE
	if (colSwitch1==1) {
		colRad1 += ((0-colRad1)/100)*3;
	}
	
	// DRAW
	cxa.fillStyle = '#005639';
	//cxa.fillStyle = '#016142';
	
	cxa.save();
	cxa.scale(1, 0.19);
	cxa.beginPath();
	cxa.arc(halfX, 2210 + (colRad1/3), colRad1, 0, Math.PI*2, false);
	cxa.fill();
	cxa.closePath();
	cxa.restore();
	
	
	
	// OVERLAY //
	cxa.globalAlpha = 1;
	if (zoomLevel>0.99) {
	    cxa.drawImage(overlayImg,0,0,fullX,410);
	}
	
	
	
}

function drawEarth() {
	
		// EARTH //
		earthDraw(0,366,"#232324","#232324",1300,1);
		earthDraw(0,366,"#0f4443","#0f4443",1300,earthTint2/100);
}

function chart1() {
	
	
	
	if (chartStage==1) {
		
		//DOWN
		pos1 = -34;
		pos2 = -17;
		pos3 = 0;
		pos4 = 17;
		pos5 = 34;
		
		// LINES
		lineDraw(0,0,pos1,cRat[1],2,downA*0.2);
		lineDraw(0,0,pos2,cRat[2],2,downA*0.2);
		lineDraw(0,0,pos3,cRat[3],2,downA*0.2);
		lineDraw(0,0,pos4,cRat[4],2,downA*0.2);
	    lineDraw(0,0,pos5,cRat[5],2,downA*0.2);
		
		// CIRCLES
		circleDraw2(pos1,thisBase[2],"#95feaa","#68f2b0",cRat[1],downA);
		circleDraw2(pos2,thisBase[2],"#dcacd2","#e09db8",cRat[2],downA);
		circleDraw2(pos3,thisBase[2],"#93dbff","#93e7ff",cRat[3],downA);
		circleDraw2(pos4,thisBase[2],"#b492e9","#d086f2",cRat[4],downA);
		circleDraw2(pos5,thisBase[2],"#fff294","#ffe971",cRat[5],downA);
		
		
		if (pathHere==1) {
			thisA = stageAlpha1/100;
		} else {
			thisA = fadeIn;
		}
		
		
		// CURRENT
	
	    circleDraw(0,0,"#33e8c7","#02bacb",1,bioAlpha);
		headerDraw(0,-12.5,"RAZORMIND      GLOBALLY","WORK","58 Million GBP Turnover 2015 ", "58M GBP",true,thisA);
		
		if (masterRad>123) {
		  throb();
		}
		
		
		
		
		if (roll[0]==true && beginYes==2) {
			circleDraw(0,0,"#fff","#fff",1,0.3);
		}
		
		if (masterRad>119) {
		  sparks();
		}
		buttonDraw(0,0,"+",stageAlpha1/100);
	
	} 
	if (chartStage==2) { // BIO
	
	    pos1 = -34;
		pos2 = -17;
		pos3 = 0;
		pos4 = 17;
		pos5 = 34;
	
	
	    //CURRENT
		if (pathHere==1) {
			thisA = fadeIn;
		} else {
			thisA = 1;
		}
		
		
		// LINES
		lineDraw(0,0,pos1,cRat[1],2,thisA*0.2);
		lineDraw(0,0,pos2,cRat[2],2,thisA*0.2);
		lineDraw(0,0,pos3,cRat[3],2,thisA*0.2);
		lineDraw(0,0,pos4,cRat[4],2,thisA*0.2);
	    lineDraw(0,0,pos5,cRat[5],2,thisA*0.2);
		
		circleDraw2(pos1,thisBase[2],noCol,noCol2,cRat[1],thisA);
		circleDraw2(pos2,thisBase[2],noCol,noCol2,cRat[2],thisA);
		circleDraw2(pos3,thisBase[2],noCol,noCol2,cRat[3],thisA);
		circleDraw2(pos4,thisBase[2],noCol,noCol2,cRat[4],thisA);
		circleDraw2(pos5,thisBase[2],noCol,noCol2,cRat[5],thisA);
		circleDraw(0,0,noCol,noCol2,1,1);
		
		// CIRCLES
		circleDraw2(pos1,thisBase[2],"#95feaa","#68f2b0",cRat[1],fadeIn);
		circleDraw2(pos2,thisBase[2],"#dcacd2","#e09db8",cRat[2],fadeIn);
		circleDraw2(pos3,thisBase[2],"#93dbff","#93e7ff",cRat[3],fadeIn);
		circleDraw2(pos4,thisBase[2],"#b492e9","#d086f2",cRat[4],fadeIn);
		circleDraw2(pos5,thisBase[2],"#fff294","#ffe971",cRat[5],fadeIn);
		
		// INFO
		infoDraw(pos1,thisBase[2],"PLANTS",cTons[1],cGT[1],true,fadeIn);
		infoDraw(pos2,thisBase[2],"BACTERIA",cTons[2],cGT[2],true,fadeIn);
		infoDraw(pos3,thisBase[2],"PROTISTS",cTons[3],cGT[3],false,fadeIn);
		infoDraw(pos4,thisBase[2],"FUNGI",cTons[4],cGT[4],false,fadeIn);
		infoDraw(pos5,thisBase[2],"ANIMALS",cTons[5],cGT[5],true, fadeIn);
		
		
		if (pathHere==1) {
			circleDraw(0,0,"#33e8c7","#02bacb",1,1);
		} else {
			circleDraw(0,0,"#33e8c7","#02bacb",1,fadeIn);
		}
		
		if (pathHere==2) {
			lineDraw(-30,cY[3],pos6,cRat[6],3,fadeOut*0.2);
			lineDraw(-30,cY[3],pos7,cRat[7],3,fadeOut*0.2);
			circleDraw2(pos6,thisBase[3],"#169b68","#007c69",cRat[6],fadeOut);
			circleDraw2(pos7,thisBase[3],"#b1e474","#93ef7a",cRat[7],fadeOut);
			circleDraw2(pos1,thisBase[2],"#95feaa","#85febb",cRat[1],1);
		}
	    if (pathHere==3) {
			lineDraw(-15,cY[4],pos6,cRat[27],4,fadeOut*0.2);
			lineDraw(-15,cY[4],pos7,cRat[29],4,fadeOut*0.2);
			lineDraw(-15,cY[4],pos8,cRat[26],4,fadeOut*0.2);
			lineDraw(-15,cY[4],pos9,cRat[28],4,fadeOut*0.2);
			circleDraw2(pos6,thisBase[4],"#f987b7","#cc6cc0",cRat[27],fadeOut);
			circleDraw2(pos7,thisBase[4],"#ea7375","#f15784",cRat[29],fadeOut);
			circleDraw2(pos8,thisBase[4],"#8954a2","#7343a3",cRat[26],fadeOut);
			circleDraw2(pos9,thisBase[4],"#ff9c9c","#ff9c9c",cRat[28],fadeOut);
			circleDraw2(pos2,thisBase[2],"#dcacd2","#e09db8",cRat[2],1);
		}
		if (pathHere==4) {
			circleDraw2(pos5,thisBase[2],"#fff294","#ffe971",cRat[5],1);
		}
		
		
		
		// BIOSPHERE
		
		headerDraw2("LIFE      EARTH","ON",fadeIn);
		
		buttonDraw(0,cY[2],"-",fadeIn);
		
		
		if (roll[1]==true) {
			circleDraw(0,0,"#fff","#fff",1,0.3);
		}
		
		if (roll[2]==true) {
			underline2(pos1,2,cRat[1]);
		}
		if (roll[3]==true) {
			underline2(pos2,2,cRat[2]);
		}
		if (roll[4]==true) {
			underline2(pos5,2,cRat[5]);
		}
		
		
		
	}
	if (chartStage==3) { // PLANTS
	
	    pos1 = -34;
		pos2 = -17;
		pos3 = 0;
		pos4 = 17;
		pos5 = 34;
		
		pos6 = -44;
		pos7 = -24;
	
	
	    //UP
		//CURRENT
		if (pathHere==2) {
			thisA = 1;
		} else {
			thisA = fadeIn;
		}
		
		// LINES
		lineDraw(0,0,pos1,cRat[1],2,0.2);
		lineDraw(0,0,pos2,cRat[2],2,0.2);
		lineDraw(0,0,pos3,cRat[3],2,0.2);
		lineDraw(0,0,pos4,cRat[4],2,0.2);
	    lineDraw(0,0,pos5,cRat[5],2,0.2);
		lineDraw(pos1,cY[3],pos6,cRat[6],3,thisA*0.2);
	    lineDraw(pos1,cY[3],pos7,cRat[7],3,thisA*0.2);
		
		
		// CIRCLES
		circleDraw2(pos1,thisBase[2],noCol,noCol2,cRat[1],1);
		circleDraw2(pos2,thisBase[2],noCol,noCol2,cRat[2],1);
		circleDraw2(pos3,thisBase[2],noCol,noCol2,cRat[3],1);
		circleDraw2(pos4,thisBase[2],noCol,noCol2,cRat[4],1);
		circleDraw2(pos5,thisBase[2],noCol,noCol2,cRat[5],1);
		circleDraw(0,0,noCol,noCol2,1,1);
		circleDraw2(pos6,thisBase[3],noCol,noCol2,cRat[6],thisA);
		circleDraw2(pos7,thisBase[3],noCol,noCol2,cRat[7],thisA);
		
		
		circleDraw2(pos2,thisBase[2],"#dcacd2","#e09db8",cRat[2],fadeOut);
		circleDraw2(pos3,thisBase[2],"#93dbff","#93e7ff",cRat[3],fadeOut);
		circleDraw2(pos4,thisBase[2],"#b492e9","#d086f2",cRat[4],fadeOut);
		circleDraw2(pos5,thisBase[2],"#fff294","#ffe971",cRat[5],fadeOut);
		
	    
		// BIOSPHERE
		
		circleDraw(0,0,"#33e8c7","#02bacb",1,fadeOut);
		buttonDraw(0,0,"-",fadeOut);
		
		if (pathHere==2) {
			lineDraw(pos6,cY[6],pos8,cRat[8],6,fadeOut*0.2);
			lineDraw(pos6,cY[6],pos9,cRat[9],6,fadeOut*0.2);
			circleDraw2(pos8,thisBase[6],"#76cd65","#71d873",cRat[8],fadeOut);
			circleDraw2(pos9,thisBase[6],"#007a76","#00737a",cRat[9],fadeOut);
			
			
			circleDraw2(pos6,thisBase[3],"#169b68","#007c69",cRat[6],1);
		}
		
		
		
		// THIS //
		
		// LINES
		//lineDraw(-30,cY[3],pos6,cRat[6],3,fadeIn*0.2);
		//lineDraw(-30,cY[3],pos7,cRat[7],3,fadeIn*0.2);
		circleDraw2(pos6,thisBase[3],"#169b68","#007c69",cRat[6],fadeIn);
		circleDraw2(pos7,thisBase[3],"#b1e474","#93ef7a",cRat[7],fadeIn);
		infoDraw2(pos6,thisBase[3],1,"FORESTS","",cTons[6],cGT[6],true,fadeIn);
		infoDraw2(pos7,thisBase[3],1,"GRASSLANDS","",cTons[7],cGT[7],false,fadeIn);
		
		if (pathHere==1) {
		    circleDraw2(pos1,thisBase[2],"#95feaa","#68f2b0",cRat[1],1);
		}
		else {
			circleDraw2(pos1,thisBase[2],"#95feaa","#68f2b0",cRat[1],fadeIn);
		}
		
		
		headerDraw2("PLANTS","",fadeIn);
		
		buttonDraw(pos1,cY[3],"-",fadeIn);
		
		if (roll[5]==true) {
			circleDraw(pos1,cY[3],"#fff","#fff",cRat[1],0.3);
		}
		
		if (roll[6]==true) {
			underline2(pos6,3,cRat[6]);
		}
		
		
		
	}
	if (chartStage==4) { // BACTERIA
	
	    pos1 = -34;
		pos2 = -17;
		pos3 = 0;
		pos4 = 17;
		pos5 = 34;
		
		pos6 = -29.9;
		pos7 = -21.3;
		pos8 = -12.7;
		pos9 = -4.1;
		
	
	
	    //UP
		
		// LINES
		lineDraw(0,0,pos1,cRat[1],2,0.2);
		lineDraw(0,0,pos2,cRat[2],2,0.2);
		lineDraw(0,0,pos3,cRat[3],2,0.2);
		lineDraw(0,0,pos4,cRat[4],2,0.2);
	    lineDraw(0,0,pos5,cRat[5],2,0.2);
		
		// CIRCLES
		
		circleDraw2(pos1,thisBase[2],noCol,noCol2,cRat[1],1);
		circleDraw2(pos3,thisBase[2],noCol,noCol2,cRat[3],1);
		circleDraw2(pos4,thisBase[2],noCol,noCol2,cRat[4],1);
		circleDraw2(pos5,thisBase[2],noCol,noCol2,cRat[5],1);
		circleDraw(0,0,noCol,noCol2,1,1);

		
		circleDraw2(pos1,thisBase[2],"#95feaa","#68f2b0",cRat[1],fadeOut);
		circleDraw2(pos3,thisBase[2],"#93dbff","#93e7ff",cRat[3],fadeOut);
		circleDraw2(pos4,thisBase[2],"#b492e9","#d086f2",cRat[4],fadeOut);
		circleDraw2(pos5,thisBase[2],"#fff294","#ffe971",cRat[5],fadeOut);
		
	    
		// BIOSPHERE
		circleDraw(0,0,"#33e8c7","#02bacb",1,fadeOut);
		buttonDraw(0,0,"-",fadeOut);
		
		
		// THIS //
		
		// LINES
		lineDraw(pos2,cY[4],pos6,cRat[27],4,fadeIn*0.2);
		lineDraw(pos2,cY[4],pos7,cRat[29],4,fadeIn*0.2);
		lineDraw(pos2,cY[4],pos8,cRat[26],4,fadeIn*0.2);
		lineDraw(pos2,cY[4],pos9,cRat[28],4,fadeIn*0.2);
		circleDraw2(pos6,thisBase[4],"#f987b7","#cc6cc0",cRat[27],fadeIn);
		circleDraw2(pos7,thisBase[4],"#ea7375","#f15784",cRat[29],fadeIn);
		circleDraw2(pos8,thisBase[4],"#8954a2","#7343a3",cRat[26],fadeIn);
		circleDraw2(pos9,thisBase[4],"#ff9c9c","#ff9c9c",cRat[28],fadeIn);
		infoDraw2(pos6,thisBase[4],2,"SUBTERRANEAN","BACTERIA",cTons[27],cGT[27],false,fadeIn);
		infoDraw2(pos7,thisBase[4],2,"IN SUBSEA","SEDIMENTS",cTons[29],cGT[29],false,fadeIn);
		infoDraw2(pos8,thisBase[4],2,"SOIL","BACTERIA",cTons[26],cGT[26],false,fadeIn);
		infoDraw2(pos9,thisBase[4],2,"AQUATIC","BACTERIA",cTons[28],cGT[28],false,fadeIn);
		
		
		circleDraw2(pos2,thisBase[2],"#dcacd2","#e09db8",cRat[2],1);
		headerDraw2("BACTERIA","",fadeIn);
		
		buttonDraw(pos2,cY[4],"-",fadeIn);
		
		if (roll[7]==true) {
			circleDraw(pos2,cY[4],"#fff","#fff",cRat[2],0.3);
		}
	}
	if (chartStage==5) { // ANIMALS
	
	    pos1 = -30;
		pos2 = -15;
		pos3 = 0;
		pos4 = 15;
		pos5 = 30;
		
		pos6 = 28.7;
		pos7 = 29.35;
		pos8 = 30;
		pos9 = 30.65;
		pos10 = 31.3;
		
	
	    if (pathHere>1) {
			thisA = 1;
		} else {
			thisA = fadeIn;
		}
	    //UP
		
		// LINES
		lineDraw(0,0,pos1,cRat[1],2,0.2);
		lineDraw(0,0,pos2,cRat[2],2,0.2);
		lineDraw(0,0,pos3,cRat[3],2,0.2);
		lineDraw(0,0,pos4,cRat[4],2,0.2);
	    lineDraw(0,0,pos5,cRat[5],2,0.2);
		
		// CIRCLES
		
		circleDraw2(pos1,thisBase[2],noCol,noCol2,cRat[1],1);
		circleDraw2(pos2,thisBase[2],noCol,noCol2,cRat[2],1);
		circleDraw2(pos3,thisBase[2],noCol,noCol2,cRat[3],1);
		circleDraw2(pos4,thisBase[2],noCol,noCol2,cRat[4],1);
		
		circleDraw(0,0,noCol,noCol2,1,1);
		
		lineDraw(30,cY[5],pos6,cRat[10],5,thisA*0.2);
		lineDraw(30,cY[5],pos7,cRat[14],5,thisA*0.2);
		lineDraw(30,cY[5],pos8,cRat[12],5,thisA*0.2);
		lineDraw(30,cY[5],pos9,cRat[13],5,thisA*0.2);
		lineDraw(30,cY[5],pos10,cRat[11],5,thisA*0.2);
			/*lineDraw(30,cY[5],pos6,cRat[10],5,0.2); // ANIMALS
			lineDraw(30,cY[5],pos7,cRat[14],5,0.2);
			lineDraw(30,cY[5],pos8,cRat[12],5,0.2);
			lineDraw(30,cY[5],pos9,cRat[13],5,0.2);
			lineDraw(30,cY[5],pos10,cRat[11],5,0.2);*/
		if (pathHere>1) {	
			
			// CIRCLES
			circleDraw2(pos6,thisBase[5],noCol,noCol2,cRat[10],1); // ANIMALS
			circleDraw2(pos7,thisBase[5],noCol,noCol2,cRat[14],1);
			circleDraw2(pos8,thisBase[5],noCol,noCol2,cRat[12],1);
			circleDraw2(pos9,thisBase[5],noCol,noCol2,cRat[13],1);
			circleDraw2(pos10,thisBase[5],noCol,noCol2,cRat[11],1);
		}
		

		
		circleDraw2(pos1,thisBase[2],"#95feaa","#68f2b0",cRat[1],fadeOut);
		circleDraw2(pos2,thisBase[2],"#dcacd2","#e09db8",cRat[2],fadeOut);
		circleDraw2(pos3,thisBase[2],"#93dbff","#93e7ff",cRat[3],fadeOut);
		circleDraw2(pos4,thisBase[2],"#b492e9","#d086f2",cRat[4],fadeOut);
		
		
	    
		// BIOSPHERE
		circleDraw(0,0,"#33e8c7","#02bacb",1,fadeOut);
		buttonDraw(0,0,"-",fadeOut);
		
		
		// THIS //
		
		// LINES
		
		circleDraw2(pos6,thisBase[5],"#ea7375","#f15784",cRat[10],fadeIn);
		circleDraw2(pos7,thisBase[5],"#4ea1c7","#01b2c7",cRat[14],fadeIn);
		circleDraw2(pos8,thisBase[5],"#8954a2","#7343a3",cRat[12],fadeIn);
		circleDraw2(pos9,thisBase[5],"#ff9c9c","#ff9c9c",cRat[13],fadeIn);
		circleDraw2(pos10,thisBase[5],"#fda84d","#ff8a51",cRat[11],fadeIn);
		infoDraw2(pos6,thisBase[5],2,"LAND","INVERTEBRATES",cTons[10],cGT[10],true,fadeIn);
		infoDraw2(pos7,thisBase[5],2,"MARINE","ANIMALS",cTons[14],cGT[14],true,fadeIn);
		infoDraw2(pos8,thisBase[5],2,"DOMESTIC","ANIMALS",cTons[12],cGT[12],true,fadeIn);
		infoDraw2(pos9,thisBase[5],1,"PEOPLE","",cTons[13],cGT[13],false,fadeIn);
		infoDraw2(pos10,thisBase[5],2,"WILD LAND","VERTEBRATES",cTons[11],cGT[11],true,fadeIn);
		
		
		if (pathHere==2) {// INVERTEBRATES
		    
			lineDraw(pos6,cY[7],pos11,cRat[16],7,fadeOut*0.2);
			lineDraw(pos6,cY[7],pos12,cRat[15],7,fadeOut*0.2);
			circleDraw2(pos6,thisBase[5],"#ea7375","#f15784",cRat[10],1);
			circleDraw2(pos11,thisBase[7],"#ff986b","#ff8575",cRat[16],fadeOut);
			circleDraw2(pos12,thisBase[7],"#fcacc8","#ff89ad",cRat[15],fadeOut);
		}
		if (pathHere==3) {// MARINE
		    
			lineDraw(pos7,cY[8],pos11,cRat[22],8,fadeOut*0.2);
			lineDraw(pos7,cY[8],pos12,cRat[23],8,fadeOut*0.2);
			circleDraw2(pos7,thisBase[5],"#4ea1c7","#01b2c7",cRat[14],1);
			circleDraw2(pos11,thisBase[8],"#00ceb8","#22fec8",cRat[22],fadeOut);
			circleDraw2(pos12,thisBase[8],"#6964ff","#3a8eff",cRat[23],fadeOut);
		}
		if (pathHere==4) {// DOMESTIC
		    
			lineDraw(pos8,cY[9],pos11,cRat[19],9,fadeOut*0.2);
			lineDraw(pos8,cY[9],pos12,cRat[20],9,fadeOut*0.2);
			lineDraw(pos8,cY[9],pos13,cRat[21],9,fadeOut*0.2);
			circleDraw2(pos8,thisBase[5],"#8954a2","#7343a3",cRat[12],1);
			circleDraw2(pos11,thisBase[9],"#ffc89c","#ffa083",cRat[19],fadeOut);
			circleDraw2(pos12,thisBase[9],"#f387ba","#f180d2",cRat[20],fadeOut);
			circleDraw2(pos13,thisBase[9],"#eeec9a","#e9cc84",cRat[21],fadeOut);
		}
		if (pathHere==5) {// WILD
		    
			lineDraw(pos10,cY[10],pos11,cRat[18],10,fadeOut*0.2);
			lineDraw(pos10,cY[10],pos12,cRat[31],10,fadeOut*0.2);
			lineDraw(pos10,cY[10],pos13,cRat[32],10,fadeOut*0.2);
			circleDraw2(pos10,thisBase[5],"#fda84d","#ff8a51",cRat[11],1);
			circleDraw2(pos11,thisBase[10],"#ff7e6d","#ff6d6d",cRat[18],fadeOut);
			circleDraw2(pos12,thisBase[10],"#ffe156","#fdd467",cRat[31],fadeOut);
			circleDraw2(pos13,thisBase[10],"#ff3790","#ff3790",cRat[32],fadeOut);
		}
		
		
		if (pathHere>1) {
			thisAlpha = fadeIn;
		} else {
			thisAlpha = 1;
		}
		
		circleDraw2(pos5,thisBase[2],noCol,noCol2,cRat[5],1);
		circleDraw2(pos5,thisBase[2],"#fff294","#ffe971",cRat[5],thisAlpha);
		headerDraw2("ANIMALS","",fadeIn);
		
		buttonDraw(30,cY[5],"-",fadeIn);
		
		if (roll[8]==true) {
			circleDraw(30,cY[5],"#fff","#fff",cRat[5],0.3);
		}
		if (roll[9]==true) {
			underline2(pos6,5,cRat[10]);
		}
		if (roll[10]==true) {
			underline2(pos7,5,cRat[14]);
		}
		if (roll[11]==true) {
			underline2(pos8,5,cRat[12]);
		}
		if (roll[12]==true) {
			underline2(pos10,5,cRat[11]);
		}
		
		
	}
	
	if (chartStage==6) { // FORESTS
	
	    pos1 = -34;
		pos2 = -17;
		pos3 = 0;
		pos4 = 17;
		pos5 = 34;
		
		pos6 = -44;
		pos7 = -24;
		
		pos8 = -53;
		pos9 = -35;
	
	
	    //UP
		
		// LINES
		lineDraw(0,0,pos1,cRat[1],2,0.2);
		lineDraw(0,0,pos2,cRat[2],2,0.2);
		lineDraw(0,0,pos3,cRat[3],2,0.2);
		lineDraw(0,0,pos4,cRat[4],2,0.2);
	    lineDraw(0,0,pos5,cRat[5],2,0.2);
		lineDraw(pos1,cY[3],pos6,cRat[6],3,0.2);
		lineDraw(pos1,cY[3],pos7,cRat[7],3,0.2);
		
		// CIRCLES
		circleDraw2(pos1,thisBase[2],noCol,noCol2,cRat[1],1);
		circleDraw2(pos2,thisBase[2],noCol,noCol2,cRat[2],1);
		circleDraw2(pos3,thisBase[2],noCol,noCol2,cRat[3],1);
		circleDraw2(pos4,thisBase[2],noCol,noCol2,cRat[4],1);
		circleDraw2(pos5,thisBase[2],noCol,noCol2,cRat[5],1);
		circleDraw(0,0,noCol,noCol2,1,1);
		circleDraw2(pos6,thisBase[3],noCol,noCol2,cRat[6],1);
		circleDraw2(pos7,thisBase[3],noCol,noCol2,cRat[7],1);
		
		
		circleDraw2(pos6,thisBase[3],"#169b68","#007c69",cRat[6],fadeOut);
		circleDraw2(pos7,thisBase[3],"#b1e474","#93ef7a",cRat[7],fadeOut);
		circleDraw2(pos1,thisBase[2],"#95feaa","#68f2b0",cRat[1],fadeOut);
		buttonDraw(pos1,cY[3],"-",fadeOut);
		
		
		// THIS //
		
		
		lineDraw(pos6,cY[6],pos8,cRat[8],6,fadeIn*0.2);
		lineDraw(pos6,cY[6],pos9,cRat[9],6,fadeIn*0.2);
		circleDraw2(pos8,thisBase[6],"#76cd65","#71d873",cRat[8],fadeIn);
		circleDraw2(pos9,thisBase[6],"#007a76","#00737a",cRat[9],fadeIn);
		infoDraw2(pos8,thisBase[6],2,"TROPICAL","RAIN FORESTS",cTons[8],cGT[8],false,fadeIn);
		infoDraw2(pos9,thisBase[6],2,"BOREAL","FORESTS",cTons[9],cGT[9],false,fadeIn);
		
		
		circleDraw2(pos6,thisBase[3],"#169b68","#007c69",cRat[6],1);
		headerDraw2("FORESTS","",fadeIn);
		
		buttonDraw(pos6,cY[6],"-",fadeIn);
		
		if (roll[13]==true) {
			circleDraw(pos6,cY[6],"#fff","#fff",cRat[6],0.3);
		}
	}
	
	if (chartStage==7) { // INVERTEBRATES
	
	    pos1 = -30;
		pos2 = -15;
		pos3 = 0;
		pos4 = 15;
		pos5 = 30;
		
		pos6 = 28.8;
		pos7 = 29.4;
		pos8 = 30;
		pos9 = 30.6;
		pos10 = 31.2;
		
		pos11 = 28.4;
		pos12 = 29.2;
		
	
	    if (pathHere==2) {
			thisA = 1;
		} else {
			thisA = fadeIn;
		}
	    //UP
		
		// LINES
		lineDraw(0,0,pos1,cRat[1],2,0.2); // BIO
		lineDraw(0,0,pos2,cRat[2],2,0.2);
		lineDraw(0,0,pos3,cRat[3],2,0.2);
		lineDraw(0,0,pos4,cRat[4],2,0.2);
	    lineDraw(0,0,pos5,cRat[5],2,0.2);
		lineDraw(30,cY[5],pos6,cRat[10],5,0.2); // ANIMALS
		lineDraw(30,cY[5],pos7,cRat[14],5,0.2);
		lineDraw(30,cY[5],pos8,cRat[12],5,0.2);
		lineDraw(30,cY[5],pos9,cRat[13],5,0.2);
		lineDraw(30,cY[5],pos10,cRat[11],5,0.2);
		
		
		
		
		lineDraw(28.8,cY[7],pos11,cRat[16],7,thisA*0.2);
		lineDraw(28.8,cY[7],pos12,cRat[15],7,thisA*0.2);
		if (pathHere==2) {	
		    lineDraw(28.4,cY[11],pos13,cRat[17],11,fadeOut*0.2);
			lineDraw(28.4,cY[11],pos14,cRat[17],11,fadeOut*0.2);
			circleDraw2(pos11,thisBase[7],noCol,noCol2,cRat[16],1);
			circleDraw2(pos12,thisBase[7],noCol,noCol2,cRat[15],1);
		}
		
		// CIRCLES
		circleDraw2(pos1,thisBase[2],noCol,noCol2,cRat[1],1); // BIO
		circleDraw2(pos2,thisBase[2],noCol,noCol2,cRat[2],1);
		circleDraw2(pos3,thisBase[2],noCol,noCol2,cRat[3],1);
		circleDraw2(pos4,thisBase[2],noCol,noCol2,cRat[4],1);
		circleDraw2(pos5,thisBase[2],noCol,noCol2,cRat[5],1);
		circleDraw(0,0,noCol,noCol2,1,1);
		circleDraw2(pos6,thisBase[5],noCol,noCol2,cRat[10],1); // ANIMALS
		circleDraw2(pos7,thisBase[5],noCol,noCol2,cRat[14],1);
		circleDraw2(pos8,thisBase[5],noCol,noCol2,cRat[12],1);
		circleDraw2(pos9,thisBase[5],noCol,noCol2,cRat[13],1);
		circleDraw2(pos10,thisBase[5],noCol,noCol2,cRat[11],1);
		
		
			
		
		
		
		
		circleDraw2(pos7,thisBase[5],"#4ea1c7","#01b2c7",cRat[14],fadeOut);
		circleDraw2(pos8,thisBase[5],"#8954a2","#7343a3",cRat[12],fadeOut);
		circleDraw2(pos9,thisBase[5],"#ff9c9c","#ff9c9c",cRat[13],fadeOut);
		circleDraw2(pos10,thisBase[5],"#fda84d","#ff8a51",cRat[11],fadeOut);
		
		circleDraw2(pos5,thisBase[2],"#fff294","#ffe971",cRat[5],fadeOut);
		buttonDraw(30,cY[5],"-",fadeOut);
		
		
		// THIS //
		
		//lineDraw(28.8,cY[7],pos11,cRat[16],7,fadeIn*0.2);
		//lineDraw(28.8,cY[7],pos12,cRat[15],7,fadeIn*0.2);
		circleDraw2(pos11,thisBase[7],"#ff986b","#ff8575",cRat[16],fadeIn);
		circleDraw2(pos12,thisBase[7],"#fcacc8","#ff89ad",cRat[15],fadeIn);
		infoDraw2(pos11,thisBase[7],1,"INSECTS","",cTons[16],cGT[16],true,fadeIn);
		infoDraw2(pos12,thisBase[7],1,"EARTHWORMS","",cTons[15],cGT[15],false,fadeIn);
		
		if (pathHere==1) {
		    circleDraw2(pos6,thisBase[5],"#ea7375","#f15784",cRat[10],1);
		}
		if (pathHere==2) {
			
			circleDraw2(pos13,thisBase[11],"#8f3eaa","#9356be",cRat[17],fadeOut);
			circleDraw2(pos14,thisBase[11],"#feeb77","#ffc76d",cRat[17],fadeOut);
		    circleDraw2(pos11,thisBase[7],"#ff986b","#ff8575",cRat[16],1);
			circleDraw2(pos6,thisBase[5],"#ea7375","#f15784",cRat[10],fadeIn);
		}
		
		
		
		
		headerDraw2("LAND INVERTEBRATES","",fadeIn);
		
		buttonDraw(28.8,cY[7],"-",fadeIn);
		
		if (roll[14]==true) {
			circleDraw(28.8,cY[7],"#fff","#fff",cRat[10],0.3);
		}
		if (roll[18]==true) {
			underline2(28.4,7,cRat[16]);
		}
	}
	if (chartStage==8) { // MARINE ANIMALS
	
	    pos1 = -30;
		pos2 = -15;
		pos3 = 0;
		pos4 = 15;
		pos5 = 30;
		
		pos6 = 28.8;
		pos7 = 29.4;
		pos8 = 30;
		pos9 = 30.6;
		pos10 = 31.2;
		
		pos11 = 29.2;
		pos12 = 29.6;
		
	
	    if (pathHere>1) {
			thisA = 1;
		} else {
			thisA = fadeIn;
		}
	    //UP
		
		// LINES
		lineDraw(0,0,pos1,cRat[1],2,0.2); // BIO
		lineDraw(0,0,pos2,cRat[2],2,0.2);
		lineDraw(0,0,pos3,cRat[3],2,0.2);
		lineDraw(0,0,pos4,cRat[4],2,0.2);
	    lineDraw(0,0,pos5,cRat[5],2,0.2);
		lineDraw(30,cY[5],pos6,cRat[10],5,0.2); // ANIMALS
		lineDraw(30,cY[5],pos7,cRat[14],5,0.2);
		lineDraw(30,cY[5],pos8,cRat[12],5,0.2);
		lineDraw(30,cY[5],pos9,cRat[13],5,0.2);
		lineDraw(30,cY[5],pos10,cRat[11],5,0.2);
		
		
		lineDraw(29.4,cY[8],pos11,cRat[22],8,thisA*0.2);
		lineDraw(29.4,cY[8],pos12,cRat[23],8,thisA*0.2);
		if (pathHere==2) {	
		    lineDraw(29.2,cY[13],pos13,cRat[24],13,fadeOut*0.2);
			lineDraw(29.2,cY[13],pos14,cRat[25],13,fadeOut*0.2);
			circleDraw2(pos12,thisBase[8],noCol,noCol2,cRat[22],1);
			circleDraw2(pos11,thisBase[8],noCol,noCol2,cRat[23],1);
		}
		if (pathHere==3) {	
		    lineDraw(29.6,cY[12],pos13,cRat[30],12,fadeOut*0.2);
			circleDraw2(pos12,thisBase[8],noCol,noCol2,cRat[22],1);
			circleDraw2(pos11,thisBase[8],noCol,noCol2,cRat[23],1);
		}
		
		
		// CIRCLES
		circleDraw2(pos1,thisBase[2],noCol,noCol2,cRat[1],1); // BIO
		circleDraw2(pos2,thisBase[2],noCol,noCol2,cRat[2],1);
		circleDraw2(pos3,thisBase[2],noCol,noCol2,cRat[3],1);
		circleDraw2(pos4,thisBase[2],noCol,noCol2,cRat[4],1);
		circleDraw2(pos5,thisBase[2],noCol,noCol2,cRat[5],1);
		circleDraw(0,0,noCol,noCol2,1,1);
		circleDraw2(pos6,thisBase[5],noCol,noCol2,cRat[10],1); // ANIMALS
		circleDraw2(pos7,thisBase[5],noCol,noCol2,cRat[14],1);
		circleDraw2(pos8,thisBase[5],noCol,noCol2,cRat[12],1);
		circleDraw2(pos9,thisBase[5],noCol,noCol2,cRat[13],1);
		circleDraw2(pos10,thisBase[5],noCol,noCol2,cRat[11],1);
		
		
			
		
		
		
		
		
		circleDraw2(pos6,thisBase[5],"#ea7375","#f15784",cRat[10],fadeOut);
		
		circleDraw2(pos8,thisBase[5],"#8954a2","#7343a3",cRat[12],fadeOut);
		circleDraw2(pos9,thisBase[5],"#ff9c9c","#ff9c9c",cRat[13],fadeOut);
		circleDraw2(pos10,thisBase[5],"#fda84d","#ff8a51",cRat[11],fadeOut);
		
		circleDraw2(pos5,thisBase[2],"#fff294","#ffe971",cRat[5],fadeOut);
		buttonDraw(30,cY[5],"-",fadeOut);
		
		
		// THIS //
		
		//lineDraw(29.4,cY[8],pos11,cRat[22],8,fadeIn*0.2);
		//lineDraw(29.4,cY[8],pos12,cRat[23],8,fadeIn*0.2);
		circleDraw2(pos11,thisBase[8],"#6964ff","#3a8eff",cRat[23],fadeIn);
		circleDraw2(pos12,thisBase[8],"#00ceb8","#22fec8",cRat[22],fadeIn);
		
		infoDraw2(pos11,thisBase[8],1,"VERTEBRATES","",cTons[23],cGT[23],true,fadeIn);
		infoDraw2(pos12,thisBase[8],1,"INVERTEBRATES","",cTons[22],cGT[22],true,fadeIn);
		
		
		if (pathHere==1) {
			circleDraw2(pos7,thisBase[5],"#4ea1c7","#01b2c7",cRat[14],1);
		}
		if (pathHere==2) {
			
			circleDraw2(pos13,thisBase[13],"#43fbf5","#20bfd6",cRat[24],fadeOut);
			circleDraw2(pos14,thisBase[13],"#2e9ee9","#4d74e2",cRat[25],fadeOut);
			circleDraw2(pos11,thisBase[8],"#6964ff","#3a8eff",cRat[23],1);
			circleDraw2(pos7,thisBase[5],"#4ea1c7","#01b2c7",cRat[14],fadeIn);
		}
		if (pathHere==3) {
			
			circleDraw2(pos13,thisBase[12],"#43fbf5","#20bfd6",cRat[30],fadeOut);
			circleDraw2(pos12,thisBase[8],"#00ceb8","#22fec8",cRat[22],1);
			circleDraw2(pos7,thisBase[5],"#4ea1c7","#01b2c7",cRat[14],fadeIn);
		}
		
		
		
		
		headerDraw2("MARINE ANIMALS","",fadeIn);
		
		buttonDraw(29.4,cY[8],"-",fadeIn);
		
		if (roll[15]==true) {
			circleDraw(29.4,cY[8],"#fff","#fff",cRat[14],0.3);
		}
		if (roll[20]==true&&fadeIn>0.9) {
			underline2(pos12,8,cRat[22]);
		}
		if (roll[22]==true&&fadeIn>0.9) {
			underline2(pos11,8,cRat[23]);
		}
		
		
	}
	if (chartStage==9) { // DOMESTIC ANIMALS
	
	    pos1 = -30;
		pos2 = -15;
		pos3 = 0;
		pos4 = 15;
		pos5 = 30;
		
		pos6 = 28.7;
		pos7 = 29.35;
		pos8 = 30;
		pos9 = 30.65;
		pos10 = 31.3;
		
		pos11 = 29.75;
		pos12 = 30;
		pos13 = 30.25;
	
	
	    //UP
		
		// LINES
		lineDraw(0,0,pos1,cRat[1],2,0.2); // BIO
		lineDraw(0,0,pos2,cRat[2],2,0.2);
		lineDraw(0,0,pos3,cRat[3],2,0.2);
		lineDraw(0,0,pos4,cRat[4],2,0.2);
	    lineDraw(0,0,pos5,cRat[5],2,0.2);
		lineDraw(30,cY[5],pos6,cRat[10],5,0.2); // ANIMALS
		lineDraw(30,cY[5],pos7,cRat[14],5,0.2);
		lineDraw(30,cY[5],pos8,cRat[12],5,0.2);
		lineDraw(30,cY[5],pos9,cRat[13],5,0.2);
		lineDraw(30,cY[5],pos10,cRat[11],5,0.2);
		
		
		// CIRCLES
		circleDraw2(pos1,thisBase[2],noCol,noCol2,cRat[1],1); // BIO
		circleDraw2(pos2,thisBase[2],noCol,noCol2,cRat[2],1);
		circleDraw2(pos3,thisBase[2],noCol,noCol2,cRat[3],1);
		circleDraw2(pos4,thisBase[2],noCol,noCol2,cRat[4],1);
		circleDraw2(pos5,thisBase[2],noCol,noCol2,cRat[5],1);
		circleDraw(0,0,noCol,noCol2,1,1);
		circleDraw2(pos6,thisBase[5],noCol,noCol2,cRat[10],1); // ANIMALS
		circleDraw2(pos7,thisBase[5],noCol,noCol2,cRat[14],1);
		circleDraw2(pos8,thisBase[5],noCol,noCol2,cRat[12],1);
		circleDraw2(pos9,thisBase[5],noCol,noCol2,cRat[13],1);
		circleDraw2(pos10,thisBase[5],noCol,noCol2,cRat[11],1);
		
		
		
		circleDraw2(pos6,thisBase[5],"#ea7375","#f15784",cRat[10],fadeOut);
		circleDraw2(pos7,thisBase[5],"#4ea1c7","#01b2c7",cRat[14],fadeOut);
		
		circleDraw2(pos9,thisBase[5],"#ff9c9c","#ff9c9c",cRat[13],fadeOut);
		circleDraw2(pos10,thisBase[5],"#fda84d","#ff8a51",cRat[11],fadeOut);
		
		circleDraw2(pos5,thisBase[2],"#fff294","#ffe971",cRat[5],fadeOut);
		buttonDraw(30,cY[5],"-",fadeOut);
		
		
		// THIS //
		
		lineDraw(30,cY[9],pos11,cRat[19],9,fadeIn*0.2);
		lineDraw(30,cY[9],pos12,cRat[20],9,fadeIn*0.2);
		lineDraw(30,cY[9],pos13,cRat[21],9,fadeIn*0.2);
		circleDraw2(pos11,thisBase[9],"#ffc89c","#ffa083",cRat[19],fadeIn);
		circleDraw2(pos12,thisBase[9],"#f387ba","#f180d2",cRat[20],fadeIn);
		circleDraw2(pos13,thisBase[9],"#eeec9a","#e9cc84",cRat[21],fadeIn);
		infoDraw2(pos11,thisBase[9],1,"CATTLE","",cTons[19],cGT[19],false,fadeIn);
		infoDraw2(pos12,thisBase[9],1,"PIGS","",cTons[20],cGT[20],false,fadeIn);
		infoDraw2(pos13,thisBase[9],1,"POULTRY","",cTons[21],cGT[21],false,fadeIn);
		
		
		circleDraw2(pos8,thisBase[5],"#8954a2","#7343a3",cRat[12],1);
		
		headerDraw2("DOMESTIC ANIMALS","",fadeIn);
		
		buttonDraw(30,cY[9],"-",fadeIn);
		
		if (roll[16]==true) {
			circleDraw(30,cY[9],"#fff","#fff",cRat[12],0.3);
		}
		
		
		
	}
	if (chartStage==10) { // WILD ANIMALS
	
	    pos1 = -30;
		pos2 = -15;
		pos3 = 0;
		pos4 = 15;
		pos5 = 30;
		
		pos6 = 28.8;
		pos7 = 29.4;
		pos8 = 30;
		pos9 = 30.6;
		pos10 = 31.2;
		
		pos11 = 31.15;
		pos12 = 31.2;
		pos13 = 31.25;
	
	
	    //UP
		
		// LINES
		lineDraw(0,0,pos1,cRat[1],2,0.2); // BIO
		lineDraw(0,0,pos2,cRat[2],2,0.2);
		lineDraw(0,0,pos3,cRat[3],2,0.2);
		lineDraw(0,0,pos4,cRat[4],2,0.2);
	    lineDraw(0,0,pos5,cRat[5],2,0.2);
		lineDraw(30,cY[5],pos6,cRat[10],5,0.2); // ANIMALS
		lineDraw(30,cY[5],pos7,cRat[14],5,0.2);
		lineDraw(30,cY[5],pos8,cRat[12],5,0.2);
		lineDraw(30,cY[5],pos9,cRat[13],5,0.2);
		lineDraw(30,cY[5],pos10,cRat[11],5,0.2);
		
		
		// CIRCLES
		circleDraw2(pos1,thisBase[2],noCol,noCol2,cRat[1],1); // BIO
		circleDraw2(pos2,thisBase[2],noCol,noCol2,cRat[2],1);
		circleDraw2(pos3,thisBase[2],noCol,noCol2,cRat[3],1);
		circleDraw2(pos4,thisBase[2],noCol,noCol2,cRat[4],1);
		circleDraw2(pos5,thisBase[2],noCol,noCol2,cRat[5],1);
		circleDraw(0,0,noCol,noCol2,1,1);
		circleDraw2(pos6,thisBase[5],noCol,noCol2,cRat[10],1); // ANIMALS
		circleDraw2(pos7,thisBase[5],noCol,noCol2,cRat[14],1);
		circleDraw2(pos8,thisBase[5],noCol,noCol2,cRat[12],1);
		circleDraw2(pos9,thisBase[5],noCol,noCol2,cRat[13],1);
		circleDraw2(pos10,thisBase[5],noCol,noCol2,cRat[11],1);
		
		
		
		circleDraw2(pos6,thisBase[5],"#ea7375","#f15784",cRat[10],fadeOut);
		circleDraw2(pos7,thisBase[5],"#4ea1c7","#01b2c7",cRat[14],fadeOut);
		circleDraw2(pos8,thisBase[5],"#8954a2","#7343a3",cRat[12],fadeOut);
		circleDraw2(pos9,thisBase[5],"#ff9c9c","#ff9c9c",cRat[13],fadeOut);
		
		
		circleDraw2(pos5,thisBase[2],"#fff294","#ffe971",cRat[5],fadeOut);
		buttonDraw(30,cY[5],"-",fadeOut);
		
		
		// THIS //
		
		lineDraw(31.2,cY[10],pos11,cRat[18],10,fadeIn*0.2);
		lineDraw(31.2,cY[10],pos12,cRat[31],10,fadeIn*0.2);
		lineDraw(31.2,cY[10],pos13,cRat[32],10,fadeIn*0.2);
		circleDraw2(pos11,thisBase[10],"#ff7e6d","#ff6d6d",cRat[18],fadeIn);
		circleDraw2(pos12,thisBase[10],"#ffe156","#fdd467",cRat[31],fadeIn);
		circleDraw2(pos13,thisBase[10],"#ff3790","#ff3790",cRat[32],fadeIn);
		infoDraw2(pos11,thisBase[10],2,"AFRICAN","ELEPHANTS",cTons[18],cGT[18],false,fadeIn);
		infoDraw2(pos12,thisBase[10],2,"MIGRATING SERENGETI","WILDEBEEST",cTons[31],cGT[31],false,fadeIn);
		infoDraw2(pos13,thisBase[10],2,"ALL","CHIMPANZEES",cTons[32],cGT[32],false,fadeIn);
		
		circleDraw2(pos10,thisBase[5],"#fda84d","#ff8a51",cRat[11],1);
		headerDraw2("WILD LAND VERTEBRATES","",fadeIn);
		
		buttonDraw(31.2,cY[10],"-",fadeIn);
		
		if (roll[17]==true) {
			circleDraw(31.2,cY[10],"#fff","#fff",cRat[11],0.3);
		}
	}
	if (chartStage==11) { // INSECTS
	
	    pos1 = -30;
		pos2 = -15;
		pos3 = 0;
		pos4 = 15;
		pos5 = 30;
		
		pos6 = 28.8;
		pos7 = 29.4;
		pos8 = 30;
		pos9 = 30.6;
		pos10 = 31.2;
		
		pos11 = 28.4;
		pos12 = 29.2;
		
	    pos13 = 28.2;
		pos14 = 28.6;
	
	    //UP
		
		// LINES
		
		lineDraw(30,cY[5],pos6,cRat[10],5,0.2); // ANIMALS
		lineDraw(30,cY[5],pos7,cRat[14],5,0.2);
		lineDraw(30,cY[5],pos8,cRat[12],5,0.2);
		lineDraw(30,cY[5],pos9,cRat[13],5,0.2);
		lineDraw(30,cY[5],pos10,cRat[11],5,0.2);
		lineDraw(28.8,cY[7],pos11,cRat[16],7,0.2);
		lineDraw(28.8,cY[7],pos12,cRat[15],7,0.2);
		
		// CIRCLES
		
		circleDraw2(pos6,thisBase[5],noCol,noCol2,cRat[10],1); // ANIMALS
		circleDraw2(pos7,thisBase[5],noCol,noCol2,cRat[14],1);
		circleDraw2(pos8,thisBase[5],noCol,noCol2,cRat[12],1);
		circleDraw2(pos9,thisBase[5],noCol,noCol2,cRat[13],1);
		circleDraw2(pos10,thisBase[5],noCol,noCol2,cRat[11],1);
		circleDraw2(pos11,thisBase[7],noCol,noCol2,cRat[16],1);
		circleDraw2(pos12,thisBase[7],noCol,noCol2,cRat[15],1);
		
		
		
		//circleDraw2(pos11,thisBase[7],"#007a76","#00737a",cRat[16],fadeOut);
		circleDraw2(pos12,thisBase[7],"#fcabc8","#ff89ad",cRat[15],fadeOut);
		circleDraw2(pos6,thisBase[5],"#ea7375","#f15784",cRat[10],fadeOut);
		
		
		
		// THIS //
		
		lineDraw(28.4,cY[11],pos13,cRat[17],11,fadeIn*0.2);
		lineDraw(28.4,cY[11],pos14,cRat[17],11,fadeIn*0.2);
		circleDraw2(pos13,thisBase[11],"#8f3eaa","#9356be",cRat[17],fadeIn);
		circleDraw2(pos14,thisBase[11],"#feeb77","#ffc76d",cRat[17],fadeIn);
		infoDraw2(pos13,thisBase[11],1,"ANTS","",cTons[17],cGT[17],false,fadeIn);
		infoDraw2(pos14,thisBase[11],1,"TERMITES","",cTons[17],cGT[17],false,fadeIn);
		
		
		circleDraw2(pos11,thisBase[7],"#ff986b","#ff8575",cRat[16],1);
		headerDraw2("INSECTS","",fadeIn);
		
		buttonDraw(28.4,cY[11],"-",fadeIn);
		
		if (roll[19]==true) {
			circleDraw(28.4,cY[11],"#fff","#fff",cRat[16],0.3);
		}
	}
	if (chartStage==12) { // MARINE INVERTEBRATES
	
	    pos1 = -30;
		pos2 = -15;
		pos3 = 0;
		pos4 = 15;
		pos5 = 30;
		
		pos6 = 28.8;
		pos7 = 29.4;
		pos8 = 30;
		pos9 = 30.6;
		pos10 = 31.2;
		
		pos11 = 29.2;
		pos12 = 29.6;
		
	    pos13 = 29.6;
		
	
	    //UP
		
		// LINES
		
		lineDraw(30,cY[5],pos6,cRat[10],5,0.2); // ANIMALS
		lineDraw(30,cY[5],pos7,cRat[14],5,0.2);
		lineDraw(30,cY[5],pos8,cRat[12],5,0.2);
		lineDraw(30,cY[5],pos9,cRat[13],5,0.2);
		lineDraw(30,cY[5],pos10,cRat[11],5,0.2);
		
		lineDraw(29.4,cY[8],pos11,cRat[23],8,0.2);
		lineDraw(29.4,cY[8],pos12,cRat[22],8,0.2);
		
		// CIRCLES
		
		circleDraw2(pos6,thisBase[5],noCol,noCol2,cRat[10],1); // ANIMALS
		circleDraw2(pos7,thisBase[5],noCol,noCol2,cRat[14],1);
		circleDraw2(pos8,thisBase[5],noCol,noCol2,cRat[12],1);
		circleDraw2(pos9,thisBase[5],noCol,noCol2,cRat[13],1);
		circleDraw2(pos10,thisBase[5],noCol,noCol2,cRat[11],1);
		circleDraw2(pos11,thisBase[8],noCol,noCol2,cRat[23],1);
		circleDraw2(pos12,thisBase[8],noCol,noCol2,cRat[22],1);
		
		
		
		
		circleDraw2(pos11,thisBase[8],"#6964ff","#3a8eff",cRat[23],fadeOut);
		circleDraw2(pos7,thisBase[5],"#4ea1c7","#01b2c7",cRat[14],fadeOut);
		
		
		
		// THIS //
		
		lineDraw(pos12,cY[12],pos13,cRat[30],12,fadeIn*0.2);
		circleDraw2(pos13,thisBase[12],"#43fbf5","#20bfd6",cRat[30],fadeIn);
		infoDraw2(pos13,thisBase[12],1,"KRILL","",cTons[30],cGT[30],false,fadeIn);
		
		circleDraw2(pos12,thisBase[8],"#00ceb8","#22fec8",cRat[22],1);
		//circleDraw2(pos12,thisBase[8],"#007a76","#00737a",cRat[23],1);
		headerDraw2("MARINE INVERTEBRATES","",fadeIn);
		
		buttonDraw(pos12,cY[12],"-",fadeIn);
		
		if (roll[21]==true) {
			circleDraw(pos12,cY[12],"#fff","#fff",cRat[22],0.3);
		}
	}
	
	if (chartStage==13) { // MARINE VERTEBRATES
	
	    pos1 = -30;
		pos2 = -15;
		pos3 = 0;
		pos4 = 15;
		pos5 = 30;
		
		pos6 = 28.8;
		pos7 = 29.4;
		pos8 = 30;
		pos9 = 30.6;
		pos10 = 31.2;
		
		pos11 = 29.2;
		pos12 = 29.6;
		
	    pos13 = 29.05;
		pos14 = 29.35;
		
	
	    //UP
		
		// LINES
		
		lineDraw(30,cY[5],pos6,cRat[10],5,0.2); // ANIMALS
		lineDraw(30,cY[5],pos7,cRat[14],5,0.2);
		lineDraw(30,cY[5],pos8,cRat[12],5,0.2);
		lineDraw(30,cY[5],pos9,cRat[13],5,0.2);
		lineDraw(30,cY[5],pos10,cRat[11],5,0.2);
		
		lineDraw(29.4,cY[8],pos11,cRat[23],8,0.2);
		lineDraw(29.4,cY[8],pos12,cRat[22],8,0.2);
		
		// CIRCLES
		
		circleDraw2(pos6,thisBase[5],noCol,noCol2,cRat[10],1); // ANIMALS
		circleDraw2(pos7,thisBase[5],noCol,noCol2,cRat[14],1);
		circleDraw2(pos8,thisBase[5],noCol,noCol2,cRat[12],1);
		circleDraw2(pos9,thisBase[5],noCol,noCol2,cRat[13],1);
		circleDraw2(pos10,thisBase[5],noCol,noCol2,cRat[11],1);
		circleDraw2(pos11,thisBase[8],noCol,noCol2,cRat[23],1);
		circleDraw2(pos12,thisBase[8],noCol,noCol2,cRat[22],1);
		
		
		
		
		circleDraw2(pos12,thisBase[8],"#00ceb8","#22fec8",cRat[22],fadeOut);
		
		circleDraw2(pos7,thisBase[5],"#4ea1c7","#01b2c7",cRat[14],fadeOut);
		
		
		
		// THIS //
		
		lineDraw(pos11,cY[13],pos13,cRat[24],13,fadeIn*0.2);
		lineDraw(pos11,cY[13],pos14,cRat[25],13,fadeIn*0.2);
		circleDraw2(pos13,thisBase[13],"#43fbf5","#20bfd6",cRat[24],fadeIn);
		circleDraw2(pos14,thisBase[13],"#2e9ee9","#4d74e2",cRat[25],fadeIn);
		infoDraw2(pos13,thisBase[13],1,"FISH","",cTons[24],cGT[24],false,fadeIn);
		infoDraw2(pos14,thisBase[13],1,"WHALES","",cTons[25],cGT[25],false,fadeIn);
		
		circleDraw2(pos11,thisBase[8],"#6964ff","#3a8eff",cRat[23],1);
		//circleDraw2(pos12,thisBase[8],"#007a76","#00737a",cRat[23],1);
		headerDraw2("MARINE VERTEBRATES","",fadeIn);
		
		buttonDraw(pos11,cY[13],"-",fadeIn);
		
		if (roll[23]==true) {
			circleDraw(pos11,cY[13],"#fff","#fff",cRat[23],0.3);
		}
	}
	
	
	dust();
}



function testing() {
	
	// JUMP // this jumps straight to a specific point on the cable/timeline, used for editing/code drawing.
	if (testCount==10) {
	    //progress = 170000;
		//zoomLevel = 0.4;
	}
	
	
	//zoomDest = 0.5;
	
    //cxa.globalAlpha = 1;
	//cxa.fillStyle = '#fff';
	//cxa.textAlign = 'center';
	
	//cxa.font = "12px Cabin";
	//cxa.fillText(ratToRad(cRat[1]), halfX, 20);
	
	
}
