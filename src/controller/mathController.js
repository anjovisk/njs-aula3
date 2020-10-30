const math = require('../Math');

module.exports = function init(app) {
    app.get('/math', (req, res) => {
        let x = req.query.x;
        let y = req.query.y;
        let operation = req.query.operation;
        try {
            let result = math[operation](x, y);
            console.log(`${x} ${operation} ${y} = ${result}`);
            res.send({
                'x': x,
                'y': y,
                'operation': operation,
                'resultado': result
            });
        } catch (error) {
            res.status(400);
            res.send({
                'error': error.message
            });
        }
    });
    app.post('/math', (req, res) => {
        let x = req.body.x;
        let y = req.body.y;
        let operation = req.body.operation;
        try {
            let result = math[operation](x, y);
            console.log(`${x} ${operation} ${y} = ${result}`);
            res.send({
                'x': x,
                'y': y,
                'operation': operation,
                'resultado': result
            });
        } catch (error) {
            res.status(400);
            res.send({
                'error': error.message
            });
        }
    });
}