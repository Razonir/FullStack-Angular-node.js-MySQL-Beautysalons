const db = require('../util/database');

module.exports = class Business {
  constructor(bid,bfname,blname, bname, bdescription,bemail,bpassword,bcity,baddress,bphone,bsubject,blogo) {
    this.bid = bid;
    this.bfname = bfname;
    this.blname = blname;
    this.bname = bname;
    this.bdescription = bdescription;
    this.bemail = bemail;
    this.bpassword = bpassword;
    this.bcity = bcity;
    this.baddress = baddress;
    this.bphone = bphone;
    this.bsubject = bsubject;
    this.blogo = blogo;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM Business');
  }
  static getOne() {
    return db.execute('SELECT * FROM Business where bid = 1');
  }

  static find(bemail) {
    return db.execute('SELECT * FROM Business WHERE bemail = ?', [bemail]);
  }

  static save(business) {
    return db.execute(
      'insert into Business (bfname,blname,bname,bdescription,bemail,bpassword,bcity,baddress,bphone,bsubject,blogo) VALUES (?, ?, ?, ?, ? ,? ,? ,? ,? ,? ,?)',
      [business.bfname,business.blname,business.bname,business.bdescription,business.bemail,business.bpassword,business.bcity,business.baddress,business.bphone,business.bsubject,business.blogo]
    );
  }
};