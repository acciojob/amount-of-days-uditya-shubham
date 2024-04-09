//your JS code here. If required.
function daysOfAYear(year){
	if(year%4!=0)
		return 365;
	else if(year%400==0 ||(year%4==0 && year%100!=0))
		return 366;
	
}

