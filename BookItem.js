import React, { Component } from "react";

import { StyleSheet, Text, View, Image, ListView } from "react-native";

//https://medium.com/the-react-native-log/tips-for-react-native-images-or-saying-goodbye-to-trial-and-error-b2baaf0a1a4d

const styles = StyleSheet.create({
    bookItem: {
        flexDirection: "row",
        backgroundColor: "#dcfff1",
        borderColor: "#AAAAAA",
        borderWidth: 1,
        padding: 5,
        height: 150
    },
    cover: { resizeMode: "stretch" },
    info: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignSelf: "center",
        padding: 20,
        backgroundColor: '#ffe6dc'
    },
    author: { fontSize: 18, backgroundColor: '#fcffb0' },
    title: { fontSize: 18, backgroundColor: '#b8ffcd', fontWeight: "bold" }
});

class BookItem extends Component {
    render() {
        return (
            <View style={styles.bookItem}>
                {/*<BookImage width={this.props.imageWidth} height={this.props.imageHeight} source={this.props.coverURL} />*/}
                <Image style={{width: this.props.imageWidth / 3, height: this.props.imageHeight / 3}} source={{uri: this.props.coverURL}} />
                <View style={styles.info}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.author}>{this.props.author}</Text>
                </View>
            </View>
        );
    }
}

class BookImage extends Component {
    render() {
        return (
            <Image style={{width: this.props.width / 3, height: this.props.height / 3}} source={{uri: this.props.source}} />
        );
    }
}

export default BookItem;