import React from "react";
import c from './MyPosts.module.css'



const MyPosts = (props) => {
    let TextElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let Text = TextElement.current.value;
        props.onPostChange(Text);
    }

    return (
        <div>
            <div className="item">
                <textarea
                    id="new-post" cols="50" rows="3"
                    ref={TextElement}
                    onChange={onPostChange}
                    value={props.NewPostText}
                />
                <div>
                    <button onClick={onAddPost}>Send</button>
                </div>
            </div>

            <div className={c.content}>
                {props.Data_of_Posts
                    .map(e =>
                        (
                            <div key={e.id} className={e.text}>
                                <img src="https://pbs.twimg.com/profile_images/1341954331633860609/VpjSafb1_400x400.jpg"
                                     alt=""/>
                                {e.text}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default MyPosts