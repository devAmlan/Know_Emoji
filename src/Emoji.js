import React from 'react';
import { useState } from 'react';
const Emoji = () => {
    const emojiDb = {
        "🍇":"grapes",
        "🍈":"Melon",
        "🍉":"Watermelon",
        "🍋":"Lemon",
        "🍌":"Banana",
        "🍍":"Pineapple",
        "🥭":"Mango",
        "🍎":"Apple",
        "🍒":"Cherries",
        "🍓":"Strawberry",
        "🥑":"Avocado",
        "🍐":"Pear",
        "🥥":"Coconut",
        "🍊":"Tangerine",
        "🍏":"Green Apple"
    }
   var emojiList = Object.keys(emojiDb)
  function clickHandler(elem){
       var emojivalue = emojiDb[elem];
       setemojimeaning(emojivalue)
   }
    const [emoji,setemoji] = useState("")
    const [emojimeaning,setemojimeaning] = useState("")
    function inputchangeHandler(e){
     var inputEmoji = e.target.value;
     setemoji(inputEmoji)
     var emojimeaning = emojiDb[inputEmoji]
     if(inputEmoji in emojiDb){
        setemojimeaning(emojimeaning)
     }
     else if(inputEmoji === ''){
        setemojimeaning("")
     }
     else{
        
         setemojimeaning("The emoji is not present")
     }
    }
    return ( 
    <>
     <h1>Inside outt!</h1>   
      <form action="" className="inputfield">
          <input type="text" onChange={inputchangeHandler} placeholder="Enter a Fruit emoji"/>
      </form>
      <h3>Emoji: {emojimeaning}</h3>
     <div className="emojiarea">
     <ul>
          {
              emojiList.map(function(elem,index){
               return(
                   <li key={index} onClick={()=>clickHandler(elem)}>{elem}</li>
               )
              })
          }
      </ul>
     </div>
    </>
     );
}
 
export default Emoji;