import React from 'react';
import './list-item.css';

const ListItem = (props) => {

        return (
            <div className="list-edit">
                <a href={props.link} className="h1-edit">
                    <h1 className="">{props.title}</h1>
                </a>
                <p>{props.content}</p>
            </div>
        );
};

export default ListItem;