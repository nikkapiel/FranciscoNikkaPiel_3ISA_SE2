app.get("/insert-Covid", (req, res) => {
    let newRow = {fname: "Nikka Piel", lname: "Francisco"}
    let sql = "Insert into Covid";
    con.query(sql, newRow, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            res.send("failed to insert Covid table");
        }
    });
});

app.get("/read-Covid", (req, res) => {
    let sql = "SELECT * FROM Covid";
    con.query(sql, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            res.send("failed to read Covid table");
        }
    });
});

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