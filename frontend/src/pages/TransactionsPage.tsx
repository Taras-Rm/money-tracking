

const TransactionsPage = () => {
    return (
        <div>
            <h1>Transactions</h1>

            <form onSubmit={() => { }} style={{
                padding: '20px',
                background: '#f0f2f5',
                borderRadius: '8px',
                marginBottom: '24px'
            }}>
                <h3>Add New Transaction</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    <input
                        type="text"
                        placeholder="Description"
                        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d9d9d9' }}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d9d9d9' }}
                    />
                    <select
                        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d9d9d9' }}
                    >
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                    <input
                        type="date"
                        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d9d9d9' }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '8px 16px',
                            background: '#1890ff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Add Transaction
                    </button>
                </div>
            </form>

            <div>
                <h3>All Transactions</h3>
                <p>All transactions coming soon...</p>
            </div>
        </div>
    )
}

export default TransactionsPage