import './../Assets/CSS/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck,faTrash } from '@fortawesome/free-solid-svg-icons'

function todosLeft(){
  let count = 0;
  for(let ele of JSON.parse(localStorage.getItem('Active'))){
    if(!ele.Comp)
      count += 1;
  }
  return count > 0 ? count : 'No';
}

export default function Footer(props){
    return (
        <div className='panel-heading panel-footer'>
          <div className='left'>
            <FontAwesomeIcon icon={faTrash} style={{ margin: '0px 10px' }} onClick={props.handlers[0]} />|
            <FontAwesomeIcon icon={faCheck} style={{ margin: '0px 10px' }} onClick={props.handlers[1]} /> |{' '}
            <span> {todosLeft()} Todo Left</span>
          </div>
          <div className='right'>
            <button className='customBtn' onClick={props.handlers[2]}>All</button>
            <button className='customBtn' onClick={props.handlers[3]}>Active</button>
            <button className='customBtn' onClick={props.handlers[4]}>Completed</button>
          </div>
        </div>
    );
}