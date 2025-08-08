import React from 'react';
import {
	Box,
	Typography,
	Card,
	CardContent,
	Link,
	Container,
	Grid,
	Chip,
} from '@mui/material';

const WorksCited = () => {
	const sources = [
		{
			authors: 'Kumban, Wannisa, et al.',
			title:
				'Smartphone Addiction, Screen Time, and Physical Activity of Different Academic Majors and Study Levels in University Students',
			journal:
				'International Journal of Environmental Research & Public Health',
			year: '2025',
			volume: '22(2)',
			pages: 'p. 237',
			doi: '10.3390/ijerph22020237',
			link: 'https://doi.org/10.3390/ijerph22020237',
			type: 'Peer-Reviewed Study',
		},
		{
			authors: 'Sela, Alon, et al.',
			title:
				'Smartphone Use Behavior and Quality of Life: What Is the Role of Awareness?',
			journal: 'PLoS ONE',
			year: '2022',
			volume: '17(3)',
			pages: 'e0260637',
			doi: '10.1371/journal.pone.0260637',
			link: 'https://doi.org/10.1371/journal.pone.0260637',
			type: 'Peer-Reviewed Study',
		},
		{
			authors: 'Zhu, Weidong, et al.',
			title:
				'Influence of Smartphone Addiction on Sleep Quality of College Students: The Regulatory Effect of Physical Exercise Behavior',
			journal: 'PLoS ONE',
			year: '2024',
			volume: '19(7)',
			pages: 'e0307162',
			doi: '10.1371/journal.pone.0307162',
			link: 'https://doi.org/10.1371/journal.pone.0307162',
			type: 'Peer-Reviewed Study',
		},
		{
			authors: 'Bateman, Amberly',
			title: 'Licensed therapist specialized in neurodivergent youth',
			journal: 'Personal Interview',
			year: '2025',
			volume: '',
			pages: '2 August 2025',
			doi: '',
			link: '',
			type: 'Expert Interview',
		},
		{
			authors: 'Harvard Health Publishing',
			title: 'Blue light has a dark side',
			journal: 'Harvard Medical School',
			year: '2020',
			volume: '',
			pages: 'Circadian rhythm research',
			doi: '',
			link: 'https://www.health.harvard.edu/staying-healthy/blue-light-has-a-dark-side',
			type: 'Medical Publication',
		},
	];

	return (
		<Container maxWidth="lg">
			<Box sx={{ py: 6 }}>
				<Typography
					variant="h2"
					sx={{ textAlign: 'center', mb: 2, fontWeight: 800 }}
				>
					Sources & References
				</Typography>
				<Typography
					variant="h6"
					sx={{
						textAlign: 'center',
						mb: 6,
						color: 'text.secondary',
						maxWidth: 700,
						mx: 'auto',
						lineHeight: 1.6,
					}}
				>
					All claims in this program are backed by peer-reviewed research and
					expert interviews.
				</Typography>

				<Grid container spacing={3}>
					{sources.map((source, index) => (
						<Grid item size={12} key={index}>
							<Card
								elevation={2}
								sx={{
									transition: 'all 0.2s ease',
									'&:hover': { boxShadow: 4 },
								}}
							>
								<CardContent sx={{ p: 4 }}>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'flex-start',
											mb: 2,
										}}
									>
										<Chip
											label={source.type}
											size="small"
											color={
												source.type === 'Expert Interview'
													? 'secondary'
													: source.type === 'Medical Publication'
													? 'success'
													: 'primary'
											}
											variant="outlined"
										/>
										{source.link && (
											<Link
												href={source.link}
												target="_blank"
												rel="noopener noreferrer"
												sx={{ textDecoration: 'none' }}
											>
												<Chip
													label="View Source"
													size="small"
													color="primary"
												/>
											</Link>
										)}
									</Box>

									<Typography
										variant="h6"
										sx={{ fontWeight: 700, mb: 1, lineHeight: 1.3 }}
									>
										{source.title}
									</Typography>

									<Typography
										variant="body1"
										sx={{ mb: 1, color: 'text.secondary' }}
									>
										{source.authors} ({source.year})
									</Typography>

									<Typography variant="body2" sx={{ mb: 2 }}>
										<em>{source.journal}</em>
										{source.volume && `, ${source.volume}`}
										{source.pages && `, ${source.pages}`}
									</Typography>

									{source.doi && (
										<Typography
											variant="caption"
											sx={{
												fontFamily: 'monospace',
												bgcolor: 'grey.100',
												p: 0.5,
												borderRadius: 1,
												display: 'inline-block',
											}}
										>
											DOI: {source.doi}
										</Typography>
									)}
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export default WorksCited;
