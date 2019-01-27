import React from 'react';

// This file exports the Input, TextArea, and FormBtn components

export function InputField(props) {
	return (
		<div className="form-group">
			<input className="form-control" {...props} />
		</div>
	);
}

export function TextArea(props) {
	return (
		<div className="form-group">
			<textarea className="form-control" rows="20" {...props} />
		</div>
	);
}

export function DropDown(props) {
	return (
    
    <div className="form-group">
    <label>Come on</label>
               <select className="form-control" {...props}>
                  <option value="select">Select</option>
                  <option value="Java">Java</option>
                  <option value="C++">C++</option>
               </select>
    </div>
	);
}

export function FormBtn(props) {
	return (
		<button {...props} className="btn btn-success">
			{props.children}
		</button>
	);
}
