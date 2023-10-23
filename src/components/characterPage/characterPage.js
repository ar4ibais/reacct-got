import React, { Component } from "react";
import ItemList from '../itemList';
import CharDetails from '../charDetails';

import './characterPage.css';
import ErrorMessage from "../errorMessage/errorMessage";
import GotService from "../services/gotServices";
import RowBlock from "../rowblock";

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

        const itemList = (
            <ItemList
                onCharSelected={this.onCharSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({ name, gender }) => `${name} (${gender})`}
            />
        )

        const charDetails = (
            <CharDetails charId={this.state.selectedChar} />

        )

        return (
            <RowBlock left={itemList} right={charDetails} />
        )
    }
}

export default CharacterPage;