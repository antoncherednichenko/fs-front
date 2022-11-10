import { Box, Container } from "@mui/material";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { Header } from "../../components/molecules";

import { nonAuthRouterList } from "../../router/nonAuthRouter/nonAuthRouterList";

const NonAuthTemplate = () => {
	return (
		<>
			<Router>
				<Header />
				<Box>
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
				</Box>
			</Router>
		</>
	)
}

export { NonAuthTemplate }