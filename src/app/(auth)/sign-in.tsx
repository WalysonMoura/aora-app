import { images } from "@/constants";
import React from "react";
import {  Image, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
return(
    <SafeAreaView>
        <ScrollView>
            <View>
                <Image source={images.logo} />
                <Text>ddhhh</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
)

}

export default SignIn