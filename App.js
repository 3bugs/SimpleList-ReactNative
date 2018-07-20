import React, { Component } from "react";

import { StyleSheet, Text, View, FlatList } from "react-native";
import BookItem from "./BookItem";
import NYT from "./NYT";

const mockBooks = [
    {
        rank: 1,
        title: "คู่มือเขียนแอพ Android ด้วย Android Studio",
        author: "พร้อมเลิศ หล่อวิจิตร",
        book_image:
            "http://3bugs.com/wp-content/uploads/2015/09/book_android_studio_cover01.jpg"
    },
    {
        rank: 2,
        title: "คู่มือเขียนแอพ Android ฉบับรวมโค้ด",
        author: "พร้อมเลิศ หล่อวิจิตร",
        book_image:
            "http://3bugs.com/wp-content/uploads/2015/03/2015-03-30_004438.png"
    }
];

class SimpleList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        this._refreshData();
    }

    _renderItem = ({item}) => {
        return (
            <BookItem
                coverURL={item.book_image}
                title={item.key}
                author={item.author}
                imageWidth={item.book_image_width}
                imageHeight={item.book_image_height}
            />
        );
    };

    _refreshData = () => {
        NYT.fetchBooks().then(books => {
            this.setState({ data: this._addKeysToBooks(books) });
        });
    };

    _addKeysToBooks = books => {
        return books.map(book => {
            return Object.assign(book, { key: book.title });
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.data} renderItem={this._renderItem} />
            </View>
        );
    }
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 10 } });

export default SimpleList;