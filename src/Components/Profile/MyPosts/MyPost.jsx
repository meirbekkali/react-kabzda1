import React from "react";
import c from './MyPosts.module.css'
import Data, {actionAddNewPostElement, actionAddPost} from "../../../Redux/State";




const MyPosts = (props) => {
    let TextElement = React.createRef();

    let Add= ()=> {
        let Text = TextElement.current.value;
        props.dispatch(actionAddPost(Text))
        }

    let NewPostElement =()=>{
        let Text = TextElement.current.value;
        props.dispatch(actionAddNewPostElement(Text))
        window.state=props.data;
        console.log(props.data);}

    return ( <div>
        <div className="item">
            <textarea
                id="new-post" cols="50" rows="3"
                ref={TextElement}
                onChange={NewPostElement}
                value={Data._Data.ProfilePagePosts.NewPostText}
            />
            <div>
                <button onClick={Add}>Send</button>
            </div>
        </div>

        <div className={c.content}>
            {props.data.map(e => (
                <div key={e.id} className={e.text}>
                    <img src="https://pbs.twimg.com/profile_images/1341954331633860609/VpjSafb1_400x400.jpg" alt=""/>
                    {e.text}
                </div>
            ))}
        </div>
        </div>
    );
}
/*debugger;*/
export default MyPosts