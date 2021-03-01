
import React, {useContext, Fragment, useState, useEffect} from "react";
import {context} from "../App";

import "./pages.scss";

function DetailsPage(){
    const {state} = useContext(context)
    const [selectedItem, setSelectedItem] = useState(null)
    
    /**************set selected item to local storage**************/
    /**************update based on user selection******************/
    useEffect(() => {
        let stringItemSelected = selectedItem && JSON.stringify(selectedItem)
        stringItemSelected && sessionStorage.setItem("selected",stringItemSelected)
    }, [selectedItem])

    /**************construct table body**************/
    let tableBody = state && state.map((item, index) => {
        return(
            <Fragment key={index}>
            <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td><a href="/places/2" onClick={(e) => handleClick(e, item) }>{item.website_url}</a></td>
            <td>{item.address}</td>
            </tr>
            </Fragment>
        )
    })
    /**************user event handler**************/
    const handleClick = (e, item) => {
        setSelectedItem(item)
    }
    /**************table*************/ 
    return(
            <Fragment>
                <div className="details-page">
                <h1>Places Page</h1>
                <table className="details-page__table">
                    <thead>
                <tr>
                    <th>Business ID</th>
                    <th>Business Name</th>
                    <th>Website</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>{tableBody}</tbody>
                </table>
                </div>
            </Fragment>)
}
export default DetailsPage;