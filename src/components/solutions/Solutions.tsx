import Grid from '@mui/material/Grid'
import { SxProps } from '@mui/system'
import { Solution as ISolution } from '../../interfaces/Article'
import TransitionPage from '../utilityComponents/TransitionPage'
import SolutionCard from './SolutionCard'
import Solution from './Solution'
import { useState } from 'react'

const ARTICLES: ISolution[] = [
  {
    name: 'renewable-energy-sources',
    image: '/images/renewable_energy_sources.jpg',
    images: [
      '/images/renewable_energy_sources/renewable_energy_sources_01.jpg',
      '/images/renewable_energy_sources/renewable_energy_sources_02.jpg',
      '/images/renewable_energy_sources/renewable_energy_sources_03.jpg',
      '/images/renewable_energy_sources/renewable_energy_sources_04.jpg'
    ],
    title: 'Renewable Energy Sources',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#005998'
  },
  {
    name: 'save-energy',
    image: '/images/save_energy.jpg',
    images: [
      '/images/save_energy/save_energy_01.jpg',
      '/images/save_energy/save_energy_02.jpg',
      '/images/save_energy/save_energy_03.jpg',
      '/images/save_energy/save_energy_04.jpg'
    ],
    title: 'Save Energy',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#E28A12'
  },
  {
    name: 'reduce-food-waste',
    image: '/images/reduce_food_waste.jpg',
    title: 'Reduce Food Waste',
    images: [
      '/images/reduce_food_waste/reduce_food_waste_01.jpg',
      '/images/reduce_food_waste/reduce_food_waste_02.jpg',
      '/images/reduce_food_waste/reduce_food_waste_03.jpg'
    ],
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#B27A54'
  },
  {
    name: 'reduce-reuse-recycle',
    image: '/images/reduce_reuse_recycle.jpg',
    images: [
      '/images/reduce_reuse_recycle/reduce_reuse_recycle_01.jpg',
      '/images/reduce_reuse_recycle/reduce_reuse_recycle_02.jpg',
      '/images/reduce_reuse_recycle/reduce_reuse_recycle_03.jpg',
      '/images/reduce_reuse_recycle/reduce_reuse_recycle_04.jpg'
    ],
    title: 'Reduce Reuse Recycle',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#0B4A7D'
  },
  {
    name: 'choose-your-transport',
    image: '/images/choose_your_transport.jpg',
    images: [
      '/images/choose_your_transport/choose_your_transport_01.jpg',
      '/images/choose_your_transport/choose_your_transport_02.jpg',
      '/images/choose_your_transport/choose_your_transport_03.jpg'
    ],
    title: 'Choose Your Transport',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#596074'
  },
  {
    name: 'plant-more-trees',
    image: '/images/plant_more_trees.jpg',
    images: [
      '/images/plant_more_trees/plant_more_trees_01.jpg',
      '/images/plant_more_trees/plant_more_trees_02.jpg'
    ],
    title: 'Plant More Trees',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#72943D'
  },
  {
    name: 'eat-more-vegetables',
    image: '/images/eat_more_vegetables.jpg',
    images: [
      '/images/eat_more_vegetables/eat_more_vegetables_01.jpg',
      '/images/eat_more_vegetables/eat_more_vegetables_02.jpg',
      '/images/eat_more_vegetables/eat_more_vegetables_03.jpg'
    ],
    title: 'Eat More Vegetables',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#568D43'
  },
  {
    name: 'switch-to-electric-cars',
    image: '/images/electric_cars.jpg',
    images: [
      '/images/switch_to_electric_cars/switch_to_electric_cars_01.jpg',
      '/images/switch_to_electric_cars/switch_to_electric_cars_02.jpg'
    ],
    title: 'Switch To Electric Cars',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#700F21'
  }
]

const sx: SxProps = {
  root: {
    height: '100vh',
    overflow: 'hidden',
    position: 'relative'
  }
}

const Solutions = () => {
  const [active, setActive] = useState('')

  const handleActive = (name: string) => {
    setActive(name)
  }

  const handleBack = () => {
    setActive('')
  }

  return (
    <TransitionPage>
      <Grid container sx={sx.root}>
        {ARTICLES.map((art, i) => (
          <Grid item xs={3}>
            <SolutionCard {...art} index={i + 1} handleActive={handleActive} />
          </Grid>
        ))}
        {ARTICLES.map((art) => (
          <Solution
            {...art}
            isActive={active === art.name}
            handleBack={handleBack}
          />
        ))}
      </Grid>
    </TransitionPage>
  )
}

export default Solutions
