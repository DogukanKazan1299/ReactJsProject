import React, { Component } from "react";
import { Table,Button } from "reactstrap";

export default class ProductList extends Component {
  
  //1-button
  //2-addToCart
  //3-butona onClick 
  //4-navbar seç Navi.js 'e at Naviyi boşalt
  //5-addToCart App.js'e
  //6-cart state i yaz->app.js
  //7-app.js productlist'e addToCartı yolla
  //8-ProductList onClick -> this.props.addToCart
  //9-App.js->Navi'ye cartı yolla
  //10-kaç eleman olduğunu navi 'de istediğin yerde yakala-->{this.props.cart.length}
  
  
  render() {
    return (
      <div>
        <h1>
          {this.props.info.title}-{this.props.currentCategory}
        </h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick={()=>this.props.addToCart(product)} color="danger">Ekle</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
