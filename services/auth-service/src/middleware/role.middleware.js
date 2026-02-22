const authorizeRole = (allowedRoles) => {
  return (req, res, next) => {

    const { roleId } = req.user;

    if (!allowedRoles.includes(roleId)) {
      return res.status(403).json({
        message: 'Access forbidden: insufficient permissions'
      });
    }

    next();
  };
};

module.exports = authorizeRole;