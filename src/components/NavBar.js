import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const NavBar = () => {
	const links = [
		{ label: 'Home', href: '#/' },
		{ label: 'Week 1', href: '#/week-1' },
		{ label: 'Week 2', href: '#/week-2' },
		{ label: 'Week 3', href: '#/week-3' },
		{ label: 'Week 4', href: '#/week-4' },
		{ label: 'Sources', href: '#/sources' },
	];

	return (
		<AppBar position="sticky" color="primary" enableColorOnDark>
			<Toolbar>
				<Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800 }}>
					Screen Time Awareness
				</Typography>
				<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
					{links.map((l) => (
						<Button key={l.href} color="inherit" href={l.href}>
							{l.label}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
