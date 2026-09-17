const USERS_KEY = "atswa_users";
const SESSION_KEY = "atswa_current_user";

function readUsers() {
    try {
        const rawUsers = localStorage.getItem(USERS_KEY);
        return rawUsers ? JSON.parse(rawUsers) : [];
    } catch {
        return [];
    }
}

function writeUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function generateStudentId() {
    const users = readUsers();
    const nextNumber = users.length + 1;
    return `ATS-${String(nextNumber).padStart(5, "0")}`;
}

export function createAccount({ fullName, email, username, password }) {
    const cleanFullName = (fullName || "").trim();
    const cleanEmail = (email || "").trim().toLowerCase();
    const cleanUsername = (username || email || "").trim();
    const cleanPassword = (password || "").trim();

    if (!cleanFullName || !cleanEmail || !cleanUsername || !cleanPassword) {
        throw new Error("Please fill in all required fields.");
    }

    const users = readUsers();

    const exists = users.some(
        (user) =>
            user.email.toLowerCase() === cleanEmail ||
            user.username.toLowerCase() === cleanUsername.toLowerCase()
    );

    if (exists) {
        throw new Error("An account with this email or username already exists.");
    }

    const newUser = {
        id: Date.now().toString(),
        fullName: cleanFullName,
        email: cleanEmail,
        username: cleanUsername,
        studentId: generateStudentId(),
        password: cleanPassword,
        createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    writeUsers(users);

    return newUser;
}

export function loginUser(identifier, password) {
    const cleanIdentifier = (identifier || "").trim().toLowerCase();
    const cleanPassword = (password || "").trim();

    if (!cleanIdentifier || !cleanPassword) {
        return null;
    }

    const users = readUsers();
    const matchedUser = users.find((user) => {
        const emailMatch = user.email.toLowerCase() === cleanIdentifier;
        const usernameMatch = user.username.toLowerCase() === cleanIdentifier;
        const studentIdMatch = user.studentId.toLowerCase() === cleanIdentifier;
        return emailMatch || usernameMatch || studentIdMatch;
    });

    if (!matchedUser || matchedUser.password !== cleanPassword) {
        return null;
    }

    localStorage.setItem(SESSION_KEY, JSON.stringify(matchedUser));
    return matchedUser;
}

export function getCurrentUser() {
    try {
        const rawUser = localStorage.getItem(SESSION_KEY);
        return rawUser ? JSON.parse(rawUser) : null;
    } catch {
        return null;
    }
}

export function logoutUser() {
    localStorage.removeItem(SESSION_KEY);
}
