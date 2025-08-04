import React from 'react';
import {
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
	Avatar,
	Chip,
	LinearProgress,
	Paper,
} from '@mui/material';
import {
	VisibilityOff,
	SentimentVeryDissatisfied,
	School,
	Favorite,
	TrendingUp,
} from '@mui/icons-material';

const LongTermEffects = () => {
	const longTermImpacts = [
		{
			icon: <VisibilityOff />,
			title: 'Vision Problems',
			severity: 85,
			color: '#dc2626',
			timeframe: '2-5 years',
			description:
				'Prolonged screen exposure contributes to permanent vision changes',
			effects: [
				'Myopia (nearsightedness) development',
				'Increased risk of retinal damage',
				'Premature presbyopia',
				'Chronic dry eye syndrome',
			],
			statistic: {
				value: '41.6%',
				description: 'of Americans are myopic, doubled since 1970',
				source: 'National Eye Institute',
			},
		},
		{
			icon: <SentimentVeryDissatisfied />,
			title: 'Mental Health Issues',
			severity: 75,
			color: '#7c2d12',
			timeframe: '1-3 years',
			description:
				'Excessive screen use correlates with increased mental health problems',
			effects: [
				'Depression and anxiety disorders',
				'Social isolation and withdrawal',
				'Attention deficit problems',
				'Addictive behavioral patterns',
			],
			statistic: {
				value: '70%',
				description: 'higher depression risk with 7+ hours daily screen time',
				source: 'Preventive Medicine Journal',
			},
		},
		{
			icon: <School />,
			title: 'Cognitive Development',
			severity: 70,
			color: '#1565c0',
			timeframe: '6 months - 2 years',
			description:
				'Impact on learning, memory, and cognitive processing abilities',
			effects: [
				'Reduced reading comprehension',
				'Shortened attention spans',
				'Impaired critical thinking',
				'Decreased academic performance',
			],
			statistic: {
				value: '23%',
				description:
					'decline in deep reading skills among frequent screen users',
				source: 'UCLA Center for Digital Mental Health',
			},
		},
		{
			icon: <Favorite />,
			title: 'Physical Health',
			severity: 80,
			color: '#be185d',
			timeframe: '1-4 years',
			description:
				'Long-term physical health consequences from sedentary screen habits',
			effects: [
				'Increased obesity risk',
				'Cardiovascular problems',
				'Musculoskeletal disorders',
				'Weakened immune system',
			],
			statistic: {
				value: '2x',
				description: 'higher obesity risk with excessive screen time',
				source: 'American Journal of Preventive Medicine',
			},
		},
	];

	return (
		<Box sx={{ py: 8, bgcolor: '#f8fafc' }}>
			<Typography
				variant="h2"
				sx={{
					textAlign: 'center',
					mb: 2,
					color: 'error.main',
					fontWeight: 'bold',
				}}
			>
				Long-Term Health Consequences
			</Typography>

			<Typography
				variant="h6"
				sx={{
					textAlign: 'center',
					mb: 2,
					color: 'text.secondary',
					maxWidth: '900px',
					mx: 'auto',
					lineHeight: 1.6,
				}}
			>
				According to the <strong>World Health Organization</strong>, prolonged
				exposure to digital screens without proper breaks can lead to lasting
				health complications that may persist long after screen time is reduced.
			</Typography>

			<Paper
				elevation={2}
				sx={{
					p: 3,
					mb: 6,
					mx: 'auto',
					maxWidth: '800px',
					bgcolor: 'warning.light',
					color: 'warning.contrastText',
					textAlign: 'center',
				}}
			>
				<Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
					Critical Timeline
				</Typography>
				<Typography variant="body1">
					The <strong>American Medical Association</strong> reports that serious
					health impacts can begin manifesting within 6-12 months of excessive
					screen exposure, with permanent changes possible after 2-3 years.
				</Typography>
			</Paper>

			<Grid container spacing={2}>
				{longTermImpacts.map((impact, index) => (
					<Grid item size={{ xs: 12, md: 6 }} key={index}>
						<Card
							elevation={6}
							sx={{
								height: '100%',
								position: 'relative',
								transition: 'all 0.3s ease-in-out',
								'&:hover': {
									transform: 'translateY(-4px)',
									boxShadow: 8,
								},
								border: `2px solid ${impact.color}30`,
							}}
						>
							<Box
								sx={{
									height: 6,
									background: `linear-gradient(90deg, ${impact.color} 0%, ${impact.color}60 100%)`,
								}}
							/>

							<CardContent sx={{ p: 4 }}>
								<Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
									<Avatar
										sx={{
											bgcolor: impact.color,
											width: 60,
											height: 60,
											mr: 3,
										}}
									>
										{impact.icon}
									</Avatar>
									<Box sx={{ flex: 1 }}>
										<Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
											{impact.title}
										</Typography>
										<Chip
											label={`Timeline: ${impact.timeframe}`}
											size="small"
											sx={{ bgcolor: `${impact.color}20`, color: impact.color }}
										/>
									</Box>
								</Box>

								<Typography
									variant="body1"
									sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.6 }}
								>
									{impact.description}
								</Typography>

								<Box sx={{ mb: 3 }}>
									<Typography
										variant="subtitle2"
										sx={{ mb: 1, fontWeight: 'bold' }}
									>
										Impact Severity: {impact.severity}%
									</Typography>
									<LinearProgress
										variant="determinate"
										value={impact.severity}
										sx={{
											height: 8,
											borderRadius: 4,
											'& .MuiLinearProgress-bar': {
												bgcolor: impact.color,
												borderRadius: 4,
											},
										}}
									/>
								</Box>

								<Box sx={{ mb: 3 }}>
									<Typography
										variant="subtitle2"
										sx={{ mb: 2, fontWeight: 'bold' }}
									>
										Key Effects:
									</Typography>
									{impact.effects.map((effect, idx) => (
										<Box
											key={idx}
											sx={{
												display: 'flex',
												alignItems: 'center',
												mb: 1,
											}}
										>
											<TrendingUp
												sx={{ color: impact.color, mr: 1, fontSize: 18 }}
											/>
											<Typography variant="body2">{effect}</Typography>
										</Box>
									))}
								</Box>

								<Paper
									elevation={1}
									sx={{
										p: 2,
										bgcolor: `${impact.color}08`,
										border: `1px solid ${impact.color}20`,
									}}
								>
									<Typography
										variant="h6"
										sx={{ color: impact.color, fontWeight: 'bold', mb: 1 }}
									>
										{impact.statistic.value}
									</Typography>
									<Typography variant="body2" sx={{ mb: 1 }}>
										{impact.statistic.description}
									</Typography>
									<Typography
										variant="caption"
										sx={{ color: 'text.secondary', fontWeight: 'bold' }}
									>
										— {impact.statistic.source}
									</Typography>
								</Paper>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default LongTermEffects;
