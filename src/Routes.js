import App from "./App";
import AddGarment from "./pages/AddGarment";
import Home from "./pages/Home";
import Wardrobe from "./pages/Wardrobe";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/wardrobe',
                element: <Wardrobe />
            },
            {
                path: '/addgarment',
                element: <AddGarment />
            }
        ]
    }
]

export default routes