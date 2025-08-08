import React from 'react';
import {
	Box,
	Typography,
	Container,
	Paper,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';

const Week4 = () => {
	return (
		<Box sx={{ py: 6 }}>
			<Container maxWidth="md">
				<Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
					Week 4: Forming New Habits
				</Typography>
				<Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
					Lock in one screen-free zone and one recurring detox block. Make it
					small and repeatable.
				</Typography>

				<Paper elevation={3} sx={{ p: 3, mb: 3 }}>
					<Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
						Activities
					</Typography>
					<List dense>
						<ListItem>
							<ListItemText primary="Choose a screen-free zone (bedroom table, dinner table, car)" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Schedule a weekly 2–4 hr digital detox" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Share your plan with a friend for accountability" />
						</ListItem>
					</List>
				</Paper>
			</Container>
		</Box>
	);
};

export default Week4;
