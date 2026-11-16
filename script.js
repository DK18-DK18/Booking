
/* ===================================
   ENTERPRISE DASHBOARD
   Main JavaScript
=================================== */

const pageView = document.getElementById("pageView");
const headerTitle = document.getElementById("headerTitle");
const breadcrumbTitle = document.getElementById("breadcrumbTitle");
const sidebar = document.getElementById("sidebar");

const navItems = document.querySelectorAll(".nav-item");

const modules = [
    {
        name: "Setup",
        icon: "settings",
        description: "Configure and manage your enterprise system."
    },
    {
        name: "Admin",
        icon: "clipboard-list",
        description: "Manage users, roles and administration."
    },
    {
        name: "Export",
        icon: "file-up",
        description: "Export and download enterprise data."
    },
    {
        name: "Import",
        icon: "file-down",
        description: "Import your business data."
    },
    {
        name: "Report",
        icon: "file-chart-column",
        description: "View business reports and analytics."
    },
    {
        name: "Custom",
        icon: "globe",
        description: "Manage customized system modules."
    },
    {
        name: "Finance",
        icon: "wallet",
        description: "Manage financial operations."
    },
    {
        name: "AGS",
        icon: "truck",
        description: "Manage logistics and AGS operations."
    }
];


/* DASHBOARD HTML */

function dashboardPage() {

    return `

    <div class="welcome">

        <div>
            <h1>Welcome back, Administrator!</h1>
            <p>Here's what's happening with your system today.</p>
        </div>

        <button class="primary-btn" id="quickActionBtn">
            <i data-lucide="plus"></i>
            Quick Action
        </button>

    </div>


    <div class="stats-grid">

        <div class="stat-card">
            <div class="stat-icon purple">
                <i data-lucide="layers"></i>
            </div>

            <div class="stat-label">Total Modules</div>
            <div class="stat-value">08</div>
            <div class="stat-note">All modules available</div>
        </div>


        <div class="stat-card">
            <div class="stat-icon blue">
                <i data-lucide="users"></i>
            </div>

            <div class="stat-label">Active Users</div>
            <div class="stat-value">124</div>
            <div class="stat-note">Sample dashboard data</div>
        </div>


        <div class="stat-card">
            <div class="stat-icon green">
                <i data-lucide="check-circle"></i>
            </div>

            <div class="stat-label">Completed Tasks</div>
            <div class="stat-value">856</div>
            <div class="stat-note">Sample dashboard data</div>
        </div>


        <div class="stat-card">
            <div class="stat-icon orange">
                <i data-lucide="clock"></i>
            </div>

            <div class="stat-label">Pending Tasks</div>
            <div class="stat-value">23</div>
            <div class="stat-note" style="color:#e69a43">
                Awaiting action
            </div>
        </div>

    </div>


    <div class="dashboard-grid">

        <div class="panel">

            <div class="panel-header">
                <h3>System Activity</h3>
                <button class="panel-link">Last 7 days</button>
            </div>

            <div class="chart">

                ${[40,65,50,85,70,95,60].map((height,index) => `
                    <div class="chart-column">
                        <div
                            class="chart-bar"
                            style="height:${height}%;${index===5?'background:#7166dc':''}"
                            title="${height}%"
                        ></div>

                        <small>${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][index]}</small>
                    </div>
                `).join("")}

            </div>

        </div>


        <div class="panel">

            <div class="panel-header">
                <h3>Recent Activities</h3>
                <button class="panel-link" id="activityBtn">View all</button>
            </div>

            ${activityItem("user-plus","New user registered","A new user account was created")}

            ${activityItem("file-up","Data export completed","Export operation completed")}

            ${activityItem("file-check","Report generated","Monthly report is ready")}

            ${activityItem("settings","System configuration","Settings were updated")}

        </div>

    </div>


    <div class="panel">

        <div class="panel-header">
            <h3>Quick Access</h3>
            <button class="panel-link">Explore modules</button>
        </div>

        <div class="quick-grid">

            ${quickCard("clipboard-list","Admin","Manage administration")}

            ${quickCard("file-up","Export","Export your data")}

            ${quickCard("file-down","Import","Import your data")}

            ${quickCard("wallet","Finance","Financial management")}

        </div>

    </div>

    `;
}


