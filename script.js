// ================================
// CUSTOMERPULSE AI
// INTERACTIVE AI PRODUCT LOGIC
// ================================


// CUSTOMER DATA
const customers = {
  "Sarah Johnson": {
    risk: 92,
    reasons: [
      "Product engagement dropped by 72% in the last 30 days.",
      "No product login activity for the last 12 days.",
      "Two support tickets are still unresolved.",
      "Customer sentiment recently changed from positive to negative."
    ],
    action:
      "Contact Sarah immediately, resolve support issues, and schedule a personalized success call."
  },

  "Michael Chen": {
    risk: 87,
    reasons: [
      "Product usage has decreased significantly.",
      "Customer has reduced activity over the last 3 weeks.",
      "One recent support interaction showed negative sentiment.",
      "Subscription renewal is approaching soon."
    ],
    action:
      "Schedule a check-in call and identify any product or support issues before renewal."
  },

  "Alex Rodriguez": {
    risk: 68,
    reasons: [
      "Product engagement has gradually declined.",
      "Feature usage is lower than similar customers.",
      "Customer has not explored recently released features.",
      "Engagement should be monitored closely."
    ],
    action:
      "Send personalized feature recommendations and schedule a product success check-in."
  },

  "Emma Williams": {
    risk: 54,
    reasons: [
      "Recent product activity is moderately lower.",
      "Customer engagement has slowed during the last month.",
      "Some important features are not being used.",
      "No major support issues have been detected."
    ],
    action:
      "Send a personalized engagement campaign and monitor activity for the next 14 days."
  }
};


// ================================
// SCROLL TO AT-RISK CUSTOMERS
// ================================

function scrollToRiskCustomers() {
  document
    .getElementById("customers")
    .scrollIntoView({ behavior: "smooth" });
}


// ================================
// ANALYZE CUSTOMER WITH AI
// ================================

function analyzeCustomer(name, risk) {

  const customer = customers[name];

  document.getElementById("modalCustomerName").textContent = name;

  document.getElementById("modalRiskScore").textContent =
    risk + "%";


  // CHANGE RISK MESSAGE

  const riskMessage = document.querySelector(".risk-summary p");

  if (risk >= 80) {
    riskMessage.textContent =
      "High probability of churn detected — immediate intervention recommended.";
  }

  else if (risk >= 60) {
    riskMessage.textContent =
      "Moderate churn risk detected — proactive engagement recommended.";
  }

  else {
    riskMessage.textContent =
      "Customer should be monitored for changes in engagement.";
  }


  // AI REASONS

  const reasonsList =
    document.getElementById("riskReasons");

  reasonsList.innerHTML = "";

  customer.reasons.forEach((reason) => {

    const li = document.createElement("li");

    li.textContent = reason;

    reasonsList.appendChild(li);

  });


  // CHANGE MODAL RISK COLOR

  const riskScore =
    document.getElementById("modalRiskScore");

  if (risk >= 80) {
    riskScore.style.color = "#f87171";
  }

  else if (risk >= 60) {
    riskScore.style.color = "#facc15";
  }

  else {
    riskScore.style.color = "#4ade80";
  }


  // SHOW MODAL

  document
    .getElementById("analysisModal")
    .classList.add("show");

}


// ================================
// CLOSE MODAL
// ================================

function closeModal() {

  document
    .getElementById("analysisModal")
    .classList.remove("show");

}


// CLOSE MODAL WHEN CLICKING OUTSIDE

window.addEventListener("click", function (event) {

  const modal =
    document.getElementById("analysisModal");

  if (event.target === modal) {

    closeModal();

  }

});


// ================================
// RETENTION PLAN
// ================================

function startRetentionPlan() {

  closeModal();

  alert(
    "🤖 Pulse AI Retention Plan Activated!\n\n" +
    "Priority customer outreach has been added to today's action queue.\n\n" +
    "Next step: Contact the customer within 24 hours."
  );

}


// ================================
// GENERATE NEW AI INSIGHT
// ================================

