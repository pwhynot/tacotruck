$(function() {
    $(".change-pickup").on("click", function(event) {
      const id = $(this).data("id");
      const pickup = $(this).data("pickedup");
  
      const newPickup = {
        gone: pickup
      };
      $.ajax("/api/tacos/" + id, {
        type: "PUT",
        data: newPickup
      }).then(
        function() {
          console.log("changed order status to", newPickup);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      const newTaco = {
        name: $("#taco").val().trim(),
        shell: $("[name=shell]:checked").val(),
        vegetarian: $("[name=vegetarian]:checked").val(),
      };
      console.log(newTaco)
      
      $.ajax("/api/tacos", {
        type: "POST",
        data: newTaco
      }).then(
        function() {
          console.log("Taco Ordered");
          location.reload();
        }
      );
    });
  
    $(".delTaco").on("click", function(event) {
      const id = $(this).data("id");
      console.log(id);

      $.ajax("/api/tacos/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted Taco", id);
          location.reload();
        }
      );
    });
  });
  