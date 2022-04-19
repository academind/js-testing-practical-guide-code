import { generateReportData, storeData } from './src/data.js';
import log from './src/util/logger.js';

const data = generateReportData(log);
storeData(data);
