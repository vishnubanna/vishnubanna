//var pass = 1; 
//var prevcurr = 1; 
let hmax = 732;
let preq = 30; 
let lim = 0.083333333333;
var winw = window.screenX;

$( document ).ready(function() {
    $(window).scroll(function(){
        var curr = window.pageYOffset;
        var y = $("#bottom").offset().top;
        // var curr = window.pageYOffset;
        // var winw = window.screenX;
        // var y = $("#bottom").offset().top;//window.innerHeight;
        console.log(curr, y)

        var name = $("#name").offset().top;
        var ec = $("#EC").offset().top;
        var edu = $("#education").offset().top;
        var experince = $("#experience").offset().top;
        var pp = $("#PP").offset().top;
        var skills = $("#skills").offset().top;

        //console.log(window.screen.width)
        if (window.innerWidth > 700){
            if (curr/y < lim/*(1 - (3 * curr/y)) > 0.75*/){
                //(1 - (3 * curr/y)) --> lim = (0.75 - 1)/-3
                $(".sidebar").css({
                    "background-color": "rgba(0, 0, 0," + (1 - (3 * curr/y)) + ")",
                    //"background-color": "rgba(0, 0,"+ (290 * curr/y) + "," + (1 - (3 * curr/y)) + ")",
                })

                $(".imgs").css({
                    "transform": "scale("+(1 - (2 * curr/y))+")",
                })

                $(".sidebar").css({
                    "width": ""+ 250 - 170 * curr/y +"px",
                })

                $(".namecont").css({
                    "padding-left": ""+ 270 - 170 * curr/y +"px",
                })
                $(".contexts").css({
                    "padding-left": ""+ 270 - 170 * curr/y +"px",
                })
                //console.log("cutoff:: "+((7 * hmax * curr)/y))
                //pass = 0;
            }
            else if (curr >= edu){
                $(".sidebar").css({
                    "background-color": "rgba(0, 0, 0, 0.75)",
                    //"background-color": "rgba(0, 256, 0, 0.75)",
                })

                $(".imgs").css({
                    "transform": "scale("+(1 - (2 * lim))+")",
                })

                $(".sidebar").css({
                    "width": ""+ 250 - 170 * lim +"px",
                })

                $(".namecont").css({
                    "padding-left": ""+ 270 - 170 * lim +"px",
                })
                $(".contexts").css({
                    "padding-left": ""+ 270 - 170 * lim +"px",
                })

            }

        }else{
            $(".namecont").css({
                "padding-left": "0px",
            })
            $(".contexts").css({
                "padding-left": "0px",
            })
        }

        if (curr/y < 0.08317912457){
            $(".name").css({
                "padding-top": ""+((2 * hmax * curr)/y)+"px",
                "margin-bottom": ""-((7 * hmax * curr)/y)+"px",
            })
        }
        else{
            $(".name").css({
                "padding-top": ""+(2 * hmax * 0.08317912457)+"px",
                "margin-bottom": ""-(7 * hmax * 0.08317912457)+"px",
            })
        }

        $("section.module.parallax").css({
            "background-position": "50% " + (50 + curr/50) + "%",
            "background-size": (100 + (curr/y) * 30) + "%" + (100 + (curr/y) * 30) + "%",
        })

        $("#title").css({
            "color": "rgba(256, 256, 256," + (1 - (16 * curr/y)) + ")",
        })
        $("#phone").css({
            "color": "rgba(256, 256, 256," + (1 - (16 * curr/y)) + ")",
        })
        $("#email").css({
            "color": "rgba(256, 256, 256," + (1 - (16 * curr/y)) + ")",
        })
        $("#git").css({
            "color": "rgba(256, 256, 256," + (1 - (16 * curr/y)) + ")",
        })
        $("#link").css({
            "color": "rgba(256, 256, 256," + (1 - (16 * curr/y)) + ")",
        })
        $("#sound").css({
            "color": "rgba(256, 256, 256," + (1 - (16 * curr/y)) + ")",
        })
        $("#mail").css({
            "color": "rgba(256, 256, 256," + (1 - (16 * curr/y)) + ")",
        })

        if (curr >= name && curr < ec - preq && curr > 0){
            $('#l1').addClass("active");
            $('#l5').removeClass("active");
            $('#l2').removeClass("active"); 
            $('#l3').removeClass("active");
            $('#l4').removeClass("active");
            $('#l6').removeClass("active"); 
            //pass = 1
        }
        else{
            $('#l1').removeClass("active"); 
        }
        
        if (curr >= ec - preq && curr < edu - preq){
            $('#l1').removeClass("active");
            $('#l5').addClass("active");
            $('#l2').removeClass("active");
            $('#l3').removeClass("active");
            $('#l4').removeClass("active"); 
            $('#l6').removeClass("active"); 
            //pass = 1
        }
        else{
            $('#l5').removeClass("active"); 
        }

        if (curr >= edu - preq && curr < experince - preq){
            $('#l1').removeClass("active");
            $('#l5').removeClass("active");
            $('#l2').addClass("active");
            $('#l3').removeClass("active");
            $('#l4').removeClass("active"); 
            $('#l6').removeClass("active"); 
        }
        else{
            $('#l2').removeClass("active"); 
        }

        if (curr >= experince - preq && curr < pp - preq){
            $('#l1').removeClass("active");
            $('#l5').removeClass("active");
            $('#l2').removeClass("active");
            $('#l3').addClass("active");
            $('#l4').removeClass("active"); 
            $('#l6').removeClass("active"); 
        }
        else{
            $('#l3').removeClass("active"); 
        }

        if (curr >= pp - preq && curr < skills - preq){
            $('#l1').removeClass("active");
            $('#l5').removeClass("active");
            $('#l2').removeClass("active");
            $('#l3').removeClass("active");
            $('#l4').addClass("active"); 
            $('#l6').removeClass("active"); 
        }
        else{
            $('#l4').removeClass("active"); 
        }

        if (curr >= skills - preq){
            $('#l1').removeClass("active");
            $('#l5').removeClass("active");
            $('#l2').removeClass("active");
            $('#l3').removeClass("active");
            $('#l4').removeClass("active"); 
            $('#l6').addClass("active"); 
        }
        else{
            $('#l6').removeClass("active"); 
        }
        
        console.log(curr, name, edu, experince, pp);
        prevcurr = curr;

        var height = parseInt($(".name").css("height"));
        console.log(height);
    });
});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        console.log(this.hash)
        // Prevent default anchor click behavior
            var curr = window.pageYOffset;
            var edu = $("#EC").offset().top;

            event.preventDefault();
            console.log()
            // Store hash
            var hash = this.hash;

            if (curr > edu - 30){
                // event.preventDefault();
                // console.log()
                // // Store hash
                // var hash = this.hash;
        
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 1000, function(){
        
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
                });
            }
            else{
                $('html, body').animate({
                scrollTop: $(hash).offset().top - (7 * hmax * 0.08317912457)
                }, 1000, function(){
        
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
                });
            }
      } // End if
    });
  });
  

