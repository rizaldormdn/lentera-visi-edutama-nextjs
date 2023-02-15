type props = {
	children?: React.ReactNode;
	title?: string;
	action: (e: React.MouseEvent) => void;
	style: string
};
const Button = ({ children, title, action, style }: props) => {
	return title === "" ? <button onClick={(e) => { action(e) }}>{children}</button> : <button className={style} type='submit' onClick={(e) => { action(e) }}>{title}</button>;
};

export default Button;
