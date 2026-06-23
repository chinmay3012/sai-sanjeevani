import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const DB_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DB_DIR, 'db.json');

// Ensure DB directory and file exist
function initDb() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }

  if (!fs.existsSync(DB_FILE)) {
    // Default password: sanjeevani123
    const passwordHash = crypto.createHash('sha256').update('sanjeevani123').digest('hex');
    
    const seedData = {
      appointments: [
        {
          id: '1',
          patientName: 'Ramesh Kumar',
          phone: '9876543210',
          email: 'ramesh@example.com',
          date: '2026-06-25',
          timeSlot: '10:30 AM',
          department: 'Orthopedics',
          doctor: 'Dr. Anil Verma',
          status: 'Confirmed',
          createdAt: new Date(Date.now() - 3600000 * 2).toISOString() // 2 hours ago
        },
        {
          id: '2',
          patientName: 'Sita Devi',
          phone: '8765432109',
          email: 'sita@example.com',
          date: '2026-06-26',
          timeSlot: '02:00 PM',
          department: 'Maternity',
          doctor: 'Dr. Priya Sharma',
          status: 'Pending',
          createdAt: new Date(Date.now() - 3600000).toISOString() // 1 hour ago
        }
      ],
      messages: [
        {
          id: '1',
          name: 'Amit Sharma',
          phone: '7654321098',
          email: 'amit@example.com',
          message: 'Do you accept Ayushman Bharat card for joint replacement? What documents are required?',
          status: 'Unread',
          createdAt: new Date(Date.now() - 3600000 * 4).toISOString() // 4 hours ago
        }
      ],
      admin: {
        username: 'admin',
        passwordHash: passwordHash
      }
    };
    
    fs.writeFileSync(DB_FILE, JSON.stringify(seedData, null, 2), 'utf-8');
  }
}

// Read database
function readDb() {
  initDb();
  try {
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading DB file, returning empty structure:', error);
    return { appointments: [], messages: [], admin: {} };
  }
}

// Write database
function writeDb(data) {
  initDb();
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

export const db = {
  // Appointments CRUD
  getAppointments: () => {
    return readDb().appointments || [];
  },

  addAppointment: (appointment) => {
    const currentDb = readDb();
    const newAppointment = {
      id: crypto.randomUUID(),
      ...appointment,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    
    if (!currentDb.appointments) {
      currentDb.appointments = [];
    }
    currentDb.appointments.push(newAppointment);
    writeDb(currentDb);
    return newAppointment;
  },

  updateAppointmentStatus: (id, status) => {
    const currentDb = readDb();
    let updated = null;
    currentDb.appointments = (currentDb.appointments || []).map(appt => {
      if (appt.id === id) {
        updated = { ...appt, status };
        return updated;
      }
      return appt;
    });
    
    if (updated) {
      writeDb(currentDb);
    }
    return updated;
  },

  // Contact Messages CRUD
  getMessages: () => {
    return readDb().messages || [];
  },

  addMessage: (msg) => {
    const currentDb = readDb();
    const newMessage = {
      id: crypto.randomUUID(),
      ...msg,
      status: 'Unread',
      createdAt: new Date().toISOString()
    };
    
    if (!currentDb.messages) {
      currentDb.messages = [];
    }
    currentDb.messages.push(newMessage);
    writeDb(currentDb);
    return newMessage;
  },

  updateMessageStatus: (id, status) => {
    const currentDb = readDb();
    let updated = null;
    currentDb.messages = (currentDb.messages || []).map(msg => {
      if (msg.id === id) {
        updated = { ...msg, status };
        return updated;
      }
      return msg;
    });
    
    if (updated) {
      writeDb(currentDb);
    }
    return updated;
  },

  // Admin Auth
  validateAdmin: (username, password) => {
    const currentDb = readDb();
    if (!currentDb.admin || currentDb.admin.username !== username) {
      return false;
    }
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    return hash === currentDb.admin.passwordHash;
  }
};
