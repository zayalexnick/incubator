import React from 'react';
import _ from 'lodash';
import { Row, Col } from '~/components/Grid';
import moment from 'moment';
import { Container, Image, Content, Title, Time } from './styles';

const Item = ({ title, urlToImage, publishedAt, index }) => (
    <Container to={`/news/popular-${index}`}>
        <Image src={urlToImage} className="image" />
        <Content className="content">
            <Title>{ title }</Title>
            <Time>{ moment(publishedAt).fromNow() }</Time>
        </Content>
    </Container>
);

export default ({ items }) => (
    <Row indent={10}>
        { _.map(items.entities, (item, index) => (
            <Col key={index} md={index < 2 ? 1 : 1/2} lg={index < 2 ? 1/2 : 1/3}>
                <Item { ...item } index={index} />
            </Col>
        )) }
    </Row>
);