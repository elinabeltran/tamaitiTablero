

function Category(props) {
    return (

        <div key={props.key} className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    {props.title}
				</div>
            </div>
        </div>

    );
}

Category.propTypes = {
}
export default Category;





