import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material';

// Import components
import HeroSection from './components/HeroSection';
import ShortTermEffects from './components/ShortTermEffects';
import LongTermEffects from './components/LongTermEffects';
import StatisticsSection from './components/StatisticsSection';
import SolutionsSection from './components/SolutionsSection';
import SourcesSection from './components/SourcesSection';

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
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
				<HeroSection />
				<Container maxWidth="lg">
					<Box sx={{ py: 4 }}>
						<ShortTermEffects />
						<LongTermEffects />
						<StatisticsSection />
						<SolutionsSection />
						<SourcesSection />
					</Box>
				</Container>
			</Box>
		</ThemeProvider>
	);
}

export default App;
