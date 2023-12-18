const companies = require("../Model/companySchema")



// add projects



exports.addcompany = async (req,res)=>{
    console.log("inside Add company function");
    const companyId = req.payload
   
    const {title}= req.body

    try{
        const existingCompany = await companies.findOne({title})
        if(existingCompany){
            res.status(406).json("Company already exist !! Upload another")
        }else{
            const newCompaNY = new companies({
                title,companyId
            })
            await newCompaNY.save()
            res.status(200).json(newCompaNY)
        }
    }catch(err){
        res.status(401).json(`Request failed, Error:${err}`)
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