import { nano, config } from "../index";

var db = undefined;

export const GetDb = () => {
    return nano.use(config.database.name);
}