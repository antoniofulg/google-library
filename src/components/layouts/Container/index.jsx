import { StyledContainer } from './styles'
import PropTypes from 'prop-types'

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
