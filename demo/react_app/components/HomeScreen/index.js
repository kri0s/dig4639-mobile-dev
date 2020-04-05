import React from "react";
import {View, Button, Image, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    mainImage: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 60
    }
});

class HomeScreen extends React.Component {

    render() {

        const {navigate} = this.props.navigation;

        return(
            <View style={styles.mainImage}>
                <Image
                    source={require("../assets/cookee.jpeg")} />
                <Button
                        title="Order"
                        onPress={() => navigate("Order")}
                />
                <Button
                        title="Login"
                        onPress={() => navigate("Login")}
                />
            </View>
        );

    }

}