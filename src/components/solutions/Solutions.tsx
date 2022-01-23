import Grid from '@mui/material/Grid'
import { SxProps } from '@mui/system'
import TransitionPage from '../utilityComponents/TransitionPage'
import SolutionCard from './SolutionCard'
import Solution from './Solution'
import { useState } from 'react'
import { solutionsArticles } from '../../utils/articles'

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
        {solutionsArticles.map((art, i) => (
          <Grid item xs={3}>
            <SolutionCard {...art} index={i + 1} handleActive={handleActive} />
          </Grid>
        ))}
        {solutionsArticles.map((art) => (
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
