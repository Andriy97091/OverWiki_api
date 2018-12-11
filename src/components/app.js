import React, {Component} from 'react';
import Form from './form/form';
import Title from './title/title';
import ListItem from './list-item/list-item';

export default class App extends Component {

    state = {
        title: [],
        content: [],
        link: []
    };

    gettingSearch = async (e) => {
        e.preventDefault();
        const item = e.target.elements.search.value;
        const url_api = await
            fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${item}&limit=10&format=json`);
        const data = await url_api.json();
        this.setState({
            title: data[1],
            content: data[2],
            link: data[3]
        });
    };



    render() {
        return (
            <div className="container">
                <Title/>
                <Form searchMessage={this.gettingSearch}/>
                <div>
                    {
                     this.state.title.map((item, index) => {
                         return (
                             <ListItem
                                    key={index}
                                    title={item}
                                    content={this.state.content[index]}
                                    link={this.state.link[index]}
                             />
                         );
                     })
                    }
                </div>
            </div>
        );
    };
}