const whatToDoForLunch = function (hungry, availableTime) {
  if (availableTime < 20) {
    console.log(
      " Pick something up and eat in back in the Lab or in the kitchen"
    );
  } else if (availableTime >= 20 && availableTime < 30) {
    console.log("Deserve a break and could try a place in Gastown.");
  } else if (availableTime >= 30) {
    console.log(
      "That this is a bootcamp after all and you should probably reconsider."
    );
  } else if (!hungry) {
    console.log("Get back to work");
  } 
};