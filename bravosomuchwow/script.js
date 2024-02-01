$(document).ready(function () {
  $("img").draggable({
    drag: function (event, ui) {
      let dogeLeft = ui.position.left;
      console.log("Dragging... Left: ", dogeLeft);
    },
    stop: function () {
      console.log("Stopping???");

      let dogeLeft = $("img").position().left;

      if (dogeLeft > 300) {
        console.log("We are above 300", dogeLeft);

        $("p").text("You won. Good for you.");

        $("img").attr("src", "https://picsum.photos/200/300");
      } else {
        console.log("We are NOT above 300");
      }
    }
  });
});