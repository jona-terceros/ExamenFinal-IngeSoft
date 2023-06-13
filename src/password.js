function password(text) {
    let cont=0;
    let cantPalabras=4;
    let palabras=[];
    if(text=="pass"){
        return "pass";
    }
    for(let i=0;i<cantPalabras;i++){
        palabras.push(text);
        cont++;
    }
    return cont;
    
  }
  
  export default password;
  