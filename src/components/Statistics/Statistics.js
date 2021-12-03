import PropTypes from 'prop-types';
import onRandomColor from '../helpers/onRandomColor';
import s from './Statistics.module.scss';

function Statistics({ title, stats }) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(stat => (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: onRandomColor() }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
