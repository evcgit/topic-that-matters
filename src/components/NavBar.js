import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Chip,
} from '@mui/material';
import { Menu as MenuIcon, Visibility } from '@mui/icons-material';

const NavBar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const currentHash = window.location.hash || '#/';

	const links = [
		{ label: 'Home', href: '#/', icon: '🏠' },
		{ label: 'Week 1', href: '#/week-1', icon: '1️⃣' },
		{ label: 'Week 2', href: '#/week-2', icon: '2️⃣' },
		{ label: 'Week 3', href: '#/week-3', icon: '3️⃣' },
		{ label: 'Week 4', href: '#/week-4', icon: '4️⃣' },
		{ label: 'Sources', href: '#/sources', icon: '📚' },
	];

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar
			position="sticky"
			sx={{
				background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
				boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
			}}
		>
			<Toolbar sx={{ py: 1 }}>
				<Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
					<Visibility sx={{ mr: 1, fontSize: 28 }} />
					<Typography
						variant="h6"
						sx={{
							fontWeight: 800,
							fontSize: { xs: '1.1rem', md: '1.25rem' },
							letterSpacing: '0.5px',
						}}
					>
						Screen Time Awareness
					</Typography>
				</Box>

				{/* Desktop Navigation */}
				<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
					{links.map((link) => (
						<Button
							key={link.href}
							href={link.href}
							sx={{
								color: 'white',
								px: 2,
								py: 1,
								borderRadius: 2,
								fontWeight: 600,
								fontSize: '0.875rem',
								position: 'relative',
								transition: 'all 0.3s ease',
								'&:hover': {
									backgroundColor: 'rgba(255, 255, 255, 0.1)',
									transform: 'translateY(-1px)',
								},
								...(currentHash === link.href && {
									backgroundColor: 'rgba(255, 255, 255, 0.15)',
									'&::after': {
										content: '""',
										position: 'absolute',
										bottom: 4,
										left: '50%',
										transform: 'translateX(-50%)',
										width: '60%',
										height: 2,
										backgroundColor: 'white',
										borderRadius: 1,
									},
								}),
							}}
						>
							<span style={{ marginRight: '6px' }}>{link.icon}</span>
							{link.label}
						</Button>
					))}
				</Box>

				{/* Mobile Menu Button */}
				<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
					<Chip
						label="4-Week Program"
						size="small"
						sx={{
							backgroundColor: 'rgba(255, 255, 255, 0.15)',
							color: 'white',
							fontWeight: 600,
							mr: 1,
						}}
					/>
					<IconButton
						color="inherit"
						onClick={handleMenuOpen}
						sx={{
							'&:hover': {
								backgroundColor: 'rgba(255, 255, 255, 0.1)',
							},
						}}
					>
						<MenuIcon />
					</IconButton>
				</Box>

				{/* Mobile Menu */}
				<Menu
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={handleMenuClose}
					PaperProps={{
						sx: {
							mt: 1,
							borderRadius: 2,
							minWidth: 200,
							boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
						},
					}}
				>
					{links.map((link) => (
						<MenuItem
							key={link.href}
							onClick={() => {
								window.location.hash = link.href;
								handleMenuClose();
							}}
							sx={{
								py: 1.5,
								px: 2,
								fontWeight: currentHash === link.href ? 600 : 400,
								backgroundColor:
									currentHash === link.href
										? 'rgba(25, 118, 210, 0.08)'
										: 'transparent',
								'&:hover': {
									backgroundColor: 'rgba(25, 118, 210, 0.04)',
								},
							}}
						>
							<span style={{ marginRight: '8px' }}>{link.icon}</span>
							{link.label}
						</MenuItem>
					))}
				</Menu>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
