app.get("/create-CovidDb", (req, res) => {
    let sql = "CREATE DATABASE Covid";
    con.query(sql, (err, result) => {
        if (!err) {
            res.send("database was created");
        } else {
            res.send("database was not created");
        }
    });
});