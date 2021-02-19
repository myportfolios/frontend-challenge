
import React, {useContext, Fragment} from "react";
import {context} from "../App";

function DetailsPage(props){
    const {state} = useContext(context)
    // console.log("state is", state)
    let tableBody = state && state.map((item, index) => {
        return(
            <Fragment key={index}>
            <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.website_url}</td>
            <td>{item.address}</td>
            </tr>
            </Fragment>
        )
    })
    return(
            <Fragment>
                <h1>Places Page</h1>
                <table>
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
            </Fragment>)
}
export default DetailsPage;