import {PostTitle} from "../../components/post/PostTitle";
import {PostTags} from "../../components/post/PostTags";

export function PostHeader({ postTitle, postTags }) {

    return <header className="post-header">
            <PostTitle title={postTitle}  />
            <PostTags tags={postTags} />
        </header>
}