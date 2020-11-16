import Experiences from './components/experiences'

function About() {
	return(
		<div className="pageWrapper">
			<div className="page page-about">
				<div className="full-resume">
					<a href={process.env.PUBLIC_URL + '/public/ResumeKrisAlcordo2020.pdf'}>Click Here To Download My Full Resume</a>
				</div>
				<Experiences />
			</div>
		</div>
	)
}

export default About;