import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { About } from '../components/About/About'
import { Bitcoin } from '../components/Bitcoin/Bitcoin'
import { Ethereum } from '../components/Ethereum/Ethereum'
import { Compare } from '../components/Compare/Compare'

export const Main = () => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/about' component={ About } />
    <Route path='/bitcoin' component={ Bitcoin } />
    <Route path='/ethereum' component={ Ethereum } />
    <Route path='/compare' component={ Compare } />
  </Switch>
)