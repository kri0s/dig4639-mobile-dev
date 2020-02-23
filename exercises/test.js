class User {
    constructor(props) {
        this.userName = props;
    }  
  printName() {
      console.log(`${this.userName}, id is ${this.props.id}` );
  }
}
var myUser = new User({userName:"Jessica", id:5});
myUser.printName();
var myUser2 = new User({userName:"Amber", id:7});
myUser2.printName();
var myUser3 = new User({userName:"Lucas", id:5});
myUser3.printName();

function myFunction() {
    return this; 
}

var objLiteral = {
    a: 5,
    b: 6,
    c: myFunction
}

