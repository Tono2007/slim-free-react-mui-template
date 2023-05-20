import { useState, useEffect } from 'react';

function useIntervalCounter({
	initialValue = 0,
	min = 0,
	max = 1000,
	time = 3000,
	interval = true,
	repeat = true,
	type = 'increment',
}) {
	const [count, setCounter] = useState(initialValue);
	useEffect(() => {
		if (count < min) {
			setCounter(repeat ? max : min);
		}
		if (count >= max) {
			setCounter(repeat ? min : max);
		}
	}, [count, max, min]);

	useEffect(() => {
		const sliderInterval = setInterval(() => {
			setCounter(type === 'increment' ? count + 1 : count - 1);
		}, time);

		if (!interval) clearInterval(sliderInterval);

		return () => clearInterval(sliderInterval);
	}, [count]);

	return { count, setCounter };
}
export default useIntervalCounter;
