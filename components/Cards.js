import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Cards = (props) => (
  <Card>
    <Card.Content style={{marginBottom:10}}>
      <Text variant="titleLarge">{props.head}</Text>
      <Text variant="bodyMedium">{props.title}</Text>
    </Card.Content>
    <Card.Cover source={{ uri:props.urri}} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default Cards;