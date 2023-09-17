import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const InfoCards = (props) => (
  <Card style={{backgroundColor:props.color}}>
    <Card.Content style={{marginBottom:10}}>
        <Text variant="titleLarge" style={{color:"white"}}>{props.head}</Text>
        <Text variant="bodyMedium" style={{color:"white"}}>{props.data}</Text>
    </Card.Content>

  </Card>
);

export default InfoCards;