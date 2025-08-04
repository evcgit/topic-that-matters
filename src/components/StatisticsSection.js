import React from 'react';
import {
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
	Avatar,
	LinearProgress,
	Paper,
	Divider,
} from '@mui/material';
import { Smartphone, Computer, Tv, Groups, Warning } from '@mui/icons-material';

const StatisticsSection = () => {
	const keyStatistics = [
		{
			icon: <Smartphone />,
			title: 'Mobile Usage',
			mainStat: '4.8 hours',
			description: 'Average daily smartphone usage',
			source: 'DataReportal Digital 2024',
			color: '#059669',
			trend: '+15% from 2022',
		},
		{
			icon: <Computer />,
			title: 'Work Screen Time',
			mainStat: '8.5 hours',
			description: 'Daily screen time for office workers',
			source: 'Bureau of Labor Statistics',
			color: '#dc2626',
			trend: '+25% since remote work',
		},
		{
			icon: <Tv />,
			title: 'Entertainment',
			mainStat: '3.1 hours',
			description: 'Daily TV and streaming consumption',
			source: 'Nielsen Media Research',
			color: '#7c3aed',
			trend: '+8% annually',
		},
		{
			icon: <Groups />,
			title: 'Children Usage',
			mainStat: '7.7 hours',
			description: 'Daily screen time for teens (13-18)',
			source: 'Common Sense Media',
			color: '#ea580c',
			trend: '+17% since 2019',
		},
	];

	const demographicData = [
		{ age: '2-5 years', recommended: 1, actual: 2.5, color: '#ef4444' },
		{ age: '6-12 years', recommended: 1.5, actual: 4.6, color: '#f97316' },
		{ age: '13-18 years', recommended: 2, actual: 7.7, color: '#eab308' },
		{ age: '18-34 years', recommended: 2, actual: 8.2, color: '#22c55e' },
		{ age: '35-54 years', recommended: 2, actual: 6.9, color: '#3b82f6' },
		{ age: '55+ years', recommended: 2, actual: 5.1, color: '#8b5cf6' },
	];

	const globalImpacts = [
		{
			metric: 'Digital Eye Strain Cases',
			value: '60M+',
			description: 'Americans affected annually',
			source: 'Vision Council',
			link: 'https://thevisioncouncil.org/blog/vision-council-shines-light-protecting-sight-and-health-multi-screen-era',
		},
		{
			metric: 'Sleep Quality Impact',
			value: '89%',
			description: 'Report worse sleep with evening screen use',
			source: 'Sleep Foundation',
		},
		{
			metric: 'Productivity Loss',
			value: '$650B',
			description: 'Annual economic impact from digital distraction',
			source: 'Harvard Business Review',
		},
		{
			metric: 'Healthcare Costs',
			value: '$45B',
			description: 'Screen-related health issues treatment costs',
			source: 'American Medical Association',
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
				The Numbers Don't Lie
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
				According to the <strong>Pew Research Center</strong>, screen time has
				increased dramatically across all age groups, with concerning
				implications for public health.
			</Typography>

			{/* Key Statistics */}
			<Grid container spacing={1} sx={{ mb: 6 }}>
				{keyStatistics.map((stat, index) => (
					<Grid key={index}>
						<Card
							elevation={4}
							sx={{
								height: '100%',
								background: `linear-gradient(135deg, ${stat.color}10, ${stat.color}05)`,
								border: `2px solid ${stat.color}20`,
								transition: 'all 0.3s ease',
								'&:hover': {
									transform: 'translateY(-4px)',
									boxShadow: 6,
								},
							}}
						>
							<CardContent sx={{ textAlign: 'center', p: 3 }}>
								<Avatar
									sx={{
										bgcolor: stat.color,
										width: 64,
										height: 64,
										mx: 'auto',
										mb: 2,
									}}
								>
									{stat.icon}
								</Avatar>
								<Typography
									variant="h4"
									sx={{ color: stat.color, fontWeight: 'bold', mb: 1 }}
								>
									{stat.mainStat}
								</Typography>
								<Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
									{stat.title}
								</Typography>
								<Typography
									variant="body2"
									sx={{ color: 'text.secondary', mb: 2 }}
								>
									{stat.description}
								</Typography>
								<Box
									sx={{
										bgcolor: `${stat.color}15`,
										p: 1,
										borderRadius: 1,
										mb: 1,
									}}
								>
									<Typography
										variant="caption"
										sx={{ color: stat.color, fontWeight: 'bold' }}
									>
										{stat.trend}
									</Typography>
								</Box>
								<Typography variant="caption" sx={{ color: 'text.secondary' }}>
									— {stat.source}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>

			{/* Age Demographics Comparison */}
			<Paper elevation={3} sx={{ p: 4, mb: 6 }}>
				<Typography
					variant="h4"
					sx={{ textAlign: 'center', mb: 1, fontWeight: 'bold' }}
				>
					Recommended vs. Actual Screen Time by Age
				</Typography>
				<Typography
					variant="body1"
					sx={{
						textAlign: 'center',
						mb: 4,
						color: 'text.secondary',
						fontStyle: 'italic',
					}}
				>
					According to the <strong>American Academy of Pediatrics</strong> and
					<strong> World Health Organization</strong> guidelines
				</Typography>

				<Grid container spacing={3}>
					{demographicData.map((data, index) => (
						<Grid item xs={12} md={4} key={index}>
							<Box sx={{ mb: 3 }}>
								<Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
									Age {data.age}
								</Typography>

								<Box sx={{ mb: 2 }}>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
											mb: 1,
										}}
									>
										<Typography variant="body2">Recommended</Typography>
										<Typography variant="body2" sx={{ fontWeight: 'bold' }}>
											{data.recommended}h
										</Typography>
									</Box>
									<LinearProgress
										variant="determinate"
										value={(data.recommended / 10) * 100}
										sx={{
											height: 8,
											borderRadius: 4,
											bgcolor: 'grey.200',
											'& .MuiLinearProgress-bar': {
												bgcolor: 'success.main',
												borderRadius: 4,
											},
										}}
									/>
								</Box>

								<Box sx={{ mb: 2 }}>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
											mb: 1,
										}}
									>
										<Typography variant="body2">Actual Usage</Typography>
										<Typography
											variant="body2"
											sx={{ fontWeight: 'bold', color: data.color }}
										>
											{data.actual}h
										</Typography>
									</Box>
									<LinearProgress
										variant="determinate"
										value={(data.actual / 10) * 100}
										sx={{
											height: 8,
											borderRadius: 4,
											bgcolor: 'grey.200',
											'& .MuiLinearProgress-bar': {
												bgcolor: data.color,
												borderRadius: 4,
											},
										}}
									/>
								</Box>

								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										p: 1,
										bgcolor: `${data.color}15`,
										borderRadius: 1,
									}}
								>
									<Warning sx={{ color: data.color, mr: 1, fontSize: 20 }} />
									<Typography
										variant="body2"
										sx={{ color: data.color, fontWeight: 'bold' }}
									>
										{((data.actual / data.recommended - 1) * 100).toFixed(0)}%
										over limit
									</Typography>
								</Box>
							</Box>
						</Grid>
					))}
				</Grid>
			</Paper>

			{/* Global Impact Statistics */}
			{/* <Typography
				variant="h4"
				sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}
			>
				Global Health & Economic Impact
			</Typography>

			<Grid container spacing={3}>
				{globalImpacts.map((impact, index) => (
					<Grid item xs={12} sm={6} md={3} key={index}>
						<Paper
							elevation={3}
							sx={{
								p: 3,
								textAlign: 'center',
								height: '100%',
								transition: 'all 0.3s ease',
								'&:hover': {
									transform: 'scale(1.02)',
									boxShadow: 6,
								},
							}}
						>
							<Typography
								variant="h3"
								sx={{
									color: 'error.main',
									fontWeight: 'bold',
									mb: 1,
								}}
							>
								{impact.value}
							</Typography>
							<Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
								{impact.metric}
							</Typography>
							<Divider sx={{ my: 2 }} />
							<Typography
								variant="body2"
								sx={{ color: 'text.secondary', mb: 2 }}
							>
								{impact.description}
							</Typography>
							<Typography
								variant="caption"
								sx={{ color: 'text.secondary', fontWeight: 'bold' }}
							>
								— {impact.source}
							</Typography>
						</Paper>
					</Grid>
				))}
			</Grid> */}
		</Box>
	);
};

export default StatisticsSection;
