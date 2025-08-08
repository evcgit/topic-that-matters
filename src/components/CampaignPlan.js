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
	Chip,
} from '@mui/material';

const CampaignPlan = () => {
	const weeks = [
		{
			theme: 'Week 1 — Screen Time & Sleep',
			deliverables: [
				'Short video: How blue light affects melatonin (signal phrase + source link)',
				'Infographic: Sleep hygiene + “digital sunset” tips',
				'Email spotlight: 3 actionable bedtime changes',
			],
		},
		{
			theme: 'Week 2 — Cognitive Effects',
			deliverables: [
				'Short video: Unconscious vs. intentional use',
				'Infographic: Attention, memory, overload',
				'Email spotlight: Focus blocks and boredom tolerance',
			],
		},
		{
			theme: 'Week 3 — Reclaiming Attention',
			deliverables: [
				'Short video: Habit loops and notifications',
				'Infographic: App settings to reduce interrupts',
				'Email spotlight: 20-20-20 + movement break routine',
			],
		},
		{
			theme: 'Week 4 — Forming New Habits',
			deliverables: [
				'Short video: Tiny habits and accountability',
				'Infographic: Screen-free zones and routines',
				'Email spotlight: 2-week micro-challenge + template',
			],
		},
	];

	const partners = [
		'Student clubs (distribution & events)',
		'Student support centers (counseling, wellness)',
		'Communications department (production support)',
	];

	return (
		<Box sx={{ py: 6 }}>
			<Typography
				variant="h2"
				sx={{ textAlign: 'center', mb: 2, fontWeight: 800 }}
			>
				Campaign Plan
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
				A practical, four-week rollout using existing campus channels. Each week
				combines data-backed messaging with specific actions students can take.
			</Typography>

			<Grid container spacing={2} sx={{ maxWidth: 1100, mx: 'auto', mb: 2 }}>
				{weeks.map((week, idx) => (
					<Grid key={idx} item xs={12} md={6}>
						<Card elevation={3}>
							<CardContent sx={{ p: 3 }}>
								<Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
									{week.theme}
								</Typography>
								<List dense>
									{week.deliverables.map((d, i) => (
										<ListItem key={i} sx={{ pl: 0 }}>
											<ListItemText primary={d} />
										</ListItem>
									))}
								</List>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>

			<Card elevation={2} sx={{ maxWidth: 1100, mx: 'auto' }}>
				<CardContent sx={{ p: 3 }}>
					<Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>
						Distribution & Support
					</Typography>
					<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
						{partners.map((p, i) => (
							<Chip key={i} label={p} variant="outlined" color="primary" />
						))}
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
};

export default CampaignPlan;
