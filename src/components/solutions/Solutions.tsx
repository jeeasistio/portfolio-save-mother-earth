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

  const handleChangePage = (page: number) => {
    setActive(solutionsArticles[page]?.name || '')
  }

  return (
    <TransitionPage>
      <Grid container sx={sx.root}>
        {solutionsArticles.map((art, i) => (
          <Grid item xs={6} sm={3}>
            <SolutionCard {...art} index={i + 1} handleActive={handleActive} />
          </Grid>
        ))}
        {solutionsArticles.map((art, index) => (
          <Solution
            {...art}
            page={index}
            isActive={active === art.name}
            handleChangePage={handleChangePage}
          />
        ))}
      </Grid>
    </TransitionPage>
  )
}

export default Solutions
