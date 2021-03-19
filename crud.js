Vue.component('crud', {
    template://html
     `<div id="AppProductos" class="container">

        <h3 class="text-center text-white">Ingresar Productos</h3>
        <section class="form">
            <form action="" class="text-center">
                <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Artículo</span>
                         </div>
                    <input v-model="articulo" @keyup.enter="crearProducto" type="text" class="form-control"
                    placeholder="Ingrese el nombre del artículo" aria-label="Articulo" aria-describedby="basic-addon1">
                </div>

                <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Marca</span>
                         </div>
                    <input v-model="marca" @keyup.enter="crearProducto" type="text" class="form-control"
                   placeholder="Ingrese la marca del artículo" aria-label="Marca" aria-describedby="basic-addon1">
                </div>

                <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Precio</span>
                         </div>
                <input v-model="precio" @keyup.enter="crearProducto" type="number" name="precio" placeholder="Precio"
                    class="form-control" aria-label="Precio" aria-describedby="basic-addon1">
                </div>


                
                <input @click="crearProducto" type="button" value="Añadir" class="btn btn-success mt-3 btn-lg btn-block">
            </form>
        </section>




   
        <section class="data mt-5">
            <h3 class="text-center text-white">Listado Productos</h3>
            <table  class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Artículo</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Precio</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(producto, index) in productos">
                        <td>{{ producto.id }}</td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <input v-model="articuloActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                
                                {{ producto.articulo }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <input v-model="marcaActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                
                                {{ producto.marca }}
                            </span>
                        </td>
                        
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <input v-model="precioActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                
                                {{ producto.precio }}
                            </span>
                        </td>
                        <td>
                           
                            <span v-if="formActualizar && idActualizar == index">
                                <button @click="guardarActualizacion(index)" class="btn btn-success">Guardar</button>
                            </span>
                            <span v-else>
                                
                                <button @click="verFormActualizar(index)" class="btn btn-primary">Actualizar</button>
                                
                                <button @click="borrarProducto(index)" class="btn btn-danger">Borrar</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>`,

    data() {
        return {
              
            articulo: '',             
            marca: '',          
            precio: '',            
            formActualizar: false,            
            idActualizar: -1,          
            articuloActualizar: '',           
            marcaActualizar: '',          
            precioActualizar: '',        
            productos: [{ id: '18af2010-86a8-13eb-85e7-8597804666f7', articulo: 'Metilsulfóxido', marca: 'Merk', precio: 25750 },
                { id: '18af2010-86a8-14eb-85e7-8597804666f8', articulo: 'Acetilcolina', marca: 'Bayer', precio: 85750 },
                { id: '18af2010-86a8-19eb-85e7-8597804666w2', articulo: 'Kainato', marca: 'Pfizer', precio: 485750 },
                { id: '18af2010-86a8-55eb-85e7-8597804666k6', articulo: 'Glutamato', marca: 'Roche', precio: 675230 },
                { id: '18af2010-86a8-55eb-85e7-8597804667p2', articulo: 'Fenilalanina', marca: 'Roche', precio: 36648 },
                { id: '18af2010-86a8-55eb-85e7-8597804667t5', articulo: 'Beta-mercapto-etanol', marca: 'Roche', precio: 45632 },
                { id: uuid.v1(), articulo: 'Metilsulfóxido-DMT', marca: 'Merk', precio: 25750 },
            ]
        }
                },
                methods: {
                    crearProducto: function () {
                        
                        this.productos.unshift({
                            id:  uuid.v1(),                            
                            articulo: this.articulo,
                            marca: this.marca,
                            precio: this.precio
                        });
                        
                        this.articulo = '';
                        this.marca = '';
                        this.precio = '';
                    },
                    verFormActualizar: function (producto_id) {
                      
                        this.idActualizar = producto_id;
                        this.articuloActualizar = this.productos[producto_id].articulo;
                        this.marcaActualizar = this.productos[producto_id].marca;
                        this.precioActualizar = this.productos[producto_id].precio;
                        
                        this.formActualizar = true;
                    },
                    borrarProducto: function (producto_id) {
                        
                        this.productos.splice(producto_id, 1);
                    },
                    guardarActualizacion: function (producto_id) {
                        
                        this.formActualizar = false;
                       
                        this.productos[producto_id].articulo = this.articuloActualizar;
                        this.productos[producto_id].marca = this.marcaActualizar;
                        this.productos[producto_id].precio = this.precioActualizar;
                    }
                    
                }
            });



new Vue({ el: '#AppProductos' })