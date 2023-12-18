const mongoose = require('mongoose')


const companySchema = new mongoose.Schema({
    title:{
      type:String,
      required:true

    },
    companyId:{
        type:String,
        required:true,

       
    }

    


})

const companies = mongoose.model("company",companySchema)


module.exports = companies