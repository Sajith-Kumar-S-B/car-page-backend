const companies = require("../Model/companySchema");



// add projects



exports.addcompany = async (req,res)=>{
    console.log("inside Add company function");
    const userId = req.payload
   
    const {title,companyId}= req.body

    try{
        const existingCompany = await companies.findOne({title})
        if(existingCompany){
            res.status(406).json("Company already exist !! Upload another")
        }else{
            const newCompaNY = new companies({
                title,companyId,userId
            })
            await newCompaNY.save()
            res.status(200).json(newCompaNY)
        }
    }catch(err){
        res.status(401).json(`Request failed, Error:${err}`)
    }
}


// add variant







// get company


exports.getCompany = async (req,res)=>{
    const userId = req.payload

    try{

        const allcompanies = await companies.find({userId})
        res.status(200).json(allcompanies)

    }catch(err){
        res.status(401).json(err)
    }
}








exports.deleteCompanyController = async(req,res)=>{
    // get delete project details

    const {id} = req.params
  

    try{
        const removeCompany = await companies.findByIdAndDelete({_id:id})
       res.status(200).json(removeCompany)
    }catch(err){
        res.status(401).json(err)
    }
}