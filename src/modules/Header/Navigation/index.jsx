import React, { Component } from 'react';
import _ from 'lodash';
import enhanceWithClickOutside from 'react-click-outside';
import { Container, List, Item, Link, Button } from './styles';

import navigation from '~/navigation';

@enhanceWithClickOutside
export default class extends Component
{
    state = {
        opened: false
    };

    _open = () => this.setState({ opened: true });
    _close = () => this.setState({ opened: false });

    handleClickOutside = () => this._close();

    render()
    {
        const { opened } = this.state;

        return (
            <Container>
                <Button onClick={::this._open}><span /></Button>
                <List opened={opened}>
                    { _.map(navigation, (item, index) => (
                        <Item key={index}>
                            <Link to={item.link} activeClassName="active" onClick={::this._close}>{ item.label }</Link>
                        </Item>
                    )) }
                </List>
            </Container>
        );
    }
}