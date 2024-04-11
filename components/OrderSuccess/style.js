import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    header: {
        backgroundColor: '#000',
        height: 208,
        overflow: 'hidden',
        position: 'absolute',
    },
    headerContent: {
        position: 'absolute',
        top: 0,
        left: 16,
        right: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    headerContentText: {
        fontSize: 30,
        color: '#fff'
    },
    headerContentDes: {
        fontSize: 16,
        color: '#fff',
        paddingTop: 10,
    },
    bottomHeader: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    wrapperBottomHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingVertical: 10,
    },
    overlay: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        opacity: 0.45,
        position: 'absolute',
        zIndex: -1
    },
    bottomHeaderText: {
        fontSize: 15,
        color: '#fff',
        opacity: 0.98
    },
    angleImg: {
        width: 25,
        height: 25,
        opacity: 0.8
    },
    bodyContent: {
        backgroundColor: '#fff',
        height: '100%',
        paddingHorizontal: 20,
        paddingBottom:70,
    },
    addressContent: {
        backgroundColor: '#f6f8fc',
        borderRadius: 8,
        paddingLeft: 15,
        paddingRight: 20,
        paddingVertical: 14,
        marginTop: 20,
    },
    addressContentName: {
        fontSize: 16,
    },
    addressContentDes: {
        fontSize: 13,
        paddingTop: 12,
    },
    codeContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
    },
    codeContentName: {
        fontSize: 14,
    },
    codeContentDes: {
        fontSize: 16,
    },
    paymentContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
    },
    paymentContentName: {
        fontSize: 14,
    },
    paymentContentDes: {
        fontSize: 16,
    },
    dateCreateContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
    },
    dateCreateContentName: {
        fontSize: 14,
    },
    dateCreateContentDes: {
        fontSize: 14,
    },
    productContent: {
        backgroundColor: '#f6f8fc',
        borderRadius: 8,
        paddingHorizontal: 22,
        paddingVertical: 22,
        marginTop: 22,
    },
    productContentName: {
        fontSize: 14,
    },
    wrapperProductContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
    },
    productName: {
        fontSize: 14,
        maxWidth: 220,
    },
    productDes: {
        fontSize: 14,
    },
    borderLine: {
        borderTopWidth: 1,
        borderColor: '#ecf0f6',
        marginTop: 22,

    },
    totalContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16,
    },
    totalContentName: {
        fontSize: 16,
    },
    totalContentDes: {
        fontSize: 16,
    },
    payButton:{
        backgroundColor:'#fea000',
        marginTop:21,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:13,
        borderRadius:5,
     },
    payText:{
        fontSize:14,
        color:'#fff',
    }, 
    closeButton:{
        backgroundColor:'#ecf0f8',
        marginTop:21,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:13,
        borderRadius:5,
     },
     closeText:{
        fontSize:14,
        color:'#000'
    },
});

export default styles;
