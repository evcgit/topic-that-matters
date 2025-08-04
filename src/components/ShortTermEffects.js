import React from 'react';
import {
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
	Avatar,
	Chip,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import {
	RemoveRedEye,
	Bedtime,
	Psychology,
	FitnessCenter,
	CheckCircle,
} from '@mui/icons-material';

const ShortTermEffects = () => {
	const effects = [
		{
			icon: <RemoveRedEye />,
			title: 'Digital Eye Strain',
			color: '#e53e3e',
			symptoms: [
				'Dry eyes and irritation',
				'Blurred or double vision',
				'Headaches and neck pain',
				'Difficulty focusing',
			],
			quote: {
				text: 'Computer Vision Syndrome affects 50-90% of computer workers',
				source: 'American Optometric Association',
			},
		},
		{
			icon: <Bedtime />,
			title: 'Sleep Disruption',
			color: '#3182ce',
			symptoms: [
				'Difficulty falling asleep',
				'Reduced sleep quality',
				'Shorter sleep duration',
				'Daytime fatigue',
			],
			quote: {
				text: 'Blue light exposure suppresses melatonin production by up to 23%',
				source: 'Harvard Health Publishing',
			},
		},
		{
			icon: <Psychology />,
			title: 'Cognitive Impact',
			color: '#805ad5',
			symptoms: [
				'Decreased attention span',
				'Reduced concentration',
				'Information overload',
				'Mental fatigue',
			],
			quote: {
				text: 'Heavy screen use can reduce attention span to just 8 seconds',
				source: 'Microsoft Attention Spans Research Study',
			},
		},
		{
			icon: <FitnessCenter />,
			title: 'Physical Effects',
			color: '#38a169',
			symptoms: [
				'Poor posture development',
				'Neck and shoulder tension',
				'Reduced physical activity',
				'Repetitive strain injuries',
			],
			quote: {
				text: 'Text neck affects 79% of the population aged 18-44',
				source: 'Journal of Physical Therapy Science',
			},
		},
	];

	return (
		<Box sx={{ py: 8 }}>
			<Typography
				variant="h2"
				sx={{
					textAlign: 'center',
					mb: 2,
					color: 'primary.main',
					fontWeight: 'bold',
				}}
			>
				Immediate Effects of Excessive Screen Time
			</Typography>

			<Typography
				variant="h6"
				sx={{
					textAlign: 'center',
					mb: 6,
					color: 'text.secondary',
					maxWidth: '800px',
					mx: 'auto',
					lineHeight: 1.6,
				}}
			>
				The effects of prolonged screen exposure manifest quickly, often within
				hours or days of excessive use. Understanding these immediate impacts is
				crucial for recognizing when intervention is needed.
			</Typography>

			<Grid container spacing={2}>
				{effects.map((effect, index) => (
					<Grid item size={{ xs: 12, md: 6 }} key={index}>
						<Card
							elevation={4}
							sx={{
								height: '100%',
								transition: 'all 0.3s ease-in-out',
								'&:hover': {
									transform: 'translateY(-8px)',
									boxShadow: 6,
								},
								border: `3px solid ${effect.color}20`,
							}}
						>
							<CardContent sx={{ p: 4 }}>
								<Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
									<Avatar
										sx={{
											bgcolor: effect.color,
											width: 56,
											height: 56,
											mr: 2,
										}}
									>
										{effect.icon}
									</Avatar>
									<Box>
										<Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
											{effect.title}
										</Typography>
										<Chip
											label="Immediate Impact"
											size="small"
											sx={{ bgcolor: `${effect.color}20`, color: effect.color }}
										/>
									</Box>
								</Box>

								<List dense>
									{effect.symptoms.map((symptom, idx) => (
										<ListItem key={idx} sx={{ pl: 0 }}>
											<ListItemIcon sx={{ minWidth: 36 }}>
												<CheckCircle
													sx={{ color: effect.color, fontSize: 20 }}
												/>
											</ListItemIcon>
											<ListItemText
												primary={symptom}
												sx={{
													'& .MuiListItemText-primary': { fontSize: '0.95rem' },
												}}
											/>
										</ListItem>
									))}
								</List>

								<Box
									sx={{
										mt: 3,
										p: 2,
										bgcolor: `${effect.color}08`,
										borderLeft: `4px solid ${effect.color}`,
										borderRadius: 1,
									}}
								>
									<Typography
										variant="body2"
										sx={{ fontStyle: 'italic', mb: 1 }}
									>
										"{effect.quote.text}"
									</Typography>
									<Typography
										variant="caption"
										sx={{ color: 'text.secondary', fontWeight: 'bold' }}
									>
										— {effect.quote.source}
									</Typography>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ShortTermEffects;
