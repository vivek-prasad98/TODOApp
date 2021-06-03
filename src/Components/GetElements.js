// import './../Assets/CSS/style.css'

export default function listElement(props){
    console.log(props.content);
    return(
        <div className="panelItem">
            <div>
                <input type="checkbox" className="checkbox" onClick={props.handleSelect}/>
            </div>
            <div>
                <h3>{props.content.Title}</h3>
                <p>{props.content.Description}</p>
            </div>
        </div>
    );
}