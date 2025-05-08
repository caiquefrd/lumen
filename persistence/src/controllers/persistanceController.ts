import { Request, Response } from "express";
import query from "./db";
class MeteoController {
    public async create(req: Request, res: Response): Promise<any> {
        const { status } = req.body;
        const r: any = await query(
            "INSERT INTO led_tracker(status) VALUES ($1) RETURNING id",
            [status]
        );
        return res.json(r);
    }
    public async list(_: Request, res: Response): Promise<any> {
        const r: any = await query(
            "SELECT status,   to_char( timestamp AT TIME ZONE 'UTC+3' AT TIME ZONE 'America/Sao_Paulo', 'DD/MM/YYYY HH24:MI:SS') AS timestamp FROM led_tracker ORDER BY timestamp DESC"
        );
        return res.json(r);
    }
}
export default new MeteoController();   