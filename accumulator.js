class Accumulator {

    constructor() {
        this.value = 0;
    }
    add(inValue) {
        this.value += inValue;
    }
    sub(inValue) {
        this.value -= inValue;
    }
}

// Accumulator = function () {
//     {
//         this.value = 0;
//     }
// }
// Accumulator.prototype.add = function (inValue) {
//     this.value += inValue;
// }
// Accumulator.prototype.sub = function (inValue) {
//     this.value -= inValue;
// }
