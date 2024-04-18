// Your JavaScript code here
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

// Display popup box when add button is clicked
addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Select cancel button
var cancelpopup = document.getElementById("cancel-popup");

// Close popup box when cancel button is clicked
cancelpopup.addEventListener("click", function(event){
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Select container and input elements for adding books
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");

addbook.addEventListener("click", function(event){
    event.preventDefault();

    // Get input values
    var title = document.getElementById("book-title-input").value;
    var author = document.getElementById("book-author-input").value;
    var description = document.getElementById("book-description-input").value;

    // Create new book container
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${title}</h2>
        <h5>${author}</h5>
        <p>${description}</p>
        <button onclick="deletebook(event)">Delete</button>
    `;
    container.append(div);
    

    // Clear input fields
    document.getElementById("book-title-input").value = "";
    document.getElementById("book-author-input").value = "";
    document.getElementById("book-description-input").value = "";

    // Close the popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});
function deletebook(event){
    event.target.parentNode.remove()
}