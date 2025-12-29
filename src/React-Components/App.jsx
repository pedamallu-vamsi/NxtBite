import Home from "./Home"
import Why from "./Why"
import Waiter from "./Waiter"
import KitchenSection from "./Kitchen";
import AdminDashboardSection from "./Admin"
import ClientSection from "./Client"
function App(){
    return(
        <>
        <Home/>
        <Why/>
        <ClientSection/>
        <Waiter/>
        <KitchenSection/>
        <AdminDashboardSection/>
        </>
    );
}
export default App