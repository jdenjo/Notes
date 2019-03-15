
const StringExtras = {
    
    // repeats string n number of times
    repeat(a, n){

        let output = ""

        for (let i = 0; i < n; i += 1){

            output += a;
        }

        return output;

    },

    // pads left of string for n number of times
    leftPad(a, n){
        
        let output = ""

        for (let i = 0; i < n; i += 1){

            output += " "
        }

        return output += a;

    },

        // pads left of string for n number of times
        rightPad(a, n){

        let output = ""
            output = a;
            for (let i = 0; i < n; i += 1){
                output += " "
            }
        return output;

        },

        pad(a, n){

            let output = ""
            let padCount = n - a.length;
            let leftCount = Math.ceil(padCount/2);
            let rightCount = Math.floor(padCount/2);

            output = StringExtras.leftPad(a, leftCount);
            output = StringExtras.rightPad(output, rightCount);

            return output;
    
        },

        capitalize(a){

            return a.charAt(0).toUpperCase() + a.slice(1);
        }

}

let a = 'you';

console.log(StringExtras.repeat(a, 3)); // returns 'youyouyou'
console.log(StringExtras.repeat(' ', 6)); // returns '      '
console.log(StringExtras.leftPad(a, 5)); // returns '  you'
console.log(StringExtras.leftPad(a, 1)); // returns 'you'
console.log(StringExtras.leftPad(a, 3)); // returns 'you'
console.log(StringExtras.leftPad(a, 4)); // returns ' you'
console.log(StringExtras.rightPad(a, 6) + "me"); // returns 'you   me'
console.log(StringExtras.pad(a, 5)); // returns ' you '
console.log(StringExtras.pad(a, 6)); // returns '  you '
console.log(StringExtras.pad(a, 10)); // returns '    you   '
console.log(StringExtras.capitalize(a)); // returns 'You'