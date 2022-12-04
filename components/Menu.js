import React, {useState} from "react";
import {Menu, Provider} from "react-native-paper";
import {StyleSheet, Text, View} from "react-native";

const MenuExample = () => {
    const [visible, setVisible] = useState(false);
    const [enteredText, setEnteredText] = useState("+");

    const closeMenu = () => {
        setVisible(false);
        setEnteredText('+')
    };

    const openMenu = (v) => {
        setVisible(true)
        if (enteredText == '+') {
            setEnteredText('x');
        } else {
            setEnteredText('+');
        }
    };

    return (
        <Provider>
            <View style={styles.menu}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <View style={{backgroundColor: 'red', padding: 20, borderRadius: 40}}>
                            <Text onPress={openMenu} style={{color: 'white', fontWeight: 'bold', fontSize: 30, position: 'absolute', marginLeft: -10, marginTop: -23}}>{enteredText}</Text>
                        </View>
                    }>
                    <Menu.Item
                        onPress={() => {

                        }}
                        title="Flickr" style={styles.item}
                    />
                    <Menu.Item
                        onPress={() => {
                            them(height_q, width_q)
                        }}
                        title="Group"
                        style={styles.item}
                    />
                </Menu>
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingBottom: 50,
        width: 200,
        marginLeft: 600
    },
    menu: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginBottom: 100,
        height: 200,
        marginLeft: 950
    },
    item: {
        backgroundColor: '#999'
    }
});

export default MenuExample;