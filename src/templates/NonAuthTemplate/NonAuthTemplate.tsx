import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import { nonAuthRouterList } from "../../router/nonAuthRouter/nonAuthRouterList";

const NonAuthTemplate = () => {

    return (
        <Router>
            <Routes>
            {nonAuthRouterList.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />} 
                />    
            ))}
            </Routes>
        </Router>
    )
}

export { NonAuthTemplate }