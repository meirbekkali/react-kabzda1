import {actionNewMessageAdd, actionNewSymbolAdd} from "../../../Redux/DialogsReducer";
import Message from "./MessageComponent";
import {connect} from "react-redux";





let mapStateToProps =(state)=>{
    return {
        Data_of_messages:state.DialogsState.DialogsState.DialogsPageMessages.Data_of_messages,
        NewMessageText:state.DialogsState.DialogsState.DialogsPageMessages.NewMessageText
    }

}

let mapDispatchToProps = (dispatch)=>{

    return {
        onNewMessage:(messageText)=>{
            dispatch(actionNewMessageAdd(messageText))
        },
        onNewSymbolAdd:(messageText)=>{
            dispatch(actionNewSymbolAdd(messageText))
        }

    }
}

const MessageContainer =
    connect(mapStateToProps, mapDispatchToProps)(Message)

export default MessageContainer