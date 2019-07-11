import React, { Component } from 'react'
import { observer, toJS } from 'mobx-react'
import TextMessage from './TextMessage'
import css from '../../styles/message.css'
import Buttons from './Buttons'

class Message extends Component {

  _renderMessageOfType = (type) => {
    
    switch(type) {
      case 'text':
        return <TextMessage {...this.props.message} />
      //Todo: Here we import the visualization widgets. We might be able to reuse the ones that we have created already.
      case 'choose':
        return <Buttons store={this.props.store} {...this.props.message}   /> 
    }
  }

  render () {
    console.log("Message", this.props.store.messageList[this.props.store.messageList.length-1].type)
    return (
      <div>
        <div className={this.props.message.author === "me" ? css.sc_message_content_sent : css.sc_message_content_received}>
          {this._renderMessageOfType(this.props.message.type, this.props.message.action)}
        </div>
      </div>)
  }
}
export default observer(Message)
