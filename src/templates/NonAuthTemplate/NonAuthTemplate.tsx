import { Container } from "@mui/material";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { Header } from "components/molecules";

import { nonAuthRouterList } from "router/nonAuthRouter/nonAuthRouterList";

import classes from './styles.module.scss'

const NonAuthTemplate = () => {
	return (
		<>
			<Router>
				<Header />
				<div className={classes.wrapper}>
					<Container>
						<Routes>
							{nonAuthRouterList.map(route => (
								<Route
									key={route.path}
									path={route.path}
									element={<route.component />} 
								/>    
							))}
						</Routes>
					</Container>
				</div>
			</Router>
		</>
	)
}

export { NonAuthTemplate }