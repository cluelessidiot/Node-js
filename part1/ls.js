var fs = require('fs');
//doing it in node way
var ct=0,buff;
var str=process.argv[3];
function newliner(callback) {
  fs.readdir(process.argv[2], 'utf8',function doneReading(err, fileContents) {

for(i=0;i<fileContents.length;i++)
    {
     // console.log(fileContents[i]);
        var FileName=fileContents[i];
       // var splt=str.split(".");
       // console.log(splt);
        var ext='';
        for (j=FileName.length-1;j>=0;j--)
            {
               if(FileName[j]=='.')
                   break;
                else
                    ext=FileName[j]+ext;
                    
                
            }
        if(ext==str && FileName[j]=='.')
        console.log(FileName)
    }
    //  console.log(fileContents); 
    callback();
  })
}




function prt()
{
 // console.log(ct);  
}
newliner(prt);