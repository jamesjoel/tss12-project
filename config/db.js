require("mongoose").connect("mongodb+srv://jamesjoel:3NOLjUjPnAAvuAIn@cluster0.kys2siz.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    // console.log("DATA BASE CONNECTED");
}).catch((err)=>{
    // console.log("NOT CONNECTED ------", err);
});
