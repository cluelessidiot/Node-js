var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
var strbuff=buff.toString();
//console.log(strbuff);
var ct=0;
for(i=0;i<strbuff.length;i++)
    {
        if(strbuff[i]=='\n')
            ct++;
    }
//ct++;
console.log(ct);