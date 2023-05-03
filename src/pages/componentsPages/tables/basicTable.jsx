import { useState } from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import CardHeader from '@/components/cardHeader';

import employeesData from '@/_mocks/employees';

function TablesElements() {
	return (
		<>
			<Card component="section" type="section">
				<CardHeader title="Basic Table" subtitle="Using the most basic table markup.">
					<Button variant="contained" disableElevation endIcon={<AddIcon />}>
						New entry
					</Button>
				</CardHeader>
				<MediumTable />
			</Card>

			<TableResults />
			<SearchTable />
			<ColorTables />
			<ColoredTables />
		</>
	);
}
function MediumTable() {
	return (
		<TableContainer>
			<Table aria-label="results table">
				<TableHead>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell align="left">Name</TableCell>
						<TableCell align="left">Position</TableCell>
						{/* <TableCell align="left">Email</TableCell> */}
						<TableCell align="left">Salary</TableCell>
						<TableCell align="right" />
					</TableRow>
				</TableHead>
				<TableBody>
					{employeesData.slice(0, 5).map((row) => (
						<TableRow hover key={row.id}>
							<TableCell>{row.id}</TableCell>
							<TableCell align="left">{row.name}</TableCell>
							<TableCell align="left">{row.position}</TableCell>
							{/* <TableCell align="left">{row.email}</TableCell> */}
							<TableCell align="left">${row.salary.toLocaleString()}</TableCell>
							<TableCell align="right">
								<Tooltip title="Editar Información" arrow>
									<IconButton
										aria-label="delete"
										color="warning"
										size="small"
										sx={{ fontSize: 2 }}
										onClick={(e) => {
											e.stopPropagation();
										}}
									>
										<ModeEditOutlineOutlinedIcon fontSize="medium" />
									</IconButton>
								</Tooltip>

								<Tooltip title="Borrar registro" arrow>
									<IconButton aria-label="edit" color="error" size="small" sx={{ fontSize: 2 }}>
										<DeleteOutlineOutlinedIcon fontSize="medium" />
									</IconButton>
								</Tooltip>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

function TableResults() {
	return (
		<Card component="section" type="section">
			<CardHeader title="Basic Table Dense" subtitle="Using the most basic table markup.">
				<Button variant="contained" size="small" disableElevation endIcon={<AddIcon />}>
					New entry
				</Button>
			</CardHeader>
			<TableContainer>
				<Table size="small" aria-label="results table">
					<TableHead>
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell align="left">Name</TableCell>
							<TableCell align="left">Position</TableCell>
							{/* <TableCell align="left">Email</TableCell> */}
							<TableCell align="left">Salary</TableCell>
							<TableCell align="right" />
						</TableRow>
					</TableHead>
					<TableBody>
						{employeesData.slice(0, 5).map((row) => (
							<TableRow hover key={row.id}>
								<TableCell>{row.id}</TableCell>
								<TableCell align="left">{row.name}</TableCell>
								<TableCell align="left">{row.position}</TableCell>
								{/* <TableCell align="left">{row.email}</TableCell> */}
								<TableCell align="left">${row.salary.toLocaleString()}</TableCell>
								<TableCell align="right">
									<Tooltip title="Editar Información" arrow>
										<IconButton
											aria-label="delete"
											color="warning"
											size="small"
											sx={{ fontSize: 2 }}
											onClick={(e) => {
												e.stopPropagation();
											}}
										>
											<ModeEditOutlineOutlinedIcon fontSize="medium" />
										</IconButton>
									</Tooltip>

									<Tooltip title="Borrar registro" arrow>
										<IconButton aria-label="edit" color="error" size="small" sx={{ fontSize: 2 }}>
											<DeleteOutlineOutlinedIcon fontSize="medium" />
										</IconButton>
									</Tooltip>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>{' '}
		</Card>
	);
}

function SearchTable() {
	const [data, setdata] = useState(employeesData);

	const handleChange = (e) => {
		const query = e.target.value;
		const list = employeesData.filter((item) => item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
		setdata(list);
	};
	return (
		<Card component="section" type="section">
			<CardHeader title="Basic Table Search & Bordered" subtitle="Using the most basic table markup.">
				<TextField
					onChange={handleChange}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					}}
					placeholder="Busqueda de Usuarios"
					variant="outlined"
				/>
			</CardHeader>
			<TableContainer
				sx={{
					'& td, & th': {
						border: 1,
						borderColor: 'border',
					},
				}}
			>
				<Table aria-label="results table">
					<TableHead>
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell align="left">Name</TableCell>
							<TableCell align="left">Position</TableCell>
							{/* <TableCell align="left">Email</TableCell> */}
							<TableCell align="left">Salary</TableCell>
							<TableCell align="right" />
						</TableRow>
					</TableHead>
					<TableBody>
						{data.slice(0, 5).map((row) => (
							<TableRow hover key={row.id}>
								<TableCell>{row.id}</TableCell>
								<TableCell align="left">{row.name}</TableCell>
								<TableCell align="left">{row.position}</TableCell>
								{/* <TableCell align="left">{row.email}</TableCell> */}
								<TableCell align="left">${row.salary.toLocaleString()}</TableCell>
								<TableCell align="right">
									<Tooltip title="Editar Información" arrow>
										<IconButton
											aria-label="delete"
											color="warning"
											size="small"
											sx={{ fontSize: 2 }}
											onClick={(e) => {
												e.stopPropagation();
											}}
										>
											<ModeEditOutlineOutlinedIcon fontSize="medium" />
										</IconButton>
									</Tooltip>

									<Tooltip title="Borrar registro" arrow>
										<IconButton aria-label="edit" color="error" size="small" sx={{ fontSize: 2 }}>
											<DeleteOutlineOutlinedIcon fontSize="medium" />
										</IconButton>
									</Tooltip>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Card>
	);
}

function ColorTables() {
	return (
		<Card component="section" type="section">
			<CardHeader title="Colored Header variations" subtitle="A custom color for the head of the tables." />
			<Stack spacing={5}>
				<TableContainer>
					<Table aria-label="results table">
						<TableHead
							sx={{
								bgcolor: 'primary.main',
								'& .MuiTableCell-head': {
									color: 'primary.contrastText',
								},
							}}
						>
							<TableRow>
								<TableCell>Id</TableCell>
								<TableCell align="left">Name</TableCell>
								<TableCell align="left">Position</TableCell>
								{/* <TableCell align="left">Email</TableCell> */}
								<TableCell align="left">Salary</TableCell>
								<TableCell align="right" />
							</TableRow>
						</TableHead>
						<TableBody>
							{employeesData.slice(0, 4).map((row) => (
								<TableRow hover key={row.id}>
									<TableCell>{row.id}</TableCell>
									<TableCell align="left">{row.name}</TableCell>
									<TableCell align="left">{row.position}</TableCell>
									{/* <TableCell align="left">{row.email}</TableCell> */}
									<TableCell align="left">${row.salary.toLocaleString()}</TableCell>
									<TableCell align="right">
										<Tooltip title="Editar Información" arrow>
											<IconButton
												aria-label="delete"
												color="warning"
												size="small"
												sx={{ fontSize: 2 }}
												onClick={(e) => {
													e.stopPropagation();
												}}
											>
												<ModeEditOutlineOutlinedIcon fontSize="medium" />
											</IconButton>
										</Tooltip>

										<Tooltip title="Borrar registro" arrow>
											<IconButton
												aria-label="edit"
												color="error"
												size="small"
												sx={{ fontSize: 2 }}
											>
												<DeleteOutlineOutlinedIcon fontSize="medium" />
											</IconButton>
										</Tooltip>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<ColorTable headBgColor="primary.main" headTextColor="primary.contrastText" />
				<ColorTable headBgColor="secondary.main" headTextColor="secondary.contrastText" />
				<ColorTable headBgColor="tertiary.main" headTextColor="tertiary.contrastText" />
				<ColorTable headBgColor="cuaternary.main" headTextColor="cuaternary.contrastText" />
			</Stack>
		</Card>
	);
}
function ColorTable({ headBgColor, headTextColor }) {
	return (
		<TableContainer>
			<Table aria-label="results table" size="small">
				<TableHead
					sx={{
						bgcolor: headBgColor,
						'& .MuiTableCell-head': {
							color: headTextColor,
						},
					}}
				>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell align="left">Name</TableCell>
						<TableCell align="left">Position</TableCell>
						{/* <TableCell align="left">Email</TableCell> */}
						<TableCell align="left">Salary</TableCell>
						<TableCell align="right" />
					</TableRow>
				</TableHead>
				<TableBody>
					{employeesData.slice(0, 2).map((row) => (
						<TableRow hover key={row.id}>
							<TableCell>{row.id}</TableCell>
							<TableCell align="left">{row.name}</TableCell>
							<TableCell align="left">{row.position}</TableCell>
							{/* <TableCell align="left">{row.email}</TableCell> */}
							<TableCell align="left">${row.salary.toLocaleString()}</TableCell>
							<TableCell align="right">
								<Tooltip title="Editar Información" arrow>
									<IconButton
										aria-label="delete"
										color="warning"
										size="small"
										sx={{ fontSize: 2 }}
										onClick={(e) => {
											e.stopPropagation();
										}}
									>
										<ModeEditOutlineOutlinedIcon fontSize="medium" />
									</IconButton>
								</Tooltip>

								<Tooltip title="Borrar registro" arrow>
									<IconButton aria-label="edit" color="error" size="small" sx={{ fontSize: 2 }}>
										<DeleteOutlineOutlinedIcon fontSize="medium" />
									</IconButton>
								</Tooltip>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
function ColoredTables() {
	return (
		<Card component="section" type="section">
			<CardHeader title="Full color variations" subtitle="A custom full color variations for the entire table." />
			<TableContainer>
				<Table aria-label="results table">
					<TableHead
						sx={{
							bgcolor: 'secondary.main',
							'& .MuiTableCell-head': {
								color: 'secondary.contrastText',
							},
						}}
					>
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell align="left">Name</TableCell>
							<TableCell align="left">Position</TableCell>
							<TableCell align="left">Salary</TableCell>
							<TableCell align="right" />
						</TableRow>
					</TableHead>
					<TableBody
						sx={{
							bgcolor: 'secondary.light',
						}}
					>
						{employeesData.slice(0, 4).map((row) => (
							<TableRow hover key={row.id}>
								<TableCell>{row.id}</TableCell>
								<TableCell align="left">{row.name}</TableCell>
								<TableCell align="left">{row.position}</TableCell>
								<TableCell align="left">${row.salary.toLocaleString()}</TableCell>
								<TableCell align="right">
									<Tooltip title="Editar Información" arrow>
										<IconButton
											aria-label="delete"
											color="warning"
											size="small"
											sx={{ fontSize: 2 }}
											onClick={(e) => {
												e.stopPropagation();
											}}
										>
											<ModeEditOutlineOutlinedIcon fontSize="medium" />
										</IconButton>
									</Tooltip>

									<Tooltip title="Borrar registro" arrow>
										<IconButton aria-label="edit" color="error" size="small" sx={{ fontSize: 2 }}>
											<DeleteOutlineOutlinedIcon fontSize="medium" />
										</IconButton>
									</Tooltip>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Card>
	);
}

export default TablesElements;
