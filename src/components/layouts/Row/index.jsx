import { StyledRow } from './styles'
import PropTypes from 'prop-types'

const Row = ({ children }) => {
  return <StyledRow>{children}</StyledRow>
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Row
