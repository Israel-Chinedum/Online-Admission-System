export const index = (app) =>{
    app.get('', (req, res) => {
        res.render('index');
    });
    
    app.get('/index', (req, res) => {
        res.redirect('/');
    });
}