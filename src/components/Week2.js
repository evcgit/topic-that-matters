import React from 'react';
import {
	Box,
	Typography,
	Container,
	Paper,
	List,
	ListItem,
	ListItemText,
	Button,
} from '@mui/material';

const Week2 = () => {
	return (
		<Box sx={{ py: 6 }}>
			<Container maxWidth="md">
				<Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
					Week 2: Cognition
				</Typography>
				<Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
					According to Sela et al. (PLoS ONE, 2022), unaware smartphone use is
					linked to lower quality of life—awareness is key. This week focuses on
					spotting autopilot and choosing intention.
				</Typography>

				<Paper elevation={3} sx={{ p: 3, mb: 3 }}>
					<Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
						Activities
					</Typography>
					<List dense>
						<ListItem>
							<ListItemText primary="Keep a tally: When did I unlock on autopilot?" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Swap one autopilot session for a 10-minute walk or stretch" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Before opening an app, say out loud: What do I need to do?" />
						</ListItem>
					</List>
				</Paper>
			</Container>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
				<Button
					variant="contained"
					color="primary"
					onClick={() => (window.location.href = '#/week-1')}
				>
					Previous
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={() => (window.location.href = '#/week-3')}
				>
					Next
				</Button>
			</Box>
		</Box>
	);
};

export default Week2;
