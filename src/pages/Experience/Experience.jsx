import Experiences from './components/experiences'

function About() {
	return(
		<div className="pageWrapper">
			<div className="page page-about">
				<div className="full-resume">
					<a href={'https://drive.google.com/file/d/1rK40MUJVJsD1NVkZu0tT36_87WhijiUY'}>Click Here To Download My Full Resume</a>
				</div>
				<Experiences />
			</div>
		</div>
	)
}

export default About;