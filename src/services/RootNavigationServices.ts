import { createNavigationContainerRef, ParamListBase } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: never, params?: never) {
  if (navigationRef.isReady()) {
    if (params) {
      navigationRef.current?.navigate(name, params);
    } else {
      navigationRef.current?.navigate(name);
    }
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.current?.goBack();
  }
}

export function resetRoute(name: never) {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.reset({
      index: 0,
      routes: [name],
    });
  }
}
