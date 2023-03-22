import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import ReduxProvider from '@/redux/store';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<ReduxProvider>
			<div className="App">
				<div>
					<a
						href="https://vitejs.dev"
						target="_blank"
						rel="noreferrer"
					>
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a
						href="https://reactjs.org"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={reactLogo}
							className="logo react"
							alt="React logo"
						/>
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className="card">
					<button
						type="button"
						onClick={() => setCount((prevCount) => prevCount + 1)}
					>
						count is {count}
					</button>
					<p>
						Edit <code>src/App.jsx</code> and save to test HMR
					</p>
				</div>
				<p className="read-the-docs">
					Click on the Vite and React logos to learn more
				</p>
			</div>{' '}
		</ReduxProvider>
	);
}

export default App;
