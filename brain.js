const container = document.querySelector('#container');

const myLibrary = [];


class Book {
    constructor(title, author, pagecount, read) {
        this.title = title;
        this.author = author;
        this.pagecount = pagecount;
        this.read = read;
    }

    get info() {
        return [title, author, pagecount, read]
    }
    
    
}

const hobbit = new Book("hobbit", "urmom", "5", true);
const bobbit = new Book("bobbit", "urmom", "5", false);
const zobbit = new Book("zobbit", "urmom", "5", false);

myLibrary.push(hobbit);
myLibrary.push(zobbit);

let removeButtons; 

function listLibrary() {
    let elements = document.getElementsByClassName("card");
    Array.from(elements).forEach(function (element) {
        element.remove();
    });
    let i = 0;
    myLibrary.forEach((book) => {
        
        const card = document.createElement('div');
        card.classList.add('card');
        
        const title = document.createElement('h3');
        title.textContent = book.title;

        const author = document.createElement('h4');
        author.textContent = book.author;

        const pagecount = document.createElement('div');
        pagecount.textContent = `page count: ${book.pagecount}`;

        const haveread = document.createElement('input');
        haveread.setAttribute("type", "checkbox");
        if (book.read) {
            haveread.setAttribute("checked", "true");
        }
        
        const removeBook = document.createElement("button");
        removeBook.classList.add("remover");
        removeBook.setAttribute("id", i);
        removeBook.textContent = "Remove Book";


        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pagecount);
        card.appendChild(haveread);
        haveread.addEventListener("change", () => {
            book.read = !book.read;
        })
        card.appendChild(removeBook);
        removeBook.addEventListener("click", () => {
            myLibrary.splice(removeBook.id, 1);
                console.log(removeBook.id);
                listLibrary();
        });
        container.appendChild(card);
        i++;

    });
}

listLibrary();



const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("newBook");
const outputBox = document.querySelector("output");
const newTitle = favDialog.querySelector("#title");
const newAuth = favDialog.querySelector("#author");
const newPageCount = favDialog.querySelector("#pagecount");
const confirmButton = favDialog.querySelector("#confirmButton");



showButton.addEventListener("click", () => {
    favDialog.showModal();
});



favDialog.addEventListener("close", (e) => {
    
    const newBook = new Book(newTitle.value, newAuth.value, newPageCount.value, "yes");
    myLibrary.push(newBook);

    listLibrary();
});

confirmButton.addEventListener("click", (event) => {
    console.log("hello");
    event.preventDefault();
    favDialog.close();
});





