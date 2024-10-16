import Book from "./Book";

export default function Books({books}){

    return(

        <>

        <h1>Books Length : {books.length}</h1>

        {
            books.map(book=><Book book={book}></Book>)
        }
        
        </>
    )


}