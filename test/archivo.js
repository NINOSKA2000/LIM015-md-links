
const {extractLink,linkValidate,filesLinkMd}= require('../src/links.js');
const {mdlinks} = require('../src/mdLinks.js');
const {brokenlinks,totalUniquelinks}=require('../src/stat.js');



//console.log(extractLink(`${process.cwd()}\\test\\pruebaTest\\carpeta2`));
//console.log(filesLinkMd(`${process.cwd()}\\test`));
//const objectData=extractLink ("D:\\PROGRAMACION\\LIM015-md-links\\test\\pruebasTest\\carpeta1\\carpeta1.md");
//const objectData=extractLink(`${process.cwd()}\\test\\pruebasTest\\carpeta1\\carpeta1.md`);
//linkValidate(objectData).then(result=>console.log(result)).catch(error=>console.log(error))
//mdlinks("test\\pruebasTest\\carpeta1\\carpeta1.md",{ stats: true }).then(result=>console.log({result})).catch(error=>console-log(error));

console.log("nura rama 2");



console.log(totalUniquelinks(`${process.cwd()}\\test\\pruebasTest\\carpeta1\\carpeta1.md`));




