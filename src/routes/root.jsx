import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/navigation";

const Root = () => {
    return(
        <main>
            <div className="main_container">
                <Navigation />
                <Outlet/>
                <footer>
                    <div className="footer_container">
                    </div>
                </footer>
            </div>
        </main>
    )
}

export default Root;