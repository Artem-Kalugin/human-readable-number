module.exports = function toReadable (number) {
	let answer;
	let array = number.toString().split("");
	if (array.length==1) return number==0?"zero":getNum(array[0]);
	if (array.length==2 && array[0]<2) return getNum(array[0]+array[1]);
	if (array.length==2 && array[0]>=2) {
		answer = getDec(array[0]);
		if (array[1]!=0) answer+=" " + getNum(array[1]);
	}
	if (array.length==3 && array[1]<2) {
		answer=getNum(array[0]) + " hundred";
		if(array[2]!=0 && array[1]==0) answer+=" " + getNum(array[2]); 
		if(array[2]==0 && array[1]==1) answer+=" " + "ten"; 
		if(array[2]!=0 && array[1]!=0) answer+=" " + getNum(array[1]+array[2]); 
	}
	if (array.length==3 && array[1]>=2) {
       answer = getNum(array[0]) + " hundred " + getDec(array[1]); 
	   if (array[2]!=0) answer+=" " + getNum(array[2]);
	}
	return answer;
  }
  function getNum(myNumber){
	  switch (myNumber){
	  case "1": return "one";
	  break;
	  case "2": return "two";
	  break;
	  case "3": return "three";
	  break;
	  case "4": return "four";
	  break;
	  case "5": return "five";
	  break;
	  case "6": return "six";
	  break;
	  case "7": return "seven";
	  break;
	  case "8": return "eight";
	  break;
	  case "9": return "nine";
	  break;
	  case "10": return "ten";
	  break;
	  case "11": return "eleven";
	  break;
	  case "12": return "twelve";
	  break;
	  case "13": return "thirteen";
	  break;
	  case "14": return "fourteen";
	  break;
	  case "15": return "fifteen";
	  break;
	  case "16": return "sixteen";
	  break;
	  case "17": return "seventeen";
	  break;
	  case "18": return "eighteen";
	  break;
	  case "19": return "nineteen";	
	  break;
	  default: return;
	  }
  }

  function getDec(myNumber){
	switch (myNumber){
	case "2": return "twenty";
	break;
	case "3": return "thirty";
	break;
	case "4": return "forty";
	break;
	case "5": return "fifty";
	break;
	case "6": return "sixty";
	break;
	case "7": return "seventy";
	break;
	case "8": return "eighty";
	break;
	case "9": return "ninety";
	break;
}
  }
