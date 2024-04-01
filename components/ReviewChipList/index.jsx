import { View, FlatList } from 'react-native';
import ReviewChip from '../ReviewChip';

const list = [
    { id: 1, name: "All", value: 0 },
    { id: 2, name: "5", value: 5 },
    { id: 3, name: "4", value: 4 },
    { id: 4, name: "3", value: 3 },
    { id: 5, name: "2", value: 2 },
    { id: 6, name: "1", value: 1 },
];

const ReviewChipList = ({onSelect, active}) => {

    return (
        <View className="my-5">
            <FlatList
                horizontal
                data={list}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View className="mx-1" key={item.id}>
                        <ReviewChip name={item.name} value={item.value} key={item.id} setActive={onSelect} active={active}/>
                    </View>
                )}
            />
        </View>
    )
}

export default ReviewChipList