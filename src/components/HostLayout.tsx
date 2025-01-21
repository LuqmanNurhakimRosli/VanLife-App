import {Outlet} from 'react-router-dom'

function HostLayout() {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default HostLayout