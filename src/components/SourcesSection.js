import React from 'react';
import {
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
	Chip,
	Link,
	Paper,
	Divider,
	Avatar,
} from '@mui/material';
import {
	School,
	LocalHospital,
	Business,
	Public,
	MenuBook,
} from '@mui/icons-material';

const SourcesSection = () => {
	const scholarlySourcesData = [
		{
			title:
				'Smartphone Addiction, Screen Time, and Physical Activity of Different Academic Majors and Study Levels in University Students',
			authors: 'Kumban, Wannisa, et al.',
			journal:
				'International Journal of Environmental Research & Public Health',
			year: '2025',
			volume: '22(2)',
			pages: '237',
			doi: '10.3390/ijerph22020237',
			type: 'Peer-Reviewed Journal',
			icon: <School />,
			color: '#1976d2',
			keyFindings: [
				'Almost half of university students use smartphones more than 8 hours daily',
				'Phone use among younger people is constant rather than occasional',
				'Strong correlation between smartphone addiction and reduced physical activity',
			],
		},
		{
			title:
				'Smartphone Use Behavior and Quality of Life: What Is the Role of Awareness?',
			authors: 'Sela, Alon, et al.',
			journal: 'PLoS ONE',
			year: '2022',
			volume: '17(3)',
			pages: 'e0260637',
			doi: '10.1371/journal.pone.0260637',
			type: 'Peer-Reviewed Journal',
			icon: <LocalHospital />,
			color: '#388e3c',
			keyFindings: [
				'Unaware smartphone use significantly reduces quality of life',
				'Automatic phone use habits hurt overall well-being',
				'Phone addiction goes beyond screen time to habitual behavior patterns',
			],
		},
		{
			title:
				'Influence of Smartphone Addiction on Sleep Quality of College Students: The Regulatory Effect of Physical Exercise Behavior',
			authors: 'Zhu, Weidong, et al.',
			journal: 'PLoS ONE',
			year: '2024',
			volume: '19(7)',
			pages: 'e0307162',
			doi: '10.1371/journal.pone.0307162',
			type: 'Peer-Reviewed Journal',
			icon: <LocalHospital />,
			color: '#7b1fa2',
			keyFindings: [
				'52% of college students reported average or very poor sleep quality',
				'Higher smartphone addiction scores directly correlated with worse sleep',
				'Study of 4,700 Chinese college students confirms smartphone addiction significantly impacts sleep quality',
			],
		},
	];

	const organizationalSources = [
		{
			organization: 'American Academy of Pediatrics',
			type: 'Medical Organization',
			icon: <LocalHospital />,
			color: '#d32f2f',
			guidelines: [
				'Media and Young Minds Policy Statement (2016)',
				'Screen Time Guidelines for Children Under 18',
				'Digital Wellness in Pediatric Practice',
			],
			website: 'https://www.aap.org',
		},
		{
			organization: 'World Health Organization',
			type: 'International Health Agency',
			icon: <Public />,
			color: '#1976d2',
			guidelines: [
				'Physical Activity Guidelines (2020)',
				'Digital Health Strategy 2020-2025',
				'Screen Time and Sedentary Behavior Guidelines',
			],
			website: 'https://www.who.int',
		},
		{
			organization: 'American Optometric Association',
			type: 'Professional Medical Organization',
			icon: <LocalHospital />,
			color: '#388e3c',
			guidelines: [
				'Computer Vision Syndrome Clinical Guidelines',
				'Digital Eye Strain Prevention Recommendations',
				'Occupational Vision Care Standards',
			],
			website: 'https://www.aoa.org',
		},
		{
			organization: 'Centers for Disease Control and Prevention',
			type: 'Federal Health Agency',
			icon: <Public />,
			color: '#f57c00',
			guidelines: [
				'Physical Activity Guidelines for Americans',
				'Childhood Obesity Prevention Strategies',
				'Digital Media and Child Development Research',
			],
			website: 'https://www.cdc.gov',
		},
	];

	const statisticalSources = [
		{
			source: 'Common Sense Media',
			study: 'The Common Sense Census: Media Use by Tweens and Teens 2021',
			data: 'Teen screen time averages 7 hours 22 minutes daily',
			methodology: 'National survey of 1,306 young people ages 8-18',
			url: 'https://www.commonsensemedia.org',
		},
		{
			source: 'DataReportal Digital 2024',
			study: 'Global Digital Overview Report',
			data: 'Average daily mobile usage: 4 hours 48 minutes',
			methodology: 'Analysis of 5.35 billion global internet users',
			url: 'https://datareportal.com',
		},
		{
			source: 'Nielsen Media Research',
			study: 'Total Audience Report Q3 2023',
			data: 'Daily TV and streaming consumption: 3.1 hours',
			methodology: 'Panel data from 40,000+ households across US',
			url: 'https://www.nielsen.com',
		},
		{
			source: 'Harvard Health Publishing',
			study: 'Blue light has a dark side',
			data: 'Blue light suppresses melatonin for twice as long as green light',
			methodology: 'Controlled laboratory studies on circadian rhythms',
			url: 'https://www.health.harvard.edu',
		},
	];

	const additionalResources = [
		{
			title: 'Digital Wellness Institute',
			description: 'Research-based resources for healthy technology use',
			url: 'https://digitalwellnessinstitute.org',
			type: 'Research Organization',
		},
		{
			title: 'Time Well Spent Movement',
			description: 'Advocacy for humane technology design',
			url: 'https://timewellspent.io',
			type: 'Advocacy Group',
		},
		{
			title: 'Screen Time Action Network',
			description: 'Parent-led organization promoting healthy screen habits',
			url: 'https://screentimenetwork.org',
			type: 'Parent Organization',
		},
		{
			title: 'Center for Humane Technology',
			description: "Research on technology's impact on society",
			url: 'https://humanetech.com',
			type: 'Technology Ethics',
		},
	];

	return (
		<Box sx={{ py: 8, bgcolor: '#fafafa' }}>
			<Typography
				variant="h2"
				sx={{
					textAlign: 'center',
					mb: 2,
					color: 'text.primary',
					fontWeight: 'bold',
				}}
			>
				Sources & References
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
				This presentation is built on evidence from peer-reviewed research,
				medical organizations, and authoritative health institutions to ensure
				accuracy and credibility of all claims made.
			</Typography>

			{/* Scholarly Sources */}
			<Typography
				variant="h4"
				sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}
			>
				<MenuBook sx={{ mr: 2, verticalAlign: 'bottom' }} />
				Peer-Reviewed Research
			</Typography>

			<Grid container spacing={3} sx={{ mb: 6 }}>
				{scholarlySourcesData.map((source, index) => (
					<Grid item xs={12} key={index}>
						<Card
							elevation={3}
							sx={{ borderLeft: `4px solid ${source.color}`, width: '100%' }}
						>
							<CardContent sx={{ p: 4 }}>
								<Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
									<Avatar
										sx={{
											bgcolor: source.color,
											width: 48,
											height: 48,
											mr: 3,
											mt: 0.5,
										}}
									>
										{source.icon}
									</Avatar>
									<Box sx={{ flex: 1 }}>
										<Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
											{source.title}
										</Typography>
										<Typography
											variant="body1"
											sx={{ mb: 1, color: 'text.secondary' }}
										>
											{source.authors} ({source.year}).{' '}
											<em>{source.journal}</em>, {source.volume}, {source.pages}
											.
										</Typography>
										<Chip
											label={source.type}
											size="small"
											sx={{
												bgcolor: `${source.color}20`,
												color: source.color,
												mb: 2,
											}}
										/>
										<Typography
											variant="body2"
											sx={{ mb: 1, fontFamily: 'monospace' }}
										>
											DOI: {source.doi}
										</Typography>
									</Box>
								</Box>

								<Box sx={{ pl: 8 }}>
									<Typography
										variant="subtitle2"
										sx={{ mb: 2, fontWeight: 'bold' }}
									>
										Key Findings Used in This Presentation:
									</Typography>
									{source.keyFindings.map((finding, idx) => (
										<Typography
											key={idx}
											variant="body2"
											sx={{
												mb: 1,
												pl: 2,
												borderLeft: '2px solid',
												borderColor: `${source.color}40`,
												color: 'text.secondary',
											}}
										>
											• {finding}
										</Typography>
									))}
								</Box>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>

			{/* Organizational Sources */}
			<Typography
				variant="h4"
				sx={{ mb: 4, fontWeight: 'bold', color: 'success.main' }}
			>
				<Public sx={{ mr: 2, verticalAlign: 'bottom' }} />
				Health Organizations & Guidelines
			</Typography>

			<Grid container spacing={2} sx={{ mb: 6 }}>
				{organizationalSources.map((org, index) => (
					<Grid item size={{ xs: 12, md: 6 }} key={index}>
						<Card
							elevation={3}
							sx={{
								height: '100%',
								borderTop: `4px solid ${org.color}`,
							}}
						>
							<CardContent sx={{ p: 3 }}>
								<Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
									<Avatar
										sx={{
											bgcolor: org.color,
											width: 48,
											height: 48,
											mr: 2,
										}}
									>
										{org.icon}
									</Avatar>
									<Box>
										<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
											{org.organization}
										</Typography>
										<Chip
											label={org.type}
											size="small"
											sx={{ bgcolor: `${org.color}20`, color: org.color }}
										/>
									</Box>
								</Box>

								<Typography
									variant="subtitle2"
									sx={{ mb: 2, fontWeight: 'bold' }}
								>
									Referenced Guidelines:
								</Typography>
								{org.guidelines.map((guideline, idx) => (
									<Typography
										key={idx}
										variant="body2"
										sx={{ mb: 1, color: 'text.secondary' }}
									>
										• {guideline}
									</Typography>
								))}

								<Box sx={{ mt: 3 }}>
									<Link
										href={org.website}
										target="_blank"
										rel="noopener noreferrer"
										sx={{ color: org.color, fontWeight: 'bold' }}
									>
										Visit Official Website →
									</Link>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>

			{/* Statistical Sources */}
			{/* <Typography
				variant="h4"
				sx={{ mb: 4, fontWeight: 'bold', color: 'warning.main' }}
			>
				<Business sx={{ mr: 2, verticalAlign: 'bottom' }} />
				Statistical Data Sources
			</Typography>

			<Paper elevation={2} sx={{ p: 4, mb: 6 }}>
				<Grid container spacing={3}>
					{statisticalSources.map((stat, index) => (
						<Grid item xs={12} md={6} key={index}>
							<Box sx={{ mb: 3 }}>
								<Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
									{stat.source}
								</Typography>
								<Typography variant="body2" sx={{ mb: 1, fontStyle: 'italic' }}>
									{stat.study}
								</Typography>
								<Typography
									variant="body1"
									sx={{ mb: 2, color: 'primary.main', fontWeight: 'bold' }}
								>
									{stat.data}
								</Typography>
								<Typography variant="caption" sx={{ color: 'text.secondary' }}>
									Methodology: {stat.methodology}
								</Typography>
								<Box sx={{ mt: 1 }}>
									<Link
										href={stat.url}
										target="_blank"
										rel="noopener noreferrer"
										sx={{ fontSize: '0.875rem' }}
									>
										Source Link →
									</Link>
								</Box>
							</Box>
							{index < statisticalSources.length - 1 && <Divider />}
						</Grid>
					))}
				</Grid>
			</Paper> */}

			{/* Additional Resources */}
			{/* <Typography
				variant="h4"
				sx={{ mb: 4, fontWeight: 'bold', color: 'info.main' }}
			>
				Additional Resources for Further Learning
			</Typography>

			<Grid container spacing={3}>
				{additionalResources.map((resource, index) => (
					<Grid item xs={12} sm={6} md={3} key={index}>
						<Paper
							elevation={2}
							sx={{
								p: 3,
								height: '100%',
								textAlign: 'center',
								transition: 'all 0.3s ease',
								'&:hover': {
									transform: 'translateY(-2px)',
									boxShadow: 4,
								},
							}}
						>
							<Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
								{resource.title}
							</Typography>
							<Chip
								label={resource.type}
								size="small"
								sx={{
									mb: 2,
									bgcolor: 'info.light',
									color: 'info.contrastText',
								}}
							/>
							<Typography
								variant="body2"
								sx={{ mb: 3, color: 'text.secondary' }}
							>
								{resource.description}
							</Typography>
							<Link
								href={resource.url}
								target="_blank"
								rel="noopener noreferrer"
								sx={{ color: 'info.main', fontWeight: 'bold' }}
							>
								Learn More →
							</Link>
						</Paper>
					</Grid>
				))}
			</Grid> */}
		</Box>
	);
};

export default SourcesSection;
