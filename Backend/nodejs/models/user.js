const db = require('../util/database');

module.exports = class User {
  constructor(userid,userfname,userlname, useremail, userpassword,usercity,useraddress,userphone) {
    this.userid = userid;
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

  static fetchAllUsers() {
    return db.execute('SELECT * FROM users');
  }

  static deleteuser(userid) {
    console.log("4");
    return db.execute('DELETE FROM users WHERE userid = ?',[userid]);
  }

  static getDetails(uid) {
    return db.execute('SELECT * FROM users WHERE userid = ?', [uid]);
  }


  static save(users) {
    return db.execute(
      'INSERT INTO users (userfname,userlname, useremail, userpassword,usercity,useraddress,userphone) VALUES (?, ?, ?, ?, ? ,? ,?)',
      [users.userfname, users.userlname, users.useremail, users.userpassword,users.usercity,users.useraddress,users.userphone]
    );
  }
};