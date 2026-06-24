//Hierarchical Inheritance means one class inherits another class. In this case, the User class is the parent class, and the Admin and Guest classes are the child classes.
class User {
  constructor(username) { this.username = username; }
}

class Admin extends User {
  deleteUser() { console.log(`${this.username} deleted a user.`); }
}

class Guest extends User {
  viewContent() { console.log(`${this.username} is viewing content.`); }
}

const admin = new Admin("Alice");
const guest = new Guest("Bob");
admin.deleteUser();  
guest.viewContent(); 
