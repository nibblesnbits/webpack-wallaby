import { createSelector } from 'reselect';

const getData = (state) => state.app.data;

export const makeGetData = () => {
  return createSelector(
    [ getData ],
    (data) => data
  );
};
