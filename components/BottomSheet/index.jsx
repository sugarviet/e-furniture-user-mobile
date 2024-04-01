import { View } from 'react-native';
import React, { forwardRef, useMemo } from 'react';
import GorhomeBottomSheet from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';
const BottomSheet = forwardRef((props, ref) => {
	const snapPoints = useMemo(() => ['50%', '70%', '90%'], []);

	const initialIndex = props.initialIndex !== undefined ? props.initialIndex : -1;

	return (
		<Portal>
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
		</Portal>
	);
});


export default BottomSheet;