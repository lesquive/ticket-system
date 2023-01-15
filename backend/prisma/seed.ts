import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const vic = await prisma.user.upsert({
    where: { email: "vkrates0@taobao.com" },
    update: {},
    create: {
      first_name: "Vic",
      last_name: "Krates",
      email: "vkrates0@taobao.com",
      gender: "Male",
      avatar: "https://robohash.org/enimoditquia.png?size=50x50&set=set1",
      company_name: "Smith, Zemlak and Bergnaum",
      phone: "+1 864 896 1112",
      time_zone: "America/New_York",
      lat: 34.7671945,
      long: -82.3777335,
    },
  });
  const maurice = await prisma.user.upsert({
    where: { email: "mcheston1@nih.gov" },
    update: {},
    create: {
      first_name: "Maurice",
      last_name: "Cheston",
      email: "mcheston1@nih.gov",
      gender: "Male",
      avatar:
        "https://robohash.org/consecteturcumqueiste.png?size=50x50&set=set1",
      company_name: "Metz-Kreiger",
      phone: "+970 450 516 9505",
      time_zone: "Asia/Hebron",
      lat: 31.945399,
      long: 35.072502,
      tickets: {
        create: [
          {
            title: "Need help with Cisco ASA",
            problem: "ASA keeps rebooting",
            solved: false,
            status: "Open",
            notes: {
              create: [
                {
                  subject: "Initial contact",
                  body: "Hey, can we set up a call?",
                },
              ],
            },
          },
          {
            title: "CUCM Crash",
            problem: "CUCM Upgrade failing",
            solved: false,
            status: "Open",
            notes: {
              create: [
                {
                  subject: "Initial contact",
                  body: "Hey, I need help ASAP!",
                },
              ],
            },
          },
        ],
      },
    },
  });
  console.log({ vic, maurice });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
