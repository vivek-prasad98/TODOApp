import 'bulma/css/bulma.css'
import React, { useState } from 'react';
import './../Assets/CSS/App.css'
import MyTodo from './../Components/Tododata'
import Footer from './../Components/footer'


function generateID(){
  const idString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$&^!";
  let Id = [];
  for(let i = 0; i < 6; ++i){
      Id.push(idString[Math.floor(Math.random() * idString.length)]);
    }
  return Id.join("");
}

function showSuccess(){
  const success = document.querySelector('.success');
  success.style.padding = "10px";
  success.style.height = "auto";
  setTimeout(() =>{
    success.style.padding = "0";
  success.style.height = "0";
  },2000);
}

function App () {
  // let data = localStorage.length > 0 ?  JSON.parse(localStorage.getItem('Active')) : [];
  const [data,updateData] = useState(localStorage.length > 0 ?  JSON.parse(localStorage.getItem('Active')) : []);
  let count = 0
  let Title
  let Description


  function handleBlur (e) {
    if (e.code === 'Enter' && e.target.value !== '') {
      count += 1
      if (count === 1) {
        Title = e.target.value;
        document.querySelector('#inputLabel').innerHTML = "Description : ";
        e.target.style.paddingLeft = `${"Description : ".length*2 + 90}px`;
      }
      if (count === 2) {
        Description = e.target.value
        const d = {
          id: generateID(),
          Comp: false,
          Title: Title,
          Description: Description
        }
        if (localStorage.length > 0) {
          let AllData = JSON.parse(localStorage.getItem('Active'))
          AllData.push(d)
          localStorage.setItem('Active', JSON.stringify(AllData))
        } else {
          localStorage.setItem('Active', JSON.stringify([d]))
        }
        updateData(JSON.parse(localStorage.getItem('Active')));
        document.querySelector('#inputLabel').innerText = "Title : ";
        count = 0
        showSuccess();
        e.target.style.paddingLeft = `${"Title : ".length*2 + 50}px`;
      }
      e.target.value = ''
    }
  }

  function handleShow(){
    console.log("Handle Show !!!!");
  }
  
  function handleCheck(){
    console.log("Handle Show !!!!");
  }



  return (
    <div className='App'>
      <section className='panel customPanel'>
        <div
          className='panel-heading'
          style={{ backgroundColor: 'rgb(217, 238, 222)', padding: '2Spx 0px' }}
        >
          TODO App
        </div>
        <div className='panelBody'>
          <input type='text' className='input' onKeyPress={handleBlur} />
          <label id="inputLabel">Title : </label>
          <div className='success'>Successfully Added</div>
        </div>
        
        <MyTodo data={data} handleCheck={handleCheck}/>
        <Footer handleShow/>
        
      </section>
    </div>
  )
}

export default App