/* ACTIVITY COMPONENT */

function activityItem(icon,title,description) {

    return `

        <div class="activity-item">

            <div class="activity-icon">
                <i data-lucide="${icon}"></i>
            </div>

            <div class="activity-info">
                <strong>${title}</strong>
                <p>${description}</p>
            </div>

        </div>

    `;
}


/* QUICK ACCESS COMPONENT */

function quickCard(icon,title,description) {

    return `

        <div class="quick-card" data-goto="${title}">

            <i data-lucide="${icon}"></i>

            <div>
                <strong>${title}</strong>
                <p>${description}</p>
            </div>

        </div>

    `;
}


/* MODULE PAGE */

function modulePage(moduleName) {

    const module = modules.find(m => m.name === moduleName);

    if (!module) return dashboardPage();

    if (moduleName === "Import") {
        return importPage();
    }

    if (moduleName === "Export") {
        return exportPage();
    }

    return `

        <div class="module-header">

            <h1>${module.name} Management</h1>

            <p>${module.description}</p>

        </div>


        <div class="module-grid">

            <div class="module-card">

                <div class="stat-icon purple">
                    <i data-lucide="${module.icon}"></i>
                </div>

                <h3>${module.name} Overview</h3>

                <p>
                    Welcome to the ${module.name} module.
                    Manage your enterprise operations
                    from this workspace.
                </p>

            </div>


            <div class="module-card">

                <div class="stat-icon blue">
                    <i data-lucide="folder"></i>
                </div>

                <h3>Module Configuration</h3>

                <p>
                    Configure module settings and
                    manage related information.
                </p>

            </div>


            <div class="module-card">

                <div class="stat-icon green">
                    <i data-lucide="activity"></i>
                </div>

                <h3>Module Activity</h3>

                <p>
                    Monitor operations and track
                    activities in this module.
                </p>

            </div>

        </div>


        <div class="panel" style="margin-top:20px">

            <div class="panel-header">
                <h3>${module.name} Workspace</h3>
            </div>

            <div class="empty-state">
                <i data-lucide="${module.icon}" style="width:35px;height:35px;margin-bottom:12px"></i>

                <p>
                    Your ${module.name} workspace is ready.
                </p>

                <p style="margin-top:8px">
                    Connect your business data and backend
                    to activate this module.
                </p>
            </div>

        </div>

    `;
}


/* IMPORT PAGE */

function importPage() {

    return `

        <div class="module-header">

            <h1>Import Management</h1>

            <p>Upload CSV files to import your business records.</p>

        </div>


        <div class="panel">

            <h3>Upload CSV File</h3>

            <p style="color:#85869b;font-size:11px;margin-top:10px">
                Select a CSV file from your computer.
            </p>

            <input
                type="file"
                id="csvFile"
                class="file-input"
                accept=".csv,text/csv"
            >

            <div class="module-actions">

                <button class="primary-btn" id="importBtn">
                    <i data-lucide="upload"></i>
                    Import CSV
                </button>

            </div>

            <p id="importStatus" style="margin-top:15px;font-size:11px"></p>

        </div>

    `;
}


/* EXPORT PAGE */

function exportPage() {

    return `

        <div class="module-header">

            <h1>Export Management</h1>

            <p>Download enterprise sample data in CSV format.</p>

        </div>


        <div class="panel">

            <h3>Export Data</h3>

            <p style="font-size:11px;color:#85869b;margin-top:10px">
                Download a sample enterprise report.
            </p>

            <div class="module-actions">

                <button class="primary-btn" id="exportBtn">
                    <i data-lucide="download"></i>
                    Download CSV
                </button>

            </div>

        </div>

    `;
}


/* NAVIGATION */

