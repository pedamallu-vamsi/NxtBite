import Home from "./Home"
import Why from "./Why"
import Waiter from "./Waiter"
import KitchenSection from "./Kitchen";
import AdminDashboardSection from "./Admin"
import ClientSection from "./Client"
import ContactForm from "./Contact"

function App(){
    return(
        <>
        <Home/>
        <Why/>
        <ClientSection/>
        <Waiter/>
        <KitchenSection/>
        <AdminDashboardSection/>
        <ContactForm/>
        </>
    );
}
export default App