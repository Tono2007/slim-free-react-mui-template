import { useState } from 'react';

import Card from '@mui/material/Card';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

import CardHeader from '@/components/cardHeader';

function TodoListCard() {
	return (
		<Card>
			<CardHeader title="Todo Item List" size="small" sx={{ mb: 2 }} />
			<FormGroup>
				<TodoItem text="Do something" defaultChecked />
				<TodoItem text="Do more stuff" />
				<TodoItem text="Do something else" defaultChecked />
				<TodoItem text="Do something again" defaultChecked />
				<TodoItem text="Do something more" defaultChecked />
				<TodoItem text="Do even more" />
				<TodoItem text="Do something more" defaultChecked />
				<TodoItem text="Finish something" />
				<TodoItem text="Finish something more" />
			</FormGroup>
		</Card>
	);
}

function TodoItem(props) {
	const { defaultChecked = false, text, color = 'primary' } = props;
	const [checked, setChecked] = useState(defaultChecked);
	return (
		<FormControlLabel
			slotProps={{
				typography: {
					sx: { textDecoration: checked ? 'line-through' : '' },
				},
			}}
			control={
				<Checkbox
					onChange={(e) => setChecked(e.target.checked)}
					defaultChecked={defaultChecked}
					value={checked}
					size="small"
					sx={{ p: 0.5, px: 1 }}
					color={color}
				/>
			}
			label={text}
		/>
	);
}

export default TodoListCard;
