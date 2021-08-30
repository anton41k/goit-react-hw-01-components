import PropTypes from "prop-types";
import {
  StatsItem,
  StatsUl,
  ItemSpan,
  Title,
  Section,
} from "./Statistics.styled";
import randomColor from "randomcolor";

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatsUl>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} color={randomColor}>
            <ItemSpan>{label}</ItemSpan>
            <ItemSpan>{percentage}%</ItemSpan>
          </StatsItem>
        ))}
      </StatsUl>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
