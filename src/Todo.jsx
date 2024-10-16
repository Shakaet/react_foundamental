

// export default function ImportItem({name}){

//     name="Tdo New" // but s er value set kora jayna,props read only

//     let font = {

//         fontSize:'120px',
//         padding:"20px"
//     }


//     return(

//         <h1 className='student'style={font}>Succesfully Imported {name}</h1>
//     )
// }


// conditional rendering option 1


// export default function ImportItem({name,type}){

   
//     let font = {

//         fontSize:'20px',
//         padding:"20px",
//         marginTop:"10px"
//     }


//     if(type){
//         return <li className='student'style={font}>Succesfully Imported {name}</li>
//     }
//     return <li className='student'style={font}>UnSuccesfully Imported {name}</li>
// }

// conditional rendering with ternery option 2


// export default function ImportItem({name,type}){

   
//     let font = {

//         fontSize:'20px',
//         padding:"20px",
//         marginTop:"10px"
//     }


//     return(

//         <li className="student" style={font}>{type ?`Succesfully Imported ${name}`:`UnSuccesfully Imported ${name}`}</li>
//     )
// }


// // condition rendering option 3 &&


// export default function ImportItem({name,type}){

   
//     let font = {

//         fontSize:'20px',
//         padding:"20px",
//         marginTop:"10px"
//     }


//     return(

//         <li className="student" style={font}>{type && `Succesfully Imported ${name}`}</li>
//     )
// }


// conditional rendering option 4 ||


// export default function ImportItem({name,type}){

   
//     let font = {

//         fontSize:'20px',
//         padding:"20px",
//         marginTop:"10px"
//     }


//     return(

//         <li className="student" style={font}>{name}{type || `:Succesfully Imported`}</li>
//     )
// }



// //conditional variablerendering option 5

// export default function VariableRandering({n=0,t=0}){

//     let text="Shakaet"
          
//     // if(t){
//     //     text="Abdulla Al "+ text
//     // }
//     return(

//         <h1> {t? `Abdulla Al ${text}`:`${text}`}</h1>
        
//     )



// }