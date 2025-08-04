import React from 'react';
import { Box, Typography, Container, Paper, Grid, Avatar } from '@mui/material';
import { Visibility, Timer, Warning } from '@mui/icons-material';

const HeroSection = () => {
	return (
		<Box
			sx={{
				minHeight: '100vh',
				background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				display: 'flex',
				alignItems: 'center',
				color: 'white',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={4} alignItems="center" justifyContent="center">
					<Grid item xs={12} md={6}>
						<Typography
							variant="h1"
							sx={{
								fontSize: { xs: '2.5rem', md: '3.5rem' },
								fontWeight: 800,
								mb: 2,
								textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
							}}
						>
							The Hidden Cost of Screen Time
						</Typography>
						<Typography
							variant="h5"
							sx={{
								fontSize: { xs: '1.2rem', md: '1.5rem' },
								mb: 4,
								opacity: 0.9,
								lineHeight: 1.6,
							}}
						>
							Understanding the profound impact of excessive digital device
							usage on our physical, mental, and social well-being
						</Typography>

						<Paper
							elevation={3}
							sx={{
								p: 3,
								backgroundColor: 'rgba(255, 255, 255, 0.1)',
								backdropFilter: 'blur(10px)',
								border: '1px solid rgba(255, 255, 255, 0.2)',
							}}
						>
							<Typography
								variant="body1"
								sx={{ fontStyle: 'italic', textAlign: 'center' }}
							>
								According to the <strong>American Academy of Pediatrics</strong>
								, excessive screen time is linked to attention problems, school
								difficulties, sleep and eating disorders, and obesity.
							</Typography>
						</Paper>
					</Grid>

					<Grid item xs={12} md={6}>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={4}>
								<Paper
									elevation={6}
									sx={{
										p: 3,
										textAlign: 'center',
										backgroundColor: 'rgba(255, 255, 255, 0.15)',
										backdropFilter: 'blur(10px)',
										border: '1px solid rgba(255, 255, 255, 0.2)',
									}}
								>
									<Avatar
										sx={{
											bgcolor: 'warning.main',
											mx: 'auto',
											mb: 2,
											width: 60,
											height: 60,
										}}
									>
										<Timer sx={{ fontSize: 30 }} />
									</Avatar>
									<Typography
										variant="h4"
										sx={{ color: 'warning.light', mb: 1 }}
									>
										7+ hours
									</Typography>
									<Typography variant="body2">
										Average daily screen time for adults
									</Typography>
								</Paper>
							</Grid>

							<Grid item xs={12} sm={4}>
								<Paper
									elevation={6}
									sx={{
										p: 3,
										textAlign: 'center',
										backgroundColor: 'rgba(255, 255, 255, 0.15)',
										backdropFilter: 'blur(10px)',
										border: '1px solid rgba(255, 255, 255, 0.2)',
									}}
								>
									<Avatar
										sx={{
											bgcolor: 'error.main',
											mx: 'auto',
											mb: 2,
											width: 60,
											height: 60,
										}}
									>
										<Visibility sx={{ fontSize: 30 }} />
									</Avatar>
									<Typography variant="h4" sx={{ color: 'error.light', mb: 1 }}>
										20%
									</Typography>
									<Typography variant="body2">
										Increase in myopia cases since 2000
									</Typography>
								</Paper>
							</Grid>

							<Grid item xs={12} sm={4}>
								<Paper
									elevation={6}
									sx={{
										p: 3,
										textAlign: 'center',
										backgroundColor: 'rgba(255, 255, 255, 0.15)',
										backdropFilter: 'blur(10px)',
										border: '1px solid rgba(255, 255, 255, 0.2)',
									}}
								>
									<Avatar
										sx={{
											bgcolor: 'secondary.main',
											mx: 'auto',
											mb: 2,
											width: 60,
											height: 60,
										}}
									>
										<Warning sx={{ fontSize: 30 }} />
									</Avatar>
									<Typography
										variant="h4"
										sx={{ color: 'secondary.light', mb: 1 }}
									>
										30%
									</Typography>
									<Typography variant="body2">
										Higher risk of depression with excessive use
									</Typography>
								</Paper>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>

			{/* Decorative background elements */}
			<Box
				sx={{
					position: 'absolute',
					bottom: -50,
					right: -50,
					width: 200,
					height: 200,
					borderRadius: '50%',
					backgroundColor: 'rgba(255, 255, 255, 0.1)',
					zIndex: 0,
				}}
			/>
			<Box
				sx={{
					position: 'absolute',
					top: -30,
					left: -30,
					width: 150,
					height: 150,
					borderRadius: '50%',
					backgroundColor: 'rgba(255, 255, 255, 0.05)',
					zIndex: 0,
				}}
			/>
		</Box>
	);
};

export default HeroSection;
