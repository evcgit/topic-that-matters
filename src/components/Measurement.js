import React from 'react';
import {
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';

const Measurement = () => {
	return (
		<Box sx={{ py: 6 }}>
			<Typography
				variant="h2"
				sx={{ textAlign: 'center', mb: 2, fontWeight: 800 }}
			>
				Measurement & Success Criteria
			</Typography>
			<Typography
				variant="h6"
				sx={{
					textAlign: 'center',
					mb: 4,
					color: 'text.secondary',
					maxWidth: 900,
					mx: 'auto',
				}}
			>
				A short before-and-after survey will capture changes in awareness,
				behaviors, and self-reported wellbeing.
			</Typography>

			<Grid container spacing={2} sx={{ maxWidth: 1100, mx: 'auto' }}>
				<Grid item xs={12} md={6}>
					<Card elevation={3}>
						<CardContent sx={{ p: 3 }}>
							<Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
								Metrics
							</Typography>
							<List dense>
								<ListItem sx={{ pl: 0 }}>
									<ListItemText primary="Average daily screen time (self-reported)" />
								</ListItem>
								<ListItem sx={{ pl: 0 }}>
									<ListItemText primary="Sleep quality (Likert) and bedtime device use frequency" />
								</ListItem>
								<ListItem sx={{ pl: 0 }}>
									<ListItemText primary="Awareness of habitual vs. intentional use" />
								</ListItem>
								<ListItem sx={{ pl: 0 }}>
									<ListItemText primary="Adoption of 20-20-20, movement breaks, and screen-free zones" />
								</ListItem>
							</List>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={6}>
					<Card elevation={3}>
						<CardContent sx={{ p: 3 }}>
							<Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
								Method
							</Typography>
							<List dense>
								<ListItem sx={{ pl: 0 }}>
									<ListItemText primary="Pre-survey launch week; post-survey after Week 4" />
								</ListItem>
								<ListItem sx={{ pl: 0 }}>
									<ListItemText primary="Distribution through clubs, counseling, email, and social channels" />
								</ListItem>
								<ListItem sx={{ pl: 0 }}>
									<ListItemText primary="Optional anonymous open-text feedback for qualitative insights" />
								</ListItem>
							</List>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Measurement;
