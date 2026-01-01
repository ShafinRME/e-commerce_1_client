import useUserRole from '../../../hooks/useUserRole';
import RiderDashboard from './RiderDashboard';
import AdminDashboard from './AdminDashboard';
import Forbidden from '../../Forbidden/Forbidden';
import Loader from '../../../shared/Loader/Loader';
import UserDashboard from './UserDashboard';

const DashboardHome = () => {
    const { role, roleLoading } = useUserRole();

    if (roleLoading) {
        return <Loader></Loader>
    }

    if (role === 'user') {
        return <UserDashboard></UserDashboard>
    }
    else if (role === 'rider') {
        return <RiderDashboard></RiderDashboard>
    }
    else if (role === 'admin') {
        return <AdminDashboard></AdminDashboard>
    }
    else {
        return <Forbidden></Forbidden>
    }

};

export default DashboardHome;