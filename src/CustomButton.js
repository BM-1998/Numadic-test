import React from "react";

const CustomButton = (props) => {
	console.log(props.children);
	return <button className="details-button">{props.children}</button>;
};

export default CustomButton;
