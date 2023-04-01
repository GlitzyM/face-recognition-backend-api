const handleProfileGet = (req, res, db) => {
  const { id } = req.params; //params if we're using :id. body if not :
  db.select("*")
    .from("users")
    .where({ id: id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("Not Found");
      }
    });
};

export default handleProfileGet;
