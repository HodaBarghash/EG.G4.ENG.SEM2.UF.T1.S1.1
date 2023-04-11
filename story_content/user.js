function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Z4X6IaDwFM":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyRux2MEgNjuMhilRWOAh1II1n19WTZiBVFWRW4XXrB6qeJ_v2RS6lI_qLPvIwpHa19TA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

