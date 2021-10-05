app.get ("/join-Covid", (req, res) => {
    let sql = "SELECT Covid.id, Covid.fname, Covid.lname, Covid.age, Covid.symptoms" +
    " FROM Covid" +
    " INNER JOIN section" +
    " ON Covid.id = number.id";
    con.query (sql, (err, result) => {
        if (!err) {
            res.send (result);
        } else {
            res.send ("failed to select Covid table");
            throw err;
        }
    });
});