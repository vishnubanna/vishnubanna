var pass = 1; 
var prevcurr = 1; 
let hmax = 732;
$( document ).ready(function() {
    $(window).scroll(function(){
        var curr = window.pageYOffset;
        var winw = window.screenX;
        var y = $("#bottom").offset().top;//window.innerHeight;
        console.log(curr, y)

        var name = $("#name").offset().top;
        var edu = $("#education").offset().top;
        var experince = $("#experience").offset().top;
        var pp = $("#PP").offset().top;
        //var ec = $("#EC").offset().top;
        var skills = $("#skills").offset().top;

        //console.log(window.screen.width)
        if (window.innerWidth > 700){
            if ((1 - (3 * curr/y)) > 0.75){
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

                // $(".content").css({
                //     "padding-left": ""+ 270 - 170 * curr/y +"px",
                // })
                $(".namecont").css({
                    "padding-left": ""+ 270 - 170 * curr/y +"px",
                })
                $(".contexts").css({
                    "padding-left": ""+ 270 - 170 * curr/y +"px",
                })

                // $(".sidebar").css({
                //     "width": ""+ 300 - 250 * curr/y +"px",
                // })

                // $(".content").css({
                //     "margin-left": ""+ 320 - 270 * curr/y +"px",
                //})
                $(".name").css({
                    "padding-top": ""+((2 * hmax * curr)/y)+"px",
                    "margin-bottom": ""-((9 * hmax * curr)/y)+"px",
                })

                pass = 0;
            }
            else if (pass == 1 || curr >= edu){
                $(".sidebar").css({
                    "background-color": "rgba(0, 0, 0, 0.75)",
                    //"background-color": "rgba(0, 256, 0, 0.75)",
                })

                $(".imgs").css({
                    "transform": "scale(0.83333333333)",
                })

                $(".sidebar").css({
                    "width": "200px",
                })

                // $("body").css({
                //     "background-color": "rgba(0, 0, 0, 0)",
                // })
                // $(".namecont").css({
                //     "padding-left": "270px",
                // })
                // $(".contexts").css({
                //     "padding-left": "270px",
                // })

            }
        // if(parseInt($(".sidebar").css("width")) > 200){
        //}
            $("div.module.parallax").css({
                //"background-position": "50% " + (50 + curr/10) + "%",
                "background-size": (100 + (curr/y) * 10) + "%" + (100 + (curr/y) * 10) + "%",
            })

            // }
            if ((1 - (30 * curr/y)) > -1){
                // $(".name").css({
                //     "background-color": "rgba(0, 0, 0," + (1 - (50 * curr/y)) + ")",
                // })
                // $("body").css({
                //     "background-color": "rgba(0, 0, 0," + (1 - (16 * curr/y)) + ")",
                // });

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
            }

            var preq = 30; 
            if (curr - prevcurr > 0){
                pass = pass;
            }
            else{
                pass = 1;
            }
        }else{
            $(".namecont").css({
                "padding-left": "0px",
            })
            $(".contexts").css({
                "padding-left": "0px",
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
        }

        if (curr >= name && curr < edu - preq){
            $('#l1').addClass("active");
            $('#l2').removeClass("active");
            $('#l3').removeClass("active");
            $('#l4').removeClass("active");
            //$('#l5').removeClass("active"); 
            $('#l6').removeClass("active"); 
            pass = 1
        }
        else{
            $('#l1').removeClass("active"); 
        }
        
        if (curr >= edu - preq && curr < experince - preq){
            $('#l1').removeClass("active");
            $('#l2').addClass("active");
            $('#l3').removeClass("active");
            $('#l4').removeClass("active");
            //$('#l5').removeClass("active"); 
            $('#l6').removeClass("active"); 
            pass = 1
        }
        else{
            $('#l2').removeClass("active"); 
        }

        if (curr >= experince - preq && curr < pp - preq){
            $('#l1').removeClass("active");
            $('#l2').removeClass("active");
            $('#l3').addClass("active");
            $('#l4').removeClass("active");
            //$('#l5').removeClass("active"); 
            $('#l6').removeClass("active"); 
        }
        else{
            $('#l3').removeClass("active"); 
        }

        if (curr >= pp - preq && curr < skills - preq){
            $('#l1').removeClass("active");
            $('#l2').removeClass("active");
            $('#l3').removeClass("active");
            $('#l4').addClass("active");
            //$('#l5').removeClass("active"); 
            $('#l6').removeClass("active"); 
        }
        else{
            $('#l4').removeClass("active"); 
        }

        // if (curr >= ec && curr < skills){
        //     $('#l1').removeClass("active");
        //     $('#l2').removeClass("active");
        //     $('#l3').removeClass("active");
        //     $('#l4').removeClass("active");
        //     //$('#l5').addClass("active"); 
        //     $('#l6').removeClass("active"); 
        // }
        // else{
        //     $('#l5').removeClass("active"); 
        // }

        if (curr >= skills - preq){
            $('#l1').removeClass("active");
            $('#l2').removeClass("active");
            $('#l3').removeClass("active");
            $('#l4').removeClass("active");
            //$('#l5').removeClass("active"); 
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
            var edu = $("#education").offset().top;

            if (curr > edu - 30){
                event.preventDefault();
                console.log()
                // Store hash
                var hash = this.hash;
        
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 1000, function(){
        
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
      } // End if
    });
  });
