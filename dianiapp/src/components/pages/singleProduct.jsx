import React from "react";
import '../css/singleProduct.css';
import Vendor from "../vendors";
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
    const location = useLocation()
    // const vendor_id = location.state.dataVendorId;
    // const vendor_id = location.state.dataId;

    return (
        <>
            <Vendor />
            <div className="single-product-page-Becky">
                {/* <div className="single-product-slides-Becky">
                    <div className="single-product-card-Becky">
                        <img src={product1} alt="" />
                    </div>
                    <div className="single-product-card-Becky">
                        <img src={product2} alt="" />
                    </div>
                    <div className="single-product-card-Becky">
                    </div>
                    <div className="single-product-card-Becky">
                        <img src={product1} alt="" />
                    </div>
                    <div className="single-product-card-Becky">
                        <img src={product1} alt="" />
                    </div>
                    <div className="single-product-card-Becky">
                        <img src={product2} alt="" />

                    </div>
                </div> */}
                {/* <Carousel showThumbs={false} dynamicHeight={false}>
                    <div className="single-product-card-Becky">
                        <img style={{ height: '100%' }} src={product1} alt="" />
                    </div>
                    <div className="single-product-card-Becky">
                        <img src={product2} alt="" />
                    </div>
                    <div className="single-product-card-Becky">
                    </div>
                    <div className="single-product-card-Becky">
                        <img src={product1} alt="" />
                    </div>
                    <div className="single-product-card-Becky">
                        <img src={product1} alt="" />
                    </div>
                    <div className="single-product-card-Becky">
                        <img src={product2} alt="" />

                    </div>
                </Carousel> */}
                <div>
                    <img src={location.state.dataProductImage} alt={""} />
                </div>
                <div>
                    <h3 className="single-product-title-becky">{location.state.dataProductName}</h3>
                    <p className="single-product-pricing-becky">{location.state.dataPrice}/- <span>Lorem Ipsum</span></p>
                    <p className="single-product-description-becky">{location.state.dataDescription}</p>
                    <button className="single-product-button-becky">Book</button>
                    <a className="single-product-link-becky">Back to Vendors</a>
                </div>

            </div>
        </>
    )
}
export default SingleProduct;