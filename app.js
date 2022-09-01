$(document).ready( function() {

    // get from local storage
    $('#gold').val( localStorage.getItem("gold") );
    $('#copper').val( localStorage.getItem("copper") );
    $('#silver').val( localStorage.getItem("silver") );
    $('#platinum').val( localStorage.getItem("platinum") );
    calculateGold();


    $('#gold, #silver, #copper, #platinum').change( calculateGold )
});
  
function calculateGold(){
    let gold = Number( $('#gold').val() );

    let copper = Number( $('#copper').val() ) / 100;

    let silver = Number( $('#silver').val() ) / 10;

    let platinum = Number( $('#platinum').val() ) * 10;

    let total = (copper + silver + gold + platinum).toFixed(2);

    // store to local storage
    localStorage.setItem("gold", $('#gold').val());
    localStorage.setItem("silver", $('#silver').val());
    localStorage.setItem("copper", $('#copper').val());
    localStorage.setItem("platinum", $('#platinum').val());

    let gp = parseInt(total);
    let sp, cp;
    let decimals = total.toString().split('.')[1];
    console.log("Decimals", decimals);

    sp = Number(decimals[0]);
    cp = Number(decimals[1]);

    let results = gp + "gp";
    console.log(sp)
    if( sp > 1 ) results += "; " + sp + "sp";
    if( cp > 1 ) results += "; " + cp + "cp";

    $('#results').text(results);
}
    