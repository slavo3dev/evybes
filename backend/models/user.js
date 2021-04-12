const mongoose = require("mongoose");
const crypto = require( "crypto" )


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      require: true,
      max: 12,
      unique: true,
      index: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      require: true,
      max: 12,
    },
    email: {
      type: String,
      trim: true,
      require: true,
      unique: true,
      max: 32,
      lowercase: true,
    },
    hashed_password: {
      type: String,
      require: true,
    },
    salt: String,
    role: {
      type: String,
      default: "subscriber",
    },
    restetPasswordLink: {
      data: String,
      default: "",
    },
  },
  { timestamps: true }
);

// virtual fileds
userSchema.virtual( 'password' )
  .set( function ( password ) {
    // create temp password
    this._password = password

    // generate slat
    this.salt = this.makeSalt()
    
    //encrypt password 
    this.hashed_password = this.encryptPassword(password)

  } )
  .get( function ()
  {
   return this._password
 })

userSchema.methods = {
  encryptPassword: function ( password ){
    
    if ( !password ) return ""
    
    try {
      return crypto.createHmac( 'sha1', secret )
        .update( " I love cookies" )
        .digest("hex")
    } catch ( err ) {
      console.log( "Error: ", err )
      return ""
    }
  
  }


}