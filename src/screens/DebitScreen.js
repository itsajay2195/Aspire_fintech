import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import React, { useState } from 'react'
import BottomTabs from '../components/common/BottomTab'
import Header from '../components/common/Header'

const Home = () => {
    const [loading, setLoading] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header showBack={false}></Header>
            </View>

            <View style={styles.debitCardTextWrapper}>
                <Text style={styles.debitCardText}>Debit Card</Text>
            </View>

            <View style={styles.debitSectionStyle}>
                <Text style={{color: COLORS.white }}>Available balance</Text>

                <View style={styles.currenyInfoWrapper}>

                    <View style={styles.currencySymbol}>
                        <Text style={styles.currencyText}>S$</Text>
                    </View>

                    <View>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>{loading ? '' : `  3,000`}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.slidingUpPanelStyle}>
                <Text> Sliding Up Panel</Text>
            </View>

            <View style={styles.bottomTabSectionStyle}>
                <BottomTabs />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBlue
    },
    debitCardTextWrapper: {
        padding: SIZES.padding,
    },
    debitCardText: {
        fontWeight: '700',
        color: COLORS.white,
        ...FONTS.h2

    },
    debitSectionStyle: {
        flex: 1,
        padding: SIZES.padding,
        backgroundColor: COLORS.primaryBlue
    },
    currenyInfoWrapper: {
        flexDirection: 'row',
        paddingTop:10
    },
    currencySymbol: {
        paddingHorizontal: 8,
        borderRadius: 5,
        backgroundColor: '#01D167',
        justifyContent: 'center'
    },
    currencyText:{
         color: COLORS.white, 
         fontSize: SIZES.font,
         fontWeight: 'bold' 
    },
    slidingUpPanelStyle: {
        flex: 2,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: SIZES.radius,
        borderTopRightRadius: SIZES.radius,

    },
    bottomTabSectionStyle: {
        justifyContent: 'flex-end'
    }

})