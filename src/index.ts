import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to RNNativeListview.web.ts
// and on native platforms to RNNativeListview.ts
import {
  ChangeEventPayload,
  RNNativeListviewProps,
} from "./RNNativeListview.types";
import RNNativeListviewModule from "./RNNativeListviewModule";
import NativeListview from "./RNNativeListviewView";

// Get the native constant value.
export const PI = RNNativeListviewModule.PI;

export function hello(): string {
  return RNNativeListviewModule.hello();
}

export async function setValueAsync(value: string) {
  return await RNNativeListviewModule.setValueAsync(value);
}

const emitter = new EventEmitter(
  RNNativeListviewModule ?? NativeModulesProxy.RNNativeListview,
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void,
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export { NativeListview, RNNativeListviewProps, ChangeEventPayload };
