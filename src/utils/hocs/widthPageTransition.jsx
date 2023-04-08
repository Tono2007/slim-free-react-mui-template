import {
	CSSTransition,
	SwitchTransition,
	TransitionGroup,
	Transition as ReactTransition,
} from 'react-transition-group';

const TIMEOUT = 500;
const transitionStyles = {
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
};

function WidthPageTransition({ children, location }) {
	return (
		<TransitionGroup style={{ position: 'relative' }}>
			<ReactTransition
				key={location}
				timeout={{
					enter: TIMEOUT,
					exit: TIMEOUT,
				}}
			>
				{(status) => (
					<div
						style={{
							...transitionStyles[status],
						}}
					>
						{children}
					</div>
				)}
			</ReactTransition>
		</TransitionGroup>
	);
}

export default WidthPageTransition;
