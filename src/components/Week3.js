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

const Week3 = () => {
	return (
		<Box sx={{ py: 6 }}>
			<Container maxWidth="md">
				<Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
					Week 3: Reclaiming Attention
				</Typography>
				<Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
					Reduce interruptions and create space for focus. Try two daily focus
					blocks with minimized notifications.
				</Typography>

				<Paper elevation={3} sx={{ p: 3, mb: 3 }}>
					<Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
						Activities
					</Typography>
					<List dense>
						<ListItem>
							<ListItemText primary="Silence non-essential notifications" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Two 45–90 minute focus blocks per day (timer on, phone away)" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Use 20-20-20 during blocks to prevent eye strain" />
						</ListItem>
					</List>
				</Paper>
			</Container>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
				<Button
					variant="contained"
					color="primary"
					onClick={() => (window.location.href = '#/week-2')}
				>
					Previous
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={() => (window.location.href = '#/week-4')}
				>
					Next
				</Button>
			</Box>
		</Box>
	);
};

export default Week3;
