function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = new Date();
  this.getUserString = function() {
    return this.firstName + ' ' + this.lastName + ' ' + 'Дата регистрации: ' + 
    this.regDate.toLocaleDateString('ru-RU', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
  }
};

function UserList() {
  this.users = [];
  this.add = function(user) {
    this.users.push(user);
  };
  this.getAllUsers = function() {
    for(var user of this.users) {
      console.log(user.getUserString());
    }
  }
};

var userList = new UserList();
var getUser;


while(getUser = prompt('Введите имя и фамилию', '')) {
  var clearUserName = getUser.trim();
  var userName = clearUserName.split(' ');
  if(userName.length == 2) {
    var user = new User(userName[0], userName[1]);
    userList.add(user);
  }
  else {
    alert('Введите имя и фамилию');
  }
};

userList.getAllUsers();




