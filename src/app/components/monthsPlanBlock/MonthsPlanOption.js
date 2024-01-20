import classNames from "classnames";
import styles from "./monthsPlanSection.module.scss";

const MonthsPlanOption = ({ monthPlan, onChange, checkedMonthsPlan }) => {
  const { id, planTitle, price, isMostPopular } = monthPlan || {};

  return (
    <>
      <label className={styles.box} htmlFor={`checkbox-${id}`}>
        {isMostPopular && (
          <div
            className={classNames(styles.popularPlan, {
              [styles.isCheckedMostPopular]:
                checkedMonthsPlan && checkedMonthsPlan.id === id,
            })}
          >
            Most popular
          </div>
        )}

        <div
          className={classNames(styles.plan, {
            [styles.mostPopular]: isMostPopular,
            [styles.isChecked]:
              checkedMonthsPlan && checkedMonthsPlan.id === id,
          })}
        >
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor={`checkbox-${id}`}
            >
              <input
                name="type"
                type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-400 border-bolt transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-700 hover:before:opacity-10"
                value={checkedMonthsPlan}
                onChange={() => onChange(monthPlan)}
                id={`checkbox-${id}`}
              />

              <span className="absolute text-blue-700 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8.1" cy="8" r="7"></circle>
                </svg>
              </span>
            </label>

            <div
              className={classNames(
                styles.planName,
                "mt-px font-light cursor-pointer select-none"
              )}
            >
              {planTitle}
            </div>
          </div>

          <div className={styles.planDetails}>
            <span className={styles.currency}>$</span>
            <div className={styles.planPrice}>{price}</div>
          </div>
        </div>
      </label>
    </>
  );
};

export default MonthsPlanOption;
