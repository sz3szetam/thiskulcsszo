function counter () {
    this.count = 0;

    this.increment = function() {
        this.count++
    };
    this.decrement = function()
    {
        this.count--
    };
    this.reset = function()
    {
        this.count = 0;
    };
    this.getCount = function()
    {
        return this.count;
    }

}
const myCounter = new counter();

myCounter.reset();
console.log(myCounter.getCount()); // Kimenet: 0