const insights = [

  {
    title: "ENGAGEMENT PATTERN DETECTED",
    heading:
      "Low feature adoption is becoming a major early churn signal.",
    details: [
      "41% of high-risk customers are using fewer than three core features.",
      "Customers who complete onboarding have a 36% lower churn risk.",
      "AI recommends launching a personalized feature adoption campaign."
    ]
  },

  {
    title: "SUPPORT RISK DETECTED",
    heading:
      "Unresolved support issues are increasing customer churn probability.",
    details: [
      "Customers with unresolved tickets show significantly higher churn risk.",
      "Response delays are strongly correlated with negative sentiment.",
      "AI recommends prioritizing high-risk customer support tickets."
    ]
  },

  {
    title: "USAGE DECLINE DETECTED",
    heading:
      "A sharp drop in product activity often occurs before customer churn.",
    details: [
      "Product usage typically decreases 2–4 weeks before cancellation.",
      "High-risk customers show an average 47% engagement decline.",
      "AI recommends proactive outreach after significant activity drops."
    ]
  }

];


let currentInsight = 0;


function generateInsights() {

  currentInsight =
    (currentInsight + 1) % insights.length;

  const insight = insights[currentInsight];


  const highlight =
    document.querySelector(".insight-highlight");

  highlight.querySelector("span").textContent =
    insight.title;

  highlight.querySelector("h3").textContent =
    insight.heading;


  const rows =
    document.querySelectorAll(".insight-row p");

  rows.forEach((row, index) => {

    row.textContent =
      insight.details[index];

  });


  alert("✨ New AI insight generated successfully!");

}


// ================================
// VIEW ALL CUSTOMERS
// ================================

function showAllCustomers() {

  alert(
    "👥 Customer Database\n\n" +
    "Total Customers: 1,248\n" +
    "High Risk: 86\n" +
    "Medium Risk: 142\n" +
    "Healthy: 1,020\n\n" +
    "CustomerPulse AI is continuously monitoring customer health."
  );

}


// ================================
// AI COPILOT
// ================================

function toggleCopilot() {

  document
    .getElementById("copilotBox")
    .classList.toggle("show");

}


// ================================
// SEND CHAT MESSAGE
// ================================

function sendMessage() {

  const input =
    document.getElementById("chatInput");

  const message =
    input.value.trim();


  if (message === "") return;


  const chatArea =
    document.getElementById("chatArea");


  // USER MESSAGE

  const userMessage =
    document.createElement("div");

  userMessage.className =
    "user-message";

  userMessage.textContent =
    message;

  chatArea.appendChild(userMessage);


  input.value = "";


  // AI THINKING MESSAGE

  const thinking =
    document.createElement("div");

  thinking.className =
    "ai-message";

  thinking.textContent =
    "✦ Pulse AI is analyzing customer intelligence...";

  chatArea.appendChild(thinking);


  chatArea.scrollTop =
    chatArea.scrollHeight;


  // AI RESPONSE

  setTimeout(() => {

    thinking.remove();

    const response =
      generateAIResponse(message);


    const aiMessage =
      document.createElement("div");

    aiMessage.className =
      "ai-message";

    aiMessage.textContent =
      "🤖 " + response;


    chatArea.appendChild(aiMessage);

    chatArea.scrollTop =
      chatArea.scrollHeight;

  }, 800);

}


// ================================
// AI RESPONSE ENGINE
// ================================

function generateAIResponse(message) {

  const text =
    message.toLowerCase();


  // HIGH RISK

  if (
    text.includes("high risk") ||
    text.includes("risk customer") ||
    text.includes("who should")
  ) {

    return (
      "Sarah Johnson and Michael Chen require immediate attention. " +
      "Sarah has a 92% churn risk due to a major engagement drop and unresolved support issues. " +
      "Michael has an 87% churn risk and should be contacted before subscription renewal."
    );

  }


  // CHURN

  if (
    text.includes("churn") ||
    text.includes("leave") ||
    text.includes("retention")
  ) {

    return (
      "The strongest churn signals currently detected are declining product usage, " +
      "unresolved support issues, negative customer sentiment, and reduced engagement. " +
      "The AI recommends proactive outreach before these signals become critical."
    );

  }


  // SARAH

  if (
    text.includes("sarah")
  ) {

    return (
      "Sarah Johnson has the highest churn risk at 92%. " +
      "Her engagement dropped by 72%, she has not logged in for 12 days, " +
      "and two support tickets remain unresolved. Immediate outreach is recommended."
    );

  }


  // SUPPORT

  if (
    text.includes("support") ||
    text.includes("ticket")
  ) {

    return (
      "Support issues are currently one of the strongest churn indicators. " +
      "63% of high-risk customers have unresolved support interactions. " +
      "Prioritizing these tickets could significantly reduce churn risk."
    );

  }


  // ACTION

  if (
    text.includes("action") ||
    text.includes("today") ||
    text.includes("do")
  ) {

    return (
      "Today's top action: Contact Sarah Johnson first, resolve her support issues, " +
      "then schedule a personalized success call. Next, reach out to Michael Chen before his renewal period."
    );

  }


  // DEFAULT RESPONSE

  return (
    "Based on current customer intelligence, the highest priority is proactive engagement. " +
    "I can help you identify at-risk customers, explain churn signals, or recommend retention actions."
  );

}


