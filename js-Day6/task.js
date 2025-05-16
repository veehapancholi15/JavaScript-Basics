// CREATE AN OBJECT REPRESENTING A BOOK WITH PROPERTIES LIKE TITLE, AUTHOR, AND PUBLISHED YEAR
// ADDED A METHOD TO DISPLAY BOOK DETAILS
// CONVERT THE OBJECT TO JSON STRING
// AND THEN PARSE IT BACK TO AN OBJECT

const book = {
    bookDetails(){
        const details = {
            title : "To Kill a Mockingbird",
            author : "Harper Lee",
            publishedYear : 1960
        }
        console.log(details); // { title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 }

        const jsonStr = JSON.stringify(details);
        console.log(jsonStr); // {"title":"To Kill a Mockingbird","author":"Harper Lee","publishedYear":1960}
        console.log(typeof(jsonStr)); // string
        
        const objFormat = JSON.parse(jsonStr);
        console.log(objFormat); // { title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 }
        console.log(typeof(objFormat)); // object
    }
}
book.bookDetails()

