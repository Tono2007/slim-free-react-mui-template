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
import PersonOffOutlinedIcon from '@mui/icons-material/PersonOffOutlined';

import CardHeader from '@/components/cardHeader';
import DataTable from '@/components/dataTable';

import employeesData from '@/_mocks/employees';

function DataTables() {
	return (
		<>
			<DataTable1 name="Basic" />
			<DataTable1 name="Dense" props={{ dense: true }} />
		</>
	);
}

const getHeadCells = [
	{
		id: 'id',
		numeric: false,
		disablePadding: false,
		label: 'Id',
	},
	{
		id: 'name',
		numeric: false,
		disablePadding: false,
		label: 'Nombre',
	},
	{
		id: 'position',
		numeric: false,
		disablePadding: false,
		label: 'Position',
	},
	{
		id: 'email',
		numeric: false,
		disablePadding: false,
		label: 'Email',
	},
	{
		id: 'salary',
		numeric: true,
		disablePadding: false,
		label: 'Salary',
	},
	{
		id: 'options',
		numeric: true,
		disablePadding: false,
		label: 'Opciones',
	},
];
function DataTable1({ name, props }) {
	return (
		<Card component="section" type="section">
			<CardHeader
				title={`${name} Data Table`}
				subtitle="Searching, ordering and paging goodness will be immediately added to the table, as shown in this example."
			>
				<Button variant="contained" disableElevation endIcon={<AddIcon />}>
					New entry
				</Button>
			</CardHeader>
			<DataTable
				{...props}
				headCells={getHeadCells}
				rows={employeesData.slice(0, 27)}
				emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
				render={(row) => (
					<TableRow hover tabIndex={-1} key={row.id}>
						<TableCell>{row.id}</TableCell>
						<TableCell align="left">{row.name}</TableCell>
						<TableCell align="left">{row?.position}</TableCell>
						<TableCell align="left">{row?.email}</TableCell>
						<TableCell align="right">${row.salary.toLocaleString()}</TableCell>
						<TableCell align="right">
							<Tooltip title="Editar Información" arrow>
								<IconButton
									aria-label="edit"
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

							<Tooltip title="Deshabilitar Usuario" arrow>
								<IconButton
									aria-label="edit"
									color="error"
									size="small"
									sx={{ fontSize: 2 }}
									onClick={(e) => {
										e.stopPropagation();
									}}
								>
									<PersonOffOutlinedIcon fontSize="medium" />
								</IconButton>
							</Tooltip>
						</TableCell>
					</TableRow>
				)}
			/>
		</Card>
	);
}

export default DataTables;
