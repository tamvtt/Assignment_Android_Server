import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableHighlight} from 'react-native';
import { getDatabase, ref, set, remove, child, get } from 'firebase/database';
import { Menu, Provider } from 'react-native-paper';
import { initializeApp } from "firebase/app";

function SecondScreen({ route, navigation }) {
    const { url } = route.params;
    const { height_q } = route.params;
    const { height_sq } = route.params;
    const { height_c } = route.params;
    const { height_t } = route.params;
    const { width_q } = route.params;
    const { width_sq } = route.params;
    const { width_c } = route.params;
    const { width_t } = route.params;
    const [data, setData] = useState([]);
    const firebaseConfig = {
        apiKey: "AIzaSyC7me0w0TBu9kdshbqLi_Y9U85qBSJS1tI",
        authDomain: "demofirebase-58bf2.firebaseapp.com",
        projectId: "demofirebase-58bf2",
        storageBucket: "demofirebase-58bf2.appspot.com",
        messagingSenderId: "828907051842",
        databaseURL: "https://demofirebase-58bf2-default-rtdb.asia-southeast1.firebasedatabase.app/",
        appId: "1:828907051842:web:b8dfaa0532e3a0d91186db",
        measurementId: "G-LS4NWXKW67"
    };

    const app = initializeApp(firebaseConfig);

    const them = (height, width) => {
        const db = getDatabase();
        var id = 11234;
        var Img_url = url;
        var height = height;
        var width = width;
        set(ref(db, 'students/'+id), {
            id: id,
            url: Img_url,
            height: height,
            width: width
        }).then(error => {
            if (error) alert('Co loi xay ra');
            else alert('Thanh cong');
        })
    }

    const MenuExample = () => {
        const [visible, setVisible] = useState(false);
        const [enteredText, setEnteredText] = useState("+");
        const wh_t = width_t + ' x ' + height_t;
        const wh_c = width_c + ' x ' + height_c;
        const wh_q = width_q + ' x ' + height_q;
        const wh_sq = width_sq + ' x ' + height_sq;
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
                                them(height_c, width_c)
                            }}
                            title={wh_c} style={styles.item}
                        />
                        <Menu.Item
                            onPress={() => {
                                them(height_q, width_q)
                            }}
                            title={wh_q}
                            style={styles.item}
                        />
                        <Menu.Item
                            onPress={() => {
                                them(height_t, width_t)
                            }}
                            title={wh_t}
                            style={styles.item}
                        />
                        <Menu.Item
                            onPress={() => {
                                them(height_sq, width_sq)
                            }}
                            title={wh_sq}
                            style={styles.item}
                        />
                    </Menu>
                </View>
            </Provider>
        );
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={{uri: url}} style={{width: 1000, height: 600}}/>
            {MenuExample()}
        </View>
    );
}

export default SecondScreen;
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