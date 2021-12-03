import s from './TransactionHistory.module.scss';

function TransactionHistory({ items }) {
  return (
    <table className={s.section}>
      <thead>
        <tr className={s.titleItem}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tableList}>
        {items.map(item => (
          <tr key={item.id} className={s.line}>
            <td className={s.item}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
