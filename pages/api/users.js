export default function handler(req,res){
    res.status(200).json({
        success:true,
        user:[
            {id:1,name:"Mohit"},
            {id:2,name:"Rohit"},
            {id:2,name:"Amit"}
        ]
    })
}