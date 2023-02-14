import React from "react";
import '../css/products.css';
import Vendor from "../vendors";
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'

const AllProducts = () => {
    return (
        <>
            <Vendor />
            <div className="products-page-Becky">
                <div className="card">
                    <img src={product1} alt="" />
                    <h4>Groceries</h4>
                    <p className="card-p-Becky">Lorem ipsum dolor sit amet consectetur. Pellentesque nibh </p>
                    <p>Ksh 527/ <span>Lorem Ipsum</span></p>
                </div>
                <div className="card">
                    <img src={product2} alt="" />
                    <h4>Boat riding</h4>
                    <p>Enjoy 3hrs in the water with the fastest water canoes </p>
                    <p>Ksh 3000/hr <span>Lorem Ipsum</span></p>

                </div>
                <div className="card">
                    <img src={product3} alt="" />
                    <h4>Massage</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Pellentesque nibh </p>
                    <p>Ksh 143/session <span>Lorem Ipsum</span></p>

                </div>
                <div className="card">
                    <img src={product1} alt="" />
                    <h4>Groceries</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Pellentesque nibh </p>
                    <p>Ksh 527/ <span>Lorem Ipsum</span></p>
                </div>
                <div className="card">
                    <img src={product1} alt="" />
                    <h4>Groceries</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Pellentesque nibh </p>
                    <p>Ksh 527/ <span>Lorem Ipsum</span></p>
                </div>
                <div className="card">
                    <img src={product2} alt="" />
                    <h4>Boat riding</h4>
                    <p>Enjoy 3hrs in the water with the fastest water canoes </p>
                    <p>Ksh 3000/hr <span>Lorem Ipsum</span></p>

                </div>

            </div>
        </>
    )
}
export default AllProducts;