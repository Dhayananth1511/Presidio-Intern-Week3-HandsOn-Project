const app = require('./app');
const { PORT } = require('./config/constants');

/**
 * --- Server Startup ---
 * This file is the entry point that actually fires up the network.
 */

app.listen(PORT, () => {
  console.log(`🚀 [SERVER] Application running at http://localhost:${PORT}`);
  console.log(`🔗 [API] Endpoints available at http://localhost:${PORT}/api`);
});