// ================================
// ENTER KEY
// ================================

function handleEnter(event) {

  if (event.key === "Enter") {

    sendMessage();

  }

}
// ==========================================
// DYNAMIC CUSTOMERPULSE AI RISK ENGINE
// ==========================================

function runRiskAnalysis() {

  // GET INPUT VALUES
  const name =
    document.getElementById("analyzerName").value.trim() || "New Customer";

  const lastLogin =
    Number(document.getElementById("lastLogin").value) || 0;

  const engagement =
    Number(document.getElementById("engagement").value);

  const tickets =
    Number(document.getElementById("supportTickets").value) || 0;

  const renewal =
    Number(document.getElementById("renewalDays").value) || 999;

  const sentiment =
    document.getElementById("sentiment").value;

  const revenue =
    Number(document.getElementById("monthlyRevenue").value) || 0;


  // VALIDATE ENGAGEMENT
  if (
    document.getElementById("engagement").value === "" ||
    engagement < 0 ||
    engagement > 100
  ) {
    alert("Please enter a valid Product Engagement percentage (0–100).");
    return;
  }


  // RISK SCORE
  let risk = 0;

  const breakdown = [];
  const reasons = [];


  // 1. LAST LOGIN

  if (lastLogin >= 30) {

    risk += 30;

    breakdown.push({
      label: "No login for 30+ days",
      points: 30
    });

    reasons.push(
      `Customer has not logged in for ${lastLogin} days.`
    );

  }

  else if (lastLogin >= 14) {

    risk += 20;

    breakdown.push({
      label: "Inactive for 14+ days",
      points: 20
    });

    reasons.push(
      `Customer has been inactive for ${lastLogin} days.`
    );

  }

  else if (lastLogin >= 7) {

    risk += 10;

    breakdown.push({
      label: "Reduced recent activity",
      points: 10
    });

    reasons.push(
      `Customer has not logged in for ${lastLogin} days.`
    );

  }


  // 2. ENGAGEMENT

  if (engagement < 30) {

    risk += 30;

    breakdown.push({
      label: "Very low product engagement",
      points: 30
    });

    reasons.push(
      `Product engagement is critically low at ${engagement}%.`
    );

  }

  else if (engagement < 50) {

    risk += 20;

    breakdown.push({
      label: "Low product engagement",
      points: 20
    });

    reasons.push(
      `Product engagement is low at ${engagement}%.`
    );

  }

  else if (engagement < 70) {

    risk += 10;

    breakdown.push({
      label: "Declining engagement",
      points: 10
    });

    reasons.push(
      `Product engagement is moderate at ${engagement}%.`
    );

  }


  // 3. SUPPORT TICKETS

  if (tickets >= 3) {

    risk += 20;

    breakdown.push({
      label: "Multiple unresolved support tickets",
      points: 20
    });

    reasons.push(
      `${tickets} support tickets are currently unresolved.`
    );

  }

  else if (tickets >= 1) {

    risk += 10;

    breakdown.push({
      label: "Unresolved support issue",
      points: 10
    });

    reasons.push(
      `${tickets} support ticket requires attention.`
    );

  }


  // 4. SENTIMENT

  if (sentiment === "negative") {

    risk += 20;

    breakdown.push({
      label: "Negative customer sentiment",
      points: 20
    });

    reasons.push(
      "Recent customer sentiment is negative."
    );

  }

  else if (sentiment === "neutral") {

    risk += 8;

    breakdown.push({
      label: "Neutral customer sentiment",
      points: 8
    });

    reasons.push(
      "Customer sentiment is neutral and should be monitored."
    );

  }


  // 5. RENEWAL

  if (renewal <= 7) {

    risk += 15;

    breakdown.push({
      label: "Renewal approaching soon",
      points: 15
    });

    reasons.push(
      `Subscription renewal is in ${renewal} days.`
    );

  }

  else if (renewal <= 30) {

    risk += 8;

    breakdown.push({
      label: "Renewal approaching",
      points: 8
    });

    reasons.push(
      `Subscription renewal is approaching in ${renewal} days.`
    );

  }


  // CAP RISK AT 100
  risk = Math.min(risk, 100);


  // ADD POSITIVE SIGNAL IF HEALTHY

  if (reasons.length === 0) {

    reasons.push(
      "Customer signals currently indicate healthy engagement."
    );

    breakdown.push({
      label: "Healthy customer signals",
      points: 0
    });

  }


  // DETERMINE RISK LEVEL

  let riskLevel;
  let statusColor;
  let backgroundColor;
  let action;


  if (risk >= 70) {

    riskLevel = "HIGH RISK";

    statusColor = "#f87171";

    backgroundColor =
      "rgba(239, 68, 68, 0.1)";

    action =
      `Immediately contact ${name}, investigate the key issues, resolve unresolved support problems, and schedule a personalized customer success call.`;

  }

  else if (risk >= 40) {

    riskLevel = "MEDIUM RISK";

    statusColor = "#facc15";

    backgroundColor =
      "rgba(234, 179, 8, 0.1)";

    action =
      `Proactively engage ${name}, recommend relevant features, and monitor activity closely over the next 7–14 days.`;

  }

  else {

    riskLevel = "LOW RISK";

    statusColor = "#4ade80";

    backgroundColor =
      "rgba(34, 197, 94, 0.1)";

    action =
      `Maintain regular engagement with ${name}, continue monitoring product usage, and identify opportunities to increase feature adoption.`;

  }


  // UPDATE CUSTOMER NAME

  document.getElementById("resultCustomerName").textContent =
    name;


  // UPDATE RISK SCORE

  document.getElementById("dynamicRiskScore").textContent =
    risk + "%";


  // UPDATE RISK CIRCLE

  const riskCircle =
    document.getElementById("riskCircle");

  riskCircle.style.borderColor =
    statusColor;

  riskCircle.style.color =
    statusColor;

  riskCircle.style.background =
    backgroundColor;


  // UPDATE STATUS

  const riskStatus =
    document.getElementById("dynamicRiskStatus");

  riskStatus.textContent =
    riskLevel;

  riskStatus.style.color =
    statusColor;

  riskStatus.style.background =
    backgroundColor;


  // UPDATE SCORE BREAKDOWN

  const breakdownContainer =
    document.getElementById("scoreBreakdownList");

  breakdownContainer.innerHTML = "";

  breakdown.forEach((item) => {

    const row =
      document.createElement("div");

    row.className =
      "score-item";

    row.innerHTML =
      `<span>${item.label}</span>
       <span class="score-points">+${item.points}</span>`;

    breakdownContainer.appendChild(row);

  });


  // UPDATE REASONS

  const reasonsList =
    document.getElementById("dynamicReasons");

  reasonsList.innerHTML = "";

  reasons.forEach((reason) => {

    const li =
      document.createElement("li");

    li.textContent =
      reason;

    reasonsList.appendChild(li);

  });


  // UPDATE ACTION

  document.getElementById(
    "dynamicActionText"
  ).textContent = action;


  // HIDE EMPTY STATE

  document.getElementById(
    "resultEmpty"
  ).style.display = "none";


  // SHOW RESULTS

  document.getElementById(
    "analysisResult"
  ).classList.add("show");


  // SMOOTH SCROLL ON MOBILE

  if (window.innerWidth < 900) {

    document
      .getElementById("analysisResult")
      .scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

  }


  // CONSOLE LOG FOR DEMO / DEVELOPMENT

  console.log({
    customer: name,
    churnRisk: risk,
    riskLevel: riskLevel,
    monthlyRevenue: revenue,
    riskSignals: reasons
  });

}
// ==========================================
// AI RETENTION STRATEGY GENERATOR
// ==========================================

