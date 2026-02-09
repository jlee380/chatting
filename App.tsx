
import React, { useState } from 'react';
import { Screen, Profile } from './types';
import Onboarding from './screens/Onboarding';
import SignUpVerification from './screens/SignUpVerification';
import ProfileCreation from './screens/ProfileCreation';
import MatchDiscovery from './screens/MatchDiscovery';
import MatchSuccess from './screens/MatchSuccess';
import ChatScreen from './screens/ChatScreen';
import SafetyReport from './screens/SafetyReport';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.ONBOARDING);
  const [matchedProfile, setMatchedProfile] = useState<Profile | null>(null);

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleMatch = (profile: Profile) => {
    setMatchedProfile(profile);
    navigateTo(Screen.MATCH_SUCCESS);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.ONBOARDING:
        return <Onboarding onNext={() => navigateTo(Screen.SIGNUP)} />;
      case Screen.SIGNUP:
        return (
          <SignUpVerification 
            onNext={() => navigateTo(Screen.PROFILE_CREATION)} 
            onBack={() => navigateTo(Screen.ONBOARDING)} 
          />
        );
      case Screen.PROFILE_CREATION:
        return <ProfileCreation onNext={() => navigateTo(Screen.MATCH_DISCOVERY)} />;
      case Screen.MATCH_DISCOVERY:
        return <MatchDiscovery onLike={handleMatch} onReport={() => navigateTo(Screen.SAFETY_REPORT)} />;
      case Screen.MATCH_SUCCESS:
        return (
          <MatchSuccess 
            profile={matchedProfile} 
            onStartChat={() => navigateTo(Screen.CHAT)} 
            onContinue={() => navigateTo(Screen.MATCH_DISCOVERY)} 
          />
        );
      case Screen.CHAT:
        return (
          <ChatScreen 
            profile={matchedProfile} 
            onNavigateSafety={() => navigateTo(Screen.SAFETY_REPORT)} 
            onBack={() => navigateTo(Screen.MATCH_DISCOVERY)}
          />
        );
      case Screen.SAFETY_REPORT:
        return (
          <SafetyReport 
            profile={matchedProfile} 
            onActionComplete={() => navigateTo(Screen.MATCH_DISCOVERY)} 
            onBack={() => navigateTo(Screen.CHAT)}
          />
        );
      default:
        return <Onboarding onNext={() => navigateTo(Screen.SIGNUP)} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-light transition-colors duration-300">
      {renderScreen()}
    </div>
  );
};

export default App;
