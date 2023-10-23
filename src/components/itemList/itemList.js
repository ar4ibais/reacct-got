import React, { Component } from 'react';
import './itemList.css';
import GotService from '../services/gotServices';
import Spinner from '../spinner';
export default class ItemList extends Component {
    state = {
        charList: null
    }

    gotService = new GotService();

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then(charList => {
                this.setState({ charList })
            })
    }

    renderItems = (arr) => {
        return arr.map((item, i) => {
            return (
                <li
                    onClick={() => this.props.onCharSelected(41 + i)}
                    key={i}
                    className="list-group-item"
                >
                    {item.name}
                </li>
            )
        })
    }

    render() {
        const { charList } = this.state;

        if (!charList) {
            return <Spinner />
        }

        const items = this.renderItems(charList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}