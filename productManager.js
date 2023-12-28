class ProductManager{
    constructor(){
        this.id = 0,
        this.productos = []        
    }

    getProductos = () => {
        return new Promise((resolve,reject) => {
            if(this.productos.length === 0) reject("No hay ningun producto agregado")
            else resolve(this.productos)
        })
        
        this.productos;
    }


    getProductById(id){        
        const ret = this.productos.find((p) => p.id === id)        
        return new Promise((resolve,reject)=>{
            if(ret === undefined) reject("Not found")
            else resolve(ret)        
        })
    }

    addProduct(titulo,descripcion,precio,thumbnail,stock,codigo){
        this.titulo = titulo,
        this.descripcion = descripcion,
        this.precio = precio,
        this.thumbnail = thumbnail,        
        this.stock = stock,        
        this.codigo = codigo
        
        const productoNuevo = {titulo,descripcion,precio,thumbnail,stock,codigo}
        
        return new Promise((resolve,reject) =>{
            if(this.productos.length === 0)
            productoNuevo.id = 1       
            else
            productoNuevo.id = this.productos[this.productos.length - 1].id + 1
   
            if(this.titulo === '' || this.titulo === undefined || this.descripcion === undefined || this.descripcion === '' || this.precio === 0 || this.precio === undefined || this.thumbnail === '' || this.thumbnail === undefined || this.stock === 0 || this.stock === undefined || this.codigo === '' || this.codigo === undefined){
               reject("Todos los campos son obligatorios")
            }else{ 
             if(this.productos.some((p) => p.codigo === productoNuevo.codigo)){
               reject("Ya existe un producto con ese codigo")
             }else{            
               resolve(this.productos.push(productoNuevo))
             }
            }
        })
         
    }

}

const asyncFunctionAgregar = async(nombre,descripcion,precio,imagen,stock,codigo) => {
    
    try {
        let result = await productManager1.addProduct(nombre,descripcion,precio,imagen,stock,codigo)        
        console.log(result)
    }catch(error){
        console.log(error)
    }finally{
        console.log("Ha finalizado la ejecucion")
    }
}
const asyncFunctionGetById = async(id) => {
    
    try {
        let result = await productManager1.getProductById(id)
        console.log(`Producto con id ${id} `)
        console.log(result)
    }catch(error){
        console.log(error)
    }finally{
        console.log("Ha finalizado la ejecucion")
    }
}

const asyncFunctionGetProductos = async() => {
    try {
        let result = await productManager1.getProductos()
        console.log(result)
    }catch(error){
        console.log(error)
    }finally{
        console.log("Ha finalizado la ejecucion")
    }
}

const productManager1 = new ProductManager

//No hay productos hasta el momento
asyncFunctionGetProductos("No deberia haber ningun producto")

//Agregamos el primero
asyncFunctionAgregar("Papa","Papa rosada precio el kilo",100,"imagen1.jpg",100,"ABA121")

//El segundo con mismo codigo, no deberia agregarse
 asyncFunctionAgregar("Banana","Volvio la mejor zanahoria de Ecuador",70,"imagen1.jpg",120,"ABA121")

//Agregamos dos mas
asyncFunctionAgregar("Televisor","Plasma 30 pulgadas con chromecast incluido",12200,"imagen1.jpg",20,"ASA542")
 asyncFunctionAgregar("Remera","Manga corta todos los talles",600,"imagen2.jpg",120,"RSW233")

// No hay ningun producto con id 40
asyncFunctionGetById(40)

//Deberia traerme la television
 asyncFunctionGetById(2)


//Deberia traer los tres productos agregados hasta ahora
 asyncFunctionGetProductos()

