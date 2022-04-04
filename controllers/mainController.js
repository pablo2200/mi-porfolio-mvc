const path = require("path")
        
let mainController = {
home: function (req,res) {
    let html= path.join(__dirname,'../views/home.html')
    res.sendFile(html)
    
},
about: function (req,res) {
    let html= path.join(__dirname,'../views/about.html')
    res.sendFile(html)
    


}
}
module.exports= mainController;