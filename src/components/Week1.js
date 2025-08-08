import React from 'react';
import {
	Box,
	Typography,
	Container,
	Paper,
	List,
	ListItem,
	ListItemText,
	Link,
} from '@mui/material';

const Week1 = () => {
	return (
		<Box sx={{ py: 6 }}>
			<Container maxWidth="md">
				<Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
					Week 1: Sleep & Screens
				</Typography>
				<Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
					According to Harvard Health Publishing, blue light can suppress
					melatonin and delay circadian rhythms. Try a simple “digital sunset”
					routine this week.
				</Typography>

				<Paper elevation={3} sx={{ p: 3, mb: 3 }}>
					<Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
						Activities
					</Typography>
					<List dense>
						<ListItem>
							<ListItemText primary="Turn on Night Shift / Blue light filter by 8pm" />
						</ListItem>
						<ListItem>
							<ListItemText primary="No screens for 60 minutes before sleep—3 nights this week" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Journal: How did your sleep quality feel the next morning?" />
						</ListItem>
					</List>
				</Paper>

				<Paper elevation={2} sx={{ p: 3 }}>
					<Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>
						Resources
					</Typography>
					<Typography variant="body2">
						According to Harvard Health Publishing:{' '}
						<Link
							href="https://www.health.harvard.edu/staying-healthy/blue-light-has-a-dark-side"
							target="_blank"
							rel="noreferrer"
						>
							Blue light has a dark side
						</Link>
					</Typography>
				</Paper>
			</Container>
		</Box>
	);
};

export default Week1;
