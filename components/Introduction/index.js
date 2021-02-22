/**@jsx jsx*/

import { jsx } from 'theme-ui'

export default () => (
  <div
    sx={{
      width: ['100%'],
      background: `linear-gradient(125.06deg, #005AB5 0%, #003F7D 74.28%)`,
      pt: [4, 5]
    }}
  >
    <div
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        mt: [5]
      }}
    >
      <img
        sx={{
          height: ['50px', '80px', '80px', '100px'],
          mr: [3, 4, 4, 4],
          mt: [1, 0, 0, 2],
          display: ['initial']
        }}
      
      ></img>
      <h1
        sx={{
          color: 'white',
          fontSize: [5, 6, 6, 7],
          my: 0
        }}
      >
        Welcome 
      </h1>
      <img
        sx={{
          height: ['70px', '100px', '100px', '120px'],
          ml: [3, 4, 4, 4],
          mt: [0, 0, 0, 2],
          display: ['initial']
        }}
        src="icon-rounded.png"
      ></img>
    </div>
    <div sx={{ width: '100%', textAlign: 'center' }}>
      <h1 sx={{ color: 'white', fontSize: [5, 6, 6, 7], my: 0, mb: [2, 3] }}>
        <span sx={{ color: 'green' }}>Hack</span>{' '}
        <span sx={{ color: '' }}>Club</span>
        <span sx={{ color: 'green' }}> Nigeria</span>
      </h1>
    </div>
    <div sx={{ width: '100%', textAlign: 'center', pb: [5], color: 'white' }}>
      <p sx={{ fontSize: [2, 3], mx: [4], mt: 0 }}>
      To give a teenager the skills, confidence, and opportunity to change their world🌎
      </p>
      <p sx={{ fontSize: [2, 3], mx: [4], mt: 0 }}>
      We believe in working and learning together
      </p>
      {/*<Button />  */}
    </div>
  </div>
)

const Button = () => (
  <div
    sx={{
      background: `linear-gradient(101.18deg, #0BFBC3 5.58%, #37D343 98.22%)`,
      borderRadius: 50,
      display: 'flex',
      width: ['180px', '300px'],
      justifyContent: 'center',
      ':hover': {
        transform: 'scale(1.1)',
        transition: '0.1s',
        cursor: 'pointer'
      }
    }}
  >
    <h1 sx={{ color: 'white', fontSize: [3, 4] }}>
      Explore <span sx={{ display: [null, 'none'] }}>>></span>
    </h1>
    <img
      sx={{
        ml: [2, 3],
        height: ['45px', '80px'],
        mt: 2,
        display: ['none', 'initial']
      }}
      src="coconut.png"
    ></img>
  </div>
)
