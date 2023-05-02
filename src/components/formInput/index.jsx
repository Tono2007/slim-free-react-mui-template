import { Controller } from 'react-hook-form';

import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

function FormInput({ name, rules, control, errors, dirtyFields, element = TextField, children, ...otherProps }) {
	const InputComponent = element;
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field }) => (
				<InputComponent
					error={!!errors?.[name]}
					helperText={errors?.[name] ? errors[name].message : ' '}
					{...otherProps}
					{...field}
					InputProps={{
						endAdornment: dirtyFields?.[name] && (
							<InputAdornment position="end" sx={{ mr: otherProps?.select ? '16px' : '' }}>
								{errors[name] ? <CloseIcon color="error" /> : <CheckIcon color="success" />}
							</InputAdornment>
						),
					}}
				>
					{children}
				</InputComponent>
			)}
		/>
	);
}

export default FormInput;
