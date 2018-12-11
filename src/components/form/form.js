import React from 'react';
import './form.css';

const Form = (props) => {
    return (
        <form onSubmit={props.searchMessage} className="col-md-6 input-group form-edit">
            <input type="text" name="search" placeholder="Write word" className="form-control"/>
            <span className="input-group-btn">
                <button className="btn btn-warning">Submit</button>
            </span>
        </form>
    );
};

export default Form;