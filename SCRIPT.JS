// Selecting popup elements
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-poppup-button");
var cancelbutton = document.getElementById("cancel-popup");

// Show popup
addpopupbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

// Hide popup
cancelbutton.addEventListener("click", function () {
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

// Add book
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
  event.preventDefault();

  var title = booktitleinput.value.trim();
  var author = bookauthorinput.value.trim();
  var description = bookdescriptioninput.value.trim();

  if (title === "" || author === "" || description === "") {
    alert("Please fill all fields!");
    return;
  }

  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `
    <h2>${title}</h2>
    <h5>${author}</h5>
    <p>${description}</p>
    <button class="delete-btn">Delete</button>
  `;

  container.appendChild(div);

  // Clear and close popup
  booktitleinput.value = "";
  bookauthorinput.value = "";
  bookdescriptioninput.value = "";
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

// Delete book functionality
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
