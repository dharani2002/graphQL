import { relations } from "drizzle-orm/relations";
import { country, city, countrylanguage } from "./schema";

export const cityRelations = relations(city, ({one}) => ({
	country: one(country, {
		fields: [city.countryCode],
		references: [country.code]
	}),
}));

export const countryRelations = relations(country, ({many}) => ({
	cities: many(city),
	countrylanguages: many(countrylanguage),
}));

export const countrylanguageRelations = relations(countrylanguage, ({one}) => ({
	country: one(country, {
		fields: [countrylanguage.countryCode],
		references: [country.code]
	}),
}));