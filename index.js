let booksData = [];
let counter = 0;

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let bookTitleValue = document
    .getElementById("bookInput")
    .value.trim()
    .toUpperCase();
  let bookAuthorValue = document.getElementById("authorInput").value.trim();
  let genreInputValue = document.getElementById("genreInput").value.trim();
  let publishYearValue = document.getElementById("bookYear").value.trim();

  if (checkUserValue(bookTitleValue)) {
    alert("A Book With that name already exists in your library");
    return;
  }

  let newData = {
    id: (++counter).toString(),
    bookTitle: bookTitleValue,
    bookAuthor: bookAuthorValue,
    genre: genreInputValue,
    publishYear: publishYearValue,
  };

  document.getElementById("bookInput").value = "";
  document.getElementById("authorInput").value = "";
  document.getElementById("genreInput").value = "";
  document.getElementById("bookYear").value = "";

  booksData.push(newData);
  renderBooks();
});

document.getElementById("searchInput").addEventListener("input", (e) => {
  let searchInputValue = e.target.value;
  let searchFetchedArray = booksData.filter((obj) =>
    Object.keys(obj).some((item) =>
      obj[item].toLowerCase().includes(searchInputValue.toLowerCase())
    )
  );
  renderBooks(searchFetchedArray);
});

document.getElementById("filterInput").addEventListener("change", (e) => {
  let searchInputValue = e.target.value;
  let searchFetchedArray = booksData.filter((obj) =>
    obj.genre.toLowerCase().includes(searchInputValue.toLowerCase())
  );
  renderBooks(searchFetchedArray);
});

function checkUserValue(bookTitleValue) {
  return booksData.some((item) => item.bookTitle === bookTitleValue);
}

function renderBooks(data = booksData) {
  document.getElementById("displayBookSection").innerHTML = "";
  for (let item of data) {
    let bookCard = document.createElement("div");
    bookCard.setAttribute("id", `${item.id}`);
    bookCard.setAttribute("draggable", "true");
    bookCard.classList.add("book-card-style");

    //
    bookCard.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", item.id);
      bookCard.classList.add("dragging");
    });
    bookCard.addEventListener("dragend", () => {
      bookCard.classList.remove("dragging");
    });

    let title = document.createElement("h3");
    title.textContent = `${item.bookTitle}`;
    let author = document.createElement("p");
    author.textContent = `Author: ${item.bookAuthor}`;
    let genre = document.createElement("p");
    genre.textContent = `Genre: ${item.genre}`;
    let publishtime = document.createElement("p");
    publishtime.textContent = `Year: ${item.publishYear}`;

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(genre);
    bookCard.appendChild(publishtime);

    document.getElementById("displayBookSection").appendChild(bookCard);
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  const id = ev.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(id);
  const targetElement = ev.target.closest(".book-card-style");

  if (targetElement) {
    // Insert the dragged element before the target element
    document
      .getElementById("displayBookSection")
      .insertBefore(draggedElement, targetElement);
  } else {
    // If dropped at the end, append it to the display section
    document.getElementById("displayBookSection").appendChild(draggedElement);
  }
}
