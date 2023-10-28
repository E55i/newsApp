import { ActivityIndicator, Text, FlatList, TouchableOpacity, Image, Linking, StyleSheet, View, Alert } from 'react-native'
import React, { useState, useEffect, useRef } from 'react';
import { convertTimeStamp } from '../funcions/ConvertTimeStamp';
import showAlert from '../funcions/ShowAlert';


const api = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY
}

export default function News({ ...props }) {

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const newsRef = useRef(null);

    useEffect(() => {
        (async () => {
            const url = api.url +
                'q=' + props.keyword +
                '&apiKey=' + api.key
            try {
                await fetch(url)
                    .then(res => res.json())
                    .then((json) => {
                        setArticles(json.articles.map(article => ({
                            date: convertTimeStamp(`${article.publishedAt}`),
                            title: `${article.title}`,
                            url: `${article.url}`,
                            description: `${article.description}`,
                            urlToImage: `${article.urlToImage}`,
                        })))
                    })
                setIsLoading(false);
                newsRef.current.scrollToOffset({ animated: true, offset: 0 });
                console.log("url: " + url)

            } catch (error) {
                setIsLoading(false)
                showAlert("Error", "An error occurred while searching for data")              
            }


        })()

    }, [props.keyword])


    return (
        <>
            {isLoading &&
                <ActivityIndicator style={styles.activityIndicator} size="large" color='25CED1' />}
            {isLoading === false &&
                <FlatList
                    ref={newsRef}
                    data={articles}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            style={styles.newsCard}
                            onPress={() => { Linking.openURL(item.url) }}
                        >
                            <Text style={styles.date}>{item.date}</Text>
                            <View style={styles.headingAndImage}>
                                {item.urlToImage &&
                                    <Image style={styles.image} source={{ uri: item.urlToImage }} />}
                                <Text style={styles.heading}>{item.title}</Text>
                            </View>
                            <Text style={styles.description}>{item.description}</Text>
                        </TouchableOpacity>
                    }
                />
            }
        </>
    )
}
const styles = StyleSheet.create({
    activityIndicator: {
        alignItems: 'center',
    },
    newsCard: {
        borderRadius: 20,
        borderColor: '#FCEADE',
        borderWidth: 3,
        padding: 8,
        margin: 8,
    },
    date: {
        fontSize: 12,
        color: '#6F6F6F',
    },
    headingAndImage: {
        flexDirection: "row",
        alignItems: 'center',
        margin: 4,
    },
    image: {
        width: 60,
        height: 60,
        marginTop: 8,
        marginRight: 8,
        marginBottom: 8,
        borderRadius: 40,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        maxWidth: '80%',
    },
    description: {
        fontSize: 14,
    },
});