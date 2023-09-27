const analytics = async (req, res) => {
  try {
    const userId = req.userId; //  userId coming from auth middleware
    const { shortId } = req.params;

    res.send(shortId, userId);
  } catch (error) {}
};

module.exports = { analytics };
