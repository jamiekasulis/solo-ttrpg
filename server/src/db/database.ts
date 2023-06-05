import { nano, config } from "../index";

var db: any = undefined;

export const GetDb = async () => {
    if (db) {
        return db;
    }
    else {
        await CreateDb();
        db = nano.db.use(config.database.name);
        return db;
    }
}

const CreateDb = async () => {
    console.log('Creating DB...');
    return nano.db.create(config.database.name);
}