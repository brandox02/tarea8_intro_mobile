import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";

const MyComponent = ({currentViewCallback}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Mostrar Menu</Button>}
        >
          <Menu.Item onPress={() => currentViewCallback(2)} title="Anadir Secreto" />
          <Divider />
          <Menu.Item onPress={() => currentViewCallback(1)} title="Lista de Secretos" />
        </Menu>
      </View>
    </Provider>
  );
};

export default MyComponent;
