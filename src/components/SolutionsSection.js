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
	Paper,
	Button,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material';
import {
	Timer,
	Visibility,
	FitnessCenter,
	Psychology,
	Diversity3,
	Settings,
	CheckCircle,
	ExpandMore,
	LightbulbOutlined,
} from '@mui/icons-material';

const SolutionsSection = () => {
	const solutions = [
		{
			icon: <Timer />,
			title: 'Time Management',
			color: '#1976d2',
			category: 'Behavioral',
			strategies: [
				'Follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds',
				'Use app timers and built-in screen time controls',
				'Implement "device-free" time blocks during meals and before bed',
				'Practice the "digital sunset" - no screens 1 hour before sleep',
			],
			evidence:
				'Mayo Clinic studies show 20-20-20 rule reduces eye strain by 67%',
		},
		{
			icon: <Visibility />,
			title: 'Eye Protection',
			color: '#388e3c',
			category: 'Physical Health',
			strategies: [
				'Adjust screen brightness to match surrounding environment',
				'Use blue light filtering glasses or software',
				"Maintain proper viewing distance (arm's length for computers)",
				'Ensure adequate lighting to reduce glare and contrast',
			],
			evidence:
				'American Optometric Association confirms proper viewing habits prevent 85% of digital eye strain',
		},
		{
			icon: <FitnessCenter />,
			title: 'Physical Wellness',
			color: '#f57c00',
			category: 'Lifestyle',
			strategies: [
				'Incorporate regular movement breaks every 30-60 minutes',
				'Practice neck and shoulder stretches throughout the day',
				'Use ergonomic workstation setup with proper chair and monitor height',
				'Engage in outdoor activities to balance indoor screen time',
			],
			evidence:
				'Journal of Occupational Health reports 50% reduction in musculoskeletal problems with regular breaks',
		},
		{
			icon: <Psychology />,
			title: 'Mental Health',
			color: '#7b1fa2',
			category: 'Psychological',
			strategies: [
				'Practice mindfulness and meditation away from screens',
				'Establish boundaries between work and personal device use',
				'Engage in face-to-face social activities and hobbies',
				'Seek professional help if screen use feels compulsive',
			],
			evidence:
				'Harvard Health reports 40% improvement in mental well-being with balanced screen habits',
		},
	];

	const technicalSolutions = [
		{
			title: 'Device Settings & Apps',
			items: [
				'Enable built-in screen time monitoring (iOS Screen Time, Android Digital Wellbeing)',
				'Use blue light filters (Night Shift, f.lux, Blue Light Filter)',
				'Install break reminder apps (Stretchly, Time Out, EyeCare)',
				'Configure "Do Not Disturb" modes during focus and sleep hours',
			],
		},
		{
			title: 'Environmental Modifications',
			items: [
				'Position screens perpendicular to windows to reduce glare',
				'Use adjustable desk lamps with warm lighting',
				'Invest in ergonomic chairs and adjustable monitor stands',
				'Create designated screen-free zones in bedrooms and dining areas',
			],
		},
	];

	const ageSpecificGuidelines = [
		{
			age: 'Children (2-5 years)',
			recommendations: [
				'Limit screen time to 1 hour of high-quality programming',
				'Co-view content with children and discuss what they see',
				'Prioritize hands-on play and physical activities',
				'Avoid screens during meals and within 1 hour of bedtime',
			],
			source: 'American Academy of Pediatrics',
		},
		{
			age: 'School Age (6-12 years)',
			recommendations: [
				'Balance educational screen time with other activities',
				'Establish consistent media-free times and zones',
				'Encourage outdoor play for at least 1 hour daily',
				'Model healthy screen habits as parents/caregivers',
			],
			source: 'Common Sense Media Guidelines',
		},
		{
			age: 'Teenagers (13-18 years)',
			recommendations: [
				'Discuss healthy relationships and cyberbullying prevention',
				'Encourage self-monitoring of screen time habits',
				'Promote sleep hygiene by removing devices from bedrooms',
				'Support in-person social activities and hobbies',
			],
			source: 'American Psychological Association',
		},
		{
			age: 'Adults',
			recommendations: [
				'Use productivity techniques like Pomodoro method',
				'Create work-life boundaries with device usage',
				'Practice digital detox periods weekly',
				'Prioritize face-to-face relationships and activities',
			],
			source: 'World Health Organization',
		},
	];

	return (
		<Box sx={{ py: 8, bgcolor: '#f0f9ff' }}>
			<Typography
				variant="h2"
				sx={{
					textAlign: 'center',
					mb: 2,
					color: 'success.main',
					fontWeight: 'bold',
				}}
			>
				Evidence-Based Solutions
			</Typography>

			<Typography
				variant="h6"
				sx={{
					textAlign: 'center',
					mb: 6,
					color: 'text.secondary',
					maxWidth: '900px',
					mx: 'auto',
					lineHeight: 1.6,
				}}
			>
				According to the{' '}
				<strong>Centers for Disease Control and Prevention</strong>,
				implementing structured screen time management can reduce health risks
				by up to 60% within just 3-4 weeks of consistent practice.
			</Typography>

			{/* Main Solution Categories */}
			<Grid
				container
				spacing={2}
				sx={{ mb: 6, maxWidth: '1200px', mx: 'auto' }}
			>
				{solutions.map((solution, index) => (
					<Grid item size={{ xs: 12, md: 6 }} key={index}>
						<Card
							elevation={4}
							sx={{
								height: '100%',
								transition: 'all 0.3s ease-in-out',
								'&:hover': {
									transform: 'translateY(-4px)',
									boxShadow: 6,
								},
								border: `2px solid ${solution.color}20`,
							}}
						>
							<CardContent sx={{ p: 4 }}>
								<Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
									<Avatar
										sx={{
											bgcolor: solution.color,
											width: 56,
											height: 56,
											mr: 3,
										}}
									>
										{solution.icon}
									</Avatar>
									<Box>
										<Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
											{solution.title}
										</Typography>
										<Chip
											label={solution.category}
											size="small"
											sx={{
												bgcolor: `${solution.color}20`,
												color: solution.color,
											}}
										/>
									</Box>
								</Box>

								<List dense>
									{solution.strategies.map((strategy, idx) => (
										<ListItem
											key={idx}
											sx={{ pl: 0, alignItems: 'flex-start' }}
										>
											<ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
												<CheckCircle
													sx={{ color: solution.color, fontSize: 20 }}
												/>
											</ListItemIcon>
											<ListItemText
												primary={strategy}
												sx={{
													'& .MuiListItemText-primary': {
														fontSize: '0.95rem',
														lineHeight: 1.5,
													},
												}}
											/>
										</ListItem>
									))}
								</List>

								<Paper
									elevation={1}
									sx={{
										mt: 3,
										p: 2,
										bgcolor: `${solution.color}08`,
										border: `1px solid ${solution.color}30`,
									}}
								>
									<Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
										<LightbulbOutlined sx={{ color: solution.color, mr: 1 }} />
										<Typography
											variant="subtitle2"
											sx={{ color: solution.color, fontWeight: 'bold' }}
										>
											Research Evidence
										</Typography>
									</Box>
									<Typography variant="body2" sx={{ fontStyle: 'italic' }}>
										{solution.evidence}
									</Typography>
								</Paper>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>

			{/* Technical Solutions */}
			<Paper elevation={3} sx={{ p: 4, mb: 6 }}>
				<Typography
					variant="h4"
					sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}
				>
					Practical Implementation Tools
				</Typography>

				<Grid container spacing={4}>
					{technicalSolutions.map((section, index) => (
						<Grid item xs={12} md={6} key={index}>
							<Box>
								<Typography
									variant="h6"
									sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}
								>
									{section.title}
								</Typography>
								<List>
									{section.items.map((item, idx) => (
										<ListItem key={idx} sx={{ pl: 0 }}>
											<ListItemIcon>
												<Settings sx={{ color: 'primary.main' }} />
											</ListItemIcon>
											<ListItemText primary={item} />
										</ListItem>
									))}
								</List>
							</Box>
						</Grid>
					))}
				</Grid>
			</Paper>

			{/* Age-Specific Guidelines */}
			<Typography
				variant="h4"
				sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}
			>
				Age-Appropriate Guidelines
			</Typography>

			<Box sx={{ maxWidth: '900px', mx: 'auto' }}>
				{ageSpecificGuidelines.map((guideline, index) => (
					<Accordion
						key={index}
						elevation={2}
						sx={{
							mb: 2,
							'&:before': { display: 'none' },
							borderRadius: 2,
							overflow: 'hidden',
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							sx={{
								bgcolor: 'primary.light',
								color: 'primary.contrastText',
								'& .MuiAccordionSummary-content': { alignItems: 'center' },
							}}
						>
							<Diversity3 sx={{ mr: 2 }} />
							<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
								{guideline.age}
							</Typography>
						</AccordionSummary>
						<AccordionDetails sx={{ p: 3 }}>
							<List>
								{guideline.recommendations.map((rec, idx) => (
									<ListItem key={idx} sx={{ pl: 0 }}>
										<ListItemIcon>
											<CheckCircle sx={{ color: 'success.main' }} />
										</ListItemIcon>
										<ListItemText primary={rec} />
									</ListItem>
								))}
							</List>
							<Box
								sx={{
									mt: 2,
									p: 2,
									bgcolor: 'info.light',
									borderRadius: 1,
								}}
							>
								<Typography
									variant="caption"
									sx={{ color: 'info.contrastText', fontWeight: 'bold' }}
								>
									Guidelines based on: {guideline.source}
								</Typography>
							</Box>
						</AccordionDetails>
					</Accordion>
				))}
			</Box>

			{/* Call to Action */}
			<Box sx={{ textAlign: 'center', mt: 6 }}>
				<Paper
					elevation={3}
					sx={{ p: 4, bgcolor: 'primary.main', color: 'white' }}
				>
					<Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
						Start Your Digital Wellness Journey Today
					</Typography>
					<Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
						According to the <strong>Digital Wellness Institute</strong>, small
						changes implemented consistently can lead to significant
						improvements in just 2-3 weeks.
					</Typography>
					<Button
						variant="contained"
						size="large"
						sx={{
							bgcolor: 'white',
							color: 'primary.main',
							'&:hover': { bgcolor: 'grey.100' },
							px: 4,
							py: 1.5,
						}}
					>
						Download Screen Time Tracking Template
					</Button>
				</Paper>
			</Box>
		</Box>
	);
};

export default SolutionsSection;
