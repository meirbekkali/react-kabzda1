const MyPosts = (props) => {
    return (
        <div className={props.content}>
            {props.posts.map(e => (
                <div key={e.id} className={props.item}>
                    <img src="https://pbs.twimg.com/profile_images/1341954331633860609/VpjSafb1_400x400.jpg" alt="" />
                    {e.text}
                </div>
            ))}
        </div>
    );
}

// Usage
const Data_of_Posts = [
    { id: 1, text: "Post 1 text" },
    { id: 2, text: "Post 2 text" },
    // ... other posts
];

// Render MyPosts component with the array of posts
<MyPosts content="yourContentClass" item="yourItemClass" posts={Data_of_Posts} />;
