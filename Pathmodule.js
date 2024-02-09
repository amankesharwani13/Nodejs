const path=require("path");
console.log(path.dirname('F:/Node.js/Pathmodule.js'));
console.log(path.extname('F:/Node.js/Pathmodule.js'));
console.log(path.basename('F:/Node.js/Pathmodule.js'));
console.log(path.parse('F:/Node.js/Pathmodule.js'));

const mypath=path.parse('F:/Node.js/Pathmodule.js');
console.log(mypath.name);
console.log(mypath.ext);