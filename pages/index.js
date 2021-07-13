import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <Box>
      <img src={`https://github.com/${propriedades.userGithub}.png`} style={{borderRadius: '8px'}}></img>
    </Box>
  )
}


export default function Home() {
  const userGithub = 'DimitriFergus';
  const pessoasFavoritas = [
    'juunegreiros',
    'lenonazzi',
    'omariosouto',
    'peas',
    'rafaballerini', 
    'LarissaAbreu'
]

  return (
    <>

    <AlurakutMenu />
    <MainGrid>
      {/* <Box style="grid-area profileArea"> */}
    <div className='profileArea' style={{gridArea: 'profileArea'}}>
      <ProfileSidebar userGithub={userGithub}></ProfileSidebar>
    </div>
      <div classname='welcomeArea' style={{gridArea: 'welcomeArea'}}>
        <Box>
          <h1 className="title">
          Bem Vindo(a)
          </h1>

          <OrkutNostalgicIconSet></OrkutNostalgicIconSet>
        </Box>      
      </div>
      <div classname='profileRelationsArea' style={{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle ">
            Pessoas da Comunidade ({pessoasFavoritas.length})
          </h2>


          <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}
