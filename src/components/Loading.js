import React from "react"
import loader from '../images/gif/loading-arrow.gif'

export default function Loading(){

    return (
    <div className="loading">
        <img src={loader} alt="loader" />
    </div>
    )
}