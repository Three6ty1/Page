import { Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Default from '../images/default.png';

function Project(props) {
  const project = props.project;

  let img;
  let valid = false;

  try {
    img = require('../images/projects/' + project.image);
    valid = true;
  } catch {
    img = Default;
  }

  return (
    <div
      style={{
        width: '50%',
        maxheight: '200px',
        display: 'flex',
      }}
    >
      <Card className='project-card' elevation={0} sx={{backgroundColor: 'rgba(0,0,0,0)'}}>

        <CardMedia className='project-image' name={project.name + ' image'} image={valid ? img : Default}/>

        <CardContent className='project-content'>
          <Typography sx={{fontWeight: 'light', color: '#1BA098'}} variant='h5' gutterBottom>
            <Link href='https://github.com/Three6ty1/Page' target='_blank' underline='none' sx={{ color: 'inherit', font: 'inherit', '&:hover': { cursor: 'pointer' }}} className='moving-heading'>
              {project.name.split('').map((letter, index) => (
                <span key={'project-letter-' + index} style={{'--n':index}}>{letter}</span>
              ))}
            </Link>
          </Typography>

          <Typography sx={{fontWeight: 'light'}} style={{whiteSpace: 'pre-line'}} variant='body1'>{project.description}</Typography>
          <br />

          {project.skills.map((skill) => (
            <Typography key={skill} variant='body1'
              sx={{
                display: 'inline', 
                fontWeight: 'light', 
                fontStyle: 'italic', 
                position: 'relative',  
                bottom: '0'
            }}>
              {skill}&nbsp;&nbsp;&nbsp;
            </Typography>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default Project;
