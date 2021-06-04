// import './../Assets/CSS/style.css'

export default function listElement(props){
    return(
        <div className="panelItem">
            <div>
                <input type="checkbox" className="checkbox" onClick={props.handleSelect} id={props.content.id} checked={props.content.Comp ? true :false}/>
            </div>
            <div>
                <h3 style={{textDecoration: props.content.Comp ? 'line-through':'none',color: props.content.Comp ? "green":"rgb(34, 34, 34)"}}>{props.content.Title}</h3>
                <p>{props.content.Description}</p>
            </div>
        </div>
    );
}