function navigate(pageName) {

    const selected = modules.find(m => m.name === pageName);

    if (!selected) return;

    // Update active sidebar item

    navItems.forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.page === pageName
        );

    });


    // Update page titles

    headerTitle.textContent = pageName;

    breadcrumbTitle.textContent = pageName;


    // Render selected page

    if (pageName === "Setup") {

        pageView.innerHTML = dashboardPage();

    } else {

        pageView.innerHTML = modulePage(pageName);

    }


    // Refresh icons

    if (window.lucide) {
        lucide.createIcons();
    }


    // Close mobile sidebar

    sidebar.classList.remove("open");


    // Bind dynamic controls

    bindPageEvents();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* SIDEBAR EVENTS */

navItems.forEach(item => {

    item.addEventListener("click", event => {

        event.preventDefault();

        navigate(item.dataset.page);

    });

});


/* QUICK ACCESS EVENTS */

function bindPageEvents() {

    document.querySelectorAll("[data-goto]").forEach(card => {

        card.addEventListener("click", () => {

            navigate(card.dataset.goto);

        });

    });


    const quickAction = document.getElementById("quickActionBtn");

    if (quickAction) {

        quickAction.addEventListener("click", () => {

            showToast("Quick action clicked");

        });

    }


    const importBtn = document.getElementById("importBtn");

    if (importBtn) {

        importBtn.addEventListener("click", importCSV);

    }


    const exportBtn = document.getElementById("exportBtn");

    if (exportBtn) {

        exportBtn.addEventListener("click", exportCSV);

    }


    const activityBtn = document.getElementById("activityBtn");

    if (activityBtn) {

        activityBtn.addEventListener("click", () => {

            showToast("Showing recent activity");

        });

    }

}


/* CSV IMPORT */

function importCSV() {

    const input = document.getElementById("csvFile");

    const status = document.getElementById("importStatus");

    const file = input.files[0];

    if (!file) {

        status.textContent = "Please select a CSV file first.";

        status.style.color = "#d45b5b";

        return;

    }

    if (!file.name.toLowerCase().endsWith(".csv")) {

        status.textContent = "Please select a valid CSV file.";

        status.style.color = "#d45b5b";

        return;

    }

    const reader = new FileReader();

    reader.onload = function(event) {

        const rows = event.target.result.split(/\r?\n/);

        const validRows = rows.filter(row => row.trim()).length;

        status.textContent =
            `CSV file read successfully. ${validRows} rows detected.`;

        status.style.color = "#20a56b";

    };

    reader.onerror = function() {

        status.textContent = "Unable to read the selected file.";

        status.style.color = "#d45b5b";

    };

    reader.readAsText(file);

}


/* CSV EXPORT */

function exportCSV() {

    const csv = [
        ["ID","Name","Department","Status"],
        ["001","John","Admin","Active"],
        ["002","Sarah","Finance","Active"],
        ["003","David","Operations","Pending"]
    ];

    const content = csv.map(row => row.join(",")).join("\n");

    const blob = new Blob(
        [content],
        { type: "text/csv;charset=utf-8;" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "enterprise-report.csv";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

    showToast("CSV downloaded successfully");

}


/* SEARCH MODULES */

const globalSearch = document.getElementById("globalSearch");

globalSearch.addEventListener("input", function() {

    const query = this.value.toLowerCase().trim();

    navItems.forEach(item => {

        const name = item.dataset.page.toLowerCase();

        item.style.display = name.includes(query)
            ? "flex"
            : "none";

    });

});


/* MOBILE MENU */

document.getElementById("menuToggle").addEventListener("click", () => {

    sidebar.classList.toggle("open");

});


/* NOTIFICATIONS */

document.getElementById("notificationBtn").addEventListener("click", () => {

    showToast("You are all caught up!");

});


/* TOAST MESSAGE */

let toastTimer;

function showToast(message) {

    document.querySelector(".toast")?.remove();

    clearTimeout(toastTimer);

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    document.body.appendChild(toast);

    toastTimer = setTimeout(() => {

        toast.remove();

    }, 3000);

}


/* INITIALIZE APPLICATION */

navigate("Setup");
