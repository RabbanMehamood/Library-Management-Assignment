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

  document.getElementById("displayBookSection").innerHTML = "";
  booksData.push(newData);

  for (let item of booksData) {
    let bookCard = document.createElement("div");
    bookCard.setAttribute("id", `${item.id}`);
    bookCard.classList.add("book-card-style");
    let title = document.createElement("h3");
    title.textContent = `${item.bookTitle}`;
    let author = document.createElement("p");
    author.textContent = `Author: ${item.bookAuthor}`;
    let genre = document.createElement("p");
    genre.textContent = `Genre: ${item.genre}`;
    let publishtime = document.createElement("p");
    publishtime.textContent = `Year: ${item.publishYear}`;
    console.log(item.publishYear);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(genre);
    bookCard.appendChild(publishtime);

    document.getElementById("displayBookSection").appendChild(bookCard);
  }
});

document.getElementById("searchInput").addEventListener("input", (e) => {
  let searchInputValue = e.target.value;
  let searchFetchedArray = booksData.filter((obj) =>
    Object.keys(obj).some((item) =>
      obj[item].toLowerCase().includes(searchInputValue.toLowerCase())
    )
  );
  document.getElementById("displayBookSection").innerHTML = "";
  for (let item of searchFetchedArray) {
    let bookCard = document.createElement("div");
    bookCard.setAttribute("id", `${item.id}`);
    bookCard.classList.add("book-card-style");
    let title = document.createElement("h3");
    title.textContent = `${item.bookTitle}`;
    let author = document.createElement("p");
    author.textContent = `Author: ${item.bookAuthor}`;
    let genre = document.createElement("p");
    genre.textContent = `Genre: ${item.genre}`;
    let publishtime = document.createElement("p");
    publishtime.textContent = `Year: ${item.publishYear}`;
    console.log(item.publishYear);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(genre);
    bookCard.appendChild(publishtime);

    document.getElementById("displayBookSection").appendChild(bookCard);
  }
  console.log(searchFetchedArray);
});

document.getElementById("filterInput").addEventListener("change", (e) => {
  let searchInputValue = e.target.value;
  let searchFetchedArray = booksData.filter((obj) =>
    Object.keys(obj).some((item) =>
      obj[item].toLowerCase().includes(searchInputValue.toLowerCase())
    )
  );
  document.getElementById("displayBookSection").innerHTML = "";
  for (let item of searchFetchedArray) {
    let bookCard = document.createElement("div");
    bookCard.setAttribute("id", `${item.id}`);
    bookCard.classList.add("book-card-style");
    let title = document.createElement("h3");
    title.textContent = `${item.bookTitle}`;
    let author = document.createElement("p");
    author.textContent = `Author: ${item.bookAuthor}`;
    let genre = document.createElement("p");
    genre.textContent = `Genre: ${item.genre}`;
    let publishtime = document.createElement("p");
    publishtime.textContent = `Year: ${item.publishYear}`;
    console.log(item.publishYear);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(genre);
    bookCard.appendChild(publishtime);

    document.getElementById("displayBookSection").appendChild(bookCard);
  }
  console.log(searchFetchedArray);
});
function checkUserValue(bookTitleValue) {
  return booksData.some((item) => item.bookTitle === bookTitleValue);
}
