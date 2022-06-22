import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.item}>
            {props.title}
        </div>
    );
}
export default Post;