import React from 'react';
import { Box, Typography, Grid, Paper, Chip } from '@mui/material';

const ExecutiveSummary = () => {
	return (
		<Box sx={{ py: 6 }}>
			<Typography
				variant="h2"
				sx={{
					textAlign: 'center',
					mb: 2,
					fontWeight: 800,
					color: 'text.primary',
				}}
			>
				Executive Summary
			</Typography>
			<Typography
				variant="h6"
				sx={{
					textAlign: 'center',
					mb: 4,
					color: 'text.secondary',
					maxWidth: 900,
					mx: 'auto',
					lineHeight: 1.6,
				}}
			>
				This deliverable presents a focused, 4-week digital awareness campaign
				at Utah Valley University to help students recognize and reduce
				unconscious screen use. The project aligns with student wellness
				outcomes and can be executed with existing campus channels.
			</Typography>

			<Grid container spacing={2} sx={{ maxWidth: 1100, mx: 'auto' }}>
				<Grid item xs={12} md={4}>
					<Paper elevation={3} sx={{ p: 3, height: '100%' }}>
						<Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1 }}>
							Audience
						</Typography>
						<Typography variant="body1" sx={{ mb: 2 }}>
							UVU students (primary); campus sponsor and partners (secondary)
						</Typography>
						<Chip
							label="Sponsor-Focused"
							size="small"
							color="primary"
							variant="outlined"
						/>
					</Paper>
				</Grid>
				<Grid item xs={12} md={4}>
					<Paper elevation={3} sx={{ p: 3, height: '100%' }}>
						<Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1 }}>
							Purpose
						</Typography>
						<Typography variant="body1">
							Secure support to run a campus campaign that measurably improves
							sleep, focus, and awareness.
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} md={4}>
					<Paper elevation={3} sx={{ p: 3, height: '100%' }}>
						<Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1 }}>
							Why Now?
						</Typography>
						<Typography variant="body1">
							According to Kumban et al. (2025), nearly half of university
							students use smartphones more than eight hours per day—habits
							associated with lower physical activity and wellbeing.
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ExecutiveSummary;
