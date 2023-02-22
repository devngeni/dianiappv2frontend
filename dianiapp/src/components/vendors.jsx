import axios from "axios";
import React, { useEffect, useState } from "react";
import './css/vendors.css'

const Vendor = () => {
    const [vendorData, setVendorData] = useState([])
    let allVendorData = []
    const getVendorData = async () => {

        let allData = await axios({
            method: 'GET',
            url: 'https://server.dianiapp.me/vendors/all',
            headers: {
                "Content-Type": "application/json",
            },
        }).then(function (res) {
            return res.data
        })
        allVendorData.push(...allData)
        setVendorData(allVendorData)
    }

    useEffect(() => {
        getVendorData()
    })
    return (
        <>
            <h1>Shop from vendors</h1>
            <div className="scrollNav">
                {vendorData.map((data, index) => {
                    return (
                        <p key={index}>{data.name}</p>
                    )
                })}
            </div>
        </>
    )
}
export default Vendor;