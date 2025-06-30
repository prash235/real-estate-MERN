import express from 'express'
import { test } from '../controller/user.controller.js';
const router = express.Router();

router.get('/', test)

export default router








var I = {}
I.am = 'a Frontend Developer'
I.workAt = 'Aditya Birla Capital'
I.usedTo = ['dance', 'play badminton', 'sing', 'play games for hours', 'to be data analytics intern']
I.love = ['God', 'Family', 'React', 'Batman', 'exciting challenges']
I.workWith = ['ReactJS', 'NodeJS', 'Tailwind', 'MongoDB', 'my hands', "what I've got"]
I.aspire = 'to shape the future, one line of code at a time'
