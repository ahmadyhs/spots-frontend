import Aside from '../components/adminAsideNavigation';

export default function AdminLayout({ children }) {
  return (
    <div className="grid grid-cols-8">
      <title>Admin</title>
      <Aside/>
      {children}
    </div>

  )
}
