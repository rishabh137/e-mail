import express from 'express'
import { saveSentEmails } from '../controller/email-controller.js';

const router = express.Router();

router.post('/save', saveSentEmails)

export default router