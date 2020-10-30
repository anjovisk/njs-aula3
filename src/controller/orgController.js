module.exports = function init(app) {
    app.get('/orgs', (req, res) => {
        console.log('entrou orgs');
        const orgs = [
            {
                id: 1,
                name: "X"
            },
            {
                id: 2,
                name: "Y"
            }
        ]
        res.send(orgs)
    });
    
    app.get('/orgs/:id', (req, res) => {
        const orgs = [
            {
                id: 1,
                name: "X"
            },
            {
                id: 2,
                name: "Y"
            }
        ]
        res.send(orgs.find((o) => o.id == req.params.id));
    });
}