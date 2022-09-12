
//top panel interactivity
var topP =
document.getElementsByClassName("topPanel")[0];
var tpBool = true;

function Dashes()
{
	if(tpBool == true)
		{
			topP.style.top = "0px";
			tpBool = false;
		}
		else
		{
			topP.style.top = "-130%";
			tpBool = true;
		}
}
