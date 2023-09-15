import emojiPicker from "./emojiPicker";
import styles from "./emojiPiker.module.scss";

export default function EmojiButton({ emoji, onClick }){

  function handleClick(e){


   onClick(emoji);


  }


    return(

      <button onClick={handleClick} className={styles.emojiButton}>{emoji.symbol}</button>


    );
}