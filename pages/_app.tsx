import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import {
	StateMachineProvider,
	createStore,
	useStateMachine,
} from "little-state-machine";

createStore({});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<StateMachineProvider>
			<Component {...pageProps} />
		</StateMachineProvider>
	);
}
export default MyApp;
