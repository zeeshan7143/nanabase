'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import SignInScreen from './left/SignInScreen';
import RightSectionScreen from './right/RightSectionScreen';
import CheckEmailScreen from './left/CheckEmailScreen';
import LinkExpiredScreen from './left/LinkExpiredScreen';
import SessionExpiredScreen from './left/SessionExpiredScreen';
import AlreadyUsedScreen from './left/AlreadyUsedScreen';

const Login = () => {
  const [currentScreen, setCurrentScreen] = useState('signin');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (currentScreen === 'checkEmail') {
      const timer = setTimeout(() => {
        setCurrentScreen('linkExpired');
      }, 30000); // 10 seconds for testing
      return () => clearTimeout(timer);
    }
    if (currentScreen === 'linkExpired') {
      const timer = setTimeout(() => {
        setCurrentScreen('linkAlreadyUsed');
      }, 3000); // 3 seconds for testing
      return () => clearTimeout(timer);
    }
    if (currentScreen === 'linkAlreadyUsed') {
      const timer = setTimeout(() => {
        setCurrentScreen('sessionExpired');
      }, 3000); // 3 seconds for testing
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleEmailSubmit = (emailAddress) => {
    setEmail(emailAddress);
    setCurrentScreen('checkEmail');
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleResend = () => {
    setCurrentScreen('linkExpired');
  };

  const handleUseDifferentEmail = () => {
    setCurrentScreen('signin');
  };

  const handleBackToLogin = () => {
    setCurrentScreen('signin');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'signin':
        return (
          <>
            <Header />
            <div className="grid md:grid-cols-2 grid-cols-1 h-[calc(100vh-63px)]">
              <SignInScreen
                onEmailSubmit={handleEmailSubmit}
                onGoogleLogin={handleGoogleLogin}
              />
              <RightSectionScreen
                currentScreen={currentScreen}
              />
            </div>
          </>
        );
      case 'checkEmail':
        return (
          <>
            <Header />
            <div className="grid md:grid-cols-2 grid-cols-1 h-[calc(100vh-63px)]">
              <CheckEmailScreen
                email={email}
                onResend={handleResend}
                onUseDifferentEmail={handleUseDifferentEmail}
              />
              <RightSectionScreen
                currentScreen={currentScreen}
              />
            </div>
          </>
        );
      case 'linkExpired':
        return (
          <>
            <Header />
            <div className="grid md:grid-cols-2 grid-cols-1 h-[calc(100vh-63px)]">
              <LinkExpiredScreen onBackToLogin={handleBackToLogin} />
              <RightSectionScreen
                currentScreen={currentScreen}
              />
            </div>
          </>
        );
      case 'linkAlreadyUsed':
        return (
          <>
            <Header />
            <div className="grid md:grid-cols-2 grid-cols-1 h-[calc(100vh-63px)]">
              <AlreadyUsedScreen onBackToLogin={handleBackToLogin} />
              <RightSectionScreen
                currentScreen={currentScreen}
              />
            </div>
          </>
        );
      case 'sessionExpired':
        return (
          <>
            <Header />
            <div className="grid md:grid-cols-2 grid-cols-1 h-[calc(100vh-63px)]">
              <SessionExpiredScreen onBackToLogin={handleBackToLogin} />
              <RightSectionScreen
                currentScreen={currentScreen}
              />
            </div>
          </>
        );
      default:
        return (
          <>
            <Header />
            <div className="grid md:grid-cols-2 grid-cols-1 h-[calc(100vh-63px)]">
              <SignInScreen
                onEmailSubmit={handleEmailSubmit}
                onGoogleLogin={handleGoogleLogin}
              />
              <RightSectionScreen
                currentScreen={currentScreen}
              />
            </div>
          </>
        );
    }
  };

  return (
    <div>
      {renderScreen()}
    </div>
  );
};

export default Login;