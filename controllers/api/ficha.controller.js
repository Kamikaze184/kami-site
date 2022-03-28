module.exports = class api_ficha_controller {
    constructor(client) {
        const { Router } = require('express');
        const routes = Router()

        const fichaServices = require('../../services/ficha.api.service')
        const services = new fichaServices(client)

        routes.post("/atb/add", async (req, res) => {
            if (req.session.validation == process.env.validation) {
                try {
                    const response = await services.sendAtb(req.body)
                    if (response.status == 200) {
                        res.status(200).send(response.data)
                    }
                    else {
                        res.status(response.status).send(response.data)
                    }
                }
                catch (err) {
                    res.status(500).end()
                }
            }
            else {
                res.status(401).end()
            }
        })

        routes.delete("/atb/remove", async (req, res) => {
            if (req.session.validation == process.env.validation) {
                try {
                    const response = await services.removeAtb(req.body)
                    if (response.status == 200) {
                        res.status(200).send(response.data)
                    }
                    else {
                        res.status(response.status).send(response.data)
                    }
                }
                catch (err) {
                    res.status(500).end()
                }
            }
            else {
                res.status(401).end()
            }
        })

        routes.post("/create", async (req, res) => {
            if (req.session.validation == process.env.validation) {
                try {
                    const response = await services.createFicha(req.body)
                    if (response.status == 200) {
                        res.status(200).send(response.data)
                    }
                    else {
                        res.status(response.status).send(response.data)
                    }
                }
                catch (err) {
                    res.status(500).end()
                }
            }
            else {
                res.status(401).end()
            }
        })

        routes.patch("/update", async (req, res) => {
            if (req.session.validation == process.env.validation) {
                try {
                    const response = await services.updateFicha(req.body)
                    if (response.status == 200) {
                        res.status(200).send(response.data)
                    }
                    else {
                        res.status(response.status).send(response.data)
                    }
                }
                catch (err) {
                    res.status(500).end()
                }
            }
            else {
                res.status(401).end()
            }
        })

        routes.patch("/rename", async (req, res) => {
            if (req.session.validation == process.env.validation) {
                try {
                    const response = await services.renameFicha(req.body)
                    if (response.status == 200) {
                        res.status(200).send(response.data)
                    }
                    else {
                        res.status(response.status).send(response.data)
                    }
                }
                catch (err) {
                    res.status(500).end()
                }
            }
            else {
                res.status(401).end()
            }
        })

        routes.delete("/delete", async (req, res) => {
            if (req.session.validation == process.env.validation) {
                try {
                    const response = await services.deleteFicha(req.body)
                    if (response.status == 200) {
                        res.status(200).send(response.data)
                    }
                    else {
                        res.status(response.status).send(response.data)
                    }
                }
                catch (err) {
                    res.status(500).end()
                }
            }
            else {
                res.status(401).end()
            }
        })

        return { path: '/api/ficha/', router: routes }
    }
}