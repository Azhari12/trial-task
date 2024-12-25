import { Control, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

type InputFieldProps<T extends FieldValues> = {
	control: Control<T>;
	name: Path<T>;
	label?: string;
	placholder?: string;
	error?: boolean;
};

export const InputField = <T extends FieldValues>(
	inputProps: InputFieldProps<T> & React.ComponentProps<"input">
) => {
	const { control, name, error, ...props } = inputProps;

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormControl>
						<div className="grid gap-1">
							<Input
								id={name}
								data-testid={name}
								error={error}
								{...props}
								{...field}
							/>
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
