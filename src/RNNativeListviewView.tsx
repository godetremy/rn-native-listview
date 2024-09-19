import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { RNNativeListviewViewProps } from './RNNativeListview.types';

const NativeView: React.ComponentType<RNNativeListviewViewProps> =
  requireNativeViewManager('RNNativeListview');

export default function RNNativeListviewView(props: RNNativeListviewViewProps) {
  return <NativeView {...props} />;
}
