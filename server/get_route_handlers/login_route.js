export const login = (app) => {
    app.get('/login', (req, res) => {
        res.render('login');
    });
}