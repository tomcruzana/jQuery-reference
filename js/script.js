//activate any functions to test features. Some elements aren't present in the DOM so you have to create 'em manually
/*
  ex: 
    jSelectors()
*/

//jQuery wraps elements into an array so they can access jqeury features/properties like below
//$(...css selector)
//.css({...css here})
//.animate({...css here})

//sample document onload snippet
$("document").ready(() => {
  console.log("jquery loaded successfully");
});

//jquery selectors
function jSelectors() {
  $("h1").css({ color: "red" });
  $(".wrapper").css({ border: "1px solid orange" });
  $("p").css({ fontWeight: "bolder" });
}

//jquery filters
function jFilters() {
  //doc: https://api.jquery.com/category/selectors/basic-filter-selectors/
  $("tr:even").css("background-color", "#bbf");
  $("div:animated").toggleClass("colored");
  $("td:eq( 2 )").css("color", "red");
  $("tr:first").css("font-style", "italic");
  $("input:not(:checked) + span").css("background-color", "yellow");
}

//jquery DOM traversal
function jTraverse() {
  $("document").next().css({ border: "1px solid cyan" });

  $("document").prev().css({ border: "1px solid cyan" });

  $("document").parent().css({ border: "1px solid cyan" }); //can also be parents (plural)

  $("document").children().css({ border: "1px solid cyan" });

  $("#color").find(".red").css({ border: "1px solid cyan" });

  $("document").closest("p").css({ border: "1px solid cyan" });
}

//jquery chaining
function jChain() {
  $("li:first").css({ color: "blue" }).next().css({ color: "orange" });
}

//jquery adding contents
function addContents() {
  let fruits = $("#fruits");

  fruits.append("<p><b>orange</b></p>"); //adds content to the bottom of the element

  fruits.prepend("<p><i>grapes</i></p>"); //adds content to the top of the element

  fruits.before("<p><b>banana</b></p>"); //adds content to the top of element

  fruits.after("<p><i>tomato</i></p>"); //adds content after element

  fruits.html("<h1>FROOTIES</h1>"); //chnages the whole html of the element

  fruits.text("VEGGIES"); //changes the text of an element
}

//jquery wrap and unwrap elements
function jWrapUwrap() {
  let fruits = $("#fruits");
  fruits.wrap("<div>"); //wraps element w/ the specified element
  fruits.unwrap(); //unwraps the element
  fruits.wrapAll("<b>"); //wraps all elements inside that element
}

//jquery removing/emptying contents of an element
function JemptyRemove() {
  const basket = $("#basket");
  basket.empty(); //deletes the contents of the element
  basket.remove(); //deletes the element
}

//jquery changing attributes
function jChangeAttr() {
  const image = $("img");
  image.attr("name", "image_name"); // read or set and attribute
  image.removeAttr("alt"); //removes an attribute
  console.log(image.attr("alt")); //checks the attribute value
}

//jquery control css
function jControlCSS() {
  let properties = {
    fontWeight: "bold",
    color: "blue",
  };
  const p = $("p").css(properties); //object that contains css is passed as a param
  p.css({ color: "red" }); //single css propertu
}

//jquery manipulating classes
//.removeClass() removes class
//.addClass() adds class
//.toggleClass() toggles on and off on the matched class

//jquery binding and unbinding events
function jbindUnbindEvents() {
  //binds an event to matched element(s)
  $("p").on("click", () => {
    console.log("clicked!");
  });

  //unbinds event from matched element(s)
  $("p").off("click");
}

//jquery document ready vs. window load
function jReady() {
  $(document).on("ready", () => {
    console.log("document is ready");
  });

  $(window).on("load", () => {
    console.log("window is loaded");
  });

  $("p").on("click", (e) => {
    console.log("p is clicked");
    e.stopPropagation();
  });
}

//jquery animations
function jAnimate() {
  $("button").click(function () {
    $("div").animate({ left: "250px" });
  });

  $(document).ready(function () {
    $("button").click(function () {
      $("div").animate({ left: "250px" }, 4000, "linear", () => {
        alert("done");
      });
    });
  });
  //there are 3 params that are optional (speed, ease, and a callback function)
}

//fading elements: https://www.w3schools.com/jquery/jquery_fade.asp
function jFadeElements() {
  $("button").click(function () {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });

  $("button").click(function () {
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
  });

  $("button").click(function () {
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });

  $("button").click(function () {
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
  });
}

//jquery show, hide and toggle
function jShowHideToggle() {
  $("ol").hide(1000); // parameter is optional
  $("ol").show(1000); // parameter is optional
  $("ol").toggle(1000); // parameter is optional
}

//jquery sliding elements
function jSlideElements() {
  $(".red").slideUp(4000); //parameter is optional
  $(".red").slideDown(4000); //parameter is optional
  $(".red").slideToggle(4000); //parameter is optional
  //tip: there's a 2nd parameter which is a callback function
}

//jquery ajax: https://www.w3schools.com/jquery/jquery_ajax_intro.asp
function jAjaxCall() {
  $.ajax({
    url: "api/url",
    method: "POST",
    data: { var: "val" },
    // data: JSON.stringify({var:'val'}), // send data in the request body
    // contentType: "application/json; charset=utf-8",  // if sending in the request body
    dataType: "json",
  })
    .done(function (data, textStatus, jqXHR) {
      // because dataType is json 'data' is guaranteed to be an object
      console.log("done");
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      // the response is not guaranteed to be json
      if (jqXHR.responseJSON) {
        // jqXHR.reseponseJSON is an object
        console.log("failed with json data");
      } else {
        // jqXHR.responseText is not JSON data
        console.log("failed with unknown data");
      }
    })
    .always(function (dataOrjqXHR, textStatus, jqXHRorErrorThrown) {
      console.log("always");
    });
}

//jquery plugins info
//There are third-party plugin available online built on top of jqueary that you may reuse to save time
