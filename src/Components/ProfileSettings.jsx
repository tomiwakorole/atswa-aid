import React from "react";
import "../Styles/ProfileSettings.css";

const navItems = [
    { label: "Dashboard", icon: "◫" },
    { label: "My Profile", icon: "◉" },
    { label: "Subjects / Courses", icon: "▣" },
    { label: "Exams", icon: "✓" },
    { label: "Questions & Practice", icon: "✎" },
    { label: "Results & Analytics", icon: "▤" },
    { label: "Study Materials", icon: "◍" },
    { label: "Notifications", icon: "◔" },
    { label: "Settings", icon: "⚙" },
];

const programCards = [
    { title: "ATS 1", subtitle: "Foundation Stage" },
    { title: "ATS 2", subtitle: "Professional Stage" },
    { title: "Practice Tests", subtitle: "Mock CBT" },
];

const studentInfo = [
    { label: "Full Name", value: "Adeola Oladipo" },
    { label: "Student ID", value: "ATS-00124" },
    { label: "Email Address", value: "adeola.oladipo@atswa.org" },
    { label: "Phone Number", value: "+234 803 123 4567" },
];

const miniCards = [
    { title: "Study Profile", subtitle: "Performance score", value: "89%" },
    { title: "Practice Tests", subtitle: "Average score", value: "72%" },
    { title: "Study Progress", subtitle: "Completion", value: "81%" },
];

function ProfileSettings({ user, onLogout }) {
    const activeUser = user || {
        fullName: "Adeola Oladipo",
        studentId: "ATS-00124",
        email: "adeola.oladipo@atswa.org",
        username: "adeola_oladipo",
        phone: "+234 803 123 4567",
    };

    const displayInfo = studentInfo.map((item) => ({
        ...item,
        value: item.label === "Full Name" ? activeUser.fullName :
            item.label === "Student ID" ? activeUser.studentId :
            item.label === "Email Address" ? activeUser.email :
            activeUser.phone || "Not added",
    }));

    return (
        <div className="profile-page">
            <header className="doc-header">
                <div className="doc-brand">
                    <span className="brand-mark">A</span>
                    <span>ATSWA-AID DESIGN</span>
                </div>
                <div className="doc-actions">
                    <div className="user-pill" aria-label="Signed in user">
                        <span className="user-avatar">A</span>
                        <span className="user-name">Adeola</span>
                    </div>
                    <button className="toolbar-btn primary" type="button" onClick={onLogout}>
                        Logout
                    </button>
                </div>
            </header>

            <div className="doc-toolbar">
                <div className="toolbar-tools">
                    <span className="tool-btn">↶</span>
                    <span className="tool-btn">↷</span>
                    <span className="tool-btn">🖨</span>
                    <span className="tool-btn">⬜</span>
                    <span className="tool-btn">✎</span>
                </div>
            </div>

            <main className="sheet-shell">
                <aside className="side-menu">
                    <div className="menu-brand">ATSWA AID</div>
                    <nav className="nav-list">
                        {navItems.map((item, index) => (
                            <button
                                key={item.label}
                                type="button"
                                className={`nav-item ${index === 1 ? "active" : ""}`}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </nav>
                </aside>

                <section className="sheet-panel">
                    <div className="sheet-topbar">
                        <div className="topbar-pill">Student</div>
                        <div className="topbar-pill light">Active</div>
                    </div>

                    <div className="profile-layout">
                        <div className="profile-main-column">
                            <div className="profile-card">
                                <div className="profile-card-header">
                                    <div className="student-avatar">
                                        {activeUser.fullName ? activeUser.fullName.charAt(0).toUpperCase() : "S"}
                                    </div>
                                    <div className="student-meta">
                                        <span className="student-name">{activeUser.fullName}</span>
                                        <span className="student-role">ATS 1 Candidate</span>
                                    </div>
                                </div>

                                <div className="info-grid">
                                    {displayInfo.map((item) => (
                                        <div className="info-row" key={item.label}>
                                            <span className="info-label">{item.label}</span>
                                            <span className="info-value">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="program-row">
                                {programCards.map((card) => (
                                    <div key={card.title} className="program-card">
                                        <div className="program-title">{card.title}</div>
                                        <div className="program-subtitle">{card.subtitle}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="profile-side-column">
                            <div className="side-stat-card">
                                <div className="stat-header">Student Profile Dossier</div>
                                <div className="badge-row">
                                    <span className="mini-badge">Profile</span>
                                    <span className="mini-badge">Exam Ready</span>
                                </div>
                                <div className="mini-card-list">
                                    {miniCards.map((card) => (
                                        <div key={card.title} className="mini-card">
                                            <div className="mini-label">{card.title}</div>
                                            <div className="mini-sub">{card.subtitle}</div>
                                            <div className="mini-value">{card.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="side-stat-card low-card">
                                <div className="stat-header">Registration Summary</div>
                                <div className="summary-stack">
                                    <div className="summary-line">
                                        <span>Current Stage</span>
                                        <strong>ATS 1</strong>
                                    </div>
                                    <div className="summary-line">
                                        <span>Account Status</span>
                                        <strong>Active</strong>
                                    </div>
                                    <div className="summary-line">
                                        <span>Study Hours</span>
                                        <strong>12.4 hrs</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ProfileSettings;
