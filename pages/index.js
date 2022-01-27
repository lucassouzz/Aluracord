import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import React from 'react';

import { useRouter } from 'next/router'

import appConfig from '../config.json'

function Title(props) {
    console.log(props)
    const Tag = props.Tag || 'h2'
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx> {`
        ${Tag} {
            color: ${appConfig.theme.colors.neutrals['500']};
        }
        `}</style>
        </>
    );
}

export default function PaginaInicial() {
  
    const [username, setUsername] = React.useState('')
    const roteamento = useRouter()
  
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              //setando a function anonima do evento onsubmit
              //e passando o evento como parametro
              onSubmit={function (eventSubmit) {
                  //Edefinindo que o comportamento do submit nao recarregara a página
                  eventSubmit.preventDefault()
                  console.log("Formulário submetido")
                  roteamento.push('/chat')
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Boas vindas de volta!</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>
              
              {/* <input 
                type="text"
                value={username}
                //Monitorar mudanca no input
                onChange={ function (event){
                    console.log("usuario digitou: ", event.target.value)
                    //Recebe valor adicionado
                    const valor = event.target.value
                    //seta valor na variavel username
                    setUsername(valor)
                }}
              ></input> */}

              <TextField
                value={username}
                onChange={ function (event){
                    console.log("usuario digitou: ", event.target.value)
                    //Recebe valor adicionado
                    const valor = event.target.value
                    //seta valor na variavel username
                    setUsername(valor)
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }