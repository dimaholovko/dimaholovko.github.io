var arr = ["","","",
		   "","","",
		   "","",""];

var xstep = true;

function cell0() {
	if (arr[0] == "") {
		if (xstep) {
			arr[0] = "x";
			document.getElementById("x0").style.setProperty("display","inline");
			xstep = false;
		}
		else{
			arr[0] = "o";
			document.getElementById("o0").style.setProperty("display","inline");
			xstep = true;
		}
	}
	winCheck();
}

function cell1() {
	if (arr[1] == "") {
		if (xstep) {
			arr[1] = "x";
			document.getElementById("x1").style.setProperty("display","inline");
			xstep = false;
		}
		else{
			arr[1] = "o";
			document.getElementById("o1").style.setProperty("display","inline");
			xstep = true;
		}
	}
	winCheck();
}

function cell2() {
	if (arr[2] == "") {
		if (xstep) {
			arr[2] = "x";
			document.getElementById("x2").style.setProperty("display","inline");
			xstep = false;
		}
		else{
			arr[2] = "o";
			document.getElementById("o2").style.setProperty("display","inline");
			xstep = true;
		}
	}
	winCheck();
}

function cell3() {
	if (arr[3] == "") {
		if (xstep) {
			arr[3] = "x";
			document.getElementById("x3").style.setProperty("display","inline");
			xstep = false;
		}
		else{
			arr[3] = "o";
			document.getElementById("o3").style.setProperty("display","inline");
			xstep = true;
		}
	}
	winCheck();
}

function cell4() {
	if (arr[4] == "") {
		if (xstep) {
			arr[4] = "x";
			document.getElementById("x4").style.setProperty("display","inline");
			xstep = false;
		}
		else{
			arr[4] = "o";
			document.getElementById("o4").style.setProperty("display","inline");
			xstep = true;
		}
	}
	winCheck();
}

function cell5() {
	if (arr[5] == "") {
		if (xstep) {
			arr[5] = "x";
			document.getElementById("x5").style.setProperty("display","inline");
			xstep = false;
		}
		else{
			arr[5] = "o";
			document.getElementById("o5").style.setProperty("display","inline");
			xstep = true;
		}
	}
	winCheck();
}

function cell6() {
	if (arr[6] == "") {
		if (xstep) {
			arr[6] = "x";
			document.getElementById("x6").style.setProperty("display","inline");
			xstep = false;
		}
		else{
			arr[6] = "o";
			document.getElementById("o6").style.setProperty("display","inline");
			xstep = true;
		}
	}
	winCheck();
}

function cell7() {
	if (arr[7] == "") {
		if (xstep) {
			arr[7] = "x";
			document.getElementById("x7").style.setProperty("display","inline");
			xstep = false;
		}
		else{
			arr[7] = "o";
			document.getElementById("o7").style.setProperty("display","inline");
			xstep = true;
		}
	}
	winCheck();
}

function cell8() {
	if (arr[8] == "") {
		if (xstep) {
			arr[8] = "x";
			document.getElementById("x8").style.setProperty("display","inline");
			xstep = false;
		}
		else{
			arr[8] = "o";
			document.getElementById("o8").style.setProperty("display","inline");
			xstep = true;
		}
	}
	winCheck();
}

function winCheck(){
	if (arr[0] == "x" && arr[1] == "x" && arr[2] == "x") {
		alert("X win");
		s = -999;
	}
	else if (arr[3] == "x" && arr[4] == "x" && arr[5] == "x") {
		alert("X win");
		s = -999;
	}
	else if (arr[6] == "x" && arr[7] == "x" && arr[8] == "x") {
		alert("X win");
		s = -999;
	}
	else if (arr[0] == "x" && arr[3] == "x" && arr[6] == "x") {
		alert("X win");
		s = -999;
	}
	else if (arr[1] == "x" && arr[4] == "x" && arr[7] == "x") {
		alert("X win");
		s = -999;
	}
	else if (arr[2] == "x" && arr[5] == "x" && arr[8] == "x") {
		alert("X win");
		s = -999;
	}
	else if (arr[0] == "x" && arr[4] == "x" && arr[8] == "x") {
		alert("X win");
		s = -999;
	}
	else if (arr[2] == "x" && arr[4] == "x" && arr[6] == "x") {
		alert("X win");
		s = -999;
	}
	else if (arr[0] == "o" && arr[1] == "o" && arr[2] == "o") {
		alert("O win");
		s = -999;
	}
	else if (arr[3] == "o" && arr[4] == "o" && arr[5] == "o") {
		alert("O win");
		s = -999;
	}
	else if (arr[6] == "o" && arr[7] == "o" && arr[8] == "o") {
		alert("O win");
		s = -999;
	}
	else if (arr[0] == "o" && arr[3] == "o" && arr[6] == "o") {
		alert("O win");
		s = -999;
	}
	else if (arr[1] == "o" && arr[4] == "o" && arr[7] == "o") {
		alert("O win");
		s = -999;
	}
	else if (arr[2] == "o" && arr[5] == "o" && arr[8] == "o") {
		alert("O win");
		s = -999;
	}
	else if (arr[0] == "o" && arr[4] == "o" && arr[8] == "o") {
		alert("O win");
		s = -999;
	}
	else if (arr[2] == "o" && arr[4] == "o" && arr[6] == "o") {
		alert("O win");
		s = -999;
	}
	var s = 0;
	for (var i = arr.length - 1; i >= 0; i--) {
		if(arr[i] != ""){
			s++;
		}
		if(s == 9){alert("Draw");}
	}
}