import { formatCurrency } from '../utils'

const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <div style={{ padding: '20px', background: '#f0f2f5', borderRadius: '8px' }}>
                    <h3>Total Balance</h3>
                    <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1890ff' }}>
                        {formatCurrency(1287, 'USD')}
                    </p>
                </div>
                <div style={{ padding: '20px', background: '#f0f2f5', borderRadius: '8px' }}>
                    <h3>Transactions</h3>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                        {7}
                    </p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                    <h3>Recent Transactions</h3>
                    <p>Recent transactions coming soon...</p>
                </div>
            </div>
        </div >
    )
}

export default DashboardPage