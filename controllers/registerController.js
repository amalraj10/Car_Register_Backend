const vechile_details = require('../Model/registerSchema')


//register
exports.register =async(req,res)=>{



    console.log('inside the controller - register');

 
console.log(req.files);
    const vattachments = req.files.vattachment;
    console.log(vattachments)
    

    const{vname,vmodel,vnumber,vyear,vtype,vitems,vbrand,vdefects} = req.body

    console.log(`${vname},${vmodel},${vnumber},${vyear},${vtype},${vitems},${vbrand},${vdefects},${vattacthment}`);

    

    try{
        const newRegister = new vechile_details({
            vname,vmodel,vnumber,vyear,vtype,vitems,vbrand,vdefects,vattacthment

        })
        await newRegister.save()
        res.status(200).json(newRegister)

    }catch(err){
        res.status(401).json(`Request Failed Due to ${err}`)
    }

}