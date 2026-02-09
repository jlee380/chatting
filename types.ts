
export enum Screen {
  ONBOARDING = 'ONBOARDING',
  SIGNUP = 'SIGNUP',
  PROFILE_CREATION = 'PROFILE_CREATION',
  MATCH_DISCOVERY = 'MATCH_DISCOVERY',
  MATCH_SUCCESS = 'MATCH_SUCCESS',
  CHAT = 'CHAT',
  SAFETY_REPORT = 'SAFETY_REPORT',
}

export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  imageUrl: string;
  verified: boolean;
}

export interface Message {
  id: string;
  sender: 'me' | 'them';
  text: string;
  timestamp: string;
}
