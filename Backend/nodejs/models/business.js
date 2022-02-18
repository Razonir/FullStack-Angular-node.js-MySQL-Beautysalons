const db = require('../util/database');

module.exports = class Business {
  constructor(bid,bfname,blname, bname, bdescription,bemail,bpassword,bcity,baddress,bphone,bsubject,blogo,bhour) {
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
    this.bhour = bhour;

  }

  static fetchAll() {
    return db.execute('SELECT * FROM Business');
  }

  static find(bemail) {
    return db.execute('SELECT * FROM Business WHERE bemail = ?', [bemail]);
  }

  static findById(bid) {
    return db.execute('SELECT * FROM Business WHERE bid = ?', [bid]);
  }

  static save(business) {
    return db.execute(
      'insert into Business (bfname,blname,bname,bdescription,bemail,bpassword,bcity,baddress,bphone,bsubject,blogo,bhour) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)',
      [business.bfname,business.blname,business.bname,business.bdescription,business.bemail,business.bpassword,business.bcity,business.baddress,business.bphone,business.bsubject,business.blogo,business.bhour]
    );
  }
};