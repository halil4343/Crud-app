//submit
$(document).ready(function() {
    $("#add_user").submit(function(event) {
        alert("Data inserted successfully!");
        location.reload()
    });
});

//update
$("#update_button").click(function(event){
  event.preventDefault()

  var unindexArr = $("#update_user").serializeArray()
  var data = {}
  $.map(unindexArr, function(n, i){
    data[n["name"]] = n["value"]
  })

  var request = {
    "url" : `http://localhost:3000/api/users/${data.id}`,
    method : "PUT",
    "data" : data
  }

  $.ajax(request).done(function(response){
    alert("User updated successfully!")
    location.reload(); // Reload the page

  })
})




//delete 
document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".delete-btn");
  
    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const userId = button.getAttribute("data-id");
        const url = `http://localhost:3000/api/users/${userId}`;
  
        if (confirm("Are you sure you want to delete this user?")) {
          fetch(url, { method: "DELETE" })
            .then((response) => {
              if (response.ok) {
                alert("User deleted successfully!");
                location.reload(); // Reload the page
              } else {
                alert("Failed to delete user. Please try again.");
              }
            })
            .catch((error) => {
              console.error("Error:", error);
              alert("An error occurred. Please try again.");
            });
        }
      });
    });
  });
  