function generateRetentionStrategy() {

  const customerName =
    document.getElementById(
      "resultCustomerName"
    ).textContent;

  const riskText =
    document.getElementById(
      "dynamicRiskScore"
    ).textContent;

  const risk =
    Number(
      riskText.replace("%", "")
    );


  const strategyContainer =
    document.getElementById(
      "retentionStrategy"
    );


  let strategyHTML = "";

  let expectedRisk;


  // ========================================
  // HIGH RISK STRATEGY
  // ========================================

  if (risk >= 70) {

    expectedRisk =
      Math.max(risk - 28, 35);


    strategyHTML = `

      <div class="strategy-title">

        <h3>
          🚨 High Priority Recovery Plan
        </h3>

        <span class="strategy-badge">
          AI GENERATED
        </span>

      </div>


      <div class="strategy-step">

        <div class="strategy-number">
          01
        </div>

        <div>

          <h5>
            Immediate Intervention
          </h5>

          <p>
            Contact ${customerName} within
            the next 24 hours and investigate
            the primary churn signals.
          </p>

        </div>

      </div>


      <div class="strategy-step">

        <div class="strategy-number">
          02
        </div>

        <div>

          <h5>
            Resolve Customer Issues
          </h5>

          <p>
            Prioritize unresolved support
            concerns before they negatively
            impact the renewal decision.
          </p>

        </div>

      </div>


      <div class="strategy-step">

        <div class="strategy-number">
          03
        </div>

        <div>

          <h5>
            Personalized Success Call
          </h5>

          <p>
            Schedule a one-to-one customer
            success session and identify
            product adoption barriers.
          </p>

        </div>

      </div>


      <div class="strategy-step">

        <div class="strategy-number">
          04
        </div>

        <div>

          <h5>
            Engagement Recovery Plan
          </h5>

          <p>
            Recommend relevant product
            features and create a personalized
            engagement plan for the next
            7 days.
          </p>

        </div>

      </div>


      <div class="strategy-impact">

        <span>
          📉 ESTIMATED AI IMPACT
        </span>

        <strong>
          Churn risk could improve from
          ${risk}% → ${expectedRisk}%
        </strong>

      </div>

    `;

  }


  // ========================================
  // MEDIUM RISK STRATEGY
  // ========================================

  else if (risk >= 40) {

    expectedRisk =
      Math.max(risk - 18, 20);


    strategyHTML = `

      <div class="strategy-title">

        <h3>
          ⚠ Proactive Retention Plan
        </h3>

        <span class="strategy-badge">
          AI GENERATED
        </span>

      </div>


      <div class="strategy-step">

        <div class="strategy-number">
          01
        </div>

        <div>

          <h5>
            Proactive Outreach
          </h5>

          <p>
            Reach out to ${customerName}
            before engagement declines further.
          </p>

        </div>

      </div>


      <div class="strategy-step">

        <div class="strategy-number">
          02
        </div>

        <div>

          <h5>
            Feature Recommendations
          </h5>

          <p>
            Suggest relevant features based
            on customer behavior and usage.
          </p>

        </div>

      </div>


      <div class="strategy-step">

        <div class="strategy-number">
          03
        </div>

        <div>

          <h5>
            Monitor Engagement
          </h5>

          <p>
            Monitor customer activity over
            the next 7–14 days and trigger
            intervention if risk increases.
          </p>

        </div>

      </div>


      <div class="strategy-impact">

        <span>
          📈 ESTIMATED AI IMPACT
        </span>

        <strong>
          Churn risk could improve from
          ${risk}% → ${expectedRisk}%
        </strong>

      </div>

    `;

  }


  // ========================================
  // LOW RISK STRATEGY
  // ========================================

  else {

    expectedRisk =
      Math.max(risk - 8, 0);


    strategyHTML = `

      <div class="strategy-title">

        <h3>
          ✅ Customer Growth Plan
        </h3>

        <span class="strategy-badge">
          AI GENERATED
        </span>

      </div>


      <div class="strategy-step">

        <div class="strategy-number">
          01
        </div>

        <div>

          <h5>
            Maintain Engagement
          </h5>

          <p>
            Continue regular communication
            and maintain healthy product usage.
          </p>

        </div>

      </div>


      <div class="strategy-step">

        <div class="strategy-number">
          02
        </div>

        <div>

          <h5>
            Identify Growth Opportunities
          </h5>

          <p>
            Recommend advanced features
            that could increase product value.
          </p>

        </div>

      </div>


      <div class="strategy-impact">

        <span>
          🎯 AI RECOMMENDATION
        </span>

        <strong>
          Maintain healthy customer
          engagement and monitor signals.
        </strong>

      </div>

    `;

  }


  // ========================================
  // SHOW STRATEGY
  // ========================================

  strategyContainer.innerHTML =
    strategyHTML;

  strategyContainer.classList.add(
    "show"
  );


  // ========================================
  // SCROLL TO STRATEGY
  // ========================================

  setTimeout(() => {

    strategyContainer.scrollIntoView({

      behavior: "smooth",

      block: "nearest"

    });

  }, 100);

}
function startRetentionPlan() {

    const strategySection = document.querySelector(
        ".retention-strategy-section"
    );

    if (strategySection) {

        strategySection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        setTimeout(() => {
            generateRetentionStrategy();
        }, 700);

    }

}
// ==========================================
// WHAT-IF AI RISK SIMULATOR
// ==========================================

