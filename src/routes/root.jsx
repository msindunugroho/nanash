import { Outlet } from "react-router-dom";
import RootNavigation from "../components/root-navigation/root-navigation";
import RootFooter from "../components/root-footer/root-footer";

const Root = () => {
    return(
      <main>
        <div className="main_container">
          <RootNavigation />
          <div className="content page-layout">
            <Outlet />
          </div>
          <RootFooter />
        </div>
      </main>
    )
}

export default Root;