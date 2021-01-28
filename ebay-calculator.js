// Constant definitions
const ebayItemFee = 0.75;
const ebayShippingFee = 0.25;
const eBayFeePercentage = 0.1235;

//Form variables
var sellPrice;
var acquisitionCost;
var shippingFee;

// Calculated variables
var finalValueFee;
var profit;
var profitPercentage;

$(document).ready(function() {

    // Empty the schedule to prepare for loading the schedule from JavaScript
    function calculate () {
        sellPrice = $("#sell-price").val ();
        acquisitionCost = $("#acquisition-cost").val ();
        shippingFee = $("#shipping-fee").val ();

        console.log (`Sell Price:  ${sellPrice}`);
        console.log (`Acquisition Cost:  ${acquisitionCost}`);
        console.log (`Shipping Fee:  ${shippingFee}`);

        if ((sellPrice != null) && (acquisitionCost != null) && (shippingFee != null)) {
          console.log ("Here.")
          finalValueFee = ebayItemFee + ebayShippingFee + sellPrice * eBayFeePercentage;
          finalValueFee = finalValueFee.toFixed (2);
          profit = sellPrice - acquisitionCost - finalValueFee - shippingFee;
          profitPercentage = sellPrice / (acquisitionCost + shippingFee + finalValueFee);
          profitPercentage = profitPercentage * 100;
          profitPercentage = profitPercentage.toFixed (2);

          $("#profit").val (profit);
          $("#profit-percentage").val (`${profitPercentage}%`);
          $("#final-value-fee").val (finalValueFee);
        }
    }

    $("#calc-button").on ("click", function (event) {
      event.preventDefault ();
      calculate ();
    });
});
