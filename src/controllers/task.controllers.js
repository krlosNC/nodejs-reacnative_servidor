import { connect } from '../database'

export const getTask = async (req, res) => {
    const conection = await connect()
    const [rows] = await conection.query("SELECT * FROM task");
    res.json(rows)
}

export const getTak = async(req, res) => {
    const conection = await connect();
    const [rows] = await conection.query("SELECT * FROM task WHERE id=?", [req.params.id])
    res.json(rows[0])
}

export const getTakConund = async(req, res) => {
    const conection = await connect();
    const [rows] = await conection.query("SELECT COUNT(*) FROM task", [req.params.id])
    res.json(rows[0]["COUNT(*)"])
}

export const createTak = async(req, res) => {
    const conection = await connect();
    const [result] = await conection.query("INSERT INTO task(title, description) VALUES (?, ?)", [
        req.body.title,
        req.body.description
    ])
    res.json({
        id: result.insertId,
        ...req.body,
    })
}

export const deleteTak = async(req, res) => {
    const conection = await connect();
    await conection.query("DELETE FROM task WHERE id=?", [req.params.id]);
    res.sendStatus(204);
}

export const updateTask = async(req, res) => {
    const conection = await connect();
    await conection.query("UPDATE task SET ? WHERE id=?", [req.body, req.params.id, ]);
    res.sendStatus(204);
}