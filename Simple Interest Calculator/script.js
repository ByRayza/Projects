function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*rate*years /100; // Interest Calculation
    var year = new Date().getFullYear()+parseInt(years);
    if(principal == undefined || principal<=0){alert("Enter a positive number"); document.getElementById("principal").focus();} // This will validate for a positive input for the principal
    else{
        var result = document.getElementById("result").innerHTML= 
        "If you deposit amount of <mark>"+principal+",</mark><br> at an interest rate of <mark>"+rate+", </mark><br>\ You will receive an amount of <mark>"+interest+"</mark>,<br>\ in the year <mark>"+year+"</mark>";
        return
    }
}     
function updateRate(){ //Display value of Rate Slider
    var ratevalue = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText = ratevalue + "%";}