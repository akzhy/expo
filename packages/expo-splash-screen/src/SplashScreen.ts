import { UnavailabilityError } from '@unimodules/core';

import ExpoSplashScreen from './ExpoSplashScreen';

/**
 * Makes the native splash screen stay visible until `SplashScreen.hideAsync()` is called.
 * It has to be celled before any view is rendered.
 *
 * @example
 * ```typescript
 * // top level component
 *
 * SplashScreen.preventAutoHideAsync()
 *  .catch(error => console.log(`SplashScreen.preventAutoHideAsync error: ${error}`));
 *
 * class App extends React.Component {
 *   ...
 *   // Hide SplashScreen once your app content is ready to be displayed.
 *   SplashScreen.hideAsync()
 *    .catch(error => console.log(`SplashScreen.hideAsync error: ${error}`));
 *   ...
 * }
 * ```
 */
export async function preventAutoHideAsync() {
  if (!ExpoSplashScreen.preventAutoHideAsync) {
    throw new UnavailabilityError('expo-splash-screen', 'preventAutoHideAsync');
  }
  return await ExpoSplashScreen.preventAutoHideAsync();
}

export async function hideAsync() {
  if (!ExpoSplashScreen.hideAsync) {
    throw new UnavailabilityError('expo-splash-screen', 'hideAsync');
  }
  return await ExpoSplashScreen.hideAsync();
}

/**
 * @deprecated
 */
export function hide() {
  console.warn('SplashScreen.hide() is deprecated in favour of SplashScreen.hideAsync()');
  return hideAsync();
}

/**
 * @deprecated
 */
export function preventAutoHide() {
  console.warn(
    'SplashScreen.preventAutoHide() is deprecated in favour of SplashScreen.preventAutoHideAsync()'
  );
  return preventAutoHideAsync();
}
