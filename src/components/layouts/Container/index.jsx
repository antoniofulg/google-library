import { StyledContainer } from './styles'
import PropTypes from 'prop-types'

const Container = ({ className, children }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Container
