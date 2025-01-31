import { mysqlTable, mysqlSchema, AnyMySqlColumn, index, foreignKey, primaryKey, int, char, mysqlEnum, decimal, smallint } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const city = mysqlTable("city", {
	id: int("ID").autoincrement().notNull(),
	name: char("Name", { length: 35 }).default('').notNull(),
	countryCode: char("CountryCode", { length: 3 }).default('').notNull().references(() => country.code),
	district: char("District", { length: 20 }).default('').notNull(),
	population: int("Population").default(0).notNull(),
},
(table) => [
	index("CountryCode").on(table.countryCode),
	primaryKey({ columns: [table.id], name: "city_ID"}),
]);

export const country = mysqlTable("country", {
	code: char("Code", { length: 3 }).default('').notNull(),
	name: char("Name", { length: 52 }).default('').notNull(),
	continent: mysqlEnum("Continent", ['Asia','Europe','North America','Africa','Oceania','Antarctica','South America']).default('Asia').notNull(),
	region: char("Region", { length: 26 }).default('').notNull(),
	surfaceArea: decimal("SurfaceArea", { precision: 10, scale: 2 }).default('0.00').notNull(),
	indepYear: smallint("IndepYear"),
	population: int("Population").default(0).notNull(),
	lifeExpectancy: decimal("LifeExpectancy", { precision: 3, scale: 1 }),
	gnp: decimal("GNP", { precision: 10, scale: 2 }),
	gnpOld: decimal("GNPOld", { precision: 10, scale: 2 }),
	localName: char("LocalName", { length: 45 }).default('').notNull(),
	governmentForm: char("GovernmentForm", { length: 45 }).default('').notNull(),
	headOfState: char("HeadOfState", { length: 60 }),
	capital: int("Capital"),
	code2: char("Code2", { length: 2 }).default('').notNull(),
},
(table) => [
	primaryKey({ columns: [table.code], name: "country_Code"}),
]);

export const countrylanguage = mysqlTable("countrylanguage", {
	countryCode: char("CountryCode", { length: 3 }).default('').notNull().references(() => country.code),
	language: char("Language", { length: 30 }).default('').notNull(),
	isOfficial: mysqlEnum("IsOfficial", ['T','F']).default('F').notNull(),
	percentage: decimal("Percentage", { precision: 4, scale: 1 }).default('0.0').notNull(),
},
(table) => [
	index("CountryCode").on(table.countryCode),
	primaryKey({ columns: [table.countryCode, table.language], name: "countrylanguage_CountryCode_Language"}),
]);
