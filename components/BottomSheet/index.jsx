import { View } from 'react-native';
import React, { forwardRef, useMemo, useCallback } from 'react';
import GorhomeBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';

const BottomSheet = forwardRef((props, ref) => {
	const snapPoints = useMemo(() => ['50%', '70%', '80%'], []);

	const initialIndex = props.initialIndex !== undefined ? props.initialIndex : -1;

	const renderBackdrop = useCallback(
		(props) => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={1}
				appearsOnIndex={2}
			/>
		),
		[]
	);

	return (
		<Portal>
			<GorhomeBottomSheet
				ref={ref}
				index={initialIndex}
				snapPoints={snapPoints}
				enablePanDownToClose={true}
				handleIndicatorStyle={{ backgroundColor: '#ccc' }}
				keyboardBehavior="fillParent"
				backdropComponent={renderBackdrop}
				backgroundStyle={{ backgroundColor: '#fbfbfb' }}
			>
				<View className='flex bg-white flex-1'>
					{props.children}
				</View>
			</GorhomeBottomSheet>
		</Portal>
	);
});


export default BottomSheet;