import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({         // kohalik muutuja "prism" milles saame välja kutsuda igasugu asju 
  log: ['query']
}); 

export default prisma;