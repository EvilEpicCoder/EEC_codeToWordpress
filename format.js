var input="input";
var output="output";
var preview="preview";
var button="button";
var codeValue=[];
var lineCount=1;
var codePreviewValue=[];
var codePreviewValueCheck=[];
var boolPassed=false;

var keyWordsArray=["abstract","arguments","await","boolean",
"break","byte","case","catch","char","class","const","continue",
"debugger","default","delete","do","double","else","enum","eval",
"export","extends","false","final","finally","float","for","function",
"goto","if","implements","import","in","instanceof","int","interface",
"let","long","native","new","null","package","private","protected",
"public","return","short","static","super","switch","synchronized","this",
"throw","throws","transient","true","try","typeof","var","void",
"volatile","while","with","yield"];

var keyWordsArrayOther=["Array","Date","eval","function",
"hasOwnProperty","Infinity","isFinite","isNaN",
"isPrototypeOf","length","Math","NaN",
"name","Number","Object","prototype","String","toString","undefined","valueOf"];

					
var keyCharArray=["(",")","{","}","[","]",";","=","<",">","+","-",".","/",":"];
var keyReplaceArray=["<span style='color:#952300;'>(</span><span style='color:#00B97A;'>","</span><span style='color:#952300;'>)</span>",
					 "<span style='color:#0000FF;'>{</span><span style='color:#4D4D4D;'>","</span><span style='color:#0000FF;'>}</span>",
					 "<span style='color:#FFA200;'>[</span>","<span style='color:#FFA200;'>]</span>",
					 "<span style='color:#0000FF'>;</span>","<span style='color:#06724F;'>=</span>","<span style='color:#06724F;'><</span>","<span style='color:#06724F;'>></span>",
					 "<span style='color:#06724F'>+</span>","<span style='color:#06724F;'>-</span>","<span style='color:#0000FF;'>.</span>",
					 "<span style='color:#FF5500;'>/</span>","<span style='color:#FF0000;'>:</span>"];


window.onload=function start(event){
button=document.getElementById("button");
button.addEventListener("click",parse,false);
//input.addEventListener("keyup",start,false);
};
function parse(){
input=document.getElementById("input");
output=document.getElementById("output");
preview=document.getElementById("preview");
console.log("Clicked");

inputBuffer=input.value;
decode(inputBuffer);


}
function decode(val){
		//console.log(typeof(val));
		//console.log(val.length);
	codeValue.push("<div style='font-family:Monospace;font-size:12px;background:#E5E5FF;color:black;'>");//creating block with code
	codeValue.push("<span style='font-family:Monospace;font-size:10px;color:#BFBFBF;'>1__ </span>");//zero line numerated
	//we have string, chacking each character
	for(var i=0;i<=val.length+1;i++){
		for(var s=0;s<=keyCharArray.length;s++){
				if(codeValue[i]==keyCharArray[s]){
					codeValue[i]=keyReplaceArray[s];
				}
		}
		if(val[i]==' '){
			codeValue.push(' ');
			//console.log("space");
		}else if(val[i]=='\n'){
			//codeValue.push(' </br> ');
			lineCount++;
			codeValue.push("</br> <span style='font-family:Monospace;font-size:10px;color:#BFBFBF;'>"+lineCount+"__</span>");
			//console.log("newline");
		}else{
			codeValue.push(val[i]);
			//console.log(codeValue);
		}
		
	}
	codeValue.push("</div>");
	//codeValue=codeValue.join("");
	//codeValue=codeValue.split(" ");
	
	
	output.value=codeValue.join("");
	preview.innerHTML=codeValue.join("");
	//console.log(codeValue);
}
