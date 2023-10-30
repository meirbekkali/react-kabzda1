import React from "react";
import {actionNewMessageAdd, actionNewSymbolAdd} from "../../../Redux/State";



const Message =(props)=>{
    let text=React.createRef();
    let newMessageAdd = ()=>{
        let messageText = text.current.value;
        props.dispatch(actionNewMessageAdd(messageText))
        }

    let newSymbolAdd = () =>{
        let messageText = text.current.value;
        props.dispatch(actionNewSymbolAdd(messageText))
    }
    return (
        <div>
            {props.dataOfMessage.Data_of_messages.map(e => (
                <div key={e.id} className={e.message}>
                    {e.message}
                </div>
            )
        )}
        <textarea ref={text} value={props.dataOfMessage.newMessageText} onChange={newSymbolAdd}>

        </textarea >
            <div>
            <button onClick={newMessageAdd}>Send</button>
            </div>
        </div>


    )
}



export default Message