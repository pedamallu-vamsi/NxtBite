import AdminDashboard from "../Images/AdminDashboard.png";
import AdminEdit from "../Images/AdminEdit.jpeg";

function AdminDashboardSection () {
  return (
    <>
    
    <div className="section-heading">
        <h1>Admin Dashboard</h1>
        <p>
          A centralized control panel designed for restaurant owners and managers
          to monitor operations, manage menus, track orders, and gain real-time
          business insights with ease.
        </p>
      </div>

      <div className="section">
        <div className="image-container kitchen">
          <img src= {AdminDashboard} alt="Admin Dashboard" />
        </div>

        <div className="content">
          <h2>Complete Control Over Orders & Menu</h2>
          <p>
            The admin dashboard brings together orders management, menu control,
            and category organization into a single, powerful interface. Managers
            can track live orders, revenue, and pending requests while filtering
            data by status, payment mode, or date.
            <br />
            <br />
            Menu items and categories can be added, edited, or removed instantly,
            ensuring quick updates without disrupting operations. With real-time
            visibility and actionable insights, the admin dashboard empowers
            decision-makers to run their restaurant efficiently and confidently.
          </p>
        </div>
      </div>
      <div className="section reverse">
      <div className="image-container kitchen">
        <img src= {AdminEdit} alt="Add and Edit Menu Item" />
      </div>
      <div className="content">
        <h2>Add & Edit Menu Items Effortlessly</h2>
        <p>
          Easily create, update, and manage menu items with a structured and
          user-friendly editor. Restaurant admins can define item names, prices,
          preparation time, dietary type, nutritional values, and descriptions
          all from a single screen.
          <br />
          <br />
          Rich media support allows uploading images and videos, while ingredient
          tagging ensures transparency for customers. This streamlined workflow
          makes menu updates fast, accurate, and consistent across all ordering
          platforms—without interrupting daily operations.
        </p>
      </div>
    </div>
    </>
  );
};

export default AdminDashboardSection;
