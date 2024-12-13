const { PORT } = process.env;
const server = app.listen(PORT, () => {
    console.log(`\x1b[35m Server eCommerce is running with port: \x1b[34m${PORT}`);
});