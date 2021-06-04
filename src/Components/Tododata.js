import React from 'react'
import './../Assets/CSS/style.css'
import ListItem from './../Components/GetElements'
export default class MyTodo extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    style = {
        margin: "20px 0px",
      };
    render(){
        // console.log(this.props.id);
        return(
            this.props.data.length  > 0 ? 
            this.props.data.map(prop =>{
                return <ListItem key = {prop.id} content = {prop} handleSelect = {this.props.handleCheck}/>
            })
            :<h1 style={this.style}>No data Available</h1>
        ); 
    }
}