import { createContext, useContext, useMemo, useState } from 'react';

const signupContext = createContext();
function useSignupData() {
	const context = useContext(signupContext);
	return context;
}

function UserProvider({ children }) {
	const [activeStep, setActiveStep] = useState(0);
	const [userType, setUserType] = useState('');

	const signupContextValue = useMemo(
		() => ({
			activeStep,
			setActiveStep,
			userType,
			setUserType,
		}),
		[activeStep, userType],
	);

	return <signupContext.Provider value={signupContextValue}>{children}</signupContext.Provider>;
}

export { UserProvider, useSignupData, signupContext };
