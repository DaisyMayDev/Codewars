//Is String Uppercase:
//Write the isUpperCase method to see whether the string is ALL CAPS or not.

String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}