$(document).ready(function(){
    let mod = "Mri";
    $("#"+mod+"Btn").on('click', function(event){
        $("#" + mod + "Mod").css({
            "display":"block",
        });
    })
    $(".close").on('click', function(event){    
        $("#"+mod+"Mod").css({
            "display":"none",
        });
    })
    $(window).on('click', function(event){
        if (event.target == document.getElementById(mod+"Mod")){
            $("#"+mod+"Mod").css({
                "display":"none",
            });
        }
    })
});

$(document).ready(function(){
    let mod = "Cmp";
    $("#"+mod+"Btn").on('click', function(event){
        $("#" + mod + "Mod").css({
            "display":"block",
        });
    })
    $(".close").on('click', function(event){    
        $("#"+mod+"Mod").css({
            "display":"none",
        });
    })
    $(window).on('click', function(event){
        if (event.target == document.getElementById(mod+"Mod")){
            $("#"+mod+"Mod").css({
                "display":"none",
            });
        }
    })
});

$(document).ready(function(){
    let mod = "SAC";
    $("#"+mod+"Btn").on('click', function(event){
        $("#" + mod + "Mod").css({
            "display":"block",
        });
    })
    $(".close").on('click', function(event){    
        $("#"+mod+"Mod").css({
            "display":"none",
        });
    })
    $(window).on('click', function(event){
        if (event.target == document.getElementById(mod+"Mod")){
            $("#"+mod+"Mod").css({
                "display":"none",
            });
        }
    })
});

$(document).ready(function(){
    let mod = "LML";
    $("#"+mod+"Btn").on('click', function(event){
        $("#" + mod + "Mod").css({
            "display":"block",
        });
    })
    $(".close").on('click', function(event){    
        $("#"+mod+"Mod").css({
            "display":"none",
        });
    })
    $(window).on('click', function(event){
        if (event.target == document.getElementById(mod+"Mod")){
            $("#"+mod+"Mod").css({
                "display":"none",
            });
        }
    })
});

$(document).ready(function(){
    $(window).resize(function(){
        console.log("resize");
        var curr = window.pageYOffset;
        var y = $("#bottom").offset().top;
        if (window.innerWidth > 700){
            if (curr/y < lim/*(1 - (3 * curr/y)) > 0.75*/){
                //(1 - (3 * curr/y)) --> lim = (0.75 - 1)/-3
                $(".sidebar").css({
                    "background-color": "rgba(0, 0, 0," + (1 - (3 * curr/y)) + ")",
                    //"background-color": "rgba(0, 0,"+ (290 * curr/y) + "," + (1 - (3 * curr/y)) + ")",
                })

                $(".imgs").css({
                    "transform": "scale("+(1 - (2 * curr/y))+")",
                })

                $(".sidebar").css({
                    "width": ""+ 250 - 170 * curr/y +"px",
                })

                $(".namecont").css({
                    "padding-left": ""+ 270 - 170 * curr/y +"px",
                })
                $(".contexts").css({
                    "padding-left": ""+ 270 - 170 * curr/y +"px",
                })
                //console.log("cutoff:: "+((7 * hmax * curr)/y))
                //pass = 0;
            }
            else if (curr >= edu){
                $(".sidebar").css({
                    "background-color": "rgba(0, 0, 0, 0.75)",
                    //"background-color": "rgba(0, 256, 0, 0.75)",
                })

                $(".imgs").css({
                    "transform": "scale("+(1 - (2 * lim))+")",
                })

                $(".sidebar").css({
                    "width": ""+ 250 - 170 * lim +"px",
                })

                $(".namecont").css({
                    "padding-left": ""+ 270 - 170 * lim +"px",
                })
                $(".contexts").css({
                    "padding-left": ""+ 270 - 170 * lim +"px",
                })

            }

        }else{
            $(".namecont").css({
                "padding-left": "0px",
            })
            $(".contexts").css({
                "padding-left": "0px",
            })
        }
    })
});