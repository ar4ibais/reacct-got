import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';


import './app.css'
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage';


class App extends Component {
    state = {
        visible: true,
        error: false
    }

    componentDidCatch() {
        this.setState({ error: true })
    }

    onChangeVisible = () => {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }
        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {this.state.visible ? <RandomChar /> : null}
                        </Col>
                    </Row>
                    <button
                        onClick={this.onChangeVisible}
                        className='toggle-btn'
                    >Toggle RandomChar</button>
                    <CharacterPage />
                </Container>
            </>
        );
    }
};

export default App;