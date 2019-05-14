var fs = require('fs');
//doing it in node way
//function newliner(callback){
//var buff = fs.readFile(process.argv[2],'utf8');
//    var ct=0;
//for(i=0;i<buff.length;i++)
//    {
//        if(buff[i]=='\n')
//            ct++;
//    }
//    callback()
//}
var ct=0,buff;
function newliner(callback) {
  fs.readFile(process.argv[2], 'utf8',function doneReading(err, fileContents) {
 //  buff = parseString(fileContents)
 
   // console.log(fileContents);
           for(i=0;i<fileContents.length;i++)
    {
        if(fileContents[i]=='\n')
            ct++;
    }
    callback();
  })
}


//var strbuff=buff.toString();
//console.log(strbuff);

//ct++;

function prt()
{//var str=buff.toString();
//        for(i=0;i<buff.length;i++)
//    {
//        if(buff[i]=='\n')
//            ct++;
//    }
  console.log(ct);  
}
newliner(prt);