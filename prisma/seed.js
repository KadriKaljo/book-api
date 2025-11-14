import prisma from "../src/config/prisma.config.js";
import { faker } from "@faker-js/faker/locale/en";

const databaseSeeder = async () => {
    const authors = [];
    for (let i = 0; i < 50; i++) {
        const author = await prisma.author.create({
            data: {
                name: faker.person.fullName(),
            }
        });
        authors.push(author);
    }
    for(let i = 0; i < 50; i++) {
        const book = await prisma.book.create({
            data: {
                title: faker.book.title(),
                description: faker.lorem.sentence(),
                thumbnail_url: faker.image.url(),
                release_year: faker.date.past().getFullYear(),
            }
        })
    }
}

try {
    await databaseSeeder();
    await prisma.$disconnect();
} catch (exception) {
    console.error(exception);
    await prisma.$disconnect();
    process.exit(1);
}

