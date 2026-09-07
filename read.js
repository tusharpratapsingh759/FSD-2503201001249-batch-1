const fs=require("fs");
//read the file
fs.readFile("student.txt","UTF-8",(error,data1)=>{
      if(error){
        console.log(error);

      }else{
        console.log("Read the file content");
        console.log(data1);

      }
});