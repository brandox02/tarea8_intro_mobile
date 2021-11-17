import React from "react";
import { StyleSheet, Text, View } from "react-native";
import List from "./components/List";
import NewSecret from "./components/NewSecret";
import Menu from "./components/Menu";

const RenderView = ({ currentView }) => (
  <View>
    {currentView === 1 && <List />}
    {currentView === 2 && <NewSecret />}
  </View>
);

export default function App() {
  const [currentView, setCurrentView] = React.useState(1);
  return (
    <View style={{}}>
      <Menu currentViewCallback={setCurrentView} />
      <RenderView currentView={currentView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
