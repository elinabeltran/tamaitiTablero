import { React, useState, useEffect } from 'react'
import TablaContent from './TablaContent.js'


function Tabla(props) {

    let [loading, setLoading] = useState(true);
    let [products, setProducts] = useState([]);
    let [users, setUsers] = useState([]);


    useEffect((props) => {
        fetch('https://tamaiti.herokuapp.com/api/products')
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setProducts(data.data)
            })
    }, [loading])


    useEffect(() => {
        fetch('https://tamaiti.herokuapp.com/api/users')
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setUsers(data.data)
                
            })
    }, [loading])

    return (
    <div className="row">
            <h5 className="m-0 font-weight-bold text-primary">Listado de Productos</h5>
        <table id="listadoProductos" className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Nombre Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Categoria</th>
                </tr>
            </thead>
            <tbody>
                {loading && <img src="/loading.gif" alt="loading" />}

                { !loading && products.map((product, i) => {
                        return (
                            <TablaContent key={`product${i}`} item1={product.id} item2={product.name} item3={product.price} item4={product.category.name}/>
                        )
                    })
                }
            </tbody>
        </table>

  {/* //////////////////////Tabla USER     */}
  <h5 className="m-0 font-weight-bold text-primary">Listado de usuarios</h5>
  <table id="listadoUsuarios" className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {loading && <img src="/loading.gif" alt="loading" />}
                { !loading && users.map((user, i) => {
                        return (
                            <TablaContent key={`product${i}`} item1={user.id} item2={user.name} item3={user.last_name} item4={user.email}/>
                        )
                    })
                }
            </tbody>
    </table>

    </div>

    )
}

Tabla.propTypes = {
}
export default Tabla;
