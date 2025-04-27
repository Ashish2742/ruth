import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Schema for admissions
export const admissions = pgTable("admissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  education: text("education").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertAdmissionSchema = createInsertSchema(admissions).omit({
  id: true,
  createdAt: true,
});

// Schema for careers
export const careers = pgTable("careers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  education: text("education").notNull(),
  experience: text("experience").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertCareerSchema = createInsertSchema(careers).omit({
  id: true,
  createdAt: true,
});

// Schema for contact messages
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertAdmission = z.infer<typeof insertAdmissionSchema>;
export type Admission = typeof admissions.$inferSelect;

export type InsertCareer = z.infer<typeof insertCareerSchema>;
export type Career = typeof careers.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
