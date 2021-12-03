import {PostAuthor} from "../../components/post/PostAuthor";
import {PostTime} from "../../components/post/PostTime";

export function PostFooter({ postAuthor = "Admin", postTime = null }) {

    return (
        <div className="post-footer">
            <PostAuthor author={postAuthor}/>
            <PostTime timePost={postTime}/>
        </div>
    );
}