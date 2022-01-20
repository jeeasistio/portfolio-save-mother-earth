import Grid from '@mui/material/Grid'
import { SxProps } from '@mui/system'
import IArticle from '../../interfaces/Article'
import SolutionCard from './SolutionCard'

const ARTICLES: IArticle[] = [
  {
    name: 'renewable-energy-sources',
    image: '/images/renewable_energy_sources.jpg',
    title: 'Renewable Energy Sources',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#005998'
  },
  {
    name: 'save-energy',
    image: '/images/save_energy.jpg',
    title: 'Save Energy',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#E28A12'
  },
  {
    name: 'reduce-food-waste',
    image: '/images/reduce_food_waste.jpg',
    title: 'Reduce Food Waste',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#B27A54'
  },
  {
    name: 'reduce-reuse-recycle',
    image: '/images/reduce_reuse_recycle.jpg',
    title: 'Reduce Reuse Recycle',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#0B4A7D'
  },
  {
    name: 'choose-your-transport',
    image: '/images/choose_your_transport.jpg',
    title: 'Choose Your Transport',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#596074'
  },
  {
    name: 'plant-more-trees',
    image: '/images/plant_more_trees.jpg',
    title: 'Plant More Trees',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#72943D'
  },
  {
    name: 'eat-more-vegetables',
    image: '/images/eat_more_vegetables.jpg',
    title: 'Eat More Vegetables',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#568D43'
  },
  {
    name: 'switch-to-electric-cars',
    image: '/images/electric_cars.jpg',
    title: 'Switch To Electric Cars',
    body: '',
    summary: 'Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.',
    color: '#700F21'
  }
]

const sx: SxProps = {
  root: {
    height: '100vh',
    overflow: 'hidden'
  }
}

const Solutions = () => {
  return (
    <Grid container sx={sx.root}>
      {ARTICLES.map((art, i) => (
        <Grid item xs={3}>
          <SolutionCard {...art} index={i + 1} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Solutions
