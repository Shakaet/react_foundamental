
import './book.css'
export default function Book({book}){

    let {name,position}=book

    return(

        <div className='book'>

        <h1>Book name : {name}</h1>
        <h1>Book type : {position}</h1>
        
        </div>
    )


}