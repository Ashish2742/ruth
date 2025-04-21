import { 
  users, type User, type InsertUser,
  admissions, type Admission, type InsertAdmission,
  careers, type Career, type InsertCareer,
  contacts, type Contact, type InsertContact
} from "@shared/schema";

// Interface with all CRUD methods needed
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Admission methods
  createAdmission(admission: InsertAdmission): Promise<Admission>;
  getAdmissions(): Promise<Admission[]>;
  
  // Career methods
  createCareer(career: InsertCareer): Promise<Career>;
  getCareers(): Promise<Career[]>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private admissionsMap: Map<number, Admission>;
  private careersMap: Map<number, Career>;
  private contactsMap: Map<number, Contact>;
  
  private userId: number;
  private admissionId: number;
  private careerId: number;
  private contactId: number;

  constructor() {
    this.users = new Map();
    this.admissionsMap = new Map();
    this.careersMap = new Map();
    this.contactsMap = new Map();
    
    this.userId = 1;
    this.admissionId = 1;
    this.careerId = 1;
    this.contactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Admission methods
  async createAdmission(insertAdmission: InsertAdmission): Promise<Admission> {
    const id = this.admissionId++;
    const createdAt = new Date().toISOString();
    const admission: Admission = { ...insertAdmission, id, createdAt };
    this.admissionsMap.set(id, admission);
    return admission;
  }
  
  async getAdmissions(): Promise<Admission[]> {
    return Array.from(this.admissionsMap.values());
  }
  
  // Career methods
  async createCareer(insertCareer: InsertCareer): Promise<Career> {
    const id = this.careerId++;
    const createdAt = new Date().toISOString();
    const career: Career = { ...insertCareer, id, createdAt };
    this.careersMap.set(id, career);
    return career;
  }
  
  async getCareers(): Promise<Career[]> {
    return Array.from(this.careersMap.values());
  }
  
  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const createdAt = new Date().toISOString();
    const contact: Contact = { ...insertContact, id, createdAt };
    this.contactsMap.set(id, contact);
    return contact;
  }
  
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contactsMap.values());
  }
}

export const storage = new MemStorage();
