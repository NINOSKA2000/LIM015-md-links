const {brokenlinks,totalUniquelinks}=require('../src/stat.js');



const input=`${process.cwd()}\\test\\pruebasTest\\carpeta1\\carpeta1.md`;



const resultBroken={ Total: 4, Unique: 4, broken: 0 };
const resultUnique={ Total: 4, Unique: 4 }


describe('brokenlinks',() => {

it('Al ingresar la ruta absoluta de una carpeta que contiene archivos y desea validar debería retornar un un objeto con la propiedad total, unique y broken', () => {
    brokenlinks(input).then(result=>{
        expect(result).toEqual(resultBroken)
    })
  })
  it('Al ingresar la ruta absoluta de una carpeta que contiene archivos y desea validar debería retornar un un objeto con la propiedad total y unique ', () => {
    expect(totalUniquelinks(input)).toEqual(resultUnique)
  })
})



