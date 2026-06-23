// Client-side Database Helper using LocalStorage
const STORAGE_KEY = 'sanjeevani_db';

const defaultSeedData = {
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
      createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
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
      createdAt: new Date(Date.now() - 3600000).toISOString()
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
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
    }
  ],
  admin: {
    username: 'admin',
    password: 'sanjeevani123'
  }
};

// Helper to check if browser environment is ready
const isClient = () => typeof window !== 'undefined';

function readDb() {
  if (!isClient()) {
    return defaultSeedData;
  }
  
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSeedData));
      return defaultSeedData;
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading localStorage:', error);
    return defaultSeedData;
  }
}

function writeDb(data) {
  if (!isClient()) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error writing localStorage:', error);
  }
}

export const db = {
  // Appointments
  getAppointments: () => {
    return readDb().appointments || [];
  },

  addAppointment: (appointment) => {
    const currentDb = readDb();
    const newAppointment = {
      id: Math.random().toString(36).substring(2, 11),
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

  // Contact Messages
  getMessages: () => {
    return readDb().messages || [];
  },

  addMessage: (msg) => {
    const currentDb = readDb();
    const newMessage = {
      id: Math.random().toString(36).substring(2, 11),
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
    const adminUser = currentDb.admin || defaultSeedData.admin;
    return adminUser.username === username && adminUser.password === password;
  }
};
