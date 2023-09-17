import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CardsDonation = (props) => (
  <Card style={{ backgroundColor: "#138808" }}>
    <Card.Cover source={{ uri: props.uri }} />
    <Card.Content style={{ marginBottom: 10 }}>
      <Text variant="bodyMedium" style={{ color: "white" }}>
        {props.title}
      </Text>
      <Text variant="titleLarge" style={{ color: "white" }}>
        {props.Price}
      </Text>
    </Card.Content>
  </Card>
);

export default CardsDonation;
