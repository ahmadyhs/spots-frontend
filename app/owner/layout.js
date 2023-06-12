import Aside from '../components/ownerAsideNavigation';

export default function AdminLayout({ children }) {
  return (
    <div className="grid grid-cols-8">
      <title>Owner</title>
      <Aside/>
      {children}
    </div>

  )
}
