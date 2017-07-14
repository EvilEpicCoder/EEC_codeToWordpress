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


var keyCharArray=["(",")","{","}","[","]",";","=","<",">","+","-",".","/",":",'“',"”",'"','\\'];
var keyReplaceArray=[	"<span style='color:#952300;'>&#40;</span><span style='color:#00B97A;'>",
						"</span><span style='color:#952300;'>&#41;</span>",
						"<span style='color:#0000FF;font-family:Monospace;font-size:12px;'>&#123;</span><span style='color:#4D4D4D;'>",
						"</span><span style='color:#0000FF;'>&#125;</span>",
						"<span style='color:#FFA200;'>&#91;</span>",
						"<span style='color:#FFA200;'>&#93;</span>",
						"<span style='color:#0000FF;'>&#59;</span>",
						"<span style='color:#06724F;'>&#61;</span>",
						"<span style='color:#06724F;'>&#60;</span>",
						"<span style='color:#06724F;'>&#62;</span>",
						"<span style='color:#06724F;'>&#43;</span>",
						"<span style='color:#06724F;'>&#45;</span>",
						"<span style='color:#0000FF;'>&#46;</span>",
						"<span style='color:#FF5500;'>&#47;</span>",
						"<span style='color:#FF0000;'>&#58;</span>",
						"<span style='color:#D80046;'>&ldquo;</span><span style='color:#D80046;'>",
						"</span><span style='color:#952300;'>&rdquo;</span>",
						"<span style='color:#D80046;'>&quot;</span>",
						"<span style='color:#D80046;'>&#92;</span>"];


window.onload=function start(event){
button=document.getElementById("button");
button.addEventListener("click",parse,false);
//input.addEventListener("keyup",start,false);
};
function parse(){
input=document.getElementById("input");
output=document.getElementById("output");
preview=document.getElementById("preview");
//console.log("Clicked");
output.value="";		//Clean values in output
preview.innerHTML="";	//Clean values in preview
inputBuffer=input.value;
decode(inputBuffer);
}
function decode(val){
		//console.log(typeof(val));
		//console.log(val.length);
	codeValue.push("<div style='font-family:Monospace;font-size:12px;background:#E5E5FF;color:#4D4D4D;'>");//creating block with code
	codeValue.push("<span style='font-family:Monospace;font-size:10px;color:#BFBFBF;'>1__&nbsp</span>");//zero line numerated
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
			if(lineCount<9){
				lineCount++;
				codeValue.push("</br> <span style='font-family:Monospace;font-size:10px;color:#BFBFBF;'>"+lineCount+"__&nbsp</span>");
			}else{
				lineCount++;
				codeValue.push("</br> <span style='font-family:Monospace;font-size:10px;color:#BFBFBF;'>"+lineCount+"__</span>");
			}
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
