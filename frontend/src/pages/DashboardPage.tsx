import { List } from 'antd'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ width: "100%" }}>
                    <List
                        size="small"
                        header={<div style={{ fontWeight: 'bold' }}>Income</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={data}
                        renderItem={(item) => <List.Item style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}><div>{item}</div>100<div></div></List.Item>}
                    />
                </div>

                <div style={{ width: "100%" }}>
                    <List
                        size="small"
                        header={<div style={{ fontWeight: 'bold' }}>Monthly Expenses</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={data}
                        renderItem={(item) => <List.Item style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}><div>{item}</div>100<div></div></List.Item>}
                    />
                </div>

                <div style={{ width: "100%" }}>
                    <List
                        size="small"
                        header={<div style={{ fontWeight: 'bold' }}>Expenses</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={data}
                        renderItem={(item) => <List.Item style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}><div>{item}</div>100<div></div></List.Item>}
                    />
                </div>
            </div>
        </div >
    )
}

export default DashboardPage