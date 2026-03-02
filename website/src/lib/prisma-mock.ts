// Mock Prisma Client to bypass binary execution issues in restricted environments
export class PrismaClient {
  constructor() {
    console.warn('Using Mock Prisma client due to environment restrictions.');
  }
  
  user = {
    findUnique: async () => null,
    create: async (data: any) => ({ ...data, id: 'mock-user-id' }),
  };
  
  account = {
    findUnique: async () => null,
    create: async (data: any) => ({ ...data, id: 'mock-acc-id' }),
  };
  
  session = {
    findUnique: async () => null,
    create: async (data: any) => ({ ...data, id: 'mock-sess-id' }),
  };
  
  comment = {
    findMany: async () => [],
    create: async (data: any) => ({ ...data, id: 'mock-comment-id', createdAt: new Date() }),
  };

  $connect = async () => {};
  $disconnect = async () => {};
}
