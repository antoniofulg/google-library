import { Background, Title } from './styles'
import PropTypes from 'prop-types'
import Container from '../Container'
import Row from '../Row'
import Column from '../Column'

const Layout = (props) => {
  return (
    <Background>
      <Container>
        <Row>
          <Column>
            <Title>{props.title}</Title>
          </Column>
        </Row>
        <Row>
          <Column>{props.header}</Column>
        </Row>
        {props.body}
      </Container>
    </Background>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  header: PropTypes.node,
  body: PropTypes.node,
  children: PropTypes.node,
}

export default Layout
