//declare a variable with the name textAnalysis
//intialize that variable to your bio
//Add to it a new info about yourself that is not in the bio
//Step1 show it in the console
//Step2 Show the values of the textAnalysis variable in html rather than the concole

var textAnalysis = "My name is Toni Rouhana I am a Phd candidate in sociology at UCSC.";
var carYear = 1950;
console.log(carYear);
console.log(textAnalysis);
document.writeln("<div id=''>"+carYear+"</div>");
document.writeln("<p>"+textAnalysis+"</p>");
textAnalysis += "I live in NYC and moved back to SC because of COVID!"
console.log(textAnalysis);
document.writeln("<p>"+textAnalysis+"</p>");
