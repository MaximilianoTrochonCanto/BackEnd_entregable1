class ProductManager{
    constructor(){
        this.id = 0,
        this.productos = []        
    }

    getProductos = () => {
        return this.productos;
    }


    getProductById(id){
        const ret = this.productos.find((p) => p.id === id)
        if(ret === undefined)
        return "Not found"
        else
        return ret        
    }

    addProduct(titulo,descripcion,precio,thumbnail,stock,codigo){
        this.titulo = titulo,
        this.descripcion = descripcion,
        this.precio = precio,
        this.thumbnail = thumbnail,        
        this.stock = stock,        
        this.codigo = codigo
        
        const productoNuevo = {titulo,descripcion,precio,thumbnail,stock,codigo}
        
         if(this.productos.length === 0)
         productoNuevo.id = 1       
         else
         productoNuevo.id = this.productos[this.productos.length - 1].id + 1

         if(this.titulo === '' || this.titulo === undefined || this.descripcion === undefined || this.descripcion === '' || this.precio === 0 || this.precio === undefined || this.thumbnail === '' || this.thumbnail === undefined || this.stock === 0 || this.stock === undefined || this.codigo === '' || this.codigo === undefined){
            console.log("Todos los campos son obligatorios")
         }else{ 
          if(this.productos.some((p) => p.codigo === productoNuevo.codigo)){
            console.log("Ya existe un producto con ese codigo")
          }else{            
            this.productos.push(productoNuevo)
          }
         }
    }

}

const productManager1 = new ProductManager

productManager1.addProduct("Papa")
productManager1.addProduct("Medias","Can Can",100,"imagen1.jpg",1200,"VGFH481S")
productManager1.addProduct("Gorro","Nike",600,"imagen2.jpg",1200,"VGFH481S")
productManager1.addProduct("Remera","Puma",640,"imagen3.jpg",1200,"FABE139X")

console.log("Todos los productos: ")
console.log(productManager1.getProductos())
console.log("Producto con id 2: ")  
console.log(productManager1.getProductById(2))
console.log("Producto con id 3: ")  
console.log(productManager1.getProductById(3))