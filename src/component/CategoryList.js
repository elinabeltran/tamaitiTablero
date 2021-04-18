import Category from './Category.js';
import { React, useState, useEffect } from 'react'



function CategoryList(props) {

    let [loading, setLoading] = useState(true);
    let [categories, setCategories] = useState([]);
  

    useEffect((props) => {
        fetch('https://tamaiti.herokuapp.com/api/products/categories')
            .then(response => response.json())
            .then(responseCategories => {
                setLoading(false);
                let arrayCategories=[]
                for (let i = 0; i < responseCategories.data.length; i++) {
                    fetch('https://tamaiti.herokuapp.com/api/products/categories/'+responseCategories.data[i].id)
                    .then(response => response.json())
                    .then(data => {
                        arrayCategories.push(
                            {   name: data.meta.category_name,
                                total:data.meta.total
                            })
                    })     
                }
                setCategories(arrayCategories)
            })





    }, [loading])

    return (

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categorias en Base de Datos</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        {loading && <img src="/loading.gif" alt="loading" />}

                        {!loading && categories.map((category, i) => {
                            return (
                                <Category key={`category${i}`} title={category.name} amount={category.total}/>
                            )
                        })
                        }

                    </div>
                </div>
            </div>
        </div>

    );
}

export default CategoryList;





