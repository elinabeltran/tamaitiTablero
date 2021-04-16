import AmountList from './AmountList.js';
import LastProduct from './LastProduct.js';
import CategoryList from './CategoryList.js';
import Tablas from './Tabla.js';
import TitleDashboard from './TitleDashboard.js';
import { React, useState, useEffect } from 'react'

function Main(props) {

    let [loading, setLoading] = useState(true);
    let [lastProduct, setLastProduct] = useState([]);

    useEffect((props) => {
        fetch('https://tamaiti.herokuapp.com/api/products')
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setLastProduct(data.data[data.data.length - 1])

            })
    }, [loading])

    return (

        <div className="container-fluid">
            <TitleDashboard title="Tablero administrador" />
            <AmountList />
            <div className="row">
            <LastProduct title="Último Producto cargado" img={`https://tamaiti.herokuapp.com/uploads/img_products/${lastProduct.img_url}`} nameProduct={lastProduct.name} description={lastProduct.description} age={lastProduct.age} price={lastProduct.price} link={`https://tamaiti.herokuapp.com/products/${lastProduct.id}`}/>
            <CategoryList />
            </div>
            <Tablas/>
        </div>
    )
}

export default Main;
