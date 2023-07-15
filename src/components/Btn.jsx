import React, { useState } from "react";

const Btn = () => {
	const [num, setNum] = useState(0);
	const handleAdd = () => {
		setNum(num + 1);
	};
	const handleSub = () => {
		setNum(num - 1);
	};
	return (
		<div
			style={{
				display: "grid",
				placeItems: "center",
				height: "20rem",
				backgroundColor: "blue",
			}}
		>
			<button onClick={handleSub} style={{ display: "flex" }}>
				-
			</button>
			<div style={{ display: "flex" }}>{num}</div>
			<button onClick={handleAdd} style={{ display: "flex" }}>
				+
			</button>
		</div>
	);
};

export default Btn;
