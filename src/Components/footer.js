import './../Assets/CSS/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faEdit, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export default function Footer(props){
    return (
        <div className='panel-heading panel-footer'>
          <div className='left'>
            <FontAwesomeIcon icon={faEdit} style={{ margin: '0px 10px' }} onClick={props.handleShow} />|
            <FontAwesomeIcon icon={faCheck} style={{ margin: '0px 10px' }} onClick={props.handleShow} /> |{' '}
            <span> {localStorage.length+1} TODO Left</span>
          </div>
          <div className='right'>
            <button className='customBtn'>All</button>
            <button className='customBtn'>Active</button>
            <button className='customBtn'>Completed</button>
          </div>
        </div>
    );
}