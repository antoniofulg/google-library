import { StyledColumn } from './styles'
import PropTypes from 'prop-types'

const Column = ({ className, children, mobile, tablet, desktop }) => {
  return (
    <StyledColumn
      className={className}
      mobile={mobile}
      tablet={tablet}
      desktop={desktop}
    >
      {children}
    </StyledColumn>
  )
}

Column.propTypes = {
  children: PropTypes.node,
  desktop: PropTypes.string,
  tablet: PropTypes.string,
  mobile: PropTypes.string,
  className: PropTypes.string,
}

export default Column
