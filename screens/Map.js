import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'
import { icons } from '../assets/datas/Contant'
import colors from '../assets/colors/colors'

const Map = ({navigation, route}) => {
  const { item } = route.params
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Map-picture.png")}
        style={styles.imageBackground}
      >
        <SafeAreaView>
          <View style={styles.addressContainer}>
            <Image source={icons.red_pin} style={{ width: 24, height: 24 }} />
            <Text style={styles.addressText}>745 Lincoln PI, New York</Text>
            <Text style={styles.addressText}>7 mins</Text>
          </View>
          
          <View style={styles.contactWrapper}>
            <View style={styles.courierInfoContainer}>
                <Image source={item.courier.avatar} style={{ width: 48, height: 48 }} />
                <View style={styles.courierInfoSubContainer}>
                  <View style={styles.courierInfoWrapper}>
                    <Text style={styles.courierName}>{item.courier.name}</Text>
                    <View style={styles.ratingWrapper}>
                      <Image source={icons.star} style={{ width: 16, height: 16 }} />
                      <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                  </View>
                  <Text style={styles.dishName}>{item.name}</Text>
                </View>
            </View>
            <View style={styles.interactionWrapper}>
              <TouchableOpacity
                style={{ 
                  ...styles.phoneWrapper,
                  backgroundColor: colors.primary,
                  marginRight: 8
                }}
              >
                <Text>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.phoneWrapper,
                  backgroundColor: colors.gray,
                  marginLeft: 8
                }}
              >
                <Text>Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  addressContainer: {
    marginTop: 24,
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addressText: {
    color: colors.textDark,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold'
  },
  contactWrapper: {
    backgroundColor: colors.white,
    marginTop: 460,
    paddingVertical: 32,
    paddingHorizontal: 16,
    marginHorizontal: 20,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  courierInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  courierInfoSubContainer: {
    flex: 1,
    marginLeft: 8
  },
  courierInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  courierName: {
    color: colors.textDark,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold'
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingText: {
    marginLeft: 8,
    color: colors.textDark,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold'
  },
  dishName: {
    color: '#aaa',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular'
  },
  interactionWrapper: {
    flexDirection: 'row',
    marginTop: 16
  },
  phoneWrapper: {
    flex: 1,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  }
})

export default Map