import { View } from 'react-native';
import React, { forwardRef, useMemo } from 'react';
import GorhomeBottomSheet  from '@gorhom/bottom-sheet';

const BottomSheet = forwardRef((props, ref) => {
	const snapPoints = useMemo(() => ['50%', '70%', '90%'], []);

    const initialIndex = props.initialIndex !== undefined ? props.initialIndex : -1;

	return (
		<GorhomeBottomSheet
			
			ref={ref}
			index={initialIndex}
			snapPoints={snapPoints}
			enablePanDownToClose={true}
			handleIndicatorStyle={{ backgroundColor: '#ccc' }}
			backgroundStyle={{ backgroundColor: '#fbfbfb' }}
		>
			<View className='flex bg-white'>
				{props.children}
			</View>
		</GorhomeBottomSheet>
	);
});


export default BottomSheet;