import React, { useState } from 'react'
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


import { icons } from '../assets/datas/Contant'
import colors from '../assets/colors/colors'
import { categoryData, restaurantData } from '../assets/datas/Contant'

FontAwesome.loadFont()

const Home = props => {
    const [selectCategory, setSelectCategory] = useState(1)
    const [selectedList, setSelectedList] = useState(restaurantData)
    const handlePressCategoryItem = categoryItem => {
        let restaurantList
        restaurantList = restaurantData.filter(item => item.categories.includes(categoryItem.id))
        setSelectCategory(categoryItem.id)
        setSelectedList(restaurantList)
    }

    const renderHeader = () => {
        return (
            <View style={styles.headerWrapper}>
                <Image source={icons.location} style={styles.headerLocationIcon} />
                <View style={styles.headerTextWrapper}>
                    <Text style={styles.headerText}>745 Lincoln PI</Text>
                </View>
                <Image source={icons.shopping} style={styles.headerLocationIcon} />
            </View>
        )
    }

    const renderMainCategories = () => {
        const renderCategoryItem = ({ item }) => {
            return (
                <TouchableOpacity onPress={() => handlePressCategoryItem(item)}>
                    <View style={{
                            ...styles.categoryItemWrapper,
                            marginLeft: item.id == 1 ? 20 : 0,
                            backgroundColor: item.id == selectCategory ? colors.primary : colors.white
                        }}
                    >
                        <View style={{
                                ...styles.categoryImageWrapper,
                                backgroundColor: item.id == selectCategory ? colors.white : colors.gray
                            }}
                        >
                            <Image source={item.icon} style={styles.categoryImage} />
                        </View>
                        <Text style={{
                                ...styles.categoryItemText,
                                color: item.id == selectCategory ? colors.white : colors.black
                            }}
                        >
                            {item.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <View style={styles.categoriesWrapper}>
                <View style={styles.categoriesTitleWrapper}>
                    <Text style={styles.categoriesTitle}>Main Categories</Text>
                </View>
                <View style={styles.categoriesListWrapper}>
                    <FlatList
                        data={categoryData}
                        renderItem={renderCategoryItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }

    const renderRestaurantList = () => {
        const renderDishList = ({ item }) => {
            return (
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Detail', {
                        item: item
                    })}
                >
                    <View style={styles.dishListContainer}>
                        <ImageBackground
                            source={item.photo}
                            imageStyle={styles.dishLisstImage}
                            style={styles.dishListItem}
                        >
                            <View style={styles.dishDurationWrapper}>
                                <Text style={styles.dishDurationText}>{item.duration}</Text>
                            </View>
                        </ImageBackground>
                        <Text style={styles.dishListTitle}>{item.name}</Text>
                        <View style={styles.dishListInfoWrapper}>
                            <FontAwesome name='star' size={16} color={colors.primary} />
                            <Text style={styles.dishListInfoText}>{item.rating}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <View>
                <FlatList
                    data={selectedList}
                    renderItem={renderDishList}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <ScrollView>
                    {renderHeader()}
                    {renderMainCategories()}
                    {renderRestaurantList()}
                </ScrollView>
            </SafeAreaView>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20
    },
    headerLocationIcon: {
        width: 24,
        height: 24
    },
    headerTextWrapper: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.gray,
        borderRadius: 20
    },
    headerText: {
        color: colors.textDark,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16
    },
    categoriesWrapper: {
        marginTop: 48
    },
    categoriesTitleWrapper: {
        width: '50%',
        marginLeft: 20
    },
    categoriesTitle: {
        color: colors.textDark,
        fontSize: 32,
        fontFamily: 'Montserrat-Bold'
    },
    categoriesListWrapper: {
        marginVertical: 16
    },
    categoryItemWrapper: {
        alignItems: 'center',
        marginRight: 20,
        width: 64,
        height: 112,
        borderRadius: 32,
        backgroundColor: colors.price,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    categoryImageWrapper: {
        width: 48,
        height: 48,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24
    },
    categoryImage: {
        width: 24,
        height: 24
    },
    categoryItemText: {
        marginTop: 8,
        paddingHorizontal: 2,
        textAlign: 'center'
    },
    dishListContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    dishLisstImage: {
        borderRadius: 30
    },
    dishListItem: {
        height: 152,
        flex: 1,
        justifyContent: 'flex-end',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    dishDurationWrapper: {
        width: 120,
        height: 48,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dishDurationText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: colors.black
    },
    dishListTitle: {
        marginTop: 16,
        fontFamily: 'Montserrat-Medium',
        fontSize: 20,
        color: colors.black
    },
    dishListInfoWrapper: {
        flexDirection: 'row'
    },
    dishListInfoText: {
        marginLeft: 8,
        color: colors.black,
        fontFamily: 'Montserrat-Medium',
        fontSize: 14
    }
})

export default Home