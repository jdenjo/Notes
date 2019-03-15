

function Vector (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

}

Vector.prototype.plus = function( vectorInstance ) {

    arr = {};

    arr.x = this.x + vectorInstance.x;
    arr.y = this.y + vectorInstance.y;
    arr.z = this.z + vectorInstance.z;

    return arr;
};

Vector.prototype.minus = function(vectorInstance) {

    arr = {};

    arr.x = this.x - vectorInstance.x;
    arr.y = this.y - vectorInstance.y;
    arr.z = this.z - vectorInstance.z;

    return arr;

};

Vector.prototype.magnitude = function() {

    return (this.x**2 + this.y**2 + this.z**2) ** 0.5

};

let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);

console.log(v1.plus(v2)) // returns Vector {x: 5, y: 6, z: 2}
console.log(v2.plus(v1)) // returns Vector {x: 5, y: 6, z: 2}

console.log(v1.minus(v2)) // returns Vector {x: 3, y: 2, z: -2}
console.log(v2.minus(v1)) // returns Vector {x: -3, y: -2, z: 2}

console.log(v1.magnitude()) // returns 5.656854249492381
console.log(v2.magnitude()) // returns 3