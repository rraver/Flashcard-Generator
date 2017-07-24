var CreateCard = function(front, back) {
    this.front = front;
    this.back = back;
}

CreateCard.prototype.printInfo = function() {
    console.log("Card Front: " + this.front + "\nCard Back: " + this.back);
}
CreateCard.prototype.printFront = function() {
    console.log("Card Front: " + this.front);
}
CreateCard.prototype.printBack = function() {
    console.log("Card Front: " + this.back);
}
module.exports = CreateCard;