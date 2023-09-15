import { useState } from "react";

import styles from "./emojiPiker.module.scss";

export default function EmojiSearch({onSearch}){

 const [value, setValue] = useState("");

 function handleChange(e){
  
    setValue(e.target.value);
    onSearch(e.target.value);

 }

return <input type="text" onChange={handleChange} value={value} className={styles.search}/>;


}