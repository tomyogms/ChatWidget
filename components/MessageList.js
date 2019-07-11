import PropTypes from 'prop-types';
import { AssistantV1 } from 'watson-developer-cloud/assistant/v1'
import React, { Component } from 'react';
import { observer } from 'mobx-react'
import TextMessage from './Messages'
import css from '../styles/message.css'


class MessageList extends Component {

      componentDidUpdate(){
        this.refs.MessageListDiv.scrollIntoView({block: "end"})
      }
    
      render () {
        //<div id="messageList"
        //ref={el => this.scrollList = el}>
        return (
          <div ref="MessageListDiv" >
            {this.props.store.messageList.map((message, i) => {
              return <TextMessage store={this.props.store} message={message} key={i} />
            })}
          </div>)
      }

}   
export default observer(MessageList);


