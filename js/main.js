// js for typing animation 
// sentence, element reference( call by ID ) and delay time 
async function typeSentence(sentence, eleRef, delay = 100) {
    eleRef = document.getElementById(eleRef)
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

typeSentence("LE DUC THIEN", "#sentence");