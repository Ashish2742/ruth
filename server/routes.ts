import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAdmissionSchema, insertCareerSchema, insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for admissions
  app.post("/api/admissions", async (req, res) => {
    try {
      const validatedData = insertAdmissionSchema.parse(req.body);
      const admission = await storage.createAdmission(validatedData);
      return res.status(201).json({ success: true, data: admission });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.details 
        });
      }
      return res.status(500).json({ 
        success: false, 
        message: "Server error processing admission application"
      });
    }
  });

  app.get("/api/admissions", async (req, res) => {
    try {
      const admissions = await storage.getAdmissions();
      return res.status(200).json({ success: true, data: admissions });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        message: "Server error retrieving admissions"
      });
    }
  });

  // API routes for careers
  app.post("/api/careers", async (req, res) => {
    try {
      const validatedData = insertCareerSchema.parse(req.body);
      const career = await storage.createCareer(validatedData);
      return res.status(201).json({ success: true, data: career });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.details 
        });
      }
      return res.status(500).json({ 
        success: false, 
        message: "Server error processing career application"
      });
    }
  });

  app.get("/api/careers", async (req, res) => {
    try {
      const careers = await storage.getCareers();
      return res.status(200).json({ success: true, data: careers });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        message: "Server error retrieving careers"
      });
    }
  });

  // API routes for contacts
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      return res.status(201).json({ success: true, data: contact });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.details 
        });
      }
      return res.status(500).json({ 
        success: false, 
        message: "Server error processing contact message"
      });
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      return res.status(200).json({ success: true, data: contacts });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        message: "Server error retrieving contacts"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
