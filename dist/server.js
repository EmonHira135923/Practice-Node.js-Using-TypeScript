import app from './app/app.js';
import config from './config/index.config.js';
const port = config.port;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map