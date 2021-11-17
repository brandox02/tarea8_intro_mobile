import React from "react";
import { View } from "react-native";
import { List } from "react-native-paper";

function ListView() {
  return (
    <View>
      <List.Section title="Elements" style={{ width: 300 }}>
        <List.Accordion>
          <List.Item key={1} title={"sometime 1"} />
          <List.Item key={2} title={"sometime 2"} />
        </List.Accordion>
      </List.Section>
    </View>
  );
}

export default ListView;
