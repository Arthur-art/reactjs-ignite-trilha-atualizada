import { ThumbsUp, Trash } from "phosphor-react"
import { imgGithubProfile } from "../../assets/url-photos"
import { Avatar } from "../Avatar/Avatar"
import styles from "./Comment.module.css"


export const Comment = () =>{

    return (
        <div className={styles.comment}>
            <Avatar profile={imgGithubProfile} />


            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Arthur Teixeira</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Comentario</p>
                </div>

                <footer>
                   <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}