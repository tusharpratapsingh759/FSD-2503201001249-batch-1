const fs=require("fs"); // import the file
//delete the file

fs.unlink("student.txt",(error)=>{

    if(error ){
        console.log(error);
    }else{
        console.log("File is successfully deleted");
    }
    });