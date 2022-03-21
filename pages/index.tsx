
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import RestCountries from './countries'

const Home = () => {
  return (
    <div >
      
      <RestCountries></RestCountries>
    </div>
  )
}




export default Home
