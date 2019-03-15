function reverse(word){

    if(word.length === 0){
        
        return "";
    }
    else{
        // return the last character + the beginning without the last character
        return word.charAt(word.length -1) + reverse(word.slice(0,word.length -1));
    }
}

console.log(reverse("Dean"));
