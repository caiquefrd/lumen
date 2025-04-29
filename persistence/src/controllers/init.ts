import query from "./db";
async function init(): Promise<any> {
    return await query(`
        DROP TABLE IF EXISTS led_tracker;
        CREATE TABLE IF NOT EXISTS led_tracker (
            id serial PRIMARY KEY,
            status varchar NOT NULL,
            timestamp timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
    `);
}
init()
    .then((r) => console.log(r))
    .catch((e) => console.log(e));