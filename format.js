var input="input";
var output="output";
var preview="preview";

function get(id){
	return parserType=document.getElementById(id);
}
function updateScreen(){
	console.log(input.value+"Here");
	preview.innerText=input.value;
	return true;
}


window.onload=function start(){
var input=document.getElementById("input");
input.addEventListener("keydown",start,false);

var codeValue=input.value;
codeValue=codeValue.split(" ");//Array [ "hello", "gdgdg", "friend" ]
//codeValue=codeValue.join(",");//"hello,gdgdg,friend";
console.log(codeValue[1][2]);
//var i=0;
for(var i=0; i<=codeValue.length;i++){
	if(codeValue[i]=="function"){
		codeValue[i]="<b style='color:blue'>function</b> "
	}
	if(codeValue[i]=="this"){
		codeValue[i]="<i style='color:red'>this</i> "
	}

	for(var a=0; a<=codeValue[i][a].lenght-1;a++){
		console.log(codeValue[i][a]);
		switch(codeValue[i][a]){
			case "(":codeValue[i]="<b>"+codeValue[i][a]+"</b>";
			break;
			case ")":codeValue[i]="<b>"+codeValue[i][a]+"</b>";
			break;
			case "{":codeValue[i]="<b>"+codeValue[i][a]+"</b>";
			break;
			case "}":ccodeValue[i]="<b>"+codeValue[i][a]+"</b>";
			break;		
		};
	};
	
}
codeValue=codeValue.join(" ");//"hello gdgdg friend";
document.getElementById("output").value = codeValue;
document.getElementById("preview").innerHTML = codeValue;
input.addEventListener("keyup",start,false);
};
