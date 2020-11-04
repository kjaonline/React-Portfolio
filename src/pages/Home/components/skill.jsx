

function Skill(props){
	return(
		<div className="skill">
			<div className="skill-name">
				{props.skill}
			</div>
			<div className="proficiency">
				<div className="bar">
					<div style={{ width: `${props.confidence}` + "%" }} className="bar-inside">

					</div>
				</div>
			</div>

		</div>
	)
	
}

export default Skill;