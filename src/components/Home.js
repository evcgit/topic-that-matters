import React, { useEffect, useState } from 'react';
import {
	Box,
	Typography,
	Container,
	Paper,
	TextField,
	Button,
	Alert,
	List,
	ListItem,
	ListItemText,
	Link,
	Stepper,
	Step,
	StepLabel,
	Checkbox,
	FormControlLabel,
	Slider,
	LinearProgress,
	Grid,
	Card,
	CardContent,
} from '@mui/material';

const Home = () => {
	const [email, setEmail] = useState('');
	const [saved, setSaved] = useState(false);
	const [progress, setProgress] = useState({
		w1: false,
		w2: false,
		w3: false,
		w4: false,
	});
	const [currentWeek, setCurrentWeek] = useState('w1');
	const [hours, setHours] = useState(4);
	const [eyeTimer, setEyeTimer] = useState(20);
	const [eyeRunning, setEyeRunning] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem('sta_user_email');
		if (stored) {
			setEmail(stored);
			setSaved(true);
		}

		const storedProgress = localStorage.getItem('sta_progress');
		if (storedProgress) {
			try {
				const parsed = JSON.parse(storedProgress);
				setProgress({
					w1: !!parsed.w1,
					w2: !!parsed.w2,
					w3: !!parsed.w3,
					w4: !!parsed.w4,
				});
			} catch (_) {}
		}

		const storedCurrent = localStorage.getItem('sta_current_week');
		if (storedCurrent && ['w1', 'w2', 'w3', 'w4'].includes(storedCurrent)) {
			setCurrentWeek(storedCurrent);
		}
	}, []);

	useEffect(() => {
		if (!eyeRunning) return;
		if (eyeTimer <= 0) {
			setEyeRunning(false);
			return;
		}
		const id = setInterval(() => setEyeTimer((s) => s - 1), 1000);
		return () => clearInterval(id);
	}, [eyeRunning, eyeTimer]);

	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem('sta_user_email', email);
		setSaved(true);
	};

	const toggleWeek = (key) => {
		const updated = { ...progress, [key]: !progress[key] };
		setProgress(updated);
		localStorage.setItem('sta_progress', JSON.stringify(updated));
	};

	const firstIncomplete = () => {
		if (!progress.w1) return 'w1';
		if (!progress.w2) return 'w2';
		if (!progress.w3) return 'w3';
		if (!progress.w4) return 'w4';
		return 'w4';
	};

	const goToWeek = (wk) => {
		setCurrentWeek(wk);
		localStorage.setItem('sta_current_week', wk);
		const map = {
			w1: '#/week-1',
			w2: '#/week-2',
			w3: '#/week-3',
			w4: '#/week-4',
		};
		window.location.hash = map[wk];
	};

	const progressPercent =
		((progress.w1 ? 1 : 0) +
			(progress.w2 ? 1 : 0) +
			(progress.w3 ? 1 : 0) +
			(progress.w4 ? 1 : 0)) *
		25;

	const guidance = (() => {
		if (hours < 2)
			return 'Great baseline. Focus on sleep hygiene and keeping healthy routines.';
		if (hours < 5)
			return 'Solid start. Try Week 1 digital sunset and Week 3 focus blocks.';
		if (hours < 8)
			return 'Consider trimming evening use and silencing non-essential notifications.';
		return 'High usage. Start with 3 “no screens before bed” nights and one weekly digital detox.';
	})();

	return (
		<Box sx={{ py: 6 }}>
			<Container maxWidth="md">
				<Typography
					variant="h2"
					sx={{ textAlign: 'center', fontWeight: 800, mb: 1 }}
				>
					Start Your 4-Week Reset
				</Typography>
				<Typography
					variant="h6"
					sx={{ textAlign: 'center', color: 'text.secondary', mb: 4 }}
				>
					Learn, try small changes, and track how you feel—week by week.
				</Typography>

				<Box sx={{ mb: 4 }}>
					<Typography
						variant="h6"
						sx={{ fontWeight: 800, mb: 1, textAlign: 'center' }}
					>
						Why this matters
					</Typography>
					<Typography
						variant="body1"
						sx={{ mb: 3, textAlign: 'center', color: 'text.secondary' }}
					>
						This program focuses on awareness and small, sustainable habits that
						improve sleep, focus, and overall wellbeing.
					</Typography>

					<Grid container spacing={2} sx={{ mb: 2 }}>
						<Grid item size={4}>
							<Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 4, transform: 'translateY(-8px)', transition: 'all 0.3s ease' } }}>
								<CardContent sx={{ p: 2 }}>
									<Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
										Sleep Impact
									</Typography>
									<Typography variant="body2">
										According to Harvard Health Publishing, blue light can
										suppress melatonin and disrupt sleep.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item size={4}>
							<Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 4, transform: 'translateY(-8px)', transition: 'all 0.3s ease' } }}>
								<CardContent sx={{ p: 2 }}>
									<Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
										Mobile Usage
									</Typography>
									<Typography variant="body2">
										According to DataReportal (2024), average daily mobile usage
										is about 4.8 hours.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item size={4}>
							<Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 4, transform: 'translateY(-8px)', transition: 'all 0.3s ease' } }}>
								<CardContent sx={{ p: 2 }}>
									<Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
										Teen Screen Time
									</Typography>
									<Typography variant="body2">
										According to Common Sense Media, teens average ~7.7 hours of
										screen time per day.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item size={4}>
							<Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 4, transform: 'translateY(-8px)', transition: 'all 0.3s ease' } }}>
								<CardContent sx={{ p: 2 }}>
									<Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
										Vision Health
									</Typography>
									<Typography variant="body2">
										According to the National Eye Institute, about 41.6% of
										Americans are myopic—roughly double since 1970.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item size={4}>
							<Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 4, transform: 'translateY(-8px)', transition: 'all 0.3s ease' } }}>
								<CardContent sx={{ p: 2 }}>
									<Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
										Work Screen Time
									</Typography>
									<Typography variant="body2">
										According to the Bureau of Labor Statistics, office workers
										average 8.5 hours of daily screen time.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item size={4}>
							<Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 4, transform: 'translateY(-8px)', transition: 'all 0.3s ease' } }}>
								<CardContent sx={{ p: 2 }}>
									<Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
										Sleep Quality
									</Typography>
									<Typography variant="body2">
										According to the Sleep Foundation, 89% report worse sleep
										with evening screen use.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>

					<Typography
						variant="caption"
						sx={{
							display: 'block',
							textAlign: 'center',
							color: 'text.secondary',
						}}
					>
						See citations: <Link href="#/sources">Sources & References</Link>
					</Typography>
				</Box>

				<Paper elevation={3} sx={{ p: 3, mb: 4 }}>
					<Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>
						Join the cycle (fake email capture)
					</Typography>
					<Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
						Add your email to receive weekly reminders. This is a demo—emails
						are not sent.
					</Typography>
					{saved && (
						<Alert severity="success" sx={{ mb: 2 }}>
							Saved "{email}" locally. You can change it any time.
						</Alert>
					)}
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{ display: 'flex', gap: 1 }}
					>
						<TextField
							fullWidth
							type="email"
							label="Your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<Button variant="contained" type="submit">
							Save
						</Button>
					</Box>
				</Paper>

				<Paper elevation={2} sx={{ p: 3, mb: 4 }}>
					<Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
						How it works
					</Typography>
					<Typography variant="body1" sx={{ mb: 1 }}>
						- Week 1: Sleep & screens. Prep a digital sunset and try it 3
						nights.
					</Typography>
					<Typography variant="body1" sx={{ mb: 1 }}>
						- Week 2: Cognition. Notice when you’re scrolling without intention
						and swap one session for a walk.
					</Typography>
					<Typography variant="body1" sx={{ mb: 1 }}>
						- Week 3: Attention. Turn off non-essential notifications for two
						focus blocks per day.
					</Typography>
					<Typography variant="body1">
						- Week 4: Habits. Establish one screen-free zone and one recurring
						detox block each week.
					</Typography>
				</Paper>

				<Paper elevation={3} sx={{ p: 3, mb: 4 }}>
					<Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
						Your Progress
					</Typography>
					<Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
						Track completion and jump to the next week.
					</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
						<LinearProgress
							variant="determinate"
							value={progressPercent}
							sx={{ flex: 1, height: 8, borderRadius: 4 }}
						/>
						<Typography
							variant="caption"
							sx={{ minWidth: 40, textAlign: 'right' }}
						>
							{progressPercent}%
						</Typography>
					</Box>
					<Stepper
						alternativeLabel
						activeStep={['w1', 'w2', 'w3', 'w4'].indexOf(currentWeek)}
						sx={{ mb: 1 }}
					>
						<Step completed={progress.w1}>
							<StepLabel>Week 1</StepLabel>
						</Step>
						<Step completed={progress.w2}>
							<StepLabel>Week 2</StepLabel>
						</Step>
						<Step completed={progress.w3}>
							<StepLabel>Week 3</StepLabel>
						</Step>
						<Step completed={progress.w4}>
							<StepLabel>Week 4</StepLabel>
						</Step>
					</Stepper>
					<Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
						<FormControlLabel
							control={
								<Checkbox
									checked={progress.w1}
									onChange={() => toggleWeek('w1')}
								/>
							}
							label="Mark Week 1 done"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={progress.w2}
									onChange={() => toggleWeek('w2')}
								/>
							}
							label="Mark Week 2 done"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={progress.w3}
									onChange={() => toggleWeek('w3')}
								/>
							}
							label="Mark Week 3 done"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={progress.w4}
									onChange={() => toggleWeek('w4')}
								/>
							}
							label="Mark Week 4 done"
						/>
					</Box>
					<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
						<Button variant="outlined" onClick={() => goToWeek(currentWeek)}>
							Resume {currentWeek.toUpperCase()}
						</Button>
						<Button
							variant="contained"
							onClick={() => goToWeek(firstIncomplete())}
						>
							Go to next step
						</Button>
					</Box>
				</Paper>

				<Paper elevation={3} sx={{ p: 3, mb: 4 }}>
					<Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
						Quick self‑check
					</Typography>
					<Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
						Estimate your average daily screen time (all devices).
					</Typography>
					<Box sx={{ px: 1, mb: 1 }}>
						<Slider
							min={0}
							max={12}
							step={0.5}
							value={hours}
							onChange={(_, v) => setHours(v)}
							valueLabelDisplay="on"
						/>
					</Box>
					<Typography variant="body2" sx={{ fontWeight: 700 }}>
						{guidance}
					</Typography>
				</Paper>

				<Paper elevation={3} sx={{ p: 3, mb: 4 }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
						<Box sx={{ flex: 1 }}>
							<Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
								20‑20‑20 Eye Break
							</Typography>
							<Typography
								variant="body2"
								sx={{ color: 'text.secondary', mb: 2 }}
							>
								Every 20 minutes, look 20 feet away for 20 seconds.
							</Typography>
						</Box>
						<Button
							variant="contained"
							onClick={() => {
								setEyeTimer(20);
								setEyeRunning(true);
							}}
						>
							Set a reminder
						</Button>
					</Box>
					<Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
						Additional eye-care tips:
					</Typography>
					<List dense>
						<ListItem sx={{ pl: 0 }}>
							<ListItemText primary="Adjust screen brightness to match your surroundings" />
						</ListItem>
						<ListItem sx={{ pl: 0 }}>
							<ListItemText primary="Position your screen arm's length away (20-26 inches)" />
						</ListItem>
						<ListItem sx={{ pl: 0 }}>
							<ListItemText primary="Blink consciously—we blink 3x less when staring at screens" />
						</ListItem>
					</List>
				</Paper>
			</Container>
		</Box>
	);
};

export default Home;
