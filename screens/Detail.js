import React, {useState} from 'react'
import {
  View,
  Text,
  Button,
  SafeAreaView, 
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import AppIntroSlider from 'react-native-app-intro-slider'

import colors from '../assets/colors/colors'
import { icons } from '../assets/datas/Contant'

Feather.loadFont()

const Detail = ({ navigation, route}) => {
  const { item } = route.params
  const [numberDish, setNumberDish] = useState(0)

  const renderHeader = () => {
    return (
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name='arrow-left' size={24} />
        </TouchableOpacity>
        <View style={styles.headerTitleWrapper}>
          <Text style={styles.headerTtile}>{item.name}</Text>
        </View>
        <Feather name='menu' size={24} />
      </View>
    )
  }

  const renderDishDetail = () => {
    const renderDishItem = ({item}) => {
      return (
        <View>
          <ImageBackground
            imageStyle={styles.selectImage}
            source={item.photo}
            style={styles.selectNumberWrapper}
          >
            <View style={styles.numberDishWrapper}>
              <Feather name='minus' size={24} />
              <Text style={styles.numberDishText}>{numberDish}</Text>
              <Feather name='plus' size={24} />
            </View>
          </ImageBackground>
          <Text style={styles.dishTitle}>{item.name} - ${item.price}</Text>
          <Text style={styles.dishDescription}>{item.description}</Text>
          <View style={styles.coloriesWrapper}>
            <Image source={icons.fire} style={styles.coloriesImage} />
            <Text style={styles.coloriesText}>{item.calories} cal</Text>
          </View>
        </View>
      )
    }
    return (
      <View style={{ marginTop: 16, marginBottom: 40 }}>
        <AppIntroSlider
          data={item.menu}
          keyExtractor={(item) => item.menuId}
          renderItem={renderDishItem}
          activeDotStyle={{backgroundColor: colors.primary}}
          // showSkipButton={false}
          showNextButton={false}
          showDoneButton={false}
        />
      </View>
    )
  }

  const renderPlaceOrder = () => {
    return (
      <View style={styles.placeOrderWrapper}>
        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>4 Items in Cart</Text>
          <Text style={styles.priceText}>$46.98</Text>
        </View>

        <View style={styles.clientInfoWrapper}>
          <View style={styles.clientAddressWrapper}>
            <Image source={icons.pin} style={styles.clientInfoIcon} />
            <Text style={styles.clientInfoText}>745 Lincoln PI</Text>
          </View>
          <View style={styles.clientCreditWrapper}>
            <Image source={icons.master_card} style={styles.clientInfoIcon} />
            <Text style={styles.clientInfoText}>****5486</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => navigation.navigate('Map', {
            item: item
          })}
        >
          <Text style={styles.orderButtonText}>Order</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          {renderHeader()}
          {renderDishDetail()}
          {renderPlaceOrder()}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitleWrapper: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: colors.gray,
    borderRadius: 16
  },
  headerTtile: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.black
  },
  selectImage: {
    resizeMode: 'cover'
  },
  selectNumberWrapper: {
    flex: 1,
    height: 240,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  numberDishWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 104,
    height: 48,
    borderRadius: 16,
    paddingHorizontal: 8,
    backgroundColor: colors.white,
    marginBottom: -16,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
  },
  numberDishText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 24,
    color: colors.black
  },
  dishTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    color: colors.black,
    textAlign: 'center',
    marginTop: 24
  },
  dishDescription: {
    marginHorizontal: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    marginTop: 8
  },
  coloriesWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100
  },
  coloriesImage: {
    width: 24,
    height: 24
  },
  coloriesText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.black,
    marginLeft: 8
  },
  placeOrderWrapper: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1
  },
  priceWrapper: {
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.gray,
    borderBottomWidth: 1
  },
  priceText: {
    marginHorizontal: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: colors.black,
  },
  clientInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  clientAddressWrapper: {
    flexDirection: 'row',
    paddingVertical: 24
  },
  clientInfoIcon: {
    width: 24,
    height: 24
  },
  clientInfoText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.black,
    marginLeft: 8
  },
  clientCreditWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  orderButton: {
    backgroundColor: colors.primary,
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  orderButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: colors.white
  }
})

export default Detail