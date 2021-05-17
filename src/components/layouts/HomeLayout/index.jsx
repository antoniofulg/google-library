import { ToastContainer } from 'react-toastify'
import PropTypes from 'prop-types'
import Container from '../Container'
import Row from '../Row'
import Column from '../Column'
import { Background, Title, Loading, LoadingContainer } from './styles'

const Layout = (props) => {
  const { title, searchBar, favButton, body, loading } = props

  return (
    <>
      <Background>
        <Container>
          <Row>
            <Column>
              <Title>{title}</Title>
            </Column>
          </Row>
          <Row>
            <Column mobile='12' tablet='9' desktop='10'>
              {searchBar}
            </Column>
            <Column mobile='12' tablet='3' desktop='2'>
              {favButton}
            </Column>
          </Row>
          {loading ? (
            <Row>
              <LoadingContainer>
                <Loading />
              </LoadingContainer>
            </Row>
          ) : (
            body
          )}
        </Container>
      </Background>
      <ToastContainer />
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.node,
  favButton: PropTypes.node,
  body: PropTypes.node,
  toast: PropTypes.node,
  loading: PropTypes.bool,
}

export default Layout
