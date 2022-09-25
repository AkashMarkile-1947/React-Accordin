import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
    const [showInfo, setShowInfo] = useState(false);
	// add a state variable here

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				<button className="btn" onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? "-" : "+"}
                </button>
			</header>
			{/* make this render conditionally */}
			{showInfo && <p>{info}</p>}
		</article>
	)
}

export default Question
