import { observer } from 'mobx-react'
import { initStore } from '../store'
import React, { Component } from 'react';
import MessageList from './MessageList'
import UserInput from './UserInput'


class Chat extends Component {
    constructor(props) {
      super(props);
      this.store = initStore();
    }

    render() {
      return (
      <div>
        <div style={{maxWidth:'1280px', height:'800px', marginLeft:'auto',marginRight:'auto',marginTop:'2px',background:'#fff',overflow:'auto'}}>
          <MessageList
            store={this.store}
          />
        </div>
         <div style={{backgroundColor: '#fff',maxWidth: '1280px',height: '100px',marginLeft:'auto',marginRight:'auto',marginTop: '-15px',paddingTop: '20px'}}>
          <UserInput store={this.store} />
          </div> 
        </div>
       
      );
    }
}

export default observer(Chat);