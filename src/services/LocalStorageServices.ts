import AsyncStorage from '@react-native-async-storage/async-storage';

const appKey = `@DOC_01_`;

export async function setItem(key: string, value: any) {
  await AsyncStorage.setItem(`${appKey}${key}`, JSON.stringify(value));
}

export async function getItem(value: any): Promise<string | null> {
  let data = await AsyncStorage.getItem(`${appKey}${value}`);
  if (data) {
    data = await JSON.parse(data);
  }
  return data;
}