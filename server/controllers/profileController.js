
const getProfile = async (req, res) => {
  res.json({ user: req.user });
};

export default { getProfile };