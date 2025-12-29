import KitchenDashboard from "../Images/KitchenDashboard.jpeg";

function KitchenSection() {
  return (
    <>
      <div className="section-heading">
        <h1>Kitchen Dashboard</h1>
        <p>
          A powerful, real-time workspace designed to help kitchen staff manage
          incoming orders, track preparation progress, and deliver meals faster
          with complete clarity.
        </p>
      </div>
      <div className="section reverse">
        <div className="image-container kitchen">
          <img src= {KitchenDashboard} alt="Kitchen Dashboard" />
        </div>

        <div className="content">
          <h2>Centralized Kitchen Control</h2>
          <p>
            The kitchen dashboard provides a complete, real-time view of all
            incoming and active orders in one centralized workspace. Orders are
            automatically organized based on arrival time, ensuring a
            first-come-first-serve flow that helps kitchen staff prioritize tasks
            efficiently.
            <br />
            <br />
            Each order displays detailed item-level progress, preparation stages,
            and estimated completion time, allowing chefs to stay focused and
            coordinated. This streamlined visibility reduces bottlenecks,
            improves preparation speed, and ensures dishes reach tables exactly
            when they’re ready.
          </p>
        </div>
      </div>
    </>
  );
};

export default KitchenSection;
