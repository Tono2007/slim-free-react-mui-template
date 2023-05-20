import { useRef, useEffect, useState } from 'react';

/**
 *
 * @param {("increment" | "decrement")} ["type"] - type of function to call
 * @example const counter = useAutoCounter({limiter: 0,increment: -1,initialValue: 100,type: 'decrement',});
 */

function useAutoCounter({ initialValue = 0, limiter, increment = 1, interval = 100, type = 'increment' }) {
	const [counter, setCounter] = useState(initialValue);
	const intervalRef = useRef();

	const increaseNum = () => {
		setCounter((prev) => {
			if (prev === limiter) {
				clearInterval(intervalRef.current);
			}
			let stop = false;
			if (type === 'increment' && prev >= limiter) {
				stop = true;
			}
			if (type === 'decrement' && prev <= limiter) {
				stop = true;
			}

			return stop ? limiter : prev + increment;
		});
	};

	useEffect(() => {
		intervalRef.current = setInterval(increaseNum, interval);
		return () => {
			clearInterval(intervalRef.current);
		};
	}, []);

	return counter;
}

export default useAutoCounter;
