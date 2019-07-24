import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Message from './Messages'

class MessageList extends Component {

      componentDidUpdate(){
        this.refs.MessageListDiv.scrollIntoView({block: "end"})
      }
    
      render () {
        return (
          <div ref="MessageListDiv" >
            {this.props.store.messageList.map((message, i) => {
              return <Message store={this.props.store} message={message} key={i} />
            })}
          </div>)
      }

}   
export default observer(MessageList);


