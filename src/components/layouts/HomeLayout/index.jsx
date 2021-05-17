import { ToastContainer } from 'react-toastify'
import PropTypes from 'prop-types'
import Container from '../Container'
import Row from '../Row'
import Column from '../Column'
import { Background, Title, Loading, LoadingContainer } from './styles'

const Layout = (props) => {
  const { title, header, body, loading } = props

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
            <Column>{header}</Column>
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
  header: PropTypes.node,
  body: PropTypes.node,
  toast: PropTypes.node,
  loading: PropTypes.bool,
}

export default Layout
