export const register = (app) => {
    app.get('/register', (req, res) =>{
        res.render('register');
    });
}