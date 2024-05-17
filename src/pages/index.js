import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Aradhya's Portfolio</title>
				<meta name="description" content="Aradhya's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.jpeg" />
			</Head>
			<div>
				<Hero />
				<About />
				<Skills />
				<Projects />
			</div>
		</>
	);
};

export default Home;
