class Support {
  name;
  designation = "Support Web Dev";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, "start a support session ");
  }
}

const sakib = new Support("Sakib al hasan", "Bangladesh");
const mushfiq = new Support("Mushfiqur Rahim ", "American Express ");

console.log(sakib, mushfiq);
