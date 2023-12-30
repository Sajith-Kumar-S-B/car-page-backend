const variants = require("../Model/variantSchema");



// add projects



exports.addVariant = async (req,res)=>{
    console.log("inside Add variant function");
    const userId = req.payload
   
    const {variant,companyId}= req.body

    try{
        const existingVariant = await variants.findOne({variant})
        if(existingVariant){
            res.status(406).json("Variant already exist !! Upload another")
        }else{
            const newVariant = new variants({
                variant,companyId,userId
            })
            await newVariant.save()
            res.status(200).json(newVariant)
        }
    }catch(err){
        res.status(401).json(`Request failed, Error:${err}`)
    }
}





// get company


exports.getVariant = async (req,res)=>{
    const userId = req.payload

    try{

        const allVariants = await variants.find({userId})
        res.status(200).json(allVariants)

    }catch(err){
        res.status(401).json(err)
    }
}








exports.deleteVariant = async(req,res)=>{
    // get delete project details

    const {id} = req.params
  

    try{
        const removeVariant = await variants.findByIdAndDelete({_id:id})
       res.status(200).json(removeVariant)
    }catch(err){
        res.status(401).json(err)
    }
}