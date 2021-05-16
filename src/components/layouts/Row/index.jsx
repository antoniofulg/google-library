import { StyledRow } from './styles'
import PropTypes from 'prop-types'

const Row = ({ className, children }) => {
  return <StyledRow className={className}>{children}</StyledRow>
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Row
