import React from "react";
import "../Styles/Dashboard.css";

const navItems = [
    { label: "Dashboard", icon: "◫", route: "dashboard" },
    { label: "My Profile", icon: "◉", route: "profile" },
    { label: "Subjects / Courses", icon: "▣", route: "courses" },
    { label: "Exams", icon: "✓", route: "exams" },
    { label: "Questions & Practice", icon: "✎", route: "practice" },
    { label: "Results & Analytics", icon: "▤", route: "results" },
    { label: "Study Materials", icon: "◍", route: "materials" },
    { label: "Notifications", icon: "◔", route: "notifications" },
    { label: "Settings", icon: "⚙", route: "settings" },
];

const stats = [
    { label: "Courses enrolled", value: "06", trend: "+2 this term" },
    { label: "Study hours", value: "12.4h", trend: "+1.8h this week" },
    { label: "Practice score", value: "89%", trend: "+7% vs last test" },
    { label: "Streak", value: "14 days", trend: "Keep it going" },
];

const upcomingLessons = [
    { title: "Financial Accounting I", time: "09:00 AM", type: "Video lecture" },
    { title: "Taxation Basics", time: "11:30 AM", type: "Quiz review" },
    { title: "Business Law Summary", time: "02:00 PM", type: "Reading notes" },
];

const recentTests = [
    { title: "Mock CBT - ATS 1", score: "92%", status: "Excellent" },
    { title: "Quantitative Analysis", score: "84%", status: "Good" },
    { title: "Ethics & Governance", score: "76%", status: "Needs review" },
];

const progressList = [
    { subject: "Financial Accounting", percent: 86 },
    { subject: "Taxation", percent: 72 },
    { subject: "Audit & Assurance", percent: 81 },
    { subject: "Business Law", percent: 68 },
];

function Dashboard({ user, onLogout, onNavigate }) {
    const activeUser = user || {
        fullName: "Adeola Oladipo",
        studentId: "ATS-00124",
        email: "adeola.oladipo@atswa.org",
    };

    const initials = activeUser.fullName
        ? activeUser.fullName.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase()
        : "SA";

    return (
        <div className="dashboard-page">
            <aside className="dashboard-sidebar">
                <div className="sidebar-brand">
                    <span className="brand-icon">A</span>
                    <div>
                        <span className="brand-name">ATSWA AID</span>
                        <small>Student Portal</small>
                    </div>
                </div>

                <nav className="dashboard-nav" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            type="button"
                            className={`nav-button ${item.route === "dashboard" ? "active" : ""}`}
                            onClick={() => {
                                if (onNavigate && item.route) {
                                    onNavigate(item.route);
                                }
                            }}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div className="header-search">
                        <span className="search-icon">⌕</span>
                        <input type="text" placeholder="Search courses, exams, materials..." />
                    </div>

                    <div className="header-actions">
                        <button type="button" className="icon-button" aria-label="Notifications">
                            🔔
                        </button>
                        <button type="button" className="icon-button" aria-label="Messages">
                            ✉
                        </button>
                        <div className="user-chip">
                            <div className="avatar-circle">{initials}</div>
                            <div>
                                <strong>{activeUser.fullName.split(" ")[0]}</strong>
                                <small>{activeUser.studentId}</small>
                            </div>
                        </div>
                        <button type="button" className="logout-button" onClick={onLogout}>
                            Logout
                        </button>
                    </div>
                </header>

                <section className="welcome-row">
                    <div>
                        <p className="eyebrow">Welcome back</p>
                        <h1>{activeUser.fullName}</h1>
                    </div>
                    <button
                        type="button"
                        className="primary-action"
                        onClick={() => onNavigate && onNavigate("profile")}
                    >
                        View profile
                    </button>
                </section>

                <section className="stats-grid" aria-label="Performance summary">
                    {stats.map((stat) => (
                        <article key={stat.label} className="stat-card">
                            <p>{stat.label}</p>
                            <h2>{stat.value}</h2>
                            <span>{stat.trend}</span>
                        </article>
                    ))}
                </section>

                <section className="content-grid">
                    <div className="panel large-panel">
                        <div className="panel-header">
                            <div>
                                <p className="eyebrow">Today’s learning plan</p>
                                <h3>Focus sessions</h3>
                            </div>
                            <button type="button" className="secondary-button">View all</button>
                        </div>

                        <div className="lesson-list">
                            {upcomingLessons.map((lesson) => (
                                <div key={lesson.title} className="lesson-item">
                                    <div className="lesson-time">{lesson.time}</div>
                                    <div className="lesson-copy">
                                        <h4>{lesson.title}</h4>
                                        <span>{lesson.type}</span>
                                    </div>
                                    <button type="button" className="tiny-button">Start</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="panel">
                        <div className="panel-header">
                            <div>
                                <p className="eyebrow">Recent outcomes</p>
                                <h3>Test results</h3>
                            </div>
                        </div>

                        <div className="results-list">
                            {recentTests.map((item) => (
                                <div key={item.title} className="result-item">
                                    <div>
                                        <h4>{item.title}</h4>
                                        <span>{item.status}</span>
                                    </div>
                                    <strong>{item.score}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bottom-grid">
                    <div className="panel">
                        <div className="panel-header">
                            <div>
                                <p className="eyebrow">Progress</p>
                                <h3>Subject completion</h3>
                            </div>
                        </div>

                        <div className="progress-list">
                            {progressList.map((item) => (
                                <div key={item.subject} className="progress-row">
                                    <div className="progress-label-row">
                                        <span>{item.subject}</span>
                                        <strong>{item.percent}%</strong>
                                    </div>
                                    <div className="progress-track">
                                        <span style={{ width: `${item.percent}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="panel quick-panel">
                        <div className="panel-header">
                            <div>
                                <p className="eyebrow">Quick actions</p>
                                <h3>Jump in</h3>
                            </div>
                        </div>

                        <div className="quick-actions">
                            <button type="button">Take mock exam</button>
                            <button type="button">Review notes</button>
                            <button type="button">Download syllabus</button>
                            <button type="button">Ask tutor</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
