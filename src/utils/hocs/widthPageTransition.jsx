import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group';
import { getFastExitTransitionStyles } from '@helpers/getTransitionStyles';

const TIMEOUT = 500;
const transitionStyles = getFastExitTransitionStyles(TIMEOUT);

function WidthPageTransition({ children, location }) {
	return (
		<TransitionGroup
			style={{
				position: 'relative',
			}}
		>
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
