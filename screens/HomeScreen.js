import React, { Component } from 'react';
import {Image, StyleSheet, Text, View, FlatList, TouchableHighlight } from "react-native";
import {useState, useEffect} from "react";
import {Ionicons} from "@expo/vector-icons";
import axios from "axios";

function HomeScreen({navigation}) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = fetch('http://localhost:3000/api?page=1');
        response.then(res => res.json())
            .then(resJson => {
                console.log(resJson)
                var duLieu = [];
                resJson.forEach(function (item) {
                    var id = item._id;
                    var url_l = item.url_l;
                    var width_l = item.width_l;
                    var height_l = item.height_l;
                    var url_t = item.url_t;
                    var width_t = item.width_t;
                    var height_t = item.height_t;
                    var title = item.title;
                    var describe = item.describe;

                    duLieu.push({
                        id: id,
                        url_l: url_l,
                        width_l: width_l,
                        height_l: height_l,
                        url_t: url_t,
                        width_t: width_t,
                        height_t: height_t,
                        title: title,
                        describe: describe
                    })
                    setData(duLieu);
                })
            })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList data={data} style={{flex: 1}} renderItem={({item}) => {
                return (<View style={{flexDirection: 'row'}}>
                    <View>
                        <Text>id: {item.id}</Text>
                        <Text>id: {item.title}</Text>
                        <Text>id: {item.describe}</Text>
                        <Image source={{uri: 'http://localhost:3000/uploads/'+item.url_t}} style={{width: item.width_t, height: item.height_t, borderRadius: 8, paddingTop: 50}}/>
                    </View>
                    <Image source={{uri: 'http://localhost:3000/uploads/'+item.url_l}} style={{width: item.width_l, height: item.height_l, borderRadius: 8}}/>
                </View>)
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center',
        paddingLeft: 440,
    }
});

export default HomeScreen;