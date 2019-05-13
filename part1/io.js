var fs = require('fs');
var buff = fs.readFileSync(process.argv[2],'utf8');
//var strbuff=buff.toString();
//console.log(strbuff);
var ct=0;
for(i=0;i<buff.length;i++)
    {
        if(buff[i]=='\n')
            ct++;
    }
//ct++;
console.log(ct);