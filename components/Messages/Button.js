import React, { Component } from 'react'
import { observer } from 'mobx-react'
import css from '../../styles/button.css'

class Button extends Component{
    constructor() {
        super();
        this.state = {
          bgColor: '#fff',
          color:'#7863EC'
        
        };
      }

    render(){
        return(
            <div >
                <button ref={el => this.scrollList = el} style={{backgroundColor:this.state.bgColor,color:this.state.color}} className={css.buttonArea} 
                type="button" onClick= {this.handleClick}> 
                {this.props.tag}
                </button>
            </div>
        )
    }

    handleClick=() =>{
       // Below line is commented so that button response doesn't appear in user side
       // this.props.store.updateMessage(this.props.tag)
        this.props.store.sendConversation(this.props.tag)
        this.scrollList.disabled = true
        this.setState({bgColor:'#7863EC',color:'#fff'})
    }
       
}

export default observer(Button)
