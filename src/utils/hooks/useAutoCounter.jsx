import { useRef, useEffect, useState } from 'react';

/**
 *
 * @param {("increment" | "decrement")} ["type"] - type of function to call
 */

function useAutoCounter({ limiter, increment = 1, interval = 100, type = 'increment' }) {
	const [counter, setCounter] = useState(0);
	const intervalRef = useRef();

	const increaseNum = () => {
		setCounter((prev) => {
			if (prev === limiter) clearInterval(intervalRef.current);
			return prev < limiter ? prev + increment : limiter;
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
