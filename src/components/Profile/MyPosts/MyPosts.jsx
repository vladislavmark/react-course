import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                Create new post
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add new post</button>
            </div>
            <div>
                <Post title='post 1'/>
                <Post title='post 2'/>
            </div>
        </div>
    );
}
export default MyPosts;