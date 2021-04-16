import { React } from 'react'


function LastProduct(props) {

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
                </div>
                
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid  " src={props.img} alt="" />
                    </div>
                    <h4 className="m-0 font-weight-bold text-primary">{props.nameProduct} </h4>
                    <p className="m-0 font-weight-bold text-primary">{props.age}</p>
                    <p >{props.description}</p>
                    <p className="h5 mb-0 font-weight-bold text-gray-800">${props.price}</p>
                    <hr></hr>
                        <a href={props.link} rel="noreferrer" target="_blank" type="button" className="btn btn-outline-secondary">Ver online</a>
                </div>
            </div>
        </div>

    );
}


export default LastProduct;


