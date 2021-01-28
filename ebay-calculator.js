// Constant definitions
const ebayItemFee = parseFloat (0.75);
const ebayShippingFee = parseFloat (0.25);
const eBayFeePercentage = parseFloat (0.1235);

//Form variables
var sellPrice;
var acquisitionCost;
var shippingFee;
var totalCost;

// Calculated variables
var finalValueFee = 0.1;
var profit;
var profitPercentage;

$(document).ready(function() {

    // Empty the schedule to prepare for loading the schedule from JavaScript
    function calculate () {
        sellPrice = parseFloat ($("#sell-price").val ());
        acquisitionCost = parseFloat ($("#acquisition-cost").val ());
        shippingFee = parseFloat ($("#shipping-fee").val ());

        console.log (`Sell Price:  ${sellPrice}`);
        console.log (`Acquisition Cost:  ${acquisitionCost}`);
        console.log (`Shipping Fee:  ${shippingFee}`);

        if ((sellPrice != null) || (acquisitionCost != null) || (shippingFee != null)) {
          console.log ("Here.")
          finalValueFee = parseFloat (ebayItemFee + ebayShippingFee + sellPrice * eBayFeePercentage);
          finalValueFee = parseFloat (finalValueFee.toFixed (2));
          totalCost = parseFloat (acquisitionCost + finalValueFee + shippingFee);
          profit = sellPrice - totalCost
          profitPercentage = profit / totalCost;
          profitPercentage = profitPercentage * 100;
          profitPercentage = profitPercentage.toFixed (2);

          $("#profit").val (profit);
          $("#total-cost").val (totalCost);
          $("#profit-percentage").val (`${profitPercentage}%`);
          $("#final-value-fee").val (finalValueFee);
        }
    }

    $("#calc-button").on ("click", function (event) {
      event.preventDefault ();
      calculate ();
    });
});
