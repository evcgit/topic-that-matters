import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';

const ProposalHero = () => {
	return (
		<Box
			sx={{
				minHeight: '70vh',
				background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
				display: 'flex',
				alignItems: 'center',
				color: 'white',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={4} alignItems="center">
					<Grid item xs={12} md={8}>
						<Typography
							variant="h2"
							sx={{
								fontWeight: 800,
								mb: 2,
								textShadow: '2px 2px 4px rgba(0,0,0,0.25)',
							}}
						>
							Digital Awareness Campaign Proposal
						</Typography>
						<Typography
							variant="h5"
							sx={{ opacity: 0.95, mb: 3, lineHeight: 1.6 }}
						>
							Helping Utah Valley University students reduce unconscious screen
							use to improve focus, sleep quality, and long-term cognitive
							health.
						</Typography>

						<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
							<Chip
								label="Audience: Sponsor"
								color="default"
								sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white' }}
							/>
							<Chip
								label="Purpose: Approve/Support Project"
								sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white' }}
							/>
							<Chip
								label="Medium: 4-week campus campaign"
								sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white' }}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper
							elevation={6}
							sx={{
								p: 3,
								backgroundColor: 'rgba(255, 255, 255, 0.12)',
								backdropFilter: 'blur(10px)',
								border: '1px solid rgba(255, 255, 255, 0.25)',
							}}
						>
							<Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
								Project Snapshot
							</Typography>
							<Typography variant="body2" sx={{ mb: 1 }}>
								- 4-week themed campaign (sleep, cognition, attention, habits)
							</Typography>
							<Typography variant="body2" sx={{ mb: 1 }}>
								- Deliverables: short videos, infographics, email spotlights
							</Typography>
							<Typography variant="body2">
								- Measurement: pre/post survey on awareness, screen time,
								wellbeing
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Container>

			<Box
				sx={{
					position: 'absolute',
					bottom: -60,
					right: -60,
					width: 220,
					height: 220,
					borderRadius: '50%',
					backgroundColor: 'rgba(255, 255, 255, 0.1)',
					zIndex: 0,
				}}
			/>
		</Box>
	);
};

export default ProposalHero;
