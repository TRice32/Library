
let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.bookInfo = function() {
        console.log(`${title}, ${author}, ${pages}, ${status}`);
    }
}

const newBookContainer = document.querySelector('.newBookContainer');
const libraryContainer = document.querySelector('.libraryContainer');
const bookStatus = newBookContainer.querySelector(".readingStatus")
const submitButton = document.querySelector('#submitButton');
const bookDetails = document.querySelectorAll('.input');

//create event listener that pushes new book details into myLibrary array
submitButton.addEventListener("click", addBookToLibrary)

function addBookToLibrary() {
    
    const newBookArray = [...bookDetails].map(input => input.value)
    const newBook = new Book(...newBookArray);
    let title = newBook.title;
    let author = newBook.author;
    let pages = newBook.pages;
    let status = bookStatus.checked ? "Read" : "Unread";
    newBook.bookInfo()
    myLibrary.push(newBook);
    // console.log(status);
    
    displayBooks();
    
    function displayBooks() {
        
        // create div that captures the input text. Append that div to parent container
        const newBookDiv = document.createElement('div');
        newBookDiv.classList.add("book");
        const bookInnerInfo = document.createElement("div")
        bookInnerInfo.classList.add("bookInfo");
        newBookDiv.appendChild(bookInnerInfo);
        libraryContainer.appendChild(newBookDiv);
        let titleDetails = document.createElement("div")
        let authorDetails = document.createElement("div")
        let pageDetails = document.createElement("div")
        let readDetails = document.createElement("div")
        bookInnerInfo.appendChild(titleDetails)
        bookInnerInfo.appendChild(authorDetails)
        bookInnerInfo.appendChild(pageDetails)
        bookInnerInfo.appendChild(readDetails)
        bookInfo()

        function bookInfo() {

            titleDetails.innerHTML = `Title: ${title}`
            authorDetails.innerHTML =  `Author: ${author}` 
            pageDetails.innerHTML = `Pages: ${pages}`
            readDetails.innerHTML = `Status: ${(status)}`;
            
        }
        
        
        // create button that allows user to delete record. Append that button to new book
        const deleteThisBook = document.createElement('button');
        deleteThisBook.classList.add('delete', 'button', );
        deleteThisBook.innerHTML = "Delete record";
        newBookDiv.appendChild(deleteThisBook);
        
        deleteThisBook.addEventListener("click", (e) => {
            e.currentTarget.parentNode.remove();
        })
        
        // create button that allows user to change read status. Work in progress
        const readStatus = document.createElement("button");
        readStatus.classList.add("status", "button", "bookButton");
        readStatus.innerHTML = "Change read status"
        newBookDiv.appendChild(readStatus);
        
        // change read status. Work in progress
        readStatus.addEventListener('click', () => {
        switch(status) {
            case "Read":
                status = "Unread" 
                bookInfo()
                break;
                case "Unread":
                status = "Read" 
                bookInfo()
              break;
            default:
        //       // code block
          } 
          
        })



        
    }
    // function createNewBook() {
        
        // bookStatus.checked = true ? (console.log(status), status = 
        // "Read") : (console.log(status), status = "Unread");
        // ;
    
    // }
    //toggle read status
    // readStatus.addEventListener("click", (e) => {
    // console.log(e.currentTarget.parentNode.firstChild);

    // })
    // console.log(newBook);
}


function points(games) {
    games.map((x) => {
      x.split(":")
      console.log(x)
    })
  //   return 0
  }

  points(["2:1", "3:4"])