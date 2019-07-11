import React, { Component } from 'react';
import { observer } from 'mobx-react'
import css from '../styles/UserInput.css'


class UserInput extends Component {
    constructor() {
        super();
        this.state = {
          inputActive: false,
          inputTextValue: ''
        };
      }

    // Handling keyboard press event  
    handleKey(event){
        if (event.keyCode === 13 && !event.shiftKey) {
          console.log("YOU ARE CHATTING WITH: ", this.props.store.agent)
          if(this.props.store.agent!=='agent'){
            this.props.store.updateMessage(this.userInput.textContent)
            this.props.store.sendConversation(this.userInput.textContent)
          }
          else{
            this.props.store.LPSendLine(this.userInput.textContent)
            this.props.store.updateMessage(this.userInput.textContent)
          }
          this.userInput.innerHTML = '';
        }
      }

     // Adding a function to handle copy-paste of demo scripts from MS word - onPaste event
     handlePaste (e) {
          var clipboardData;
      
          // Stop data actually being pasted into div
          e.stopPropagation();
          e.preventDefault();
      
          // Get pasted data via clipboard API
          clipboardData = e.clipboardData || window.clipboardData;
          // clipboardData is assigned as 'userInput.textContent'
          this.userInput.textContent = clipboardData.getData('Text');      
          console.log(this.userInput.textContent)
        }

    
    render() {
      return (
        <form  style={{maxWidth:'1380px', marginLeft:'auto',
      marginRight:'auto' }}className={this.state.inputActive ? css.sc_user_input : css.sc_user_input.active}>
          <div
            role="button"
            tabIndex="0"
            ref={(e) => { this.userInput = e; }}
          // Adding onPaste to handle to case of pasting text from MS office
            onPaste = {this.handlePaste.bind(this)}  
            onKeyDown={this.handleKey.bind(this)}
            contentEditable="true"
            placeholder="Write a reply..."
            className={css.sc_user_input_text}
          >
          </div>
            <div className={css.sc_user_input_button} >
                <img onClick={this.handleKey.bind(this)}
                     className={css.sc_user_icon}
                 // style={{marginTop: '-105px',width: '35px',height:'35px',marginLeft: '1159px'}}
                  src="/static/icons/Group25.png"/>
            </div>
      </form>
    );
  }

}
export default observer(UserInput);