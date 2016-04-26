import express, { Router } from 'express'
import mongoose from 'mongoose'
import User from './models/user'
import Cv from './models/cv'

const router = Router()

router.get('/:user/cv/:name', (req, res) => {
  let name = req.params.name

  Cv.find({ cvName: name }, (err, cv) => {
    if (err) return err

    User.populate(cv, { path: 'libro' }, (err, cv) => {
      if (err) return err
      res.json(cv)
    })
  })
})

export default router
