import { View } from "react-native";
import { useState } from "react";
import CartList from "../../../components/CartList";


const Cart = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={{ backgroundColor: '#000', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, height: '100%' }}>
        <CartList modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </View>
      {modalVisible &&
        <View style={{ backgroundColor: '#fdfdfd', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, height: '100%' }}>
        </View>
      }
    </>
  );
};

export default Cart;
