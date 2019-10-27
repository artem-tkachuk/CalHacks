import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialIconButtonsFooter from "../components/MaterialIconButtonsFooter";
​
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rect}>
                    <View style={styles.Spaceber} />
                    <MaterialHeader1 style={styles.materialHeader1} />
                    <MaterialSearchBar style={styles.materialSearchBar} />
                    <View style={styles.scrollArea}>
                        <ScrollView
                            horizontal={false}
                            contentContainerStyle={styles.scrollArea_contentContainerStyle}
                        >
                            <View style={styles.Event}>
                                <View style={styles.group}>
                                    <Text style={styles.Title}>Event Title</Text>
                                    <Text style={styles.Location}>Location</Text>
                                    <Text style={styles.Capacity}>Capacity:</Text>
                                    <Text style={styles.Description}>Detail</Text>
                                </View>
                                <MaterialButtonViolet style={styles.materialButtonViolet} />
                            </View>
                            <View style={styles.rect2}>
                                <View style={styles.rect3}>
                                    <Text style={styles.text}>Event Title</Text>
                                    <Text style={styles.text2}>Location</Text>
                                    <Text style={styles.text3}>Capacity:</Text>
                                    <Text style={styles.text4}>Detail</Text>
                                </View>
                                <MaterialButtonViolet style={styles.materialButtonViolet2} />
                            </View>
                            <View style={styles.rect4}>
                                <View style={styles.rect5}>
                                    <Text style={styles.text5}>Event Title</Text>
                                    <Text style={styles.text6}>Location</Text>
                                    <Text style={styles.text7}>Capacity:</Text>
                                    <Text style={styles.text8}>Detail</Text>
                                </View>
                                <MaterialButtonViolet style={styles.materialButtonViolet3} />
                            </View>
                            <View style={styles.rect6}>
                                <View style={styles.rect7}>
                                    <Text style={styles.text9}>Event Title</Text>
                                    <Text style={styles.text10}>Location</Text>
                                    <Text style={styles.text11}>Capacity:</Text>
                                    <Text style={styles.text12}>Detail</Text>
                                </View>
                                <MaterialButtonViolet style={styles.materialButtonViolet4} />
                            </View>
                            <View style={styles.rect8}>
                                <View style={styles.rect9}>
                                    <Text style={styles.text13}>Event Title</Text>
                                    <Text style={styles.text14}>Location</Text>
                                    <Text style={styles.text15}>Capacity:</Text>
                                    <Text style={styles.text16}>Detail</Text>
                                </View>
                                <MaterialButtonViolet style={styles.materialButtonViolet5} />
                            </View>
                        </ScrollView>
                    </View>
                    <MaterialIconButtonsFooter
                        icon1Name="home"
                        activeIconName="calendar-check"
                        style={styles.materialIconButtonsFooter}
                    />
                </View>
            </View>
        );
    }
}
​
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rect: {
        backgroundColor: "rgba(230, 230, 230,1)",
        flex: 1
    },
    Spaceber: {
        height: 35,
        backgroundColor: "rgba(230, 230, 230,1)",
        alignSelf: "stretch"
    },
    materialHeader1: {
        height: 56,
        alignSelf: "stretch"
    },
    materialSearchBar: {
        height: 56,
        alignSelf: "stretch",
        margin: 0,
        marginRight: "null"
    },
    scrollArea: {
        flex: 1,
        backgroundColor: "rgba(136,159,240,1)",
        alignSelf: "stretch"
    },
    scrollArea_contentContainerStyle: {
        width: 360,
        height: 2634
    },
    Event: {
        height: 150,
        backgroundColor: "rgba(230, 230, 230,1)",
        flexDirection: "row",
        alignSelf: "stretch",
        margin: 8,
        marginRight: 12,
        marginLeft: 12
    },
    group: {
        flex: 1,
        alignSelf: "stretch",
        marginRight: "null",
        marginLeft: "null"
    },
    Title: {
        left: 62,
        color: "rgba(13,13,13,1)",
        alignSelf: "center",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    Location: {
        color: "rgba(13,13,13,1)",
        alignSelf: "flex-start",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    Capacity: {
        color: "rgba(13,13,13,1)",
        alignSelf: "stretch",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    Description: {
        color: "rgba(13,13,13,1)",
        alignSelf: "flex-start",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    materialButtonViolet: {
        width: 100,
        height: 36,
        alignSelf: "center",
        marginRight: 8,
        marginLeft: 8
    },
    rect2: {
        height: 150,
        backgroundColor: "rgba(230, 230, 230,1)",
        flexDirection: "row",
        alignSelf: "stretch",
        margin: 8,
        marginRight: 12,
        marginLeft: 12
    },
    rect3: {
        flex: 1,
        alignSelf: "stretch",
        marginRight: "null",
        marginLeft: "null"
    },
    text: {
        left: 62,
        color: "rgba(13,13,13,1)",
        alignSelf: "center",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    text2: {
        color: "rgba(13,13,13,1)",
        alignSelf: "flex-start",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    text3: {
        color: "rgba(13,13,13,1)",
        alignSelf: "stretch",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    text4: {
        color: "rgba(13,13,13,1)",
        alignSelf: "flex-start",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    materialButtonViolet2: {
        width: 100,
        height: 36,
        alignSelf: "center",
        marginRight: 8,
        marginLeft: 8
    },
    rect4: {
        height: 150,
        backgroundColor: "rgba(230, 230, 230,1)",
        flexDirection: "row",
        alignSelf: "stretch",
        margin: 8,
        marginRight: 12,
        marginLeft: 12
    },
    rect5: {
        flex: 1,
        alignSelf: "stretch",
        marginRight: "null",
        marginLeft: "null"
    },
    text5: {
        left: 62,
        color: "rgba(13,13,13,1)",
        alignSelf: "center",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    text6: {
        color: "rgba(13,13,13,1)",
        alignSelf: "flex-start",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    text7: {
        color: "rgba(13,13,13,1)",
        alignSelf: "stretch",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    text8: {
        color: "rgba(13,13,13,1)",
        alignSelf: "flex-start",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    materialButtonViolet3: {
        width: 100,
        height: 36,
        alignSelf: "center",
        marginRight: 8,
        marginLeft: 8
    },
    rect6: {
        height: 150,
        backgroundColor: "rgba(230, 230, 230,1)",
        flexDirection: "row",
        alignSelf: "stretch",
        margin: 8,
        marginRight: 12,
        marginLeft: 12
    },
    rect7: {
        flex: 1,
        alignSelf: "stretch",
        marginRight: "null",
        marginLeft: "null"
    },
    text9: {
        left: 62,
        color: "rgba(13,13,13,1)",
        alignSelf: "center",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    text10: {
        color: "rgba(13,13,13,1)",
        alignSelf: "flex-start",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    text11: {
        color: "rgba(13,13,13,1)",
        alignSelf: "stretch",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    text12: {
        color: "rgba(13,13,13,1)",
        alignSelf: "flex-start",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    materialButtonViolet4: {
        width: 100,
        height: 36,
        alignSelf: "center",
        marginRight: 8,
        marginLeft: 8
    },
    rect8: {
        height: 150,
        backgroundColor: "rgba(230, 230, 230,1)",
        flexDirection: "row",
        alignSelf: "stretch",
        margin: 8,
        marginRight: 12,
        marginLeft: 12
    },
    rect9: {
        flex: 1,
        alignSelf: "stretch",
        marginRight: "null",
        marginLeft: "null"
    },
    text13: {
        left: 62,
        color: "rgba(13,13,13,1)",
        alignSelf: "center",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    text14: {
        color: "rgba(13,13,13,1)",
        alignSelf: "flex-start",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    text15: {
        color: "rgba(13,13,13,1)",
        alignSelf: "stretch",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    text16: {
        color: "rgba(13,13,13,1)",
        alignSelf: "flex-start",
        margin: 8,
        fontSize: 12,
        fontFamily: "roboto-regular"
    },
    materialButtonViolet5: {
        width: 100,
        height: 36,
        alignSelf: "center",
        marginRight: 8,
        marginLeft: 8
    },
    materialIconButtonsFooter: {
        width: 375,
        height: 66,
        alignSelf: "center",
        marginBottom: 0
    }
});
