import { imgGithubProfile } from "../../assets/url-photos";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Posts.module.css"

type author = {
    avatar_url: string,
    name: string;
    role: string;
}

type content = {
    type: string;
    content: string;
}
interface PostProps{
    author: author;
    publishedAt: Date;
    content: content[];
}

export const Posts = ({author, publishedAt, content}:PostProps) =>{

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar hasBorder profile={author.avatar_url} />
                    
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:13h" dateTime={String(publishedAt)}>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
               {content.map((contentValue)=>{
                return (
                    <>
                    {contentValue.type === "paragraph" && <p>{contentValue.content}</p>}
                    {contentValue.type === "link" && <p><a href={contentValue.content}>{contentValue.content}</a></p>}
                    </>
                )
               })}
                <p>
                    <a href="">#rocketseat</a>{' '}
                    <a href="">#github</a>{' '}
                    <a href="">#react</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário!"

                />
                <button type="submit">Publicar</button>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}