import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todo from './Todo'
// import VariableRandering from './Todo'
import Actor from './actor'
import Singer from './singer'
import Star from './star'
import Actress from './actress'
import Player from './player'
import Books from './Books'


function App() {

  let actor=["salmansha","riaz","bapparaz"]

  let object=[
    {name:"hunny sing",age:"40"},
    {name:"Arijit Sign",age:"45"},
    {name:"Atif Aslam",age:"43"},
  ]

  let actress=["Alia vut","ketrina","shonaksi"]

  let player5=[
    {name:"Sakib",position:"all rounder"},
    {name:"Tamim",position:"Batsman"},
    {name:"Musfiq",position:"Batsman"},
    {name:"Liton",position:"Batsman"}
  ]

  let books=[
    {name:"Bangla",position:"B"},
    {name:"English",position:"E"},
    {name:"Chemistry",position:"C"},
    {name:"Math",position:"M"}
  ]


  return (
    <>
      <h1>Hello World</h1>
      <Actor name="skt"></Actor>
      {
        actor.map(actor=><Actor name={actor}></Actor>)
      }
      {/* <Singer name="Sreya Ghosal" age="35"></Singer> */}

      {/* {
        object.map(singer=><Singer name={singer.name}age={singer.age}></Singer>)
      } */}

       {
        object.map(singer=><Singer singer={singer}></Singer>)
      }

      
      
      {/* <VariableRandering n="komola" t={true}></VariableRandering>
      <VariableRandering n="angur" t={false}></VariableRandering> */}
      {/* <Todo name="Todo" type={true}></Todo>
      <Todo name="fodo" type={false}></Todo> */}
      
      <Device name="laptop"price="400"></Device>
      <Device name="Mobile"price="300"></Device>
      <Device name="Watch"price="900"></Device>
      <PropsDestucturing name="shakaet" id="2089"></PropsDestucturing>
      <PropsDestucturing name="riya" id="2143"></PropsDestucturing>
      <PropsDestucturing2 name="habib" id="1987"></PropsDestucturing2>
      <PropsDestucturing2 name="mustafa" id={2097}></PropsDestucturing2>
      <PropsDestucturing2 name="true" id={2097}></PropsDestucturing2>
      <PropsDestucturing2></PropsDestucturing2>
      <PropsDestucturing3 name={{name:"skt"}} id={66}></PropsDestucturing3>
      <Student></Student>
      <Student></Student>
      <Student></Student>
      <Input></Input>
      <ObjectStyle></ObjectStyle>
      <Star name="Salman" type="Actor"></Star>

      {
        actress.map(actress=> <Actress name={actress}></Actress>)
      }

      {
        player5.map(player=><Player player={player}></Player>)
      }

      <Books books={books}></Books>
      
    </>
  )
}




//props=property


function Device(props){

  // console.log(props)

  return <h2>my device is {props.name}, Price is {props.price}</h2>
}


// props destucturing 

function PropsDestucturing(props){
   
  // console.log(props)

  let {name,id}= props

  return <h2>my name is {name}, My id is {id} </h2>


}
// props destucturing which we used 


function PropsDestucturing2({name=0,id=0}){
   
   console.log(name,id)

 

  return <h2>my name is {name}, My id is {id} </h2>


}

function PropsDestucturing3({name=0,id=0}){
   
  console.log(name,id)



 return <h2>my name is {name.name}, My id is {id} </h2>


}


function Student(){

  let age=25

  let obj={name:"shakaet"}
       
  return <h1>{obj.name} age is {age} </h1>


}



function Input(){

    let str="university"
    let age= 30;

  return(

    <div className='student'>



    <h1>This is {str} Students</h1>

    <p>Age :${age}</p>
    
    
    
    
    </div>



  )
}

function ObjectStyle(){

  let obj={

    border: '2px solid red',
    borderRadius: '10px',
    padding: '10px',
    marginTop:'10px'
  }


  return <div style={obj}>

    <h1>Hello World</h1>



  </div>
}

export default App
