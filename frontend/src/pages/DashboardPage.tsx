import TransactionsTypeList from '../components/features/dashboard/TransactionsTypeList';
import PageLayout from '../components/layout/PageLayout';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const DashboardPage = () => {
    return (
        <PageLayout title='Dashboard'>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ width: "100%" }}>
                    <TransactionsTypeList data={data} title='Income' />
                </div>
                <div style={{ width: "100%" }}>
                    <TransactionsTypeList data={data} title='Monthly Expenses' />
                </div>

                <div style={{ width: "100%" }}>
                    <TransactionsTypeList data={data} title='Expenses' />
                </div>
            </div>
        </PageLayout>
    )
}

export default DashboardPage