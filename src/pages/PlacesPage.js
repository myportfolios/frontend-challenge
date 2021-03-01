import React, {useEffect, useState} from "react";

import "./pages.scss";

function PlacesPage(){
    let emptyObject  = {};
    const [selectedItem, setSelectedItem] = useState(emptyObject)
    /****fetch selected item from session storage*****/
    useEffect(() => {
        let item =  sessionStorage.getItem('selected');
        item = JSON.parse(item)
        setSelectedItem(item)
    },[])
    
    let workHoursList = selectedItem && renderWorkHoursDetails(selectedItem.hours)
    let displayWorkHours = workHoursList &&  workHoursList.map((item) => {
        return (
        <div className="days-hours-box">
            <p className="days-hours-box__days">{`${item[0]}:`}</p>
            <p className="days-hours-box__hours">{item[1]}</p>
        </div>)
    })
    return (
        <div className="places-page">
            <h3><a href="/" className="places-page__go-back-btn">Go back to Places</a></h3>
            <div className="image-details-box">
            <img src={selectedItem && selectedItem.logo_url} alt="logo" className="image-details-box__image"/>
            <ul className="image-details-box__details">
                <li>Business Name: <span className="values">{selectedItem && selectedItem.name}</span></li>
                <li>Address: <span className="values">{selectedItem && selectedItem.address}</span></li>
                <li>Website: <span className="values">{selectedItem && selectedItem.website_url}</span></li>
                <li>Hours: </li>
                <>{displayWorkHours}</>
            </ul>
            </div>

        </div>
    )
}
export default PlacesPage;

function renderWorkHoursDetails(obj){
    if(obj){
        return Object.entries(obj)
    }
}