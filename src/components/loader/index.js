import React from 'react';
import loader from "../../images/loading.gif"
const Loader = () => {
    return (
        <div className="loading text-center py-1 contact_form">
            <img src={loader} alt ="" />
        </div>
    );
};

export default Loader;