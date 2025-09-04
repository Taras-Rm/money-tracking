import { List as ListAntd } from 'antd'

interface ListProps {
    title: string
    data: string[]
}

const TransactionsTypeList = ({ title, data }: ListProps) => {
    return (
        <ListAntd
            size="small"
            header={<div style={{ fontWeight: 'bold' }}>{title}</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={(item) => <ListAntd.Item style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}><div>{item}</div>100<div></div></ListAntd.Item>}
        />
    )
}

export default TransactionsTypeList