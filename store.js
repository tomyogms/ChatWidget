import { computed, action, observable, toJS, observe, autorun } from 'mobx'
import arequest from 'sync-request'



let store = null
let chatLP = {}
class Store {

  constructor() {
  }
  context={}
  
  @observable messageList = [
    {
        author:'them',
        type:'text', 
        data:{
          'text':'Hello. I am a chat bot, how can I help?'
        }
    }
  ]

  updateMessage = (message) => {
      let messageObject = {type: 'text', author: 'me', data: { text: message}}
      this.transcript = this.transcript + "user: " + message + "\n"
      this.messageList.push(messageObject)
  }

  updateMessageThem = (message) => {
    let messageObject = {type: 'text', author: 'them', data: { text: message}}
    this.messageList.push(messageObject)
}

  updateMessageLPAgent = (message) => {
    let messageObject = {type: 'LPAgent', author: 'them', data: { text: message}}
    this.messageList.push(messageObject)
  }

  updateMessageLPSystem = (message) => {
    let messageObject = {type: 'LPSystem', author: 'them', data: { text: message}}
    this.messageList.push(messageObject)
  }

  updateMessageWA = (message, type, options) => {
      let messageObject = {type: type, author: 'them', data: { text: message}, options:options}
      this.messageList.push(messageObject)
  }


  sendConversation = async text => {
    let context = this.context
    let type = ""
    let action = ""
    let options =[]
    /*var res = arequest('POST', 'https://gsc-WVA-WA-ap1.mybluemix.net/wa', {
       json: {context: context, input:{text: text}},
    });*/
    var res = arequest('POST', 'http://localhost:5000/wa', {
       json: {context: context, input:{text: text}},
    });
    let body = JSON.parse(res.body)
    this.context = body.context
    if(body.output.layout === undefined){
      type = "text"
    }
    else{
      type = body.output.layout.name
      if(body.output.inputvalidation !== undefined){
        options = body.output.inputvalidation.oneOf
      }
    }
    if( body.output.action !== undefined){
      action = body.output.action.name
      if(action == 'agent')
          this.initLP()
    }
    this.updateMessageWA(body.output.text[0], type, options)
  }
}

export function initStore(isServer) {
  if (isServer && typeof window === 'undefined') {
    return new Store()
  } else {
    if (store === null)
      store = new Store()
    return store
  }
}

  