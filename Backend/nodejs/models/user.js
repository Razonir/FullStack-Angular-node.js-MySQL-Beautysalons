const db = require('../util/database');

module.exports = class Users {
    constructor(userrole,userfname,userlname,useremail,userpassword,usergender,usercity,useraddress,userphone,userprofileimg){
        this.userrole = userrole;
        this.userfname = userfname;
        this.userlname = userlname;
        this.useremail = useremail;
        this.userpassword = userpassword;
        this.usergender = usergender;
        this.usercity = usercity;
        this.useraddress = useraddress;
        this.userphone = userphone;
        this.userprofileimg = userprofileimg;
    }

    static find(useremail){
        return db.execute(
            'select * from users where useremail = ?', [useremail]
        );
    }

    static save(user){
        return db.execute(
            'insert into Users (userrole,userfname,userlname ,useremail,userpassword,usergender,usercity,useraddress,userphone,userprofileimg) values (?,?,?,?,?,?,?,?,?,?)' ,
            [user.userrole,user.userfname,user.userlname,user.useremail,user.userpassword,user.usergender,user.usercity,user.useraddress,user.userphone,user.userprofileimg]       
            );
    }
};

