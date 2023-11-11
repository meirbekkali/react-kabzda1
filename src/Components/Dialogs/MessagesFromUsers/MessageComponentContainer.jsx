import React from "react";
import {actionNewMessageAdd,actionNewSymbolAdd} from "../../../Redux/DialogsReducer";
import Message from "./MessageComponent";



const MessageContainer =(props)=>{
    let stateMessages = props.store.getState()

    let Data_of_messages = stateMessages.DialogsState.DialogsState.DialogsPageMessages.Data_of_messages
    let NewMessageText = stateMessages.DialogsState.DialogsState.DialogsPageMessages.NewMessageText



    let newMessageAdd = (messageText)=>{
        props.store.dispatch(actionNewMessageAdd(messageText))
    }

    let newSymbolAdd = (messageText) =>{
        props.store.dispatch(actionNewSymbolAdd(messageText))
    }
    return <Message
        Data_of_messages = {Data_of_messages}
        NewMessageText = {NewMessageText}
        onNewMessage = {newMessageAdd}
        onNewSymbolAdd = {newSymbolAdd}/>
}



export default MessageContainer