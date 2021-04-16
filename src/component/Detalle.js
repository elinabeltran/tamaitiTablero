import { React, useState, useEffect } from 'react'
import AmountCard from './AmountCard.js';

/////////////////////FALTA CONSULTAR CATEGORIAS AMOUNT

function Detalle() {

    let [loading, setLoading] = useState(true);
    let [products, setProducts] = useState([]);
    let [productsAmount, setProductsAmount] = useState([]);
    let [usersAmount, setUsersAmount] = useState([]);


    useEffect(() => {
        fetch('https://tamaiti.herokuapp.com/api/products')
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setProducts(data.data)
                setProductsAmount(data.meta)
            })
    },[loading])


    useEffect(() => {
        fetch('https://tamaiti.herokuapp.com/api/users')
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setUsersAmount(data.meta)
            })
    },[loading])


    return (

            <div className="row ">
                <div className="rowAmountList ">
                <h3> Numero {this.state.product[0].id}</h3>
                </div>
            </div>

        );
    }
}


export default Detalle;
