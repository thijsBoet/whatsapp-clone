import Head from 'next/head';
import Sidebar from '../components/Sidebar';

const Home = () => {
	return (
		<div>
			<Head>
				<title>Whatsapp</title>
				<meta name='description' content='Whatsapp chat client' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Sidebar />
		</div>
	);
};

export default Home;
