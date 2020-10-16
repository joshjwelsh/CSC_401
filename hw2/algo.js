var redarray = [ 
				"#fcc","#fcc", "#fbb","#fbb", "#faa","#faa", "#f99","#f99",
				"#f88",	"#f77","#f66", "#f55",  "#f44",  "#f33", "#f22", "#f11" 
				] ;
var greyarray = [ "#eee", "#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777",
                 "#666", "#555", "#444", "#333", "#222", "#222", "#111", "#111" ] ;
var bluearray =[ "#00f", "#11f", "#22f", "#33f", "#44f", "#55f", "#66f", "#77f",
				"#88f", "#99f", "#aaf", "#bbf", "#ccf", "#ddf", "#eef", "#fff" ] ;
var purplearray = [  "#fdf", "#fcf", "#fdf", "#fcf", "#fbf", "#fcf", "#fbf", "#faf",
			"#f9f", "#f8f", "#f7f","#f6f",  "#f5f", "#f4f", "#f3f", "#f2f" ] ;
				
var stepNum = 0 ;
var stepMode = 0 ; // 0 for push to termination, 1 for rebalance invariant
var currentMin = 0 ;
var currentMinAt = 0 ;

var cb_color  = "#ffc" ; //code background
var cbh_color = "#faa" ; //code background highlight
var minish_color = "yellow" ; //color of min value


var i_g ;
var j_g ;
var pivot_g ;
var algStep_g ;
var items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function setCodeColors(i) {
    document.getElementById("codeloc0").style.background = cb_color;
    document.getElementById("codeloc1").style.background = cb_color;
    document.getElementById("codeloc2").style.background = cb_color;
    document.getElementById("codeloc3").style.background = cb_color;
    document.getElementById("codeloc" + i).style.background = cbh_color;
}

function stepZero() {
  initElement();
}
function redrawArray(){
    for (i = 1; i < 11; i++) {
      document.getElementById("n" + i).style.background = purplearray[16 - i];
      document.getElementById("n" + i).style.color = "black";
      setElementValue("array" + i, items[i - 1]);
    }
}
function algStep() {
      let n = items.length;

      for (let i = 0; i < items.length; i++) {
        let x = getRndInteger(i, items.length);
        let temp = items[x];
        items[x] = items[i];
        items[i] = temp;
      }
      redrawArray();
}

function randPlace(items) {
  let n = items.length;
  let newItems = [];

  for (let i = 0; i < items.length; i++) {
    let x = getRndInteger(i, items.length);
    let temp = items[x];
    items[x] = items[i];
    items[i] = temp;
  }
  return items;
}
function sortNumber(a, b) {
    return a - b;
}


function setElementValue(elementId, value) {
  if (document.getElementById(elementId).innerText != undefined) {
    document.getElementById(elementId).innerText = value;
  } else {
    document.getElementById(elementId).textContent = value;
  }
}

function initElement() {
  a = [0,1,2,3,4,5,6,7,8,9] ;
  var i;
  for (i = 1; i < 11; i++) {
    document.getElementById("n" + i).style.background = bluearray[16 - i];
    document.getElementById("n" + i).style.color = "black";
    setElementValue("array" + i, a[i - 1]);
  }
  i_g = -1;
  j_g = -1;
  pivot_g = a[15];
  algStep_g = 0;

  stepNum = 0;
  stepMode = 0;
  currentMin = 0;
  currentMinAt = 0;
  document.getElementById("codeloc0").style.background = cb_color;
  document.getElementById("codeloc1").style.background = cb_color;
  document.getElementById("codeloc2").style.background = cb_color;
  document.getElementById("codeloc3").style.background = cb_color;

  setCodeColors(0);
}
  function setCellColor(cell, color) {
    document.getElementById("n" + cell).style.background = color;
  }

let x = [0,1,2,3,4,5,6,7,8,9];
initElement();
randPlace(x);