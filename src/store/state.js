import accountStates from '../screens/Account/state';
import poolStates from '../screens/Pools/state';
import voteStates from '../screens/Vote/state';
const appState = {
    ...accountStates,
    ...poolStates,
    ...voteStates
}
export default appState;