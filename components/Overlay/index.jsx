import {
    View
} from "react-native";

const Overlay = () => {
    return (
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, height: '100%', zIndex: 9999 }}>
        </View>
    )
}

export default Overlay