var list = document.querySelector("#flags")
var countryname;
var flag;
var countrynames=[];
var flags=[];
var count=0;
var count1;
var second=60;
function StartTimer()
{
	second --;
	if(second >=0){
		document.getElementById('second').innerHTML="TIME 0:"+second;
	}else{
		window.clearInterval(count1);
		document.getElementById('flags').innerHTML="Timed Out!";		
	}
}
var count1r=window.setInterval('StartTimer()',1000);
fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json()).then(flagsarr => {
        for (let i = 0; i < flagsarr.length; i++) 
        {          
            countrynames.push(flagsarr[i].name.common)
            flags.push(flagsarr[i].flags.png)
        }
        const i = ~~ (Math.random() * countrynames.length);
        countryname=countrynames[i];
        flag=flags[i];
        list.innerHTML = `<div class="col-5">
                <div class="card border border-0" style="width: 19rem; margin-top:40px;">
                    <img src="${flag}" class="card-img" >
                  </div>
            </div>`
})
function clickbutton(){
    var inputcountryname = document.getElementById("inputname").value
    if (inputcountryname.toLowerCase() == countryname.toLowerCase()){
        count+=1;
        document.getElementById("countLabel").innerHTML= "YOUR SCORE : " + count;
    }
    const i = ~~ (Math.random() * countrynames.length);
    countryname=countrynames[i];
    flag=flags[i];
    list.innerHTML = `<div class="col-5">
            <div class="card border border-0" style="width: 19rem; margin-top:40px;">
                <img src="${flag}" class="card-img" >
              </div>
        </div>`
}