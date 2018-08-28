/* Julia Bernoski
    March 18th 2018
    PROG3180 Assignment2
 */

//function that calculates the average rating for the add page
function JBGetCalculation(FoodQuality,Service,Value){
    var avg =0;
    var int1 = parseInt(FoodQuality)/5;
    var int2 = parseInt(Service)/5;
    var int3 = parseInt(Value)/5;

   avg = int1+int2+int3;
   avg = Math.round((avg/3)*100);
   $("#JBOverall").val(avg + "%");
   }


   //function tat calculates the average rating for the modify page
function JBGetModifyCalculation(FoodQuality,Service,Value){
    var avg =0;
    var int1 = parseInt(FoodQuality)/5;
    var int2 = parseInt(Service)/5;
    var int3 = parseInt(Value)/5;

    avg = int1+int2+int3;
    avg = Math.round((avg/3)*100);
    $("#JBOverallRatingModify").val(avg + "%");
}

//validations for Add form
function JBValidate_JBAddForm(){
    var form = $("#JBAddForm");
    form.validate({
        rules:{
            JBBusinessName:{
                required:true,
                rangelength:[2,20]
            },
            JBReviewerEmail:{
                required: true,
                emailCheck:true
            },
            JBDate:{
                required:true
            },
            JBFoodQuality:{
                min:0,
                max:5
            },
            JBService:{
                min:0,
                max:5
            },
            JBValue:{
                min:0,
                max:5
            }
        },
        messages:{
            JBBusinessName:{
                required:"Business Name is required.",
                rangelength:"Length must be 2-30 characters long."
            },
            JBReviewerEmail:{
                required: "Email is required.",
                emailCheck:"Please Enter a valid email address."
            },
            JBDate:{
                required:"Review Date is required."
            },
            JBFoodQuality:{
                min:"Value must be 0-5",
                max:"Value must be 0-5"
            },
            JBService:{
                min:"Value must be 0-5",
                max:"Value must be 0-5"
            },
            JBValue:{
                min:"Value must be 0-5",
                max:"Value must be 0-5"
            }
        }
    });
    return form.valid();
}

// Validations for the modify page.
function JBvalidate_JBModifyForm(){
    var form = $("#JBModifyForm");
    form.validate({
        rules:{
            JBModifyBusiness:{
                required:true,
                rangelength:[2,20]
            },
            JBModifyEmail:{
                required: true,
                emailCheck:true
            },
            JBModifyDate:{
                required:true
            },
            JBModifyFood:{
                min:0,
                max:5
            },
            JBModifyService:{
                min:0,
                max:5
            },
            JBModifyValue:{
                min:0,
                max:5
            }
        },
        messages:{
            JBModifyBusiness:{
                required:"Business Name is required.",
                rangelength:"Length must be 2-30 characters long."
            },
            JBModifyEmail:{
                required: "Email is required.",
                emailCheck:"Please Enter a valid email address."
            },
            JBModifyDate:{
                required:"Review Date is required."
            },
            JBModifyFood:{
                min:"Value must be 0-5",
                max:"Value must be 0-5"
            },
            JBModifyService:{
                min:"Value must be 0-5",
                max:"Value must be 0-5"
            },
            JBModifyValue:{
                min:"Value must be 0-5",
                max:"Value must be 0-5"
            }
        }
    });
    return form.valid();
}


//email validation
jQuery.validator.addMethod("emailCheck",
    function(value, element){
        var regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return this.optional(element) || regex.test(value);
    },
    "Please enter a valid Email Address.");

