
class SubstitutionCipher{
    
    constructor(cipher1, cipher2){

        this.cipherFirst = this.loadCipher(cipher1);
        this.cipherSecond = this.loadCipher(cipher2);

    }

    loadCipher(cipher){
          return cipher.split("");
    }

    encode(phrase){

        let message = phrase.split("");
        let output = "";

        for (var key of message){
            
            output += this.cipherSecond[this.cipherFirst.indexOf(key)];
        }

        console.log(output);
        return output; 

    }


    decode(phrase){

        let message = phrase.split("");
        let output = "";

        for (var key of message){
            
            output += this.cipherFirst[this.cipherSecond.indexOf(key)];
        }

        console.log(output);
        return output; 

    }

}

let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxz";

const sub = new SubstitutionCipher(abc1, abc2);

sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"
sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"