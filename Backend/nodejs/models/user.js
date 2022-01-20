const db = require('../util/database');

module.exports = class User {
  constructor(userfname, useremail, userpassword) {
    this.userfname = userfname;
    this.useremail = useremail;
    this.userpassword = userpassword;
  }

  static find(useremail) {
    return db.execute('SELECT * FROM users WHERE useremail = ?', [useremail]);
  }

  static save(users) {
    return db.execute(
      'INSERT INTO users (userfname, useremail, userpassword) VALUES (?, ?, ?)',
      [users.userfname, users.useremail, users.userpassword]
    );
  }
};