function simulateRiskImpact() {

    // Get current AI risk score
    const riskElement =
        document.getElementById("dynamicRiskScore");

    let currentRisk = 0;


    if (riskElement) {

        currentRisk = parseInt(
            riskElement.textContent.replace("%", "")
        );

    }


    // If no analysis has happened yet
    if (!currentRisk || isNaN(currentRisk)) {

        alert(
            "🤖 Please analyze a customer first using the Live Customer Risk Analyzer."
        );

        return;

    }


    // Show current risk
    document.getElementById(
        "whatIfCurrentRisk"
    ).textContent = currentRisk + "%";


    // Get selected improvements
    const selectedOptions =
        document.querySelectorAll(
            ".whatif-option input:checked"
        );


    if (selectedOptions.length === 0) {

        alert(
            "Please select at least one improvement to simulate."
        );

        return;

    }


    let riskReduction = 0;

    const improvements = [];


    selectedOptions.forEach(option => {

        if (option.value === "tickets") {

            riskReduction += 20;

            improvements.push(
                "resolving support issues"
            );

        }


        if (option.value === "engagement") {

            riskReduction += 25;

            improvements.push(
                "increasing engagement"
            );

        }


        if (option.value === "sentiment") {

            riskReduction += 15;

            improvements.push(
                "improving customer sentiment"
            );

        }


        if (option.value === "login") {

            riskReduction += 10;

            improvements.push(
                "increasing login activity"
            );

        }

    });


    // Prevent unrealistic risk below 5%
    const predictedRisk =
        Math.max(
            currentRisk - riskReduction,
            5
        );


    // Show predicted risk
    document.getElementById(
        "whatIfPredictedRisk"
    ).textContent =
        predictedRisk + "%";


    // Create AI insight
    const insight =
        `🧠 AI simulation suggests that ${improvements.join(", ")} ` +
        `could reduce churn risk from ${currentRisk}% to approximately ${predictedRisk}%.`;


    document.getElementById(
        "whatIfInsight"
    ).textContent = insight;

}
function startDynamicRetentionPlan() {

  const customerName =
    document.getElementById("resultCustomerName").textContent;

  const riskScore =
    document.getElementById("dynamicRiskScore").textContent;

  if (!riskScore || riskScore === "0%") {
    alert("🤖 Please analyze a customer first.");
    return;
  }

  alert(
    "🚀 Retention Action Initiated!\n\n" +
    "Customer: " + customerName + "\n" +
    "Current Churn Risk: " + riskScore + "\n\n" +
    "✓ Priority outreach initiated\n" +
    "✓ Customer success follow-up scheduled\n" +
    "✓ Retention workflow activated successfully"
  );

  const buttons =
    document.querySelectorAll(".dynamic-action-btn");

  buttons.forEach((button) => {
    button.innerHTML = "✓ Action Initiated";
    button.disabled = true;
    button.style.opacity = "0.7";
  });
}
