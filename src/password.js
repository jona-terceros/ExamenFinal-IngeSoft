function password(text) {
    let cont=0;
    let palabras=[];
    let separaciones=[" ","-",",",";","."];
    palabras.push(text);

    if(text=="pass"){
        return "pass";
    }
    else{ 
        for(let i=0;i<palabras.length;i++){
            if(palabras[i]===separaciones)
            {
                return palabras;
            }
            cont++;
        }
        return cont;
    }
   
  }
  
  export default password;
  