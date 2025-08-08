import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Chip } from '@mui/material';

const ProblemEvidence = () => {
	const items = [
		{
			claim:
				'Unaware, habitual phone use reduces quality of life and creates a loop of mindless consumption.',
			source: 'According to Sela et al. (PLoS ONE, 2022)',
			details:
				'Their research highlights that it’s the automatic, unintentional aspect—not just time—that drives harm.',
		},
		{
			claim:
				'Higher smartphone addiction is linked with significantly poorer sleep quality in college students.',
			source: 'According to Zhu et al. (PLoS ONE, 2024)',
			details:
				'Survey of ~4,700 students; physical exercise showed regulatory effects but did not eliminate the relationship.',
		},
		{
			claim:
				'Almost half of university students use their phones more than 8 hours per day.',
			source: 'According to Kumban et al. (IJERPH, 2025)',
			details:
				'Findings indicate constant and ingrained habits with reduced physical activity.',
		},
		{
			claim:
				'Campus therapists report rising difficulty helping families manage screen habits.',
			source: 'According to therapist Amberly Bateman (Interview, Aug 2025)',
			details:
				'“Kids don’t know how to be bored anymore,” leading to challenges in attention and development.',
		},
	];

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
				The Problem, Briefly
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
				Statements without evidence are opinion. Below, key claims are backed by
				peer-reviewed studies and expert insight.
			</Typography>

			<Grid container spacing={2} sx={{ maxWidth: 1100, mx: 'auto' }}>
				{items.map((item, idx) => (
					<Grid item xs={12} md={6} key={idx}>
						<Card elevation={3} sx={{ height: '100%' }}>
							<CardContent sx={{ p: 3 }}>
								<Chip
									label="Evidence"
									color="primary"
									size="small"
									sx={{ mb: 1 }}
								/>
								<Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
									{item.claim}
								</Typography>
								<Typography
									variant="body2"
									sx={{ color: 'text.secondary', mb: 1 }}
								>
									{item.details}
								</Typography>
								<Typography variant="caption" sx={{ fontWeight: 700 }}>
									{item.source}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ProblemEvidence;
