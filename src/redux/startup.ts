import { createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  startupComplete: null,
});

export const StartupTypes = Types;
export default Creators;
