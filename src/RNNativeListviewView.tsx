import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

import { RNNativeListviewProps } from "./RNNativeListview.types";

const NativeView: React.ComponentType<RNNativeListviewProps> =
  requireNativeViewManager("RNNativeListview");

export default function NativeListview(props: RNNativeListviewProps) {
  return <NativeView {...props} />;
}
