import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import loadable from "@loadable/component";

// lazy loading 할 컴포넌트 정의
const SplitMe = loadable(() => import("./SplitMe"), {
	fallback: <div>loading...</div>,
});

function App() {
	const [visible, setVisible] = useState(false);
	const onClick = () => {
		setVisible(true);
	};
	// 마우스 올라갔을 때 컴포넌트 프리로딩
	const onMouseOver = () => {
		SplitMe.preload();
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p onClick={onClick} onMouseOver={onMouseOver}>
					Hello React!
				</p>
				{visible && <SplitMe />}
			</header>
		</div>
	);
}

export default App;
