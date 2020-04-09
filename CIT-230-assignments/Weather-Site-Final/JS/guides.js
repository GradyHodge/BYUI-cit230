//JS for Fake Guide JSON info

//trying to get anything to work as a starting point
///////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  $.getJSON("./guides.json", function (result) {
    var guidesObj = result;

    guidesObj.guides.forEach((guide) => {
      var name = $("<h4></h4>").text(guides.name);
      var picture = $("<img alt='mug shot'/><br>").attr("src", guides.picture);
      var certification = $("<br><span></span><br>").text(
        "Certification: " + guides.cert
      );
      var experience = $("<br/><span></span>").text(
        "Experience: " + guides.exp
      );
      var email = $("<br/><span></span>").text("Email: " + guides.email);
      var biography = $("<br/><span></span><br/><br/>").text(
        "Bio: " + guides.bio
      );
      $(".container").append(
        name,
        picture,
        certification,
        experience,
        email,
        biography
      );
    });
  });
});
///////////////////////////////////////////////////////////////////////////
