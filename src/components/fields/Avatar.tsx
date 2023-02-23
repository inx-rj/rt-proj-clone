import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";
import { Icon } from "@iconify/react";

const Avatar = ({ acceptFile = "", label = "", rounded = true, ...props }) => {
	const [field, meta, helper] = useField(props["name"]);
	const { value, ...rest } = field;
	const errorClass = meta.error && meta.touched ? "is-invalid" : "";
	const isFile = value instanceof File;

	let previewImg = "";

	if (isFile) {
		previewImg = window.URL.createObjectURL(value);
	}

	return (
		<>
			{label && <span className="form-label">{label}</span>}
			<div
				className={`relative ${
					rounded
						? "w-[80px] h-[80px] rounded-full bg-[#ECECEC]"
						: "w-full h-[80px] rounded"
				} border dark:border-dark-secondary p-1 flex items-center justify-center ${errorClass}`}
			>
				<input
					{...rest}
					{...props}
					type="file"
					id={field.name + "_upload"}
					accept={acceptFile}
					onChange={(e) => helper.setValue(e.currentTarget.files[0])}
					className="hidden"
				/>
				<div
					className={`${
						rounded ? "flex items-center w-full h-full justify-between" : ""
					}`}
				>
					<label
						htmlFor={field.name + "_upload"}
						className={`${
							rounded ? "bottom-2 " : "top-[-15px]"
						} absolute -right-2 w-[25px] h-[25px] flex items-center justify-center rounded-full bg-theme text-white shadow-sm drop-shadow-md`}
					>
						<div>
							<span role="button" className="fup-btn">
								<Icon
									width={14}
									icon="material-symbols:camera-enhance-outline"
								/>
							</span>
						</div>
					</label>
					{isFile ? (
						<div className={`${rounded ? "w-full h-full rounded-full" : ""}`}>
							{previewImg && (
								<img
									className={`${
										rounded
											? "w-full h-full rounded-full object-cover"
											: "h-[70px] w-full object-contain"
									}`}
									src={previewImg}
									alt={value["name"]}
								/>
							)}
							<span
								role="button"
								className={`${
									rounded ? "top-2" : "top-[-15px]"
								} absolute -right-2 w-[25px] h-[25px] flex items-center justify-center rounded-full bg-white text-black`}
								onClick={() => helper.setValue(null)}
							>
								<Icon icon="eva:close-outline" />
							</span>
						</div>
					) : (
						<div
							className={`${
								rounded
									? "w-full h-full rounded-full flex items-center justify-center"
									: ""
							}`}
						>
							<div
								className={`${
									rounded
										? "text-black w-full h-full flex items-center justify-center"
										: ""
								}`}
							>
								{value ? (
									<img
										className={`${
											rounded
												? "w-full h-full rounded-full object-cover"
												: "h-[70px] w-full object-contain"
										}`}
										src={value}
										alt="preview"
									/>
								) : (
									<Icon width={40} icon="clarity:avatar-line" />
								)}
							</div>
						</div>
					)}
				</div>
			</div>
			<ErrorMessage
				component="div"
				className="invalid-feedback"
				name={field.name}
			/>
		</>
	);
};

Avatar.propTypes = {
	rounded: PropTypes.bool,
	name: PropTypes.string,
	label: PropTypes.string,
	alt: PropTypes.string,
	acceptFile: PropTypes.string,
};

export { Avatar };
