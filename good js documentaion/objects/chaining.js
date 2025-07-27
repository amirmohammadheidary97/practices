
// ********* CHAINING WITH OBJECT ********* //
const ladder = {
    step: 0,
    maxStep: 10,
    up() {
        if (this.step < this.maxStep) {
            this.step += 1;
        }
        return this
    },
    down() {
        if (this.step > 0) {
            this.step -= 1;
        }
        return this
    },
    showStep() {
        console.log(this.step)
        return this
    },
    getThis: () => {
        return this
    }
}

ladder.down().up().up().up().showStep();
console.log(ladder.getThis()) 