export const getDefaultTransitionStyles = (TIMEOUT = 500) => ({
	entering: {
		position: `absolute`,
		opacity: 0,
		transform: `translateY(-20px)`,
	},
	entered: {
		transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
		opacity: 1,
		transform: `translateY(0px)`,
	},
	exiting: {
		transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
		opacity: 0,
		transform: `translateY(-20px)`,
	},
});
export const getFastExitTransitionStyles = (TIMEOUT = 500) => ({
	entering: {
		position: `absolute`,
		opacity: 0,
		transform: `translateY(-50px)`,
	},
	entered: {
		transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
		opacity: 1,
		transform: `translateY(0px)`,
	},
	exiting: {
		transition: `opacity ${TIMEOUT / 10}ms ease-in-out, transform ${
			TIMEOUT / 10
		}ms ease-in-out`,
		opacity: 0,
		transform: `translateY(-50px)`,
	},
});

export default getDefaultTransitionStyles;
