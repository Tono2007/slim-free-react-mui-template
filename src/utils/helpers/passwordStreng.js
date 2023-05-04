/* eslint-disable prefer-regex-literals */
/**
 * Password validator for login pages
 */
import palette from '@/utils/theme/palette';

// has number
const hasNumber = (number) => /[0-9]/.test(number);

// has mix of small and capitals
const hasMixed = (number) => /[a-z]/.test(number) && /[A-Z]/.test(number);

// has special chars
const hasSpecial = (number) => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

// set color based on password strength
export const strengthColor = (count) => {
	if (count < 2) return { label: 'Poor', color: palette.error.main };
	if (count < 3) return { label: 'Weak', color: palette.warning.main };
	if (count < 4) return { label: 'Normal', color: palette.warning.dark };
	if (count < 5) return { label: 'Good', color: palette.success.main };
	if (count < 6) return { label: 'Strong', color: palette.success.dark };
	return { label: 'Poor', color: palette.error.main };
};

// password strength indicator
export const strengthIndicator = (number) => {
	let strengths = 0;
	if (number.length > 5) strengths += 1;
	if (number.length > 7) strengths += 1;
	if (hasNumber(number)) strengths += 1;
	if (hasSpecial(number)) strengths += 1;
	if (hasMixed(number)) strengths += 1;
	return strengths;
};
