const db = require('../util/database');

module.exports = class User {
  constructor(userfname,userlname, useremail, userpassword,usercity,useraddress,userphone) {
    this.userfname = userfname;
    this.userlname = userlname;
    this.useremail = useremail;
    this.userpassword = userpassword;
    this.usercity = usercity;
    this.useraddress = useraddress;
    this.userphone = userphone;
  }

  static find(useremail) {
    return db.execute('SELECT * FROM users WHERE useremail = ?', [useremail]);
  }

  static save(users) {
    return db.execute(
      'INSERT INTO users (userfname,userlname, useremail, userpassword,usercity,useraddress,userphone) VALUES (?, ?, ?, ?, ? ,? ,?)',
      [users.userfname, users.userlname, users.useremail, users.userpassword,users.usercity,users.useraddress,users.userphone]
    );
  }
};