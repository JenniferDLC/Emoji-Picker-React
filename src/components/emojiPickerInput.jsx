import { useRef } from "react";
import emojiPicker from "./emojiPicker";
import EmojiPicker from "./emojiPicker";

export default function EmojiPickerInput(){

    const refInput = useRef(null);
 


return(
<>


 <div>

 <input ref={refInput}/>

 <EmojiPicker ref={refInput}/> 

 </div>

 </>   
);
}

//use ref nos permite acceder a la referencia de un elemento


