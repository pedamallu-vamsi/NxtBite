import ClientPhone from "../Images/ClientPhone.jpeg";
import ClientHomePage from "../Images/ClientHomePage.jpeg";
import ClientAI from "../Images/ClientAI.jpeg";
import ClientRealTime from "../Images/ClientRealTime.jpeg";
import ClientSummary from "../Images/ClientSummary.jpeg";
import ClientFinal from "../Images/ClientFinal.jpeg";
import ClientOrderTrack from "../Images/ClientOrderTrack.jpeg";
import ClientNutrition from "../Images/ClientNutrition.jpeg";

function ClientSection() {
  return (
    <>

      <div className="section-heading">

        <h1>Client Dashboard</h1>
        <p>
          The first digital touchpoint for guests—designed to enable instant
          access, capture customer data, and begin the ordering journey without
          friction.
        </p>
      </div>


      <div className="section">

        <div className="image-container tall-phone">
          <img src= {ClientPhone} alt="Customer Acquisition Flow" />
        </div>

        <div className="content">
          <h2>Customer Acquisition</h2>
          <p>
            <strong>Frictionless Start</strong>
            <br />
            QR-based access allows customers to instantly view the menu and start
            ordering—without installing any app. This removes entry barriers and
            ensures zero drop-offs at the table.
            <br /><br />

            <strong>Data Capture Priority</strong>
            <br />
            Mobile number and OTP sign-in convert anonymous walk-in diners into
            identifiable, marketable customers. Every visit becomes an opportunity
            for loyalty, offers, and repeat engagement.
            <br /><br />

            <strong>Revenue Assurance</strong>
            <br />
            The “Continue as Guest” option acts as a fail-safe, ensuring no order
            is lost even if the customer skips sign-in. Convenience is never
            sacrificed for conversion.
            <br /><br />

            <strong>Impulse Sales Enablement</strong>
            <br />
            Dynamic Chef’s Specials and visual highlights trigger instant cravings,
            driving high-margin upsells at the moment of decision—when customers
            are most likely to add more.
          </p>
        </div>

      </div>


       <div className="section reverse">

        <div className="image-container tall-phone">
        <img
          src= {ClientHomePage}
          alt="Intelligent Ordering and Group Experience"
        />
      </div>

      <div className="content">
        <h2>Intelligent Ordering & Collaborative Experience</h2>
        <p>
          <strong>AI-Powered Recommendations</strong>
          <br />
          The “Mood” AI assistant accelerates decision-making by suggesting
          personalized dishes based on customer preferences such as taste,
          health, or cravings—resulting in faster orders and higher satisfaction.
          <br /><br />

          <strong>Seamless Group Ordering</strong>
          <br />
          A shared table code enables all guests to add items from their own
          devices into a single live cart. This eliminates waiting, confusion,
          and back-and-forth coordination at the table.
          <br /><br />

          <strong>Optimized Discovery</strong>
          <br />
          Category tabs and intelligent menu organization allow customers to
          quickly explore dishes, compare options, and find what they want
          without friction.
          <br /><br />

          <strong>High-Impact Promotion</strong>
          <br />
          Chef’s Special banners use strong visuals and strategic placement to
          highlight top-selling and high-margin items—driving impulse additions
          at the moment of choice.
        </p>
      </div>

    </div>


       <div className="section">

      <div className="image-container tall-phone">
        <img
          src= {ClientAI}
          alt="Mood AI Personalized Ordering"
        />
      </div>

      <div className="content">
        <h2>AI-Powered Personalization with Mood Bot</h2>
        <p>
          <strong>Accelerated Sales</strong>
          <br />
          The “Mood” AI bot helps customers discover dishes based on intent—
          such as comfort food, healthy options, or quick snacks—reducing
          decision time and speeding up order placement.
          <br /><br />

          <strong>Enhanced Customer Experience</strong>
          <br />
          By guiding diners with conversational prompts and contextual
          suggestions, Mood delivers a personalized, intuitive ordering
          experience that feels natural and engaging.
          <br /><br />

          <strong>Higher Order Confidence</strong>
          <br />
          Customers feel more confident in their choices when recommendations
          align with their preferences, leading to smoother ordering,
          higher satisfaction, and increased likelihood of add-ons.
        </p>
      </div>

    </div>


     <div className="section reverse">

      <div className="image-container tall-phone">
        <img
          src= {ClientRealTime}
          alt="Real-time Order Management and Cart Summary"
        />
      </div>

      <div className="content">
        <h2>Real-time Order Management & Cart Summary</h2>
        <p>
          <strong>Transparency Drives Trust</strong>
          <br />
          Customers can instantly view itemized totals by category—such as
          Starters, Main Course, and Dessert—while adding items, eliminating
          confusion and building confidence in the order.
          <br /><br />

          <strong>Accurate AOV Tracking</strong>
          <br />
          A continuously visible running total helps diners track group budgets
          in real time and naturally encourages reaching spend thresholds.
          <br /><br />

          <strong>Rapid Cart Adjustment</strong>
          <br />
          Simple one-tap Add and Remove controls make it effortless to modify
          quantities, enabling quick customization without slowing the flow.
          <br /><br />

          <strong>Smooth Checkout Flow</strong>
          <br />
          A prominently placed “View Cart” button creates a clear, frictionless
          transition from browsing to checkout—reducing drop-offs at payment.
        </p>
      </div>



    </div>


     <div className="section">

      <div className="image-container tall-phone">
        <img
          src= {ClientSummary}
          alt="View Cart Review and Comparison"
        />
      </div>

      <div className="content">
        <h2>View Cart: Review & Comparison Hub</h2>
        <p>
          <strong>Order Comparison View</strong>
          <br />
          Customers can clearly view all selected items, quantities, and prices
          side-by-side, enabling easy review and comparison before final checkout.
          <br /><br />

          <strong>Customization Control</strong>
          <br />
          Dedicated customization inputs allow guests to specify preferences
          such as “less spicy” or ingredient adjustments, reducing kitchen errors
          and minimizing food waste.
          <br /><br />

          <strong>Product Transparency</strong>
          <br />
          Instant access to ingredients and allergen information builds customer
          trust while significantly reducing clarification requests to staff.
          <br /><br />

          <strong>Final Review & Confirmation</strong>
          <br />
          Clear “Add More” and “Confirm” actions guide customers toward quick,
          confident decision-making and efficient order placement.
        </p>
      </div>

    </div>


     <div className="section reverse">

      <div className="image-container tall-phone">
        <img
          src= {ClientFinal}
          alt="Order Finalization and Service Control"
        />
      </div>

      <div className="content">
        <h2>Order Finalization & Service Control</h2>
        <p>
          <strong>Drag-to-Reorder Functionality</strong>
          <br />
          Customers can rearrange the serving order of items—such as starters
          first—directly from the order list, helping kitchens sequence
          preparation correctly and improving table service flow.
          <br /><br />

          <strong>Pre-Submission Review</strong>
          <br />
          A clear, comprehensive view of all selected items before placing the
          order ensures accuracy and reduces last-minute corrections.
          <br /><br />

          <strong>Immediate Action Points</strong>
          <br />
          Prominent “Add More” and “Place Order” actions guide users to make
          quick decisions, accelerating order completion without confusion.
        </p>
      </div>


    </div>


     <div className="section">

      <div className="image-container tall-phone">
        <img
          src = {ClientOrderTrack}
          alt="Real-time Order Tracking and Service Access"
        />
      </div>

      <div className="content">
        <h2>Real-time Order Tracking & Service Access</h2>
        <p>
          <strong>Group Order Accountability</strong>
          <br />
          Each item clearly shows who added it, providing transparency for
          group orders and making bill splitting simple and dispute-free.
          <br /><br />

          <strong>Zero Wait Time Visibility</strong>
          <br />
          Customers can view the live status of every ordered item, eliminating
          uncertainty and significantly reducing “Where is my order?” queries.
          <br /><br />

          <strong>Instant Service Calls</strong>
          <br />
          One-tap access to Bill, Service, and Water requests is available from
          every screen, enabling faster responses and smoother table service.
          <br /><br />

          <strong>Nutrition Transparency</strong>
          <br />
          The “Check your Nutrition Balance” feature promotes healthier
          decision-making while creating an engaging, value-added experience
          for diners.
        </p>
      </div>

    </div>


    <div className="section reverse">

      <div className="image-container tall-phone">
        <img
          src = {ClientNutrition}
          alt="Nutrition Transparency and Wellness"
        />
      </div>

      <div className="content">
        <h2>Nutrition Transparency & Wellness</h2>
        <p>
          <strong>Promote Healthy Choices</strong>
          <br />
          Customers can view real-time nutrition insights for their entire
          order, including total calories and macro distribution across
          carbohydrates, proteins, and fats.
          <br /><br />

          <strong>Informed Decision-Making</strong>
          <br />
          Visual indicators help diners understand the nutritional impact of
          their choices, encouraging balanced meals without disrupting the
          ordering flow.
          <br /><br />

          <strong>Wellness Engagement</strong>
          <br />
          Interactive nutrition feedback transforms ordering into a value-added
          experience, increasing customer trust and long-term engagement with
          the brand.
        </p>
      </div>

    </div>
    </>
  );
};

export default ClientSection;
