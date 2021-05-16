import { StyledColumn } from './styles'
import PropTypes from 'prop-types'

const Column = ({ children, mobile, tablet, desktop }) => {
  return (
    <StyledColumn mobile={mobile} tablet={tablet} desktop={desktop}>
      {children}
    </StyledColumn>
  )
}

Column.propTypes = {
  children: PropTypes.node,
  desktop: PropTypes.string,
  tablet: PropTypes.string,
  mobile: PropTypes.string,
}

export default Column
