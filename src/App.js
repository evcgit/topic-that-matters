import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material';

// Import components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Week1 from './components/Week1';
import Week2 from './components/Week2';
import Week3 from './components/Week3';
import Week4 from './components/Week4';
import WorksCited from './components/WorksCited';

// Create a custom theme
const theme = createTheme({
	palette: {
		primary: {
			main: '#2196f3',
		},
		secondary: {
			main: '#ff9800',
		},
		background: {
			default: '#f5f5f5',
		},
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		h2: {
			fontWeight: 700,
			fontSize: '2.5rem',
			marginBottom: '1rem',
		},
		h3: {
			fontWeight: 600,
			fontSize: '2rem',
			marginBottom: '0.75rem',
		},
		h4: {
			fontWeight: 600,
			fontSize: '1.5rem',
			marginBottom: '0.5rem',
		},
	},
});

function App() {
	const [route, setRoute] = useState(
		typeof window !== 'undefined' && window.location.hash
			? window.location.hash
			: '#/'
	);

	useEffect(() => {
		const onHashChange = () => {
			setRoute(window.location.hash || '#/');
		};
		window.addEventListener('hashchange', onHashChange);
		return () => window.removeEventListener('hashchange', onHashChange);
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
				<NavBar />
				<Container maxWidth="lg">
					<Box sx={{ py: 4 }}>
						{route === '#/' && <Home />}
						{route === '#/week-1' && <Week1 />}
						{route === '#/week-2' && <Week2 />}
						{route === '#/week-3' && <Week3 />}
						{route === '#/week-4' && <Week4 />}
						{route === '#/sources' && <WorksCited />}
					</Box>
				</Container>
			</Box>
		</ThemeProvider>
	);
}

export default App;
