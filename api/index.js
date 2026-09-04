const path = require('node:path');

let serverAppPromise = null;

function getServerApp() {
  if (!serverAppPromise) {
    const serverDistPath = path.join(process.cwd(), 'dist/modern-portfolio/server/server.mjs');
    serverAppPromise = import(serverDistPath).then((mod) => mod.app || mod.default || mod.reqHandler);
  }
  return serverAppPromise;
}

module.exports = async (req, res) => {
  try {
    const app = await getServerApp();
    return app(req, res);
  } catch (err) {
    console.error('Error handling SSR request in Vercel function:', err);
    res.status(500).send('Internal Server Error');
  }
};
