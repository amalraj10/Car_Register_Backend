const vechile_details = require('../Model/registerSchema')


//register
exports.register =async(req,res)=>{



    console.log('inside the controller - register');

 let imgarray = []
    for(let obj of req.files){
         imgarray.push(obj.filename)
    }
    console.log(imgarray)
    

    const{vname,vmodel,vnumber,vyear,vtype,vitems,vbrand,vdefects} = req.body

    console.log(`${vname},${vmodel},${vnumber},${vyear},${vtype},${vitems},${vbrand},${vdefects}`);

    

    try{
        const newRegister = new vechile_details({
            vname,vmodel,vnumber,vyear,vtype,vitems,vbrand,vdefects,vattacthment:imgarray

        })
        await newRegister.save()
        res.status(200).json(newRegister)

    }catch(err){
        res.status(401).json(`Request Failed Due to ${err}`)
    }

    }

//get details
    exports.getallDetails = async(req,res)=>{
    
        try{
         const VehicleDetails = await vechile_details.find()
         res.status(200).json(VehicleDetails)
        }catch(err){
            res.status(401).json(`Request failed due to ${err}`)
        }
        }