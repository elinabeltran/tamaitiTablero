import { React, useState, useEffect } from 'react'
import AmountCard from './AmountCard.js';

/////////////////////FALTA CONSULTAR CATEGORIAS AMOUNT

function AmountList() {

    let [loading, setLoading] = useState(true);
    let [productsAmount, setProductsAmount] = useState([]);
    let [usersAmount, setUsersAmount] = useState([]);
    let [categoriesAmount, setCategoriesAmount] = useState([]);



    useEffect(() => {
        fetch('https://tamaiti.herokuapp.com/api/products')
            .then(response => response.json())
            .then(data => {
                setLoading(false);
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





    useEffect((props) => {
        fetch('https://tamaiti.herokuapp.com/api/products/categories')
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setCategoriesAmount(data.meta)
            })
    }, [loading])




    return (
        <div className="row ">
            <div className="rowAmountList ">

            </div>
    
            <AmountCard name="Productos Cargados" amount= {productsAmount.total} icon ={"fas fa-2x text-gray-300 fa-dice"}/>
            <AmountCard name="Usuarios registrados" amount={usersAmount.total} icon ={"fas fa-2x text-gray-300 fa-users"}/>
            <AmountCard name="Categorias" amount={categoriesAmount.total} icon ={"fas fa-2x text-gray-300 fa-tags"}/>
    
        </div>
    
    );
}



AmountCard.propTypes = {
}
export default AmountList;
