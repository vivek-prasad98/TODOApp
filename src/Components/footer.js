import './../Assets/CSS/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck,faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Footer(props){
    return (
        <div className='panel-heading panel-footer'>
          <div className='left'>
            <FontAwesomeIcon icon={faTrash} style={{ margin: '0px 10px' }} onClick={props.handlers[0]} />|
            <FontAwesomeIcon icon={faCheck} style={{ margin: '0px 10px' }} onClick={props.handlers[1]} /> |{' '}
            <span> {localStorage.length+1} TODO Left</span>
          </div>
          <div className='right'>
            <button className='customBtn' onClick={props.handlers[2]}>All</button>
            <button className='customBtn' onClick={props.handlers[3]}>Active</button>
            <button className='customBtn' onClick={props.handlers[4]}>Completed</button>
          </div>
        </div>
    );
}