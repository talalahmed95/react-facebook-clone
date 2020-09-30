import React, {Fragment} from 'react';
import classes from './Layout.module.css';

const layout = (props) => {
	return (
		<Fragment>
			<div>Navbar/Sidebar</div>
			<div className={classes.Content}>
				{props.children}
			</div>
		</Fragment>
	);
}

export default layout;