const allowedOrigins = r =>
  (r || '').split(',').map(s => s.trim()).filter(Boolean);

module.exports = {
    allowedOrigins
}