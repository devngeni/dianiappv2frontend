import React, { useEffect, useState } from "react";
import '../css/products.css';
import Vendor from "../vendors";
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
    const [productData, setProductData] = useState([])
    const navigate = useNavigate()
    let allProductData = [];

    const getProductData = async () => {

        let allData = await axios({
            method: 'GET',
            url: 'https://server.dianiapp.me/products/all',
            headers: {
                "Content-Type": "application/json",
            },
        }).then(function (res) {
            return res.data
        })
        allProductData.push(...allData)
        setProductData(allProductData)
    }

    const specificProduct = (dataId, dataProductName, dataDescription, dataProductImage, dataPrice, dataVendorId) => {

        navigate("/single-vendor", {
            state: {
                dataId, dataProductName, dataDescription, dataProductImage, dataPrice, dataVendorId
            }
        })
    }

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <>
            <Vendor />
            <div className="products-page-Becky">
                {productData.map((data, index) => {
                    return (
                        <div className="card" key={index} onClick={() => specificProduct(data._id, data.product_name, data.description, data.product_image, data.price, data.vendor_id)}>
                            <img src={data.product_image} alt="" />
                            <h4>{data.product_name}</h4>
                            <p className="card-p-Becky">{data.description}</p>
                            <p className="pricing-Becky">{data.price} /- <nbsp /><span>Lorem Ipsum</span></p>
                        </div>
                    )
                })}

            </div>
        </>
    )
}
export default AllProducts;