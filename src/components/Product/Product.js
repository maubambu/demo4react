import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import './Product.scss';
const Product = (props) => {
    console.log(props.history);
    let noProductView= <h1>Error: No ingresaste id de producto</h1>
    let productView = (
        <Card className="product-view">
            <div>
                <h1>Estás viendo el producto #{props.match.params.id}!</h1>
                <Button variant="contained" color="primary" onClick={() => props.history.push("/compras")}>Comprar producto</Button>
            </div>
        </Card>
    )
    return (
        <div>
            {props.match.params.id ? productView: noProductView}
        </div>
    )
}

export default Product;