// 1 approach

const asynchandler = (requesthandler) => {
    console.log("hi........")
    return (req, res, next) => {
        Promise.resolve(requesthandler(req, res, next)).catch((err) => console.log(err));
    };
};

export { asynchandler };


// 2nd approach


// const asynchandler = () => {}
// const asynchandler = (func) => ( ()=>{} )
// const asynchandler = (func) =>  ()=>{} //generally curly braces ko hta dete dusre vale arrow func mai

// const asynchandler = (fn)=>{
//    return async(req, res, next)=>{
//         try{
//             await fn(req, res, next)
//         }
//         catch(err){
//             res.status(err.code || 500).json({
//                 success: false,
//                 message: err.message
//             })
//         }
//     }
// }