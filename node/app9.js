app.get("/update-Covid", (req, res) => {
    let sql = "UPDATE Covid SET fname = 'Hello' WHERE id=1";
    con.query(sql, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            res.send("failed to update Covid table");
        }
    });
});

app.get("/delete-student", (req, res) => {
    let sql = "DELETE FROM Covid WHERE id=1";
    con.query(sql, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            res.send("failed to delete Covid table");
        }
    });
});