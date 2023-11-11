import React from "react";


const Message =(props)=>{
    let text=React.createRef();

    let onNewMessageAdd = () => {
        let messageText = text.current.value
        props.onNewMessage(messageText)
    }

    let onNewSymbolAdd = () =>{
        let messageText = text.current.value;
        props.onNewSymbolAdd(messageText)
    }

    return (
        <div>
            {props.Data_of_messages.map(e => (
                <div key={e.id} className={e.message}>
                    {e.message}
                </div>
            )
        )}
        <textarea ref={text} value={props.NewMessageText} onChange={onNewSymbolAdd}>

        </textarea >
            <div>
            <button onClick={onNewMessageAdd}>Send</button>
            </div>
        </div>


    )
}

export default Message