'use client';

import React, { useState } from 'react';
import Header from '@/app/components/Header';
import AccountDetailsScreen from './left/AccountDetailsScreen';
import WorkspaceOptionsScreen from './left/WorkspaceOptionsScreen';
import JoinCompanyScreen from './left/JoinCompanyScreen';
import CreateWorkspaceScreen from './left/CreateWorkspaceScreen';
import RequestSentScreen from './left/RequestSentScreen';
import AllSetScreen from './left/AllSetScreen';
import RightSectionScreen from './right/RightSectionScreen';

const STEPS = {
  ACCOUNT_DETAILS: 'account-details',
  WORKSPACE_OPTIONS: 'workspace-options',
  JOIN_COMPANY: 'join-company',
  CREATE_WORKSPACE: 'create-workspace',
  REQUEST_SENT: 'request-sent',
  ALL_SET: 'all-set',
};

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.ACCOUNT_DETAILS);

  const goToWorkspaceOptions = () => setCurrentStep(STEPS.WORKSPACE_OPTIONS);
  const goToJoinCompany = () => setCurrentStep(STEPS.JOIN_COMPANY);
  const goToCreateWorkspace = () => setCurrentStep(STEPS.CREATE_WORKSPACE);
  const goToRequestSent = () => setCurrentStep(STEPS.REQUEST_SENT);
  const goToAllSet = () => setCurrentStep(STEPS.ALL_SET);
  const goBackToAccount = () => setCurrentStep(STEPS.ACCOUNT_DETAILS);

  const renderLeft = () => {
    switch (currentStep) {
      case STEPS.ACCOUNT_DETAILS:
        return <AccountDetailsScreen onContinue={goToWorkspaceOptions} />;
      case STEPS.WORKSPACE_OPTIONS:
        return (
          <WorkspaceOptionsScreen
            onBack={goBackToAccount}
            onJoinCompany={goToJoinCompany}
            onCreateWorkspace={goToCreateWorkspace}
            onUsePersonalContacts={goToAllSet}
          />
        );
      case STEPS.JOIN_COMPANY:
        return (
          <JoinCompanyScreen
            onBack={goToWorkspaceOptions}
            onRequestSent={goToRequestSent}
          />
        );
      case STEPS.CREATE_WORKSPACE:
        return (
          <CreateWorkspaceScreen
            onBack={goToWorkspaceOptions}
            onContinue={goToAllSet}
          />
        );
      case STEPS.REQUEST_SENT:
        return <RequestSentScreen onContinue={goToAllSet} />;
      case STEPS.ALL_SET:
        return <AllSetScreen />;
      default:
        return <AccountDetailsScreen onContinue={goToWorkspaceOptions} />;
    }
  };

  return (
    <div>
      <Header />
      <div className="grid md:grid-cols-2 grid-cols-1 h-[calc(100vh-63px)] relative">
        {renderLeft()}
        <RightSectionScreen currentStep={currentStep} />
      </div>
    </div>
  );
};

export default Onboarding;


