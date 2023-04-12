const express = require('express')
const fs = require('fs')

const router = express.Router()
router.get('/', (_, res) => {
  const db = JSON.parse(fs.readFileSync('public/db.json', 'utf-8'))
  res.render('produtos', { produtos: db.produtos })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const db = JSON.parse(fs.readFileSync('public/db.json', 'utf-8'))
  const produto = db.produtos.find(p => p.id === Number.parseInt(id))
  res.render('produto', { produto })
})

module.exports = router