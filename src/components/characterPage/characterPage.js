import React, { Component } from "react";
import { Col, Row } from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

import './characterPage.css';
import ErrorMessage from "../errorMessage/errorMessage";
import GotService from "../services/gotServices";

class CharacterPage extends Component {
    state = {
        selectedChar: 130,
        error: false
    }

    gotService = new GotService();

    componentDidCatch() {
        this.setState({ error: true })
    }

    onCharSelected = (id) => {
        this.setState({ selectedChar: id })
    }

    render() {
        if (!this.state.selectedChar) {
            return <ErrorMessage />
        }
        return (
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected} getData={this.gotService.getAllCharacters} />
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar} />
                </Col>
            </Row>
        )
    }
}

export default CharacterPage;