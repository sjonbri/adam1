function setFocus()
{
    document.getElementById("pennycnt").focus();
}

var dvalues = new Array(12);
dvalues[0] = .01;
dvalues[1] = .05;
dvalues[2] = .10;
dvalues[3] = .25;
dvalues[4] = .50;
dvalues[5] = 1;
dvalues[6] = 2;
dvalues[7] = 5;
dvalues[8] = 10;
dvalues[9] = 20;
dvalues[10] = 50;
dvalues[11] = 100;

function autocalc(oText)
{
if (isNaN(oText.value)) //filter input
{
alert('Numbers only!');
oText.value = '';
}
var field, val, oForm = oText.form, total = a = 0;
//for (a; a < arguments.length; ++a) //loop through text elements
for (a; a < 2; a++) //loop through text elements
{
field = arguments[a];
val = parseFloat(field.value); //get value
if (!isNaN(val)) //number?
{
total += val*dvalues[a]; //accumulate
}
}

total=0;

if (!isNaN(parseInt(oForm.pennycnt.value)))
{
total += parseInt(oForm.pennycnt.value)*dvalues[0];
oForm.pennytot.value = round_decimals(parseInt(oForm.pennycnt.value)*dvalues[0], 2);
}
if (!isNaN(parseInt(oForm.nickelcnt.value)))
{
total += parseInt(oForm.nickelcnt.value)*dvalues[1];
oForm.nickeltot.value = round_decimals(parseInt(oForm.nickelcnt.value)*dvalues[1], 2);
}
if (!isNaN(parseInt(oForm.dimecnt.value)))
{
total += parseInt(oForm.dimecnt.value)*dvalues[2];
oForm.dimetot.value = round_decimals(parseInt(oForm.dimecnt.value)*dvalues[2], 2);
}
if (!isNaN(parseInt(oForm.quartercnt.value)))
{
total += parseInt(oForm.quartercnt.value)*dvalues[3];
oForm.quartertot.value = round_decimals(parseInt(oForm.quartercnt.value)*dvalues[3], 2);
}

if (!isNaN(parseInt(oForm.fiftycentcnt.value)))
{
total += parseInt(oForm.fiftycentcnt.value)*dvalues[4];
oForm.fiftycenttot.value = round_decimals(parseInt(oForm.fiftycentcnt.value)*dvalues[4], 2);
}

if (!isNaN(parseInt(oForm.singlecnt.value)))
{
total += parseInt(oForm.singlecnt.value)*dvalues[5];
oForm.singletot.value = round_decimals(parseInt(oForm.singlecnt.value)*dvalues[5], 0);
}

if (!isNaN(parseInt(oForm.twodollarcnt.value)))
{
total += parseInt(oForm.twodollarcnt.value)*dvalues[6];
oForm.twodollartot.value = round_decimals(parseInt(oForm.twodollarcnt.value)*dvalues[6], 0);
}

if (!isNaN(parseInt(oForm.fivecnt.value)))
{
total += parseInt(oForm.fivecnt.value)*dvalues[7];
oForm.fivetot.value = round_decimals(parseInt(oForm.fivecnt.value)*dvalues[7], 0);
}

if (!isNaN(parseInt(oForm.tencnt.value)))
{
total += parseInt(oForm.tencnt.value)*dvalues[8];
oForm.tentot.value = round_decimals(parseInt(oForm.tencnt.value)*dvalues[8], 0);
}

if (!isNaN(parseInt(oForm.twentycnt.value)))
{
total += parseInt(oForm.twentycnt.value)*dvalues[9];
oForm.twentytot.value = round_decimals(parseInt(oForm.twentycnt.value)*dvalues[9], 0);
}

if (!isNaN(parseInt(oForm.fiftycnt.value)))
{
total += parseInt(oForm.fiftycnt.value)*dvalues[10];
oForm.fiftytot.value = round_decimals(parseInt(oForm.fiftycnt.value)*dvalues[10], 0);
}

if (!isNaN(parseInt(oForm.hundredcnt.value)))
{
total += parseInt(oForm.hundredcnt.value)*dvalues[11];
oForm.hundredtot.value = round_decimals(parseInt(oForm.hundredcnt.value)*dvalues[11], 0);
}

oForm.total.value   = round_decimals(total, 2);
oForm.deposit.value = round_decimals(total-150, 2);


}


function round_decimals(original_number, decimals) {
    var result1 = original_number * Math.pow(10, decimals)
    var result2 = Math.round(result1)
    var result3 = result2 / Math.pow(10, decimals)
    return pad_with_zeros(result3, decimals)
}

function pad_with_zeros(rounded_value, decimal_places) {

    // Convert the number to a string
    var value_string = rounded_value.toString()
    
    // Locate the decimal point
    var decimal_location = value_string.indexOf(".")

    // Is there a decimal point?
    if (decimal_location == -1) {
        
        // If no, then all decimal places will be padded with 0s
        decimal_part_length = 0
        
        // If decimal_places is greater than zero, tack on a decimal point
        value_string += decimal_places > 0 ? "." : ""
    }
    else {

        // If yes, then only the extra decimal places will be padded with 0s
        decimal_part_length = value_string.length - decimal_location - 1
    }
    
    // Calculate the number of decimal places that need to be padded with 0s
    var pad_total = decimal_places - decimal_part_length
    
    if (pad_total > 0) {
        
        // Pad the string with 0s
        for (var counter = 1; counter <= pad_total; counter++) 
            value_string += "0"
        }
    return value_string
}



function waitToShow (delay) { 
if (delay > 1) {
setTimeout("waitToShow(1)",3000);
} else {
document.getElementById("PrintIt").style.display = '';
}
}

function hideButton () {
document.getElementById("PrintIt").style.display = 'none';window.print();
eval("waitToShow(2)");}


/*Current date in form credit: 
JavaScript Kit (www.javascriptkit.com)
Over 200+ free scripts here!
*/

var mydate=new Date()
var theyear=mydate.getYear()
if (theyear < 1000)
theyear+=1900
var theday=mydate.getDay()
var themonth=mydate.getMonth()+1
if (themonth<10)
themonth="0"+themonth
var theday=mydate.getDate()
if (theday<10)
theday="0"+theday

//////EDIT below three variable to customize the format of the date/////

var displayfirst=themonth
var displaysecond=theday
var displaythird=theyear

////////////////////////////////////

// document.dform.currdate.value=displayfirst+"/"+displaysecond+"/"+displaythird


