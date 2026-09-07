const fs=require("fs"); // import the file
// //update the file
fs.appendFile("student.txt","file for CSE students",(error)=>{
    if(error){
        console.log(error);

    }else{
        console.log("File is sucessfully update");
    }
});