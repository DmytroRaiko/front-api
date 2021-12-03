import {PostText} from "../../components/post/PostText";
import {PostImg} from "../../components/post/PostImg";

export function PostContent({ postText = "Post text", postImg = null }) {

    return (
        <div className="post-content">
            <PostImg postImgSrc={postImg.src} postImgTitle={postImg.title}/>
            <PostText postText={postText}/>
        </div>
    );
}