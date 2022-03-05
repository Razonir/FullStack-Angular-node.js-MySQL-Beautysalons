const db = require('../util/database');

module.exports = class Business {
  constructor(bid,bfname,blname, bname, bdescription,bdescriptionf,bdescriptions,bemail,bpassword,bcity,baddress,bphone,bsubject,blogo,bhour) {
    this.bid = bid;
    this.bfname = bfname;
    this.blname = blname;
    this.bname = bname;
    this.bdescription = bdescription;
    this.bdescriptionf = bdescriptionf;
    this.bdescriptions = bdescriptions;
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

  static visiblet(bid) {
    return db.execute('update Business set bvisibility=t WHERE bid = ?', [bid]);
  }

  static save(business) {
    return db.execute(
      'insert into Business (bfname,blname,bname,bdescription,bdescriptionf,bdescriptions,bemail,bpassword,barea,bcity,baddress,bphone,bsubject,blogo,bhour) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)',
      [business.bfname,business.blname,business.bname,business.bdescription,business.bdescriptionf,business.bdescriptions,business.bemail,business.bpassword,business.barea,business.bcity,business.baddress,business.bphone,business.bsubject,business.blogo,business.bhour]
    );
  }
};