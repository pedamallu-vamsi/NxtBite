function WaiterSection() {
  return (
    <>
      <div className="section">
        <div className="image-container">
          <img src="\Images\WaiterTables.jpeg"  alt="Waiter Table List" />
        </div>
        <div className="content">
          <h2>Smart Table Management</h2>
          <p>
            Manage every table in your restaurant from a single, intuitive dashboard.
            Waiters get a real-time overview of all tables, including order status,
            guest count, preparation progress, and delivery state.
            This eliminates confusion during peak hours and helps staff prioritize
            service efficiently, ensuring faster table turnover and a smoother dining
            experience for customers.
          </p>
        </div>
      </div>
      <div className="section reverse">
        <div className="image-container">
          <img src="\Images\WaiterStatus.jpeg" alt="Order Details" />
        </div>
        <div className="content">
          <h2>Detailed Order Tracking</h2>
          <p>
            Track every order down to the individual dish with live status updates.
            Waiters can see which items are received, being prepared, or ready to serve,
            and mark them as delivered instantly.
            This seamless coordination between the floor staff and kitchen reduces delays,
            prevents missed items, and ensures accurate order fulfillment for every table.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="image-container">
          <img src="\Images\WaiterNotification.jpeg" alt="Notifications" />
        </div>
        <div className="content">
          <h2>Instant Notifications</h2>
          <p>
            Stay informed with real-time notifications for order updates, kitchen status
            changes, and service alerts.
            Waiters receive instant updates directly on their dashboard, allowing them
            to respond faster to customer needs.
            With fewer interruptions and better communication, your team delivers
            consistent, high-quality service throughout the day.
          </p>
        </div>
      </div>
    </>
  );
};

export default WaiterSection;



