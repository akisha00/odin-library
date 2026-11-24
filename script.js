const myLibrary = []
const grid = document.querySelector(".grid")
const addButton = document.getElementById("add-button")

function Book(name,author,description,pages){
    this.name = name
    this.author = author
    this.description = description
    this.pages = pages
}

function addBookToLibrary(){
    const name = document.querySelector("#name").value
    const author = document.querySelector("#author").value
    const description = document.querySelector("#description").value
    const pages = document.querySelector("#pages").value

    myLibrary.push(new Book(name,author,description,pages))
}

function renderBooks(){
    
    grid.replaceChildren()
    myLibrary.forEach(book => {

        const bookDiv = document.createElement("div")

        const bookName = document.createElement("div")
        const bookAuthor = document.createElement("div")
        const bookDescription = document.createElement("div")
        const bookPages = document.createElement("div")

        bookName.textContent = book.name
        bookAuthor.textContent = book.author
        bookDescription.textContent = book.description
        bookPages.textContent = book.pages

        bookDiv.append(bookName,bookAuthor,bookDescription,bookPages)

        grid.append(bookDiv)

    });
}


addButton.addEventListener("click", (event) => {
    addBookToLibrary()
    renderBooks